var C='chuya-v6';
var ASSETS=['/','/index.html','/manifest.webmanifest','/icon.svg'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(C).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==C;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(function(resp){
      var rc=resp.clone();
      caches.open(C).then(function(c){c.put(req,rc);});
      return resp;
    }).catch(function(){return caches.match(req);}));
  }else{
    e.respondWith(caches.match(req).then(function(r){
      return r||fetch(req).then(function(resp){
        if(resp&&resp.status===200){var rc=resp.clone();caches.open(C).then(function(c){c.put(req,rc);});}
        return resp;
      });
    }));
  }
});

var C='chuya-v19';
var ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./assets/trees/chuya-tree-winter.png?v=3','./assets/trees/chuya-tree-spring.png?v=3','./assets/trees/chuya-tree-summer.png?v=3','./assets/trees/chuya-tree-autumn.png?v=3','./assets/trees/icons/chuya-tree-winter-icon.png?v=3','./assets/trees/icons/chuya-tree-spring-icon.png?v=3','./assets/trees/icons/chuya-tree-summer-icon.png?v=3','./assets/trees/icons/chuya-tree-autumn-icon.png?v=3'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(C).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k.indexOf('chuya-')===0&&k!==C;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var req=e.request;
  var url=new URL(req.url);
  if(req.method!=='GET'||(url.protocol!=='http:'&&url.protocol!=='https:'))return;
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

(this.webpackJsonpsmart_server=this.webpackJsonpsmart_server||[]).push([[0],[,function(e,t,a){e.exports={Nav:"style_Nav__2seP7",menuIcon:"style_menuIcon__2Hpr5",logo:"style_logo__2qU4z",locations:"style_locations__W-JCE",Home:"style_Home__SxsLW","home-text":"style_home-text__cRUhf","home-image":"style_home-image__29Yv-","home-title":"style_home-title__31zrB",Features:"style_Features__1RsA-","features-resp-title":"style_features-resp-title__2T6Ii","first-col":"style_first-col__FhwOq","second-col":"style_second-col__1C1_z","third-col":"style_third-col__1MGeO","feature-container":"style_feature-container__H3iKm","feature-right-align":"style_feature-right-align__3E8dC","feature-left-align":"style_feature-left-align__3FCUx","features-title":"style_features-title__3VEuU",Platform:"style_Platform__3ZUQi","platform-container":"style_platform-container__2Ss72",Screenshot:"style_Screenshot__1Mugb",title:"style_title__pKCjM","screenshot-slide":"style_screenshot-slide__2LJxe",Download:"style_Download__2Danz","link-container":"style_link-container__29Dqa",link:"style_link__-nhXl"}},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/laptop.4939e8a1.svg"},function(e,t,a){e.exports=a.p+"static/media/no_wifi.c09d6763.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud_storage.273e5ba2.svg"},function(e,t,a){e.exports=a.p+"static/media/multi_browser.71351f0c.svg"},,,,,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/main_logo.2f7bac3d.svg"},function(e,t,a){e.exports=a.p+"static/media/iphone_db.ea5416fd.svg"},function(e,t,a){e.exports=a.p+"static/media/platform.7311524b.svg"},function(e,t,a){e.exports=a.p+"static/media/platform_mobile.cd80d8da.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/play_store.60bb7a15.svg"},function(e,t,a){e.exports=a.p+"static/media/app_store.878d3517.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),s=(a(28),a(3)),c=(a(29),a(7)),i=a(1),m=a.n(i),u=r.a.forwardRef((function(e,t){var o=Object(n.useState)(r.a.createElement("span",{className:m.a["home-title"]},"Transform your phone ",r.a.createElement("br",null)," into a Server and start sharing content")),l=Object(s.a)(o,2),c=l[0],i=l[1],u=Object(n.useState)(r.a.createElement("p",null,"Quickly share your files with others by transforming your mobile phone into a server.",r.a.createElement("br",null),"Once you start your mobile server other devices will be able to connect to you and access",r.a.createElement("br",null),"the files you chose to share.")),d=Object(s.a)(u,2),f=d[0],p=d[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<=700&&(i(r.a.createElement("span",{className:m.a["home-title"]},"Transform your phone into a Server and start sharing content")),p(r.a.createElement("p",null,"Quickly share your files with others by transforming your mobile phone into a server. Once you start your mobile server other devices will be able to connect to you and access the files you chose to share.")))}))}),[]),r.a.createElement("div",{ref:t,className:m.a.Home},r.a.createElement("div",{className:m.a["home-text"]},c,f),r.a.createElement("div",{className:m.a["home-image"]},r.a.createElement("img",{src:a(30),alt:"home-image"})))})),d=r.a.forwardRef((function(e,t){return r.a.createElement("div",{ref:t,className:m.a.menuIcon},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}));var f=function(e){var t=Object(n.useState)([{name:"home",location:"/home"},{name:"features",location:"/features"},{name:"platforms",location:"/platform"},{name:"screenshots",location:"/screenshot"},{name:"download",location:"/download"}]),a=Object(s.a)(t,2),o=a[0],l=(a[1],Object(n.useState)("#fff")),c=Object(s.a)(l,2),i=c[0],u=c[1],f=e.position,p=f.home,h=f.features,E=f.platform,y=f.screenshot,b=f.download,g=function(e){var t=window.pageYOffset,a=e,n=a>t?a-t:t-a,r=Math.round(n/100);r>=20&&(r=20);var o=Math.round(n/25),l=a>t?t+o:t-o,s=0;if(a>t)for(var c=t;c<a;c+=o)setTimeout("window.scrollTo(0, "+l+")",s*r),(l+=o)>a&&(l=a),s++;else for(c=t;c>a;c-=o)setTimeout("window.scrollTo(0, "+l+")",s*r),(l-=o)<a&&(l=a),s++},w=Object(n.useRef)(),v=Object(n.useRef)();Object(n.useEffect)((function(){window.innerWidth<=900&&(w.current.style.display="none",v.current.style.display="block"),window.addEventListener("resize",(function(){window.innerWidth<=900?(w.current.style.display="none",v.current.style.display="block"):(w.current.style.display="block",v.current.style.display="none")}))}),[]);var _=function(){window.addEventListener("scroll",(function(){window.scrollY>h?u("#707070"):u("#fff")}))};return Object(n.useEffect)((function(){return e.position.features&&_(),function(){window.removeEventListener("scroll",_())}})),r.a.createElement("div",{className:m.a.Nav},r.a.createElement("span",{className:m.a.logo},"smart server"),r.a.createElement("div",{ref:w,className:m.a.locations},o.map((function(e){return r.a.createElement("span",{key:e.location,style:{color:i},onClick:function(){!function(e){"/home"===e?g(p):"/features"===e?g(h):"/platform"===e?g(E):"/screenshot"===e?g(y):"/download"===e&&g(b)}(e.location)}},e.name)}))),r.a.createElement(d,{ref:v}))},p=a(12),h=a.n(p),E=a(13),y=a.n(E),b=a(14),g=a.n(b),w=a(15),v=a.n(w),_=function(e){return r.a.createElement("div",{className:m.a["feature-container"]},!1===e.isRightAlign&&r.a.createElement("img",{src:e.image,alt:"feature image"}),r.a.createElement("div",{className:e.isRightAlign?m.a["feature-right-align"]:m.a["feature-left-align"]},e.title,e.paragraph),e.isRightAlign&&r.a.createElement("img",{src:e.image,alt:"feature image"}))},R=r.a.forwardRef((function(e,t){var o=Object(n.useState)([{title:r.a.createElement("span",null,"access your files ",r.a.createElement("br",null)," on any device"),paragraph:r.a.createElement("p",null,"SMART SERVER allows you to access documents,",r.a.createElement("br",null),"photos, videos and many more that are stored on your",r.a.createElement("br",null),"phone on the fly. Gone are the days of USB thumb drives",r.a.createElement("br",null),"and USB cables, just connect your device to your phone",r.a.createElement("br",null),"server and download them right away at a high speed."),image:h.a},{title:r.a.createElement("span",null,"no internet",r.a.createElement("br",null),"connection needed"),paragraph:r.a.createElement("p",null,"Internet connection and mobile data is not needed for",r.a.createElement("br",null),"SMART SERVER to work while it hosts your local data.",r.a.createElement("br",null),"Only wifi hotspot is required to be turned on to allow",r.a.createElement("br",null),"other devices to connect on your mobile server."),image:y.a},{title:r.a.createElement("span",null,"your own cloud storage",r.a.createElement("br",null),"at your finger tips"),paragraph:r.a.createElement("p",null,"Browse files and watch uncompressed lossless photos",r.a.createElement("br",null),"and videos without having to download them. With",r.a.createElement("br",null),"SMART SERVER you will be able to stream stored media",r.a.createElement("br",null),"on your smartphone to any device at HIGH-SPEED."),image:g.a},{title:r.a.createElement("span",null,"multi browser support"),paragraph:r.a.createElement("p",null,"SMART SERVER is accessible to multiple internet",r.a.createElement("br",null),"browsers and on any type of device weather it's a",r.a.createElement("br",null),"laptop, desktop or mobile. You will be able to access",r.a.createElement("br",null),"your data on your phone via local cloud storage on",r.a.createElement("br",null),"multiple internet browsers."),image:v.a}]),l=Object(s.a)(o,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){window.innerWidth<=400&&i([{title:r.a.createElement("span",null,"access your files ",r.a.createElement("br",null)," on any device"),paragraph:r.a.createElement("p",null,"SMART SERVER allows you to access documents, photos, videos and many more that are stored on your phone on the fly. Gone are the days of USB thumb drives and USB cables, just connect your device to your phone server and download them right away at a high speed."),image:h.a},{title:r.a.createElement("span",null,"no internet",r.a.createElement("br",null),"connection needed"),paragraph:r.a.createElement("p",null,"Internet connection and mobile data is not needed for SMART SERVER to work while it hosts your local data. Only wifi hotspot is required to be turned on to allow other devices to connect on your mobile server."),image:y.a},{title:r.a.createElement("span",null,"your own cloud storage",r.a.createElement("br",null),"at your finger tips"),paragraph:r.a.createElement("p",null,"Browse files and watch uncompressed lossless photos and videos without having to download them. With SMART SERVER you will be able to stream stored media on your smartphone to any device at HIGH-SPEED."),image:g.a},{title:r.a.createElement("span",null,"multi browser support"),paragraph:r.a.createElement("p",null,"SMART SERVER is accessible to multiple internet browsers and on any type of device weather it's a laptop, desktop or mobile. You will be able to access your data on your phone via local cloud storage on multiple internet browsers."),image:v.a}])}),[]),r.a.createElement("div",{ref:t,className:m.a.Features},r.a.createElement("span",{className:m.a["features-resp-title"]},"key features"),r.a.createElement("div",{className:m.a["first-col"]},c.map((function(e,t){return t<2&&r.a.createElement(_,{key:t,title:e.title,paragraph:e.paragraph,image:e.image,isRightAlign:!0})}))),r.a.createElement("div",{className:m.a["second-col"]},r.a.createElement("span",{className:m.a["features-title"]},"key features"),r.a.createElement("img",{src:a(31),alt:"iphone"})),r.a.createElement("div",{className:m.a["third-col"]},c.map((function(e,t){return t>1&&t<4&&r.a.createElement(_,{key:t,title:e.title,paragraph:e.paragraph,image:e.image,isRightAlign:!1})}))))})),S=r.a.forwardRef((function(e,t){var o=Object(n.useState)(!1),l=Object(s.a)(o,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){window.innerWidth<=600&&i(!0),window.addEventListener("resize",(function(){window.innerWidth<=600?i(!0):i(!1)}))}),[]),r.a.createElement("div",{className:m.a.Platform},r.a.createElement("div",{ref:t,className:m.a["platform-container"]},r.a.createElement("span",null,"cross platform"),r.a.createElement("div",null,r.a.createElement("img",{src:a(c?33:32),alt:"platform image"}))))})),O=r.a.forwardRef((function(e,t){var a=Object(n.useState)([0,1,2,3]),o=Object(s.a)(a,2),l=o[0];o[1];return r.a.createElement("div",{ref:t,className:m.a.Screenshot},r.a.createElement("span",{className:m.a.title},"screenshots"),r.a.createElement("div",{className:m.a["screenshot-slide"]},l.map((function(e){return r.a.createElement("span",null,e)}))))})),j=a(9),N=r.a.forwardRef((function(e,t){return r.a.createElement("div",{ref:t,className:m.a.Download},r.a.createElement("span",{className:m.a.title},"download now!"),r.a.createElement("div",{className:m.a["link-container"]},r.a.createElement(j.b,{className:m.a.link,to:"google.com",style:{textDecoration:"none"}},r.a.createElement("img",{src:a(39),alt:"google play icon"}),r.a.createElement("span",null,"android")),r.a.createElement(j.b,{className:m.a.link,to:"google.com",style:{textDecoration:"none"}},r.a.createElement("img",{src:a(40),alt:"app store icon"}),r.a.createElement("span",null,"ios"))))}));var k=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useRef)(),l=Object(n.useRef)(),i=Object(n.useState)({}),m=Object(s.a)(i,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){p({home:0,features:t.current.offsetTop,platform:a.current.offsetTop,screenshot:o.current.offsetTop+300,download:l.current.offsetTop})}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{position:d}),r.a.createElement(u,{ref:e}),r.a.createElement(R,{ref:t}),r.a.createElement(S,{ref:a}),r.a.createElement(O,{ref:o}),r.a.createElement(N,{ref:l}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.1086571f.chunk.js.map
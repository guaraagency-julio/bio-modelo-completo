(function(){
"use strict";
var cfg=window.COMPLETE_BIO||{},$=function(q){return document.querySelector(q)};
var valid=function(url){return /^(https?:\/\/|mailto:|tel:)/i.test(url||"")};
var reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var dataSaver=Boolean(navigator.connection&&navigator.connection.saveData);
function showDemo(type){
 var labels={site:"site completo",portfolio:"portfólio completo",whatsapp:"WhatsApp",instagram:"Instagram",email:"e-mail"};
 $("#demo-title").textContent="Aqui entra o "+(labels[type]||"link")+" do cliente.";
 var d=$("#demo-modal");if(d.showModal)d.showModal();else toast("Configure o link no arquivo config.js");
}
document.querySelectorAll("[data-link]").forEach(function(el){
 var type=el.dataset.link,url=(cfg.links||{})[type];
 if(valid(url)){el.href=url;if(/^https?:/i.test(url)){el.target="_blank";el.rel="noopener noreferrer"}}
 else{el.addEventListener("click",function(e){e.preventDefault();showDemo(type)})}
});
$("#modal-close").addEventListener("click",function(){$("#demo-modal").close()});
$("#modal-okay").addEventListener("click",function(){$("#demo-modal").close()});
$("#demo-modal").addEventListener("click",function(e){if(e.target===this)this.close()});
var name=cfg.name||"Sofia Neri",parts=name.trim().split(/\s+/),surname=parts.length>1?parts.pop():"";
var title=$("#hero-name");title.textContent=parts.join(" ")+" ";var em=document.createElement("em");em.textContent=surname+(surname?".":"");title.appendChild(em);
document.title=name+" | Estúdio Criativo";
$("#copyright-name").textContent=name.toUpperCase();
$("#hero-role").textContent=cfg.role||"";$("#hero-bio").textContent=cfg.bio||"";
$("#year").textContent=new Date().getFullYear();
if(cfg.heroPortrait)$("#hero-portrait").src=cfg.heroPortrait;if(cfg.heroPoster)$("#hero-video").poster=cfg.heroPoster;
var rail=$("#work-rail"),items=Array.isArray(cfg.projects)?cfg.projects:[],cards=[];
items.forEach(function(item,i){
 var card=document.createElement("article");card.className="project-card";
 var cover=document.createElement("div");cover.className="project-image";
 var img=document.createElement("img");img.loading="lazy";img.decoding="async";img.src=item.image;img.alt="Imagem ilustrativa do projeto conceitual "+item.name;
 var num=document.createElement("span");num.className="project-number";num.textContent=String(i+1).padStart(2,"0");
 cover.append(img,num);
 var meta=document.createElement("div");meta.className="project-meta";
 var strong=document.createElement("strong");strong.textContent=item.name;var tag=document.createElement("span");tag.textContent=item.category||"";
 meta.append(strong,tag);card.append(cover,meta);rail.appendChild(card);cards.push(card);
});
var pos=0;function updateCount(){$("#project-index").textContent=String(pos+1).padStart(2,"0");$("#project-total").textContent=String(cards.length).padStart(2,"0");$("#prev-project").disabled=!cards.length;$("#next-project").disabled=!cards.length}
function go(i){if(!cards.length)return;pos=(i+cards.length)%cards.length;rail.scrollTo({left:cards[pos].offsetLeft-rail.offsetLeft,behavior:reduced?"auto":"smooth"});updateCount()}
$("#prev-project").addEventListener("click",function(){go(pos-1)});
$("#next-project").addEventListener("click",function(){go(pos+1)});
var scrollTimer;rail.addEventListener("scroll",function(){clearTimeout(scrollTimer);scrollTimer=setTimeout(function(){var best=0,dist=Infinity;cards.forEach(function(card,i){var d=Math.abs(card.offsetLeft-rail.offsetLeft-rail.scrollLeft);if(d<dist){dist=d;best=i}});pos=best;updateCount()},100)},{passive:true});updateCount();
var video=$("#hero-video"),toggle=$("#video-toggle"),allowed=!reduced&&!dataSaver&&Boolean(cfg.heroVideo),loaded=false;
function syncVideo(){toggle.hidden=!loaded;toggle.querySelector("use").setAttribute("href",video.paused?"#play":"#pause");toggle.setAttribute("aria-label",video.paused?"Reproduzir vídeo":"Pausar vídeo")}
function playVideo(){if(!allowed||document.hidden)return;if(!loaded){var source=document.createElement("source");source.src=cfg.heroVideo;source.type="video/mp4";video.appendChild(source);video.load();loaded=true}video.play().catch(function(){syncVideo()})}
toggle.addEventListener("click",function(){if(video.paused)playVideo();else video.pause()});
video.addEventListener("play",syncVideo);video.addEventListener("pause",syncVideo);
video.addEventListener("error",function(){toggle.hidden=true});
if(allowed){if("IntersectionObserver" in window){var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)playVideo();else video.pause()})},{threshold:.1});obs.observe($("#hero-picture"))}else playVideo()}
document.addEventListener("visibilitychange",function(){if(document.hidden)video.pause()});
function toast(s){var t=$("#toast");t.textContent=s;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(function(){t.classList.remove("show")},2600)}
$("#share-link").addEventListener("click",async function(){try{if(navigator.share){await navigator.share({title:document.title,url:location.href});return}if(navigator.clipboard){await navigator.clipboard.writeText(location.href);toast("Link copiado!");return}}catch(e){if(e.name==="AbortError")return}toast("Copie o endereço na barra do navegador")});
})();
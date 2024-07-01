import{a as L,S as q,i as u}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list"),document.querySelector(".loader"),document.querySelector(".more-button"),document.querySelector(".up-button");function w(e){return`<li class="images-list-item">
  <a class="img-link" href=${e.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${e.webformatURL} alt=${e.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${e.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${e.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${e.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${e.downloads}</p>
      </li>
    </ul>
</li>`}function p(e){return e.map(w).join(`
`)}document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list"),document.querySelector(".loader"),document.querySelector(".more-button"),document.querySelector(".up-button");async function g(e,o,n){try{return(await L.create({baseURL:"https://pixabay.com"}).get("/api/",{params:{key:"44431585-8d368e0ee08bb3db1ccb0f280",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}catch{console.log(enterError("","api get error"))}}const t={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),more:document.querySelector(".more-button"),upBtn:document.querySelector(".up-button")},h=new q(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0});let s="",c=1,f=1;const m=15;function v(){t.more.classList.remove("hidden")}function d(){t.more.classList.add("hidden")}function y(){t.loader.style.display="block"}function b(){t.loader.style.display="none"}function B(){t.imageSearchForm.scrollIntoView({behavior:"smooth"}),t.upBtn.setAttribute("hidden","")}function I(){window.scrollY>=50?t.upBtn.removeAttribute("hidden"):t.upBtn.setAttribute("hidden","")}t.imageSearchForm.addEventListener("submit",async e=>{if(e.preventDefault(),s=e.target.elements.userData.value.trim(),!s)return t.imageList.innerHTML="",u.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});y(),d(),document.querySelector(".loader"),t.loader.style.display="block";const o=await g(s,c,m);if(o.hits.length===0)return t.imageList.innerHTML="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const n=p(o.hits);t.imageList.innerHTML=n,f=Math.ceil(o.totatlHits/m),h.refresh(),S(),b(),e.target.reset()});t.more.addEventListener("click",async()=>{c++,y(),d();const e=await g(s,c,m),o=p(e.hits);t.imageList.insertAdjacentHTML("beforeend",o),D(),h.refresh(),S(c,f),b()});function S(e,o){e>=o?(d(),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):v()}function D(){const e=t.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3+48,behavior:"smooth"})}window.addEventListener("scroll",I);t.upBtn.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map

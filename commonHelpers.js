import{a as w,S,i as m}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function v(e){return`<li class="images-list-item">
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
</li>`}function g(e){return e.map(v).join(`
`)}async function h(e,r,s){try{return(await w.create({baseURL:"https://pixabay.com"}).get("/api/",{params:{key:"44431585-8d368e0ee08bb3db1ccb0f280",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})).data}catch{console.log(enterError("","api get error"))}}const t={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),more:document.querySelector(".more-button"),upBtn:document.querySelector(".up-button")},f=new S(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0});let l="",a=1,y=1;const p=15;function q(){t.more.classList.remove("hidden")}function u(){t.more.classList.add("hidden")}function b(){t.loader.style.display="block"}function n(){t.loader.style.display="none"}function D(){t.imageSearchForm.scrollIntoView({behavior:"smooth"}),t.upBtn.setAttribute("hidden","")}function I(){window.scrollY>=50?t.upBtn.removeAttribute("hidden"):t.upBtn.setAttribute("hidden","")}n();t.imageSearchForm.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.userData.value.trim(),!l)return t.imageList.innerHTML="",n(),u(),m.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});b(),u(),a=1,document.querySelector(".loader"),t.loader.style.display="block";const r=await h(l,a,p);if(r.hits.length===0)return t.imageList.innerHTML="",n(),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const s=g(r.hits);t.imageList.innerHTML=s,y=Math.ceil(r.totalHits/p),f.refresh(),L(),n(),e.target.reset()});t.more.addEventListener("click",async()=>{a++,b(),u();const e=await h(l,a,p),r=g(e.hits);t.imageList.insertAdjacentHTML("beforeend",r),O(),f.refresh(),L(a,y),n()});function L(e,r){e>=r?(u(),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):q()}function O(){const e=t.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3+48,behavior:"smooth"})}window.addEventListener("scroll",I);t.upBtn.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map

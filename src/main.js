import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

const refs = {
    imageSearchForm: document.querySelector('.search-form'),
    imageSearchInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.search-btn'),
    imageList: document.querySelector('.images-list'),
    loader: document.querySelector('.loader'),
    more: document.querySelector('.more-button'),
    upBtn: document.querySelector('.up-button'),
}
const lightbox = new SimpleLightbox('.images-list-item a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 300,
    widthRatio: 1,
    heightRatio: 0.95,
    disableRightClick: true,
    });

let query = '';
let page = 1;
let maxPage = 1;
const per_page = 15;

function showMoreBtn() {
    refs.more.classList.remove('hidden');
};

function hideMoreBtn() {
     refs.more.classList.add('hidden');
};

function showLoader() {
    refs.loader.style.display = 'block';
}

function hideLoader() {
    refs.loader.style.display = 'none';
}

function toTheTop() {
    refs.imageSearchForm.scrollIntoView({ behavior: 'smooth' });
    refs.upBtn.setAttribute('hidden', '');
}
    
function checkScroll() {
            if (window.scrollY >= 50) {

                refs.upBtn.removeAttribute('hidden');
            } else {

                refs.upBtn.setAttribute('hidden', '');
            }
        }

refs.imageSearchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    query = e.target.elements.userData.value.trim();

    if (!query) {
        refs.imageList.innerHTML = '';
        return iziToast.info({  
            message: 'You need to enter search request!',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    }

    showLoader();
    hideMoreBtn();

    const loader = document.querySelector('.loader')
    refs.loader.style.display = 'block';

    const data = await getImages(query, page, per_page);
    if (data.hits.length === 0) {
        refs.imageList.innerHTML = '';
        return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    }

    const markup = renderImages(data.hits);
    refs.imageList.innerHTML = markup;
    
    maxPage = Math.ceil(data.totatlHits / per_page);

    lightbox.refresh();

    checkBtnStatus();
    hideLoader();

    e.target.reset();
    
    });

    refs.more.addEventListener('click', async () => {
    page++;  
    showLoader();
    hideMoreBtn();   
    const data = await getImages(query, page, per_page);
    const markup = renderImages(data.hits);
    refs.imageList.insertAdjacentHTML('beforeend', markup);

    skipPrewElem();

        lightbox.refresh();
        
        checkBtnStatus(page, maxPage);

        hideLoader();
   
    })

    function checkBtnStatus(page, maxPage) {
          if (page >= maxPage) {
        hideMoreBtn();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    } else {
        showMoreBtn();
    }
}

function skipPrewElem() {
    const height = refs.imageList.children[0].getBoundingClientRect().height;

    scrollBy({
        top: height * 3 + 48,
        behavior: 'smooth',
    })
}
    
window.addEventListener('scroll', checkScroll);
refs.upBtn.addEventListener('click', toTheTop);
 
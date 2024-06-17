const refs = {
imageSearchForm: document.querySelector('.search-form'),
imageSearchInput: document.querySelector('.search-input'),
submitButton: document.querySelector('.search-btn'),
imageList: document.querySelector('.images-list'),
}

export function getImages(auto) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: '44431585-8d368e0ee08bb3db1ccb0f280',
        q: auto,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 30,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    console.log(url);

    const options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content - Type': 'application/json',

            'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': '99',
            'X-RateLimit-Reset': '0.6',
    },
}

    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
                      }
        });
}
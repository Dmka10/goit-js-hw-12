import axios from "axios";

export async function getImages(query, page, per_page) {
    try {
        const imagesApi = axios.create({
            baseURL: 'https://pixabay.com',
        })

        const res = await imagesApi.get('/api/', {
            params: {
                key: '44431585-8d368e0ee08bb3db1ccb0f280',
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: per_page,
            }
        })

        return res.data;
    } catch (error) {
        console.log(enterError('', 'api get error'));
    };
}
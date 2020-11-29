import {
  NEWS_SERVER,
  API_KEY,
  PAGE_SIZE
} from '../constants/constants';

class NewsApi {
  constructor({ NEWS_SERVER, API_KEY, PAGE_SIZE }) {
    this.server = NEWS_SERVER;
    this.apiKey = API_KEY;
    this.pageSize = PAGE_SIZE;
  }
  getNews(keyword, from, to) {
    return fetch(`${this.server}?q=${encodeURI(keyword)}&from=${from}&to=${to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`(Ошибка: ${res.status})`));
      })
      .catch((err) => console.log(err));
  }
}

const api = new NewsApi({ NEWS_SERVER, API_KEY, PAGE_SIZE });

export default api;

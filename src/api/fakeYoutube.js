import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
    
  }

  async #searchByKeyword() {
    console.log('test1');
    const { data } = await axios.get('/videos/search.json');
    
    console.log(data);
    return data.items.map(item => ({ ...item, id: item.id.videoid }));
  }

  async #mostPopular() {
    console.log('test2');
    const { data } = await axios.get('/videos/popular.json');
    
    console.log(data);
    return data.items;
  }
}
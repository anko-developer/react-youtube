import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVidId ? axios.get('/videos/related.json') : axios.get('/videos/search.json');
  }

  async videos(params) {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      }
    })
    .then(response => response.data.items)
    .then(items => items.map(item => ({ ...item, id: item.id.videoId })))
    .catch(err => console.log('error message', err));
  }

  async #mostPopular() {
    return this.apiClient.videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      }
    })
    .then(response => response.data.items)
    .catch(err => console.log('error message', err));
  }
}
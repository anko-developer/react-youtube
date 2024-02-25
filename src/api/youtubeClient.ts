import axios from "axios";

export default class YoutubeClient {
  httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_APP_YOUTUBE_API_KEY },
    })
  }

  async search(params): Promise<object> {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }
}
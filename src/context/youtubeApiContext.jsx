import React from 'react';
import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

const client = new YoutubeClient();
const youtube = new Youtube(client);
const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>
    {children}
  </YoutubeApiContext.Provider>
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
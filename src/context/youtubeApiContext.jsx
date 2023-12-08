import React from 'react';
import { createContext, useContext } from 'react';
import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>
    {children}
  </YoutubeApiContext.Provider>
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
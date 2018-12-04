import { API_URL } from './config';
import { toJSON } from './utils';


export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, {
  headers: {
    Authorization: 'Bearer BQAR5gaeK67ZpybC--6HMCTOZ6q-8KP3QVpp4M_tNmFIbeqkPemAsYeyM6dQj1brkFyOCUdYEYqmnGLuQI53BijtWEvuMNKr3ggURn8Mg1oK6I3vDl9gLmSI_jGIykRflGhWwKFsIt-7_UIHlahMm0PALeI6Fh0CmLELWWXo-446D5IsE9yaTquj6IZx0cAWuRvTHtOhmc0A4-nf3K0DmdUr8YLWWCmi5NyXDJbxgLfz3ZDPd_WqsDFrj-NtU3_ThCMcDVovcIj_4QQ',
  },
})
  .then(toJSON);

export const searchArtists = query => search(query, 'artist');

export const searchAlbums = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');

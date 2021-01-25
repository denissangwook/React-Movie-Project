export const API_KEY = 'Your API Key';/* Change Your TMDB API Key */
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const PROJECT_BASENAME = '/YourProjectFolderName';/* Change Your PROJECT BASENAME */
export const IMG_PATH = 'https://image.tmdb.org/t/p/';
export const imagePath = {
  original: `${IMG_PATH}original`,
  w500: `${IMG_PATH}w500`,
  w780: `${IMG_PATH}w780`,
};
export const YOUTUBE_PATH = 'https://www.youtube.com/watch?v=';
export const getYoutubeThumbnail = key =>
  `http://i.ytimg.com/vi/${key}/sddefault.jpg`;

export const AROUND_NOW_PLAYING = 'AROUND_NOW_PLAYING';
export const AROUND_POPULAR = 'AROUND_POPULAR';
export const AROUND_TOP_RATED = 'AROUND_TOP_RATED';
export const AROUND_UPCOMING = 'AROUND_UPCOMING';

export const aroundQueries = {
  [AROUND_NOW_PLAYING]: 'movie/now_playing',
  [AROUND_POPULAR]: 'movie/popular',
  [AROUND_TOP_RATED]: 'movie/top_rated',
  [AROUND_UPCOMING]: 'movie/upcoming',
};

export const aroundList = [
  { text: 'Now Playing', state: 'prev', type: AROUND_NOW_PLAYING },
  { text: 'Popular', state: 'cur', type: AROUND_POPULAR },
  { text: 'Top Rated', state: 'next', type: AROUND_TOP_RATED },
  { text: 'Upcoming', state: 'none', type: AROUND_UPCOMING },
];

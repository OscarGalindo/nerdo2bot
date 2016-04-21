import {RedditPlugin} from './reddit/RedditPlugin';
import {GooglePlugin} from "./google/GooglePlugin";
import {MVLastPost} from "./mediavida/LastPost";

const tits = new RedditPlugin(
  'http://www.reddit.com/r/legalteens+nipples+gonewild+nsfw+nsfw_gif+tits+realgirls/.json?',
  'Tits Plugin',
  'tits'
);

const gatitos = new RedditPlugin(
  'http://www.reddit.com/r/catpictures+cats+CatGifs+StartledCats/.json?',
  'Gatitos Plugin',
  'gatitos'
);

export const PLUGINS = [tits, new GooglePlugin(), gatitos, new MVLastPost()];
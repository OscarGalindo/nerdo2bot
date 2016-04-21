import {RedditPlugin} from './reddit/RedditPlugin';
import {GooglePlugin} from "./google/GooglePlugin";
import {MVLastPost} from "./mediavida/LastPost";
import {MVSpy} from "./mediavida/Spy";

const tits = new RedditPlugin(
  'http://www.reddit.com/r/legalteens+nipples+gonewild+nsfw+nsfw_gif+tits+realgirls/.json?limit=100',
  'Tits Plugin',
  'tits'
);

const gatitos = new RedditPlugin(
  'http://www.reddit.com/r/catpictures+cats+CatGifs+StartledCats/.json?limit=100',
  'Gatitos Plugin',
  'gatitos'
);

export const PLUGINS = [tits, new GooglePlugin(), gatitos, new MVLastPost(), new MVSpy()];

import {ClientOptions} from "irc";
import {Bot} from "./domain/bot";
import {PLUGINS} from './plugins';

let server = 'fr.quakenet.org';
// let server = '127.0.0.1';
let nick = 'nerdo2bot';
let config: ClientOptions = {
  debug: true,
  channels: ['#mv.nerd']
};

var bot = new Bot(server, nick, config);
bot.addPlugins(PLUGINS);

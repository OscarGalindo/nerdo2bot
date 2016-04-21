import {Bot} from "./domain/bot";
import {PLUGINS} from './plugins';

const config = require('../config.json');

if (!config) {
  throw 'There is no config, please check config.sample.json for an example';
}

const server = config.server;
const nick = config.nick;
const ircConfig = config.config;

var bot = new Bot(server, nick, ircConfig);
bot.addPlugins(PLUGINS);

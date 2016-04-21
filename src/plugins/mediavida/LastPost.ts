import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");
import * as cheerio from 'cheerio';

export class MVLastPost implements IPlugin {
  name: string;
  command: string;
  url: string;
  private mediavida: string = 'http://www.mediavida.com';

  constructor() {
    this.name = 'MediaVida - Last Post from User';
    this.command = 'mvlast';
    this.url = 'http://www.mediavida.com/id/';
  }

  async exec(args: string[]) {
    if (!args[0]) {
      return 'Username is needed';
    }

    var rOptions = {
      uri: this.url + args[0],
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    return await request(rOptions)
      .then(($) => {
        if ($('#main').text().indexOf('no encontrado') > -1) {
          return 'Usuario no encontrado';
        }

        let item = $('ul.info span a').first();
        return item.text() + ' - ' + this.mediavida + item.attr('href');
      })
      .catch(() => {
        return 'Error';
      });
  }
}

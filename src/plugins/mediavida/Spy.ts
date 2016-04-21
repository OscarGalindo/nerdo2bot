import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");
import * as cheerio from 'cheerio';

export class MVSpy implements IPlugin {
  name:string;
  command:string;
  url:string;
  private mediavida:string = 'http://www.mediavida.com';

  constructor() {
    this.name = 'MediaVida - Last post from Spy';
    this.command = 'mvspy';
    this.url = 'http://www.mediavida.com/foro/spy/';
  }

  async exec(args:string[]) {
    var rOptions = {
      uri: this.url,
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    return await request(rOptions)
      .then(($) => {
        let post = $('#temas tr td').eq(1);

        var title = post.find('.left a').first().text();
        var url = this.mediavida + post.find('.left a').attr('href');
        var replies = post.find('.reply').text();

        return `${title} [${replies}] - ${url}`;
      })
      .catch(() => {
        return 'Error';
      });
  }
}

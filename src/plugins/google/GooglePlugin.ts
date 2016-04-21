import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");

export class GooglePlugin implements IPlugin {
  public name: string;
  public command: string;

  private url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=';

  constructor() {
    this.name = 'Google Plugin';
    this.command = 'google';
  }

  async exec(args: string[]) {
    console.log('Google');
    let query = encodeURIComponent(args.join(' '));
    return await request({ uri: this.url + query, json: true })
      .then((data) => {
        if (!data) {
          return 'No body';
        }

        if (!data.responseData.results.length) {
          return 'No results...';
        }

        var result = data.responseData.results[0];

        let uri = decodeURIComponent(result.url);
        let title = '\x02' + decodeURIComponent(result.titleNoFormatting) + '\x02';

        return title + ' - ' + uri;
      });
  }
}

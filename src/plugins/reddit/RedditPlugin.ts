import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");

export class RedditPlugin implements IPlugin {
  pictures: string[] = [];

  constructor(private url: string, public name: string, public command: string) { }

  async exec(args: string[]) {
    if (!this.pictures.length) {
      return await this.requestRemote().then(() => this.giveLink());
    } else {
      return await Promise.resolve(this.giveLink());
    }
  }

  giveLink() {
    return this.pictures.pop();
  }

  async requestRemote() {
    return await request({ uri: this.url, json: true })
      .then((data) => {
        if (!data) {
          return 'No body';
        }

        this.pictures = data.data.children.map(p => p.data.url);
        this.shuffle(this.pictures);
      });
  }

  shuffle(links) {
    let i = links.length,
      j = 0,
      temp;

    while (0 !== i) {
      j = Math.floor(Math.random() * i--);

      temp = links[i];
      links[i] = links[j];
      links[j] = temp;
    }

    return links;
  }
}

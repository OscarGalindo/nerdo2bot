import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");

export class TitsPlugin implements IPlugin {
    private url = 'http://www.reddit.com/r/legalteens+nipples+gonewild+nsfw+nsfw_gif+tits+realgirls/.json?';

    constructor(public name?:string, public command?:string) {
        this.name = 'Tits Plugin';
        this.command = 'tits';
    }

    async exec(args:string[]) {
        return await request({uri: this.url, json: true})
            .then((data) => {
                if (!data) {
                    return 'No body';
                }

                let num = Math.floor(Math.random() * data.data.children.length);
                return data.data.children[num].data.url;
            });
    }
}
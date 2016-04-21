import {IPlugin} from "../../domain/plugin";
import request = require("request-promise");

export class RedditPlugin implements IPlugin {
    constructor(private url: string, public name: string, public command: string) { }
    
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
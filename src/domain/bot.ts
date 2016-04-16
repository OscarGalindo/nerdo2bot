import {Client} from "irc";
import {IClientOpts} from "irc";
import {IPlugin} from "./plugin";
import {Message} from "./message";

export class Bot extends Client {
    private plugins:IPlugin[] = [];

    constructor(server:string, nickname:string, config?:IClientOpts) {
        super(server, nickname, config);

        this.addListener('message', (from, ch, msg) => {
            this.parseCommand(from, ch, new Message(msg));
        });
    }

    addPlugin(plugin:IPlugin) {
        this.plugins.push(plugin);
    }

    addPlugins(plugins:IPlugin[]) {
        this.plugins.concat(plugins);
    }

    private async parseCommand(from:string, ch:string, msg:Message) {
        if (msg.isCommand()) {
            let cmd = msg.getCommand();

            var plugin = this.plugins.filter((plugin) => {
                return plugin.command === cmd;
            })[0];

            plugin.exec(msg.getArguments())
                .then((msg) => {
                    this.say(ch, msg);
                });
        }
    }
}
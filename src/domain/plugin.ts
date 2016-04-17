export interface MetaDataPlugin {
    version?:string;
    description?:string;
}

export interface IPlugin {
    name:string;
    command:string;
    metadata?:MetaDataPlugin;

    exec(args:string[]);
}
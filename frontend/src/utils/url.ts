import pathToRegexp, { ParseOptions, PathFunction, PathFunctionOptions } from 'path-to-regexp';
import { stringify, StringifyOptions } from 'query-string';

interface IUrlBuildOptions {
    path?: PathFunctionOptions;
    query?: StringifyOptions;
    hash?: string;
}

export class Url<P extends object = {}, Q extends object = {}> {
    private static getHash(options: IUrlBuildOptions = {}) {
        return options.hash ? `#${options.hash}` : '';
    }

    public readonly template: string;

    private readonly pathGenerator: PathFunction;

    constructor(template: string, parseOptions?: ParseOptions) {
        this.template = template;
        this.pathGenerator = pathToRegexp.compile(template, parseOptions);
    }

    public build(pathArgs?: P, queryArgs?: Q, options: IUrlBuildOptions = {}) {
        const path = this.pathGenerator(pathArgs, options.path);

        if (!queryArgs || Object.keys(queryArgs).length === 0) {
            return `${path}${Url.getHash(options)}`;
        }

        const queryString = stringify(queryArgs, options.query);

        return `${queryString ? `${path}?${queryString}` : path}${Url.getHash(options)}`;
    }
}

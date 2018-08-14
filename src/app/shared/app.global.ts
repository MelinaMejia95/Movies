import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    readonly url: string = 'https://api.themoviedb.org/3/';
    entity: string;
    readonly token: string = '734a481ad63f205cab0046add88b0b51';
}
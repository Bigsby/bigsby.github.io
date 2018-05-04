import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DataService {
    constructor(private http: Http) {

    }

    get<T>(file: string): Promise<T> {
        return this.http.get(`data/${file}.json`)
            .toPromise()
            .then(response => response.json() as T);
    }
}

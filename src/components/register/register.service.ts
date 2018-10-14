import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
const url = 'assets/data/terms.json';
@Injectable()
export class RegisterService{
 
    constructor(private _http : HttpClient){}
    getTermCon() : Observable<any> {
        return this._http.get(url);      
    }
}
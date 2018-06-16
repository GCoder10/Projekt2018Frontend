import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Injectable()
export class WorkersService {

dataOfAllWorkers: any;
baseUrl: string = 'http://localhost:5000/api/workers';

constructor(private http: Http) { }

private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});

}


onDownloadAllWorkersFromLocalDatabase() {

        this.http.get(this.baseUrl).subscribe(response => {
           this.dataOfAllWorkers = response.json();
        }); 
        this.makeAllDataOfWorkersFromLocalDatabaseObservable();
}



makeAllDataOfWorkersFromLocalDatabaseObservable(): Observable<any> {

           var alertify = require('alertifyjs/build/alertify.js');
           alertify.success('Tablica z danymi została przygotowana poprawnie');
           return Observable.of(this.dataOfAllWorkers);     

}


resetDataOfDownloadedAllWorkers() {

    this.dataOfAllWorkers = [];

}






}
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class DataService{
  allRecipes: any;
  recipeToEdit: any;
  baseUrl: string = 'http://localhost:5000/api/recipes';

  constructor(private http: Http) { }

private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});

}


onDownloadAllRecipesFromLocalDatabase() {

        this.http.get(this.baseUrl).subscribe(response => {
           this.allRecipes = response.json();
        }); 
        this.makeAllDataOfRecipesFromLocalDatabaseObservable();
}



makeAllDataOfRecipesFromLocalDatabaseObservable(): Observable<any> {

           var alertify = require('alertifyjs/build/alertify.js');
           alertify.success('Tablica z danymi została przygotowana poprawnie');
           return Observable.of(this.allRecipes);     

}




resetDataOfDownloadedRecipes() {

    var alertify = require('alertifyjs/build/alertify.js');
    this.allRecipes = [];
    alertify.message('Dane zostały zresetowane poprawnie');

}



addNewRecipe(name: string, time: string, lvl: string, quality: string, description: string) {

    var newData = { name, time, lvl, quality, description };

        return this.http.post(this.baseUrl + '/addNewRecipe', JSON.stringify(newData), this.requestOptions());

}



deleteRecipeById(id: number) {

    return this.http.post(this.baseUrl + '/deleteRecipeById', JSON.stringify(id), this.requestOptions());

}



rateRecipe(Id: number, rate: string) {

    var newData = { Id, rate };

        return this.http.post(this.baseUrl + '/rateRecipeById', JSON.stringify(newData), this.requestOptions());   

}

sendRecipeToEditComponent(data) {
    this.recipeToEdit = data;
    this.makeRecipeToEditObservable();
}


makeRecipeToEditObservable(): Observable<any> {
    return Observable.of(this.recipeToEdit);
}

}

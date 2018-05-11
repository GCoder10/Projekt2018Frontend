import { Injectable } from '@angular/core';
import { DataService } from './../../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Injectable()
export class RecipesService {

dataOfAllRecipes: any;
dataOfAllRecipes2: Array<any> = [];


constructor(public dataService: DataService) { }    


onDownloadAllRecipesFromLocalDatabase() {

  this.resetDataOfDownloadedAllRecipes();
  this.dataService.onDownloadAllRecipesFromLocalDatabase();

}



onPrepareArrayWithAllDownloadedRecipes() {

this.dataOfAllRecipes = this.dataService.allRecipes;
for (let obj of this.dataOfAllRecipes ){
        this.dataOfAllRecipes2.push({
          id: obj.id,
          name: obj.name,
          time: obj.time,
          lvl: obj.lvl,
          quality: obj.quality,
          description: obj.description,
          rate: obj.rate
        });
      }
this.makePreparedArrayWithAllDownloadedRecipesObservable();

}



makePreparedArrayWithAllDownloadedRecipesObservable(): Observable<any> {

    return Observable.of(this.dataOfAllRecipes2);

}



resetDataOfDownloadedAllRecipes() {

    this.dataOfAllRecipes2 = [];
    this.dataOfAllRecipes = [];
    this.dataService.resetDataOfDownloadedRecipes();
    this.dataService.onDownloadAllRecipesFromLocalDatabase();

}



sendRecipeToEditComponent(recipeObject) {

    this.dataService.sendRecipeToEditComponent(recipeObject);

}



onRateRecipeByUser(id,rate) {

    var alertify = require('alertifyjs/build/alertify.js');

    this.dataService.rateRecipe(id,rate).subscribe(() => {
      alertify.success('Przepis został oceniony pomyślnie');
      this.resetDataOfDownloadedAllRecipes();
    }, error => {
      alertify.error('Podczas oceniania wystąpił błąd: ');
      alertify.error(error);
    });

}



onDeleteRecipeByIdFromDatabase(id) {

    var alertify = require('alertifyjs/build/alertify.js');

    this.dataService.deleteRecipeById(id).subscribe(() => {
      alertify.success('Przepis został usunięty pomyślnie');
      this.resetDataOfDownloadedAllRecipes();
    }, error => {
      alertify.error('Podczas usuwania wystąpił błąd: ');
      alertify.error(error);
    });

}





}
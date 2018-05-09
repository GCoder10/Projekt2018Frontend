import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterTimeForPreparePipe } from '../../../shared/pipes/filter-time-for-prepare.pipe';
import { FilterNameOfRecipePipe } from '../../../shared/pipes/filter-name-of-recipe.pipe';
import { DataService } from './../../../shared/services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

bgHomePage: string;
button: string = '1';
dataOfAllRecipes: any;
dataOfAllRecipes2: Array<any> = [];
showtable: boolean;
isCollapsed = true;
idChecked: number;
max = 10;
rate = 1;
isReadonly = true;
overStar: number;
percent: number;
rateByUser = 1;
isReadonlyUserRating = false;
orderString = '';
recipeObject = {};


constructor(public dataService: DataService, public router: Router) { }

ngOnInit() {

  this.bgHomePage = 'assets/images/BGhomepage.png';
  this.onDownloadAllRecipesFromLocalDatabase();

}


onDownloadAllRecipesFromLocalDatabase() {

  this.dataService.onDownloadAllRecipesFromLocalDatabase();

}


onShowTableWithAllRecipes() {

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

      this.button = '2';
      this.showtable = true;

}



resetDataOfDownloadedAllRecipes() {

    this.dataOfAllRecipes2 = [];
    this.dataOfAllRecipes = [];

    this.dataService.resetDataOfDownloadedRecipes();

    this.button = '1';
    this.showtable = false;
    this.onDownloadAllRecipesFromLocalDatabase();

}



checkId(data) {

    this.idChecked = data;
    return this.idChecked;

}



onEditSelectedRecipe(name: string, time: string, lvl: string, quality: string, description: string) {


this.recipeObject = {
    name: name,
    time: time,
    lvl: lvl,
    quality: quality,
    description: description
};


  this.dataService.sendRecipeToEditComponent(this.recipeObject);
  this.router.navigate(['/edycja']);

}



hoveringOver(value, data) {

    this.overStar = value;
    this.percent = (value / this.max) * 100;

}



resetStar() {

    this.overStar = void 0;

}



onRateRecipeByUser(id) {

    var alertify = require('alertifyjs/build/alertify.js');

    var Id = id;
    var rate = this.rateByUser.toString();


    this.dataService.rateRecipe(Id,rate).subscribe(() => {
      alertify.success('Przepis został oceniony pomyślnie');
      this.resetDataOfDownloadedAllRecipes();
    }, error => {
      alertify.error('Podczas oceniania wystąpił błąd: ');
      alertify.error(error);
    });

}



onDeleteRecipeByIdFromDatabase(data) {

    var alertify = require('alertifyjs/build/alertify.js');
    var Id = data;


    this.dataService.deleteRecipeById(Id).subscribe(() => {
      alertify.success('Przepis został usunięty pomyślnie');
      this.resetDataOfDownloadedAllRecipes();
    }, error => {
      alertify.error('Podczas usuwania wystąpił błąd: ');
      alertify.error(error);
    });

}



onSort(num) {

  if (num == '1') {
    this.orderString = 'time';
  }
  if (num == '2') {
    this.orderString = '-time';
  }
  if (num == '3') {
    this.orderString = 'name';
  }
  if (num == '4') {
    this.orderString = '-name';
  }
  if (num == '5') {
    this.orderString = 'lvl';
  }
  if (num == '6') {
    this.orderString = '-lvl';
  }
  if (num == '7') {
    this.orderString = 'quality';
  }
  if (num == '8') {
    this.orderString = '-quality';
  }
  
}




}

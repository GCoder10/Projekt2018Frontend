import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterTimeForPreparePipe } from '../../../../shared/pipes/filter-time-for-prepare.pipe';
import { FilterNameOfRecipePipe } from '../../../../shared/pipes/filter-name-of-recipe.pipe';
import { RecipesService } from './../../../shared/services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})


export class RecipesComponent implements OnInit {

bgRecipes: string;
button: string = '1';
dataOfAllDownloadedRecipes: any;
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
recipesObject = {};


constructor(public recipesService: RecipesService, public router: Router) { }

ngOnInit() {

  this.bgRecipes = 'assets/images/BGhomepage.png';
  this.recipesService.onDownloadAllRecipesFromLocalDatabase();

}



onShowTableWithAllRecipes() {

      this.recipesService.onPrepareArrayWithAllDownloadedRecipes();
      this.dataOfAllDownloadedRecipes = this.recipesService.dataOfAllRecipes2;
      this.button = '2';
      this.showtable = true;

}



resetDataOfDownloadedAllRecipes() {

    this.button = '1';
    this.showtable = false;
    this.recipesService.resetDataOfDownloadedAllRecipes();

}



checkId(data) {

    this.idChecked = data;
    return this.idChecked;

}



onEditSelectedRecipe(name: string, time: string, lvl: string, quality: string, description: string) {


this.recipesObject = {
    name: name,
    time: time,
    lvl: lvl,
    quality: quality,
    description: description
};


  this.recipesService.sendRecipeToEditComponent(this.recipesObject);
  this.router.navigate(['/edycja']);

}



hoveringOver(value, data) {

    this.overStar = value;
    this.percent = (value / this.max) * 100;

}



resetStar() {

    this.overStar = void 0;

}



onRateRecipeByUser(data) {

    var id = data;
    var rate = this.rateByUser.toString();

    this.recipesService.onRateRecipeByUser(id,rate);
    this.resetDataOfDownloadedAllRecipes();

}



onDeleteRecipeByIdFromDatabase(data) {

    var id = data;

    this.recipesService.onDeleteRecipeByIdFromDatabase(id);
    this.resetDataOfDownloadedAllRecipes();

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

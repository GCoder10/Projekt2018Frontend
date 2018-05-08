import { Component, OnInit } from '@angular/core';
import { RecipesComponent } from './../../RecipesComponent/recipes.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ RecipesComponent ]
})


export class HomepageComponent implements OnInit {

bgHomePage: string;
showtable: boolean;
button: string = '2';

constructor(public recipes: RecipesComponent) { }

ngOnInit() {

  this.bgHomePage = 'assets/images/BGhomepage.png';

}


onDownloadAllRecipesFromLocalDatabase() {
  this.recipes.onDownloadAllRecipesFromLocalDatabase();
  this.button = '2';
}

onShowTableWithAllRecipes() {
  this.recipes.onShowTableWithAllRecipes();
  this.button = '3';
  this.showtable = true;
}

resetDataOfDownloadedAllRecipes() {
  this.recipes.resetDataOfDownloadedAllRecipes();
  this.button = '2';
  this.showtable = false;
}


}

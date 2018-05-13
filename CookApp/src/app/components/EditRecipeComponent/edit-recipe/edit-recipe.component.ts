import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';



@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

bgEditForm: string;
recipeObject: any;


constructor(public dataService: DataService, private router: Router) { }

nameOfRecipe: string;
timeForPrepareRecipe: string;
difficultLvl: string;
qualityOfRecipe: string;
descriptionOfRecipe: string;


ngOnInit() {

  this.recipeObject = this.dataService.recipeToEdit;
  this.bgEditForm = 'assets/images/editingFormBG.jpg';
  if(this.recipeObject != null) {
      /*  for (let obj of this.recipeObject) {
              this.nameOfRecipe = obj.name,
              this.timeForPrepareRecipe = obj.time,
              this.difficultLvl = obj.lvl,
              this.qualityOfRecipe = obj.quality,
              this.descriptionOfRecipe = obj.description
        } */
  }
  
}



onEditRecipe(form: NgForm) {

    var nameOfRecipe = form.value.nameOfRecipe;
    var timeForPrepareRecipe = form.value.timeForPrepareRecipe.toString();
    var difficultLvl = form.value.difficultLvl.toString();
    var qualityOfRecipe = form.value.qualityOfRecipe.toString();
    var descriptionOfRecipe = form.value.descriptionOfRecipe;


    console.log(nameOfRecipe, timeForPrepareRecipe, difficultLvl, qualityOfRecipe, descriptionOfRecipe);

}



}

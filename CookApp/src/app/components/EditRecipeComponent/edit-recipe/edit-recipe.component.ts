import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../shared/services/data.service';



@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

bgEditForm: string;
recipeForm: FormGroup;
recipeObject: any;


  constructor(public dataService: DataService, private router: Router) { 

      this.recipeForm = new FormGroup({
          name: new FormControl('', Validators.required),
          timeForPrepare: new FormControl('', Validators.required),
          difLvl: new FormControl('', Validators.required),
          quality: new FormControl('', Validators.required),
          about: new FormControl('', Validators.required)
      }); 
}



ngOnInit() {

  this.bgEditForm = 'assets/images/editingFormBG.jpg';

}



onUpdateFormByDownloadedData() {


this.recipeObject = this.dataService.recipeToEdit;
console.log(this.recipeObject);


for (let obj of this.recipeObject) {
this.recipeForm.setValue({
    name: obj.name,
    timeForPrepare: obj.time,
    difLvl: obj.lvl,
    quality: obj.quality,
    about: obj.description
});
}

}



onAddRecipe() {
  console.log(this.recipeForm);
}



}

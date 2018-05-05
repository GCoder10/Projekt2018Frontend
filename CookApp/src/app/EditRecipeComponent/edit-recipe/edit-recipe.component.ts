import { HomepageComponent } from './../../HomepageComponents/homepage/homepage.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
  providers: [ HomepageComponent ]
})
export class EditRecipeComponent implements OnInit {

bgEditForm: string;
recipeForm: FormGroup;
recipeObject: any;



  constructor(public dataService: DataService, private router: Router, public homePage: HomepageComponent) { 

       this.recipeForm = new FormGroup({
          name: new FormControl('InitRecipeName', Validators.required),
          timeForPrepare: new FormControl('32', Validators.required),
          difLvl: new FormControl('4', Validators.required),
          quality: new FormControl('5', Validators.required),
          about: new FormControl('Init Recipe Description', Validators.required)
       });

  }



ngOnInit() {
    this.bgEditForm = 'assets/images/editingFormBG.jpg';
    this.homePage.currentRecipeEmitter.subscribe(data => this.recipeObject = {
      name: data.name,
      time: data.time,
      lvl: data.lvl,
      quality: data.quality,
      description: data.description
    });
    console.log(this.recipeObject);
}



onUpdateFormByDownloadedData() {

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

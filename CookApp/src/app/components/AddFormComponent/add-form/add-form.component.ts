import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../shared/services/data.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

bgAddingForm: string;

constructor(public dataService: DataService, private router: Router) { }

ngOnInit() {

    this.bgAddingForm = 'assets/images/addingFormBG.jpg';

}


onAddRecipe(form: NgForm) {

    var alertify = require('alertifyjs/build/alertify.js');

        var nameOfRecipe = form.value.nameOfRecipe;
        var timeForPrepareRecipe = form.value.timeForPrepareRecipe.toString();
        var difficultLvl = form.value.difficultLvl.toString();
        var qualityOfRecipe = form.value.qualityOfRecipe.toString();
        var descriptionOfRecipe = form.value.descriptionOfRecipe;


        this.dataService.addNewRecipe(nameOfRecipe, timeForPrepareRecipe, difficultLvl, qualityOfRecipe, descriptionOfRecipe).subscribe(() => {
          alertify.success('Przepis został dodany pomyślnie');
          this.router.navigate(['']);
        }, error => {
          alertify.error('Podczas dodawania wystąpił błąd');
        });

}


}

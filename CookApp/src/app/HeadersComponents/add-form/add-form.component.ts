import { DataService } from './../../data/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    var name = form.value.name;
    var time = form.value.timeForPrepare.toString();
    var lvl = form.value.difLvl.toString();
    var quality = form.value.quality.toString();
    var description = form.value.about;


    this.dataService.addNewRecipe(name, time, lvl, quality, description).subscribe(() => {
      alertify.success('Przepis został dodany pomyślnie');
      this.router.navigate(['']);
    }, error => {
      alertify.error('Podczas dodawania wystąpił błąd: ');
      alertify.error(error);
    });

  }


}

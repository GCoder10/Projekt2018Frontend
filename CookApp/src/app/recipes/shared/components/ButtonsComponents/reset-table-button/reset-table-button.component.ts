import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesComponent } from '../../../../components/RecipesComponent/recipes/recipes.component';



@Component({
  selector: 'app-reset-table-button',
  templateUrl: './reset-table-button.component.html',
  styleUrls: ['./reset-table-button.component.css']
})


export class ResetTableButtonComponent implements OnInit {
@ViewChild("onCallResetTableMethodButton") onCallResetTableMethodButton: RecipesComponent;

  constructor() { }

  ngOnInit() {
  }



}

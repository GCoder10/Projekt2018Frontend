import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesComponent } from '../../../../components/RecipesComponent/recipes/recipes.component';


@Component({
  selector: 'app-generate-table-button',
  templateUrl: './generate-table-button.component.html',
  styleUrls: ['./generate-table-button.component.css']
})


export class GenerateTableButtonComponent implements OnInit {
@ViewChild("onCallShowTableMethodButton") onCallShowTableMethodButton: RecipesComponent;

  constructor() { }

  ngOnInit() {

  }

  

}

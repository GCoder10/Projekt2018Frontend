import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepageComponent } from '../../../../components/HomepageComponent/homepage/homepage.component';


@Component({
  selector: 'app-generate-table-button',
  templateUrl: './generate-table-button.component.html',
  styleUrls: ['./generate-table-button.component.css']
})


export class GenerateTableButtonComponent implements OnInit {
@ViewChild("onCallShowTableMethodButton") onCallShowTableMethodButton: HomepageComponent;

  constructor() { }

  ngOnInit() {

  }

  

}

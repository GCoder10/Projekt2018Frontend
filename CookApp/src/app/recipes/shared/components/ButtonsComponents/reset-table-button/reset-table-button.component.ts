import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepageComponent } from '../../../../components/HomepageComponent/homepage/homepage.component';



@Component({
  selector: 'app-reset-table-button',
  templateUrl: './reset-table-button.component.html',
  styleUrls: ['./reset-table-button.component.css']
})


export class ResetTableButtonComponent implements OnInit {
@ViewChild("onCallResetTableMethodButton") onCallResetTableMethodButton: HomepageComponent;

  constructor() { }

  ngOnInit() {
  }



}

import { WorkersService } from './../shared/services/workers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

dataOfAllWorkers: any;
dataOfAllWorkers2: Array<any> = [];
bgRecipes: string;
showtable: boolean;
Button1 = '1';
isCollapsed = true;
peselChecked: number;
orderString = '';

  constructor(public workersService: WorkersService) { }

  ngOnInit() {

    this.bgRecipes = 'assets/images/BGhomepage.png';

  }


onDownloadAllWorkersFromLocalDatabase() {

  this.workersService.onDownloadAllWorkersFromLocalDatabase();
  this.Button1 = '2';

}


onShowTableWithAllWorkers() {

    let dataOfAllWorkers = this.workersService.dataOfAllWorkers;
      for (let obj of dataOfAllWorkers ){
        this.dataOfAllWorkers2.push({
          city: obj.city,
          email: obj.email,
          name: obj.name,
          pass: obj.pass,
          pesel: obj.pesel,
          street: obj.street,
          surname: obj.surname
});
      }
    this.showtable = true;
    this.Button1 = '3';
}


resetDataOfDownloadedAllWorkers() {

    this.dataOfAllWorkers2 = [];
    this.dataOfAllWorkers = [];

    this.workersService.resetDataOfDownloadedAllWorkers();

    this.showtable = false;
    this.Button1 = '1';
}


checkPesel(data) {

    this.peselChecked = data;
    return this.peselChecked;

}


onSort(num) {

  if (num == '1') {
    this.orderString = 'surname';
  }
  if (num == '2') {
    this.orderString = '-surname';
  }
  if (num == '3') {
    this.orderString = 'name';
  }
  if (num == '4') {
    this.orderString = '-name';
  }
  if (num == '5') {
    this.orderString = 'city';
  }
  if (num == '6') {
    this.orderString = '-city';
  }
  if (num == '7') {
    this.orderString = 'street';
  }
  if (num == '8') {
    this.orderString = '-street';
  }
  if (num == '9') {
    this.orderString = 'email';
  }
  if (num == '10') {
    this.orderString = '-email';
  }

}


}

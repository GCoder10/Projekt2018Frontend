import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

bgRecipes: string;

  constructor() { }

  ngOnInit() {

    this.bgRecipes = 'assets/images/BGhomepage.png';

  }


  
}

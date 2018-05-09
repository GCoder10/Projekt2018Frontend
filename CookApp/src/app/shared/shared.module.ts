import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";
import { RatingModule } from 'ngx-bootstrap';
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from './services/data.service';
import { PageNotFoundComponent } from './components/PageNotFoundComponent/page-not-found/page-not-found.component';
import { FilterNameOfRecipePipe } from './pipes/filter-name-of-recipe.pipe';
import { FilterTimeForPreparePipe } from './pipes/filter-time-for-prepare.pipe';


@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule, 
      ReactiveFormsModule,
      OrderModule,
      HttpModule,
      RatingModule.forRoot()
  ],    
  declarations: [
      FilterTimeForPreparePipe,
      FilterNameOfRecipePipe,
      PageNotFoundComponent
  ],
  providers: [ DataService ],
  exports: [
      FilterTimeForPreparePipe,
      FilterNameOfRecipePipe,
      PageNotFoundComponent,
      BrowserModule,
      FormsModule, 
      OrderModule,
      ReactiveFormsModule,
      HttpModule,
      RatingModule
  ]
})


export class SharedModule { }
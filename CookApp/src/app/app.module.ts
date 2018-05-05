import { DataService } from './data/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './FootersComponents/footer/footer.component';
import { HeaderComponent } from './HeadersComponents/header/header.component';
import { HomepageComponent } from './HomepageComponents/homepage/homepage.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './PageNotFoundComponent/page-not-found/page-not-found.component';
import { FilterTimeForPreparePipe } from './pipes/filter-time-for-prepare.pipe';
import { RatingModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './HeadersComponents/add-form/add-form.component';
import { FilterNameOfRecipePipe } from './pipes/filter-name-of-recipe.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { EditRecipeComponent } from './EditRecipeComponent/edit-recipe/edit-recipe.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    PageNotFoundComponent,
    FilterTimeForPreparePipe,
    AddFormComponent,
    FilterNameOfRecipePipe,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

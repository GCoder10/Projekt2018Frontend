import { NgModule } from "@angular/core";
import { FooterComponent } from './components/FootersComponents/footer/footer.component';
import { HeaderComponent } from './components/HeadersComponents/header/header.component';


@NgModule({   
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})


export class CoreModule { }
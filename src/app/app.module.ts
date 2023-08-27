import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextColorsComponent } from './components/text-colors/text-colors.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { PageComponent } from './components/page/page.component';
import { CompleteComponent } from './components/complete/complete.component';
import { MockService } from './components/mock.service'

@NgModule({
  declarations: [
    AppComponent,
    TextColorsComponent,
    HeadingsComponent,
    PageComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

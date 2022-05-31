import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTable } from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule, MatTabsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

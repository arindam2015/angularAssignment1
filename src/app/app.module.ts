import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NotesService } from './notes.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule,MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
   ],
  providers: [NotesService ],
  bootstrap: [AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './components/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonComponent } from './components/person/person.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FormGroupComponent,
    ProductComponent,
    AboutComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    MatInputModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule, 
    MatInputModule,
    MatToolbarModule,
    MatInputModule,
  ]  
})
export class AppModule { }

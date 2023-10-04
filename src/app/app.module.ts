import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HeaderComponent } from './modules/home/components/header/header.component';
//import { TodoButtonDeleteAllComponent } from './modules/home/components/todo-button-delete-all/todo-button-delete-all.component';
//import { TodoInputAddItensComponent } from './modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
//import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';
//import { HomeComponent } from './modules/home/pages/home/home.component';

//Modulo Home
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
    //HeaderComponent,
    //TodoButtonDeleteAllComponent,
    //TodoInputAddItensComponent,
    //TodoListComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

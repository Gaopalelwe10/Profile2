import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:"" , component: MenuComponent},
            {path:"", component: LoginComponent}, 
            {path:"", component: MenuComponent,children:[
            {path:"login", component: LoginComponent},
            {path:"contact", component: ContactComponent},
            {path:"about", component: AboutComponent}
          ]},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

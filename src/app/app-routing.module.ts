import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [ 
            {path:"", component: MenuComponent,children:[
            {path:"", component: LoginComponent},
            {path:"login", component: LoginComponent,},    
            {path:"contact", component: ContactComponent},
            {path:"about", component: AboutComponent},
            {path:"form",component: FormComponent}
          ]},
          {path:"detail" , component: DetailComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

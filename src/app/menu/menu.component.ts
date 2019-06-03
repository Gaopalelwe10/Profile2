import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  list=[
    {name:"Login" ,path:"login"},
    {name:"Contact" ,path:"contact"},
    {name:"About" ,path:"about"}
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNavigate(item){
    this.router.navigateByUrl(item.path)
  }
}

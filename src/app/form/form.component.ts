import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name= "Gaopalelwe";
  public password= "123456789";
  
  constructor() { }

  ngOnInit() {
  }

}

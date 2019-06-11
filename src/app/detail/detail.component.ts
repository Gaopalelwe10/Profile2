import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
     this.username = params.username;
     this.password =params.password;
     console.log(this.username); // popular
     console.log(this.password);
  });
  }

}

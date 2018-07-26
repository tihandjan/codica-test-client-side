import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.signIn({email: 'user@example.com', password: 'pupkov66'}).subscribe(res => {
      console.log(res);
    },err => {console.log(err)})
  }
}

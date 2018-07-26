import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

declare var Materialize;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.auth.userSignedIn()) {
      this.router.navigate(['/admin/dashboard'])
    }
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit(): void {
    this.auth.signIn(this.form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['admin', 'dashboard']);
      },
      err => Materialize.toast('Something went wrong', 3000, 'red rounded')
    )
  }

}

import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component ( {
    templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {}
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        console.log(formValues);
        this.router.navigate(['events'])
    }
    cancel() {
        this.router.navigate(['events'])
    }
}
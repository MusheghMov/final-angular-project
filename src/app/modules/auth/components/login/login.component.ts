import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../common/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoaderService} from "../../../../common/services/loader.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public submitted = false;
    public loginForm: FormGroup = new FormGroup({
        'email': new FormControl('', [Validators.email, Validators.required]),
        'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    constructor(private router: Router,
                public loaderService: LoaderService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if (this.loginForm.valid) {
            this.authService.logIn(this.loginForm.value);
            this.router.navigate(['dashboard/user-info/1']);
            localStorage.setItem('user', JSON.stringify(this.loginForm.value));
        }
        this.submitted = true
    }

}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';

import { routerTransition } from '../services/config/config.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
		});
	}

	// Check if user already logged in
	ngOnInit() {
		if (localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	regipage()
	{
		this.router.navigate(['/regdetails']);
	}
	// Initicate login
	homego() {

		

		
		const login = this.userService.login(this.loginForm.value).subscribe(data=>{
			debugger;
		
		
			if(data.status === "success") {
			
			//	window.localStorage.setItem('token', data.result.token);
				this.router.navigate(['/home']);
				alert(data.status);
			  }else {
				//this.invalidLogin = true;
				alert('data is'+data);
				console.log(data);
			  }
			  
			});
		  }
    
		}

	
		 
	



/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

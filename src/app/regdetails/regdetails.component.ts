import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';

import { routerTransition } from '../services/config/config.service';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-regdetails',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.css']
})
export class RegdetailsComponent implements OnInit {
  studentDetail: any=[];
  regdetails: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
		this.regdetails = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }
  ngOnInit(): void {
  }

  goback()
  {
    this.router.navigate(['/regdetails']);
  }

  regpage()
  {
    this.router.navigate(['/registration']);
  }

  displaydata() {	

		
		const regdata = this.userService.display(this.regdetails.value).subscribe(data=>{
			debugger;
		
		
			if(data.status === "success") {
			
			//	window.localStorage.setItem('token', data.result.token);
				this.router.navigate(['/regdetails']);
        alert(data.status);
        this.studentDetail=data.data;
        
        alert(this.studentDetail);
			  }else {
				//this.invalidLogin = true;
				alert('data is'+data);
				console.log(data);
			  }
			  
      }); 
      
      }
     

}


  
    
  


/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { getMaxListeners } from 'process';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class UserService {

	constructor(private httpclient:HttpClient) { }
	

	baseurl_login:string ="https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employee/1";
	baseurl_show_list:string ="https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employees";
	data: {
		email: "email:hhhh@gmail.com",
		username: "password:99999"
 }
	login(data) : Observable<any> {
		
		const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employee/1')
  .set('Access-Control-Allow-Methods', 'get')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');
  
  

		let params = new HttpParams();
		params = params.append('email:', 'mrumakanta@gmail.com');
		params = params.append('username:', 'dddd');
		
		return this.httpclient.get<any>(this.baseurl_login,
		{
			'headers':headers
		});
	}

	display(data) : Observable<any> {
		
		const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employee/1')
  .set('Access-Control-Allow-Methods', 'get')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');
  
  

		let params = new HttpParams();
		params = params.append('id:', '1');
		
		
		return this.httpclient.get<any>(this.baseurl_show_list,
		{
			'headers':headers
		});
	}

	
	}


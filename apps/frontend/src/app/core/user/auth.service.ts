import { Injectable } from '@angular/core';
import { IUser } from './model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
	apiUrl = 'http://localhost:3000'

	constructor(private http: HttpClient) { }

	register(registrationData: IUser) {
		let options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) }
		return this.http.post(`${this.apiUrl}/auth/signup`, JSON.stringify(registrationData), options).pipe(catchError(error => {
			console.error(error.message)
			return of(false)
		}))
	}

	login(authData : IUser) {
		let options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) }

		return this.http.post(`${this.apiUrl}/auth/signin`, JSON.stringify(authData), options).pipe(catchError(error => {
			console.error(error.message)
			return of(false)
		}))
	}


}
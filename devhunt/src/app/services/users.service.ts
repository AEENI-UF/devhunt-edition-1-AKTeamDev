import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const endpoint = "http://192.168.43.111:8000/api/devhunt";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /**
   * HTTP OPTIONS
   */
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'X-CSRFToken': 'BU9BD3mwuYdZiuKfu2zOpaICGTt4HOrIkaWGAlQRWRxzViYhVpGw6cgyAtIlTXQ9'
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * FUNCTION HANDLER
   */
  private handleError(operation = 'operation', result: any) {
    return (error: any) => {
      console.log(error);
      return of(result as ['']);
    };
  }

  /** Get user */
  allUsers(): Observable<any> {
    return this.http.get(endpoint + '/utilisateurs/').pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('List users', []))
    );
  }

  /** GET ONE user */
  getOneUser(id: string): Observable<any> {
    return this.http.get(`${endpoint}/utilisateurs/${id}/`, this.httpOptions).pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError('GET ONE user', []))
    );
  }

  /** Add new user */
  addUser(user: any): Observable<any> {
    return this.http.post(`${endpoint}/utilisateurs`, JSON.stringify(user), this.httpOptions).pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError('POST user', []))
    );
  }

  /** Update an user */
  updateUser(user: any): Observable<any> {
    return this.http.post(`${endpoint}/update_utilisateurs`, JSON.stringify(user), this.httpOptions).pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError('PUT user', []))
    );
  }

  /** Delete an user */
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${endpoint}/utilisateurs/${id}`).pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError('DELETE user', []))
    );
  }

  authentification(n: string, p: string): Observable<any> {
    return this.http.get(`${endpoint}/auth/${n}/password/${p}/`).pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError('GET ONE user', []))
    );
  }

  /** Set user information in session after login */
  addUserToSession(user: any) {
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('password', user.password);
  }

  /** Reset the user inforamtion in session after logout */
  removeUserSession() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
  }

  /** Get the user information save in session */
  getUserSession() {
    const user = {
      email: sessionStorage.getItem('email'),
      password: sessionStorage.getItem('password')
    }
    return user;
  }
}

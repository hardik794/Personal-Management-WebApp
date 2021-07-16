import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //get current user
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData : any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //login user : set token in local storage
  public loginUser(token : any){
    localStorage.setItem('token',token);
    return true;
  }

  //user is logged or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set user details
  public setUser(user : any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //get user
  public getUser(){
    let userStr =  localStorage.getItem('user');

    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //delete user
  public deleteUser(id : any){
    return this.http.delete(`${baseUrl}/user/${id}`)
  }

  //update user
  public updateUser(user : any){
    return this.http.put(`${baseUrl}/user/`,user);
  }
}

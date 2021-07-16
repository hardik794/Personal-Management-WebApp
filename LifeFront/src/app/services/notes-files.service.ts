import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class NotesFilesService {

  constructor(private http:HttpClient) { }


  //notes

  public addNotes(userNotes : any){
    return this.http.post(`${baseUrl}/notes/`,userNotes);
  }

  public getNotes(id : any){
    return this.http.get(`${baseUrl}/notes/user/${id}`)
  }

  public updateNotes(userNotes : any){
    return this.http.put(`${baseUrl}/notes/`,userNotes);
  }

  public deleteNotes(id : any){
    return this.http.delete(`${baseUrl}/notes/${id}`)
  }

  //files

  public addFiles(userFiles : any){
    return this.http.post(`${baseUrl}/files/`,userFiles);
  }

  public getFiles(id : any){
    return this.http.get(`${baseUrl}/files/user/${id}`)
  }


  //Record

  public addRecord(moneyRecord : any){
    return this.http.post(`${baseUrl}/record/`,moneyRecord);
  }

  public getRecord(id : any){
    return this.http.get(`${baseUrl}/record/user/${id}`)
  }

  public updateRecord(moneyRecord : any){
    return this.http.put(`${baseUrl}/record/`,moneyRecord);
  }

  public deleteRecord(id : any){
    return this.http.delete(`${baseUrl}/record/${id}`)
  }
}

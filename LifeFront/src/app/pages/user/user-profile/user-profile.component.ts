import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotesFilesService } from 'src/app/services/notes-files.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // user = null;
  userID =0;
  notelength = 0 ;
  filelength = 0 ;
  recordlength=0;
  
  public user = {
    username:'',
    password:'',
    email:'',
    firstname:'',
    lastname:'',
    phone:'',
    gender:'',
  };
  constructor(public login:LoginService,private service:NotesFilesService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
    this.userID = this.login.getUser().id;

    this.service.getNotes(this.userID).subscribe(
      (data1:any)=>{
        this.notelength=data1.length;
        console.log(data1.length);
    },
    
    (error)=>{
    console.log(error);
    });

    this.service.getFiles(this.userID).subscribe(
      (data2:any)=>{
        this.filelength=data2.length;
    },
    (error)=>{
      console.log(error);
    });

    this.service.getRecord(this.userID).subscribe(
      (data3:any)=>{
        this.recordlength=data3.length;
    },
    (error)=>{
      console.log(error);
    });
  }

  deleteAcc(id : any){
    this.login.deleteUser(id).subscribe(
      (data:any)=>{
        this.login.logout();
        this.login.loginStatusSubject.next(false);
    
        this.router.navigate(['home']);
      },
        (error)=>{
          this.snack.open("somthing wrong !!","",{
            duration:3000,
          });
        });

  }

}

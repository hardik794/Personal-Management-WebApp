import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) {  }

  public user = {
    username:'',
    password:'',
    email:'',
    firstname:'',
    lastname:'',
    phone:'',
    gender:'',
  };

  // keyword:string ='';
  // filtereduser:any[]=[];

  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    
    if(this.user.firstname=='' || this.user.firstname==null){
      this.snack.open("firstname is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.lastname=='' || this.user.lastname==null){
      this.snack.open("lastname is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.username=='' || this.user.username==null){
      this.snack.open("username is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.email=='' || this.user.email==null){
      this.snack.open("email is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.password=='' || this.user.password==null){
      this.snack.open("password is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.phone =='' || this.user.phone==null){
      this.snack.open("phone number is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.user.gender =='' || this.user.gender==null){
      this.snack.open("gender is required !!","",{
        duration:3000,
      });
      return;
    }
    //add user function
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success

        this.router.navigate(['/user']);

        this.snack.open("Register Success..","",{
          duration:3000,
        });
        
      },
    (error)=>{
      //error
      console.log(error);
      this.snack.open(""+error.error.text,"",{
        duration:3000,
      });
    }
    );
  }

  //search username
// search(){
//   this.filtereduser = [];
//   this.userService.search(this.keyword).subscribe(
//     (usernamedata:any) => {
//       this.filtereduser = usernamedata;
//       alert(this.filtereduser)
//     },
//     (error)=>{
//       console.log(error);
//       alert('something went wrong!!')
//     } 
//   );
// }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);


  hide = true;


}
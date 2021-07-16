import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username : '',
    password : '',
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login form submit..");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open("username is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open("password is required !!","",{
        duration:3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("sucess");
        console.log(data);

        //login.....
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user : any)=>{
            this.login.setUser(user);
            console.log(user);

            //redirect...
            // window.location.href ='/user';

            this.router.navigate(['/user']);
            this.login.loginStatusSubject.next(true);

          }
        );

      },
      (error)=>{
        console.log("error");
        this.snack.open("Invalid Username/password !! Try again","",{
          duration:3000,
        });
      }
    );

  }


  hide = true;


}

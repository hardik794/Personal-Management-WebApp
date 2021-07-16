import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public contact={
    name:'',
    email:'',
    subject:'',
    message:''
  }
  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  // sentEmail(){
  //   console.log(this.contact);
    
  //   if(this.contact.name=='' || this.contact.name==null){
  //     this.snack.open("name is required !!","",{
  //       duration:3000,
  //     });
  //     return;
  //   }
  //   if(this.contact.email=='' || this.contact.email==null){
  //     this.snack.open("email is required !!","",{
  //       duration:3000,
  //     });
  //     return;
  //   }
  //   if(this.contact.subject=='' || this.contact.subject==null){
  //     this.snack.open("subject is required !!","",{
  //       duration:3000,
  //     });
  //     return;
  //   }
  //   if(this.contact.message=='' || this.contact.message==null){
  //     this.snack.open("message is required !!","",{
  //       duration:3000,
  //     });
  //     return;
  //   }
  //   this.userService.sentEmail(this.contact).subscribe(
  //     (data:any)=>{
  //       this.snack.open("Feedback Sent..","",{
  //         duration:3000,
  //       });
        
  //     },
  //   (error)=>{
  //     console.log(error);
  //     this.snack.open("Server Error...","",{
  //       duration:3000,
  //     });
  //   }
  //   );
  // }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotesFilesService } from 'src/app/services/notes-files.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  userID =0;

  userrecord=[];
  
  name:string='All';

  public record : any = {
    name:'',
    email:'',
    money:'',
    type:'',
    update:''
  };

  public moneyrecord : any = {
    name:'',
    email:'',
    money:'',
    type:'',
    user_money:{},
  };
  constructor(private service:NotesFilesService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {

    this.userID = this.login.getUser().id;
    console.log(this.userID);
    this.service.getRecord(this.userID).subscribe(
      (data:any)=>{
        this.record = data;
        this.userrecord = this.record;
        console.log(data);

    },
    (error)=>{
    console.log(error);

    });

    this.moneyrecord.user_money['id'] = this.userID;
  }

  recordSubmit(){
    if(this.moneyrecord.name=='' || this.moneyrecord.name==null){
      this.snack.open("name is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.moneyrecord.email=='' || this.moneyrecord.email==null){
      this.snack.open("email is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.moneyrecord.money=='' || this.moneyrecord.money==null){
      this.snack.open("money is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.moneyrecord.type=='' || this.moneyrecord.type==null){
      this.snack.open("Pofit or Lose is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.moneyrecord.money<0){
      this.snack.open("Money Negative not Allowed !!","",{
        duration:3000,
      });
      return;
    }
    if(this.moneyrecord.type=='lose'){
      this.moneyrecord.money= -this.moneyrecord.money;
    }
    
    this.service.addRecord(this.moneyrecord).subscribe(
      (data:any)=>{
        this.ngOnInit();
    console.log(data);

        this.snack.open("your data added successfully !!","",{
          duration:3000,
        });
    },
    (error)=>{
      this.snack.open("somthing wrong !!","",{
        duration:3000,
      });
    });
  }

  recordUpdateAdd(record : any){
    // this.moneyrecord=record;

    if(record=='' || record==null){
      this.snack.open("money is required !!","",{
        duration:3000,
      });
      return;
    }
      record.money = record.money + record.update;
      this.moneyrecord = record;

      if(this.moneyrecord.money>0){
        this.moneyrecord.type = 'profit';
      }
      else if(this.moneyrecord.money<0){
        this.moneyrecord.type = 'lose';
      }
      else if(this.moneyrecord.money==0){
        this.moneyrecord.type = 'zero';
      }
      this.Update();
  }

  recordUpdateRemove(record : any){
    // this.moneyrecord=record;

    if(record=='' || record==null){
      this.snack.open("money is required !!","",{
        duration:3000,
      });
      return;
    }
      record.money = record.money - record.update;
      this.moneyrecord = record;

      if(this.moneyrecord.money>0){
        this.moneyrecord.type = 'profit';
      }
      else if(this.moneyrecord.money<0){
        this.moneyrecord.type = 'lose';
      }
      else if(this.moneyrecord.money==0){
        this.moneyrecord.type = 'zero';
      }
      this.Update();
  }

  Update(){

    this.service.updateRecord(this.moneyrecord).subscribe(
      (data:any)=>{
      this.ngOnInit();
        this.snack.open("your data update successfully !!","",{
          duration:3000,
        });
      },
        (error)=>{
          this.snack.open("somthing wrong !!","",{
            duration:3000,
          });
        });
  }

  deleteRecord(id : any){
    this.service.deleteRecord(id).subscribe(
      (data:any)=>{
      this.ngOnInit();
        this.snack.open("your Record delete successfully !!","",{
          duration:3000,
        });
      },
        (error)=>{
          this.snack.open("somthing wrong !!","",{
            duration:3000,
          });
        });

  }
}

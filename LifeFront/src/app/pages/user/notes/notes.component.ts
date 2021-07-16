import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotesFilesService } from 'src/app/services/notes-files.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {

  cat:string='All';

  userID =0;
  usernotes=[];

  public notes : any = {
    title:'',
    description:'',
    caterogy:'',
  };

  public data : any = {
    title:'',
    description:'',
    caterogy:'',
    user:{},
  };

  constructor(private service:NotesFilesService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.userID = this.login.getUser().id;
    console.log(this.userID);
    this.service.getNotes(this.userID).subscribe(
      (data1:any)=>{
        this.notes = data1;
        this.usernotes = this.notes;
        console.log(data1);

    },
    (error)=>{
    console.log(error);

    });

    this.data.user['id'] = this.userID;
  }

  selected = 'All';
  panelOpenState = false;

  formSubmit(){
    if(this.data.title=='' || this.data.title==null){
      this.snack.open("title is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.data.description=='' || this.data.description==null){
      this.snack.open("description is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.data.caterogy=='' || this.data.caterogy==null){
      this.snack.open("caterogy is required !!","",{
        duration:3000,
      });
      return;
    }
    this.service.addNotes(this.data).subscribe(
      (data:any)=>{
        this.ngOnInit();
        this.snack.open("your note added successfully !!","",{
          duration:3000,
        });
    },
    (error)=>{
      this.snack.open("somthing wrong !!","",{
        duration:3000,
      });
    });
  }

  formUpdate(note:any){
    this.data=note;
    if(this.data.title=='' || this.data.title==null){
      this.snack.open("title is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.data.description=='' || this.data.description==null){
      this.snack.open("description is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.data.caterogy=='' || this.data.caterogy==null){
      this.snack.open("caterogy is required !!","",{
        duration:3000,
      });
      return;
    }
    this.service.updateNotes(this.data).subscribe(
      (data:any)=>{
      this.ngOnInit();
        this.snack.open("your note update successfully !!","",{
          duration:3000,
        });
      },
        (error)=>{
          this.snack.open("somthing wrong !!","",{
            duration:3000,
          });
        });

  }

  deleteNote(id : any){
    this.service.deleteNotes(id).subscribe(
      (data:any)=>{
      this.ngOnInit();
        this.snack.open("your note delete successfully !!","",{
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

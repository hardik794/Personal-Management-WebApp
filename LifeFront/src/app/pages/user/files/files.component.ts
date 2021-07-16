import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotesFilesService } from 'src/app/services/notes-files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  cat:string='All';
  userID =0;
  userfile=[];

  public files : any = {
    fileName:'',
    files:'',
    caterogy:'',
  };

  public data : any = {
    fileName:'',
    files:'',
    caterogy:'',
    users:{},
  };
  constructor(private service:NotesFilesService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {

    this.userID = this.login.getUser().id;
    console.log(this.userID);
    this.service.getFiles(this.userID).subscribe(
      (data1:any)=>{
        this.files = data1;
        this.userfile = this.files;
        console.log(data1);

    },
    (error)=>{
    console.log(error);

    });

    this.data.users['id'] = this.userID;

  }
  selected = 'All';
  // public onFileChanged(event : any) {
  //   this.data.files = event.target.files[0];
  // }
  fileSubmit(){
    if(this.data.fileName=='' || this.data.fileName==null){
      this.snack.open("fileName is required !!","",{
        duration:3000,
      });
      return;
    }
    if(this.data.files=='' || this.data.files==null){
      this.snack.open("files is required !!","",{
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
    this.service.addFiles(this.data).subscribe(
      (data:any)=>{
        this.ngOnInit();
        this.snack.open("your file added successfully !!","",{
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

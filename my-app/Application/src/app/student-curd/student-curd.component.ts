import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-curd',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './student-curd.component.html',
  styleUrl: './student-curd.component.scss'
})
export class StudentCurdComponent {
  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string ="";
  course: string ="";
  fee: string ="";
  id:string=""
  currentStudentID = "";
person: any;

  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }

  ngOnInit(): void {
  }

  getAllStudent()
  { 
    this.http.get("http://localhost:8000/getUser")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
    });
  }


  


  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "stname" : this.stname,
      "course" : this.course,
      "fee" : this.fee,
      "id":this.id
    };

    this.http.post("http://localhost:8000/registreUser",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.getAllStudent();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }

  setUpdate(data: any) 
  {
   this.stname = data.stname;
   this.course = data.course;
   this.fee = data.fee;
   this.id = data.id;
  

   this.currentStudentID = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "stname" : this.stname,
      "course" : this.course,
      "fee" : this.fee,
      "id":this.id,
    };
    
    this.http.put("http://localhost:8000/updateUserDetais"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.getAllStudent();
      
    });
  }
 
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data: any)
  {
    this.http.delete("http://localhost:8000/removeUser"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
    });
  }
}

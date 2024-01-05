import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule,FormBuilder,Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})

export class AddbookComponent {
constructor(private fb:FormBuilder,private http:HttpClient){}
addform=this.fb.group({
     id:['',Validators.required],
     bookname:['',Validators.required],
     author:['',Validators.required],
     date:['',Validators.required],
     url:['',Validators.required]
})

submitaddform(){
    this.http.post<any>("http://localhost:3000/addbooks",this.addform.value).subscribe(()=>{
    alert("Book details added");
    })
}
}

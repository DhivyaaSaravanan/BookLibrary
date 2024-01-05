import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  addList:any=[];
  constructor(private service:BookManagementService,private http:HttpClient){
    this.service.addBooks().subscribe(data=>{
      this.addList =data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { user } from 'datatype';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent  implements OnInit{
  allData:undefined|any;

  constructor(private userservice:UserService){}

  ngOnInit(): void {
    this.userservice.GetData().subscribe((result)=>{
      this.allData=result;
    })
    
  }
  
  

}

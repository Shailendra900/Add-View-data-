import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from 'datatype';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  constructor(private userService:UserService){}

  onSubmit(formData:user){
    console.log(formData);
    this.userService.userData(formData).subscribe()
  }

}

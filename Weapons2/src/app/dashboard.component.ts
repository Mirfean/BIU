import { Component, Output, EventEmitter, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Weapon } from './app.component';



@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent { 
 
  @Output() 
  addToList = new EventEmitter();

  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name:["", [Validators.minLength(3), Validators.maxLength(20)]],
    });
  }

  addWeapon():void{
      console.log("Works!");
      if(this.form.dirty && this.form.valid)
      {
      this.addToList.emit({xD:this.form.value});  
      }
   }
}

    

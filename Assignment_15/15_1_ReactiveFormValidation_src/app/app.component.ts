import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyAngularProject';
  // public myForm: FormGroup;
  public complaintForm : FormGroup;
  public firstName : FormControl;
  constructor(private fb: FormBuilder){ 

  }

  textNamePattern = "^[a-zA-Z]*$";
  numberPattern = "^[0-9]*$";
  emailPattern = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";
  cityPattern = "^([a-zA-Z])+$";
  arrStates = ['Maharashtra', 'Gujarat', 'Uttar Pradesh'];
  zipPattern = "^([0-9]){5,5}$";

  ngOnInit(){
    this.complaintForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(this.textNamePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.textNamePattern)]],
      phone: ['',[Validators.required, Validators.pattern(this.numberPattern), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      city: ['', [Validators.required,  Validators.pattern(this.cityPattern), Validators.minLength(4)]],
      state: ['', [Validators.required] ],
      zip: ['',[Validators.required, Validators.pattern(this.zipPattern)]],
      comment:['',[Validators.required,Validators.minLength(30)]]
    });
  }
}

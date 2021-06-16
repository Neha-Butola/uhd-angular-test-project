import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-information',
  templateUrl: './request-information.component.html',
  styleUrls: ['./request-information.component.scss']
})
export class RequestInformationComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public form: FormGroup;
  public profile: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.setupForm();    
  }
   
  setupForm() {
    const phoneNumber = "^((\\+91-?)|0)?[0-9]{10}$";

    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phonenumber: new  FormControl('',[Validators.required,Validators.pattern(phoneNumber)]),
      interests : new FormControl('', Validators.required),
      deliverttype: new FormControl (''),
      communicationtype: new FormControl('')
    });
  }

  onSubmit(formdata:{}) {
    this.submitted = true;
    if (this.form.invalid) { 
      return;
    }
    this.http.post(
      'https://uhd--user-information-default-rtdb.firebaseio.com/userdata.json',
      formdata
    ).subscribe(responseData => {
      console.log(responseData);
      alert("Data submitted on firebase server");
    });
  }



}

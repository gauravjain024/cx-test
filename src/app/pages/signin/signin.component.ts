import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  errMsg = '';
  signinForm;

  constructor(private _apiService: ApiServiceService) {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      id: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  save() {
    this.errMsg = '';
    if (this.signinForm.dirty && this.signinForm.invalid) {
      this.errMsg = 'Invalid Input';
      return;
    }
    console.log(this.signinForm.value);
    this._apiService.signinUser().then((res) => {
      console.log(res);
    });
  }
}

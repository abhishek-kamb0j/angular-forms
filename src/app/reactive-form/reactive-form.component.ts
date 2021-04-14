import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}"
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.checkConfirmPassword });
  }
  check() {
    console.log(this.registrationForm);
    this.registrationForm
      .get('email')
      .valueChanges.subscribe((data) => console.log('valueChanges', data));
  }
  change() {
    console.log('check', this.registrationForm)
  }
  checkConfirmPassword(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    if (password !== "" && confirmPassword !== "")
      return password === confirmPassword ? null : { notSame: true }
  }
}

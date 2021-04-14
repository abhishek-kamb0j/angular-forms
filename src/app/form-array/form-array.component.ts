import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  quizForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      xQuestion : this.fb.array([
        this.questionArray()
      ])
    })
  }
  questionArray(){
    return this.fb.group({
      question : ["",Validators.required],
      yOptions : this.fb.array([
        this.optionArray(),this.optionArray(),this.optionArray(),
      ])
    })
  }
  optionArray(){
    return this.fb.group({
      option: ["",Validators.required]
    })
  }
  check(){
    console.log("formArrayControl", this.quizForm.controls)
  }
  addQuestion(){
    const control  = <FormArray>this.quizForm.controls['xQuestion']
    control.push(this.questionArray())
  }
  addOption(ix:number){
    const control = (<FormArray>this.quizForm.controls['xQuestion']).at(ix).get('yOptions') as FormArray;
    control.push(this.optionArray());
  }

}

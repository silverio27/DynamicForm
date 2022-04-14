import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IForm } from '../iform';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  model: any ={};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  save(){
    const values = this.form.fields.map((x)=>{
      return {
        name: x.name,
        value:x.value
      }
    })
    values.forEach(x => {
      this.model[x.name]=x.value
    });
    console.log(this.model)
  
    const actionSave = this.form.actions[0];
    this.http.post(actionSave.url, this.model).subscribe(()=>{
      console.log('salvei')
    })

  }

}

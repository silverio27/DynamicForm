
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import { IField } from "../iform";

@Component({
  selector: "app-dynamic-field",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.css"],
})
export class DynamicFieldComponent implements OnInit {
  @Input() field!: IField;


  constructor() {}

  ngOnInit(): void {}

}

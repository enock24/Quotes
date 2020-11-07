import { Component, OnInit } from '@angular/core';
import { Message } from "../message";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formName:string;
  formQuoteTittle:string;
  formQuote:string;
  formQuoteAuthor:string;
  published:Date;


  constructor() { }

  ngOnInit(): void {
  }

}

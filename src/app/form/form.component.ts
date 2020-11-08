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
  newQuote: any;
  message=[
    newMessage("Towett","coding", "happy coding", "Bett",new Date() )
  ]
  submitQuote(){
    this.newMessage = new Message(this.formName, this.formQuoteTittle, this.formQuote, this.formQuoteAuthor, this.published, this.newQuote, new Date())
    this.messages.push(this.newMessage);

  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-detail-quote',
  templateUrl: './detail-quote.component.html',
  styleUrls: ['./detail-quote.component.css']
})
export class DetailQuoteComponent implements OnInit {
  @Input() quote:Quote;
  @Output()isComplete= new EventEmitter<boolean>();

  iscomplete: boolean;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }
 
  ngOnInit(): void {
  }

}

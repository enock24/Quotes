export class Quote {
    showDetails="boolen";
    constructor (public name: string, public quoteTitle: string,
         public quote: string, public quoteAuthor: string, public date: string,public likes:number, public dislikes:number){
         this.showDetails= false;
         }
         }

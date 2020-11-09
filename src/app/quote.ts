// import { timeStamp } from 'console';

export class Quote {
    showDetails: boolean;
    upvote:number;
    downvote:number;
    constructor(public id:number,public name: string, public quoteTitle: string,
        public quote: string, public quoteAuthor: string, public date: Date) {
        this.showDetails = false;
        this.upvote =0;
        this.downvote =0;
    }
}

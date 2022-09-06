
class RandomQuote{
    quote: string;

    constructor(){
        this.quote = "";
    }

    async getNewQuote(){
        let newQuote = await $.get("https://api.kanye.rest/");
        this.quote = newQuote.quote;
    }
}

 async function check(){
    let quote = new RandomQuote();
    await quote.getNewQuote();
    console.log(quote.quote)
 }
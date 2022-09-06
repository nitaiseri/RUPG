class UserPage{
    user: RandomUser;
    quote: RandomQuote;
    pokemon: RandomPokemon;
    ipsum: RandomIpsum;

    constructor(){
        this.user = new RandomUser();
        this.quote = new RandomQuote();
        this.pokemon = new RandomPokemon();
        this.ipsum = new RandomIpsum();
    }

    async generateNewUserPage(){
        return await Promise.all([this.user.getNewUser(),
                        this.quote.getNewQuote(),
                        this.pokemon.getNewPokemon(),
                        this.ipsum.getNewIpsum()]);
        // return this;
    }
}
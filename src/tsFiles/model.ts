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
    }

    saveCurrentUserPage(){
        localStorage.savedPage = JSON.stringify(this);
    }

    loadLastSavedPage(){
        const savedPage = JSON.parse(localStorage.savedPage); 
        this.user.copy(savedPage.user); 
        this.quote.copy(savedPage.quote); 
        this.pokemon.copy(savedPage.pokemon); 
        this.ipsum.copy(savedPage.ipsum); 
    }
}
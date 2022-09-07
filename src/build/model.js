"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserPage {
    constructor() {
        this.user = new RandomUser();
        this.quote = new RandomQuote();
        this.pokemon = new RandomPokemon();
        this.ipsum = new RandomIpsum();
    }
    generateNewUserPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all([this.user.getNewUser(),
                this.quote.getNewQuote(),
                this.pokemon.getNewPokemon(),
                this.ipsum.getNewIpsum()]);
        });
    }
    saveCurrentUserPage() {
        localStorage.savedPage = JSON.stringify(this);
    }
    loadLastSavedPage() {
        const savedPage = JSON.parse(localStorage.savedPage);
        this.user.copy(savedPage.user);
        this.quote.copy(savedPage.quote);
        this.pokemon.copy(savedPage.pokemon);
        this.ipsum.copy(savedPage.ipsum);
    }
}

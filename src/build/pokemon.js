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
const NUM_OF_POKEMONS = 905;
class RandomPokemon {
    constructor() {
        this.name = "";
        this.imageUrl = "";
    }
    getNewPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokeId = Math.floor(Math.random() * NUM_OF_POKEMONS);
            let newPoke = yield $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
            this.name = this.capitlizeName(newPoke.name);
            this.imageUrl = newPoke.sprites.front_default;
        });
    }
    capitlizeName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

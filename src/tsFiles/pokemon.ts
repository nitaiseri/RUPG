const NUM_OF_POKEMONS = 905;

class RandomPokemon {
    name: string;
    imageUrl: string;

    constructor(){
        this.name = "";
        this.imageUrl = "";
    }

    async getNewPokemon(){
        const pokeId = Math.floor(Math.random() * NUM_OF_POKEMONS);
        let newPoke = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
        this.name = this.capitlizeName(newPoke.name);
        this.imageUrl = newPoke.sprites.front_default;
    }

    capitlizeName(name: string){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    copy(savedPokemon: RandomPokemon){
        this.name = savedPokemon.name;
        this.imageUrl = savedPokemon.imageUrl;
    }
}

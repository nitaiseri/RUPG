
 async function check(){
    let poke = new RandomPokemon();
    await poke.getNewPokemon();
    console.log(poke)
 }
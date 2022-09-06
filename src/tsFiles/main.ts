
 async function check(){
    let ipsum = new RandomIpsum();
    await ipsum.getNewIpsum();
    console.log(ipsum.ipsum)
 }
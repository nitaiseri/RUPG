
 async function check(){
    let user = new RandomUser();
    await user.getNewUser();
    console.log(user)
 }
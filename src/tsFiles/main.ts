
 async function check(){
   let render = new Renderer();
   let user = new UserPage();
   user.generateNewUserPage().then((result) => {render.render(user)})
 }


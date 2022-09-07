const renderer = new Renderer();
const page = new UserPage();


$("#generate-btn").on('click', function(){
    page.generateNewUserPage().then((result) => 
                                {renderer.render(page)})
})
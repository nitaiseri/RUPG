const renderer = new Renderer();
const page = new UserPage();


$("#generate-btn").on('click', function(){
    page.generateNewUserPage().then((result) => 
                                {renderer.render(page)})
})

$("#save-btn").on('click', function(){
    page.saveCurrentUserPage();
})

$("#load-btn").on('click', function(){
    page.loadLastSavedPage();
    renderer.render(page);
})
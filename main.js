const apiManager = new APIManager()
const renderer = new Renderer(apiManager)


$("#load-data").on("click", function () {
    renderer.loadData()
})

$("#display-data").on("click", function () {
    renderer.renderUser()
    renderer.renderFriends()
    renderer.renderQuote()
    renderer.renderPokemon()
    renderer.renderMeat()
    renderer.renderSavedUsers()
})

$("#save-user-btn").on("click", function () {
    renderer.saveUserPage()
})

$("#load-user-btn").on("click", function () {
    const id = $("#select-user :selected").val();
    renderer.loadUserPage(id)
})
renderer.renderSavedUsers()
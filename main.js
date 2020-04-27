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
})



class Renderer {
    constructor(apiManager) {
        this.apiManager = apiManager
    }
    loadData() {
        this.apiManager.getRandomUsers()
        this.apiManager.getQuote()
        this.apiManager.getPokemon()
        this.apiManager.getMeat()
    }
    renderUser() {
        const $user = $(".user-container")
        $user.empty()
        const userSource = $('#user-template').html();
        const userTemplate = Handlebars.compile(userSource);
        const userInfo = this.apiManager.getData().users[0]
        const userHTML = userTemplate(userInfo);
        $user.append(userHTML)
    }
    renderFriends() {
        const $friends = $(".friends-container")
        $friends.empty()
        const friendsSource = $('#friends-template').html();
        const friendsTemplate = Handlebars.compile(friendsSource);
        const friends = [...this.apiManager.getData().users]//clone array with new reference
        friends.shift()//remove first because it's the user
        const friendsHTML = friendsTemplate({ friends });
        $friends.append(friendsHTML)
    }
    renderQuote() {
        const $quote = $(".quote-container")
        $quote.empty()
        const quoteSource = $('#quote-template').html();
        const quoteTemplate = Handlebars.compile(quoteSource);
        const quote = this.apiManager.getData().quote
        const quoteHTML = quoteTemplate(quote);
        $quote.append(quoteHTML)
    }
    renderPokemon() {
        const $pokemon = $(".pokemon-container")
        $pokemon.empty()
        const pokemonSource = $('#pokemon-template').html();
        const pokemonTemplate = Handlebars.compile(pokemonSource);
        const pokemon = this.apiManager.getData().pokemon
        const pokemonHTML = pokemonTemplate(pokemon);
        $pokemon.append(pokemonHTML)
    }
    renderMeat() {
        const $meat = $(".meat-container")
        $meat.empty()
        const meatSource = $('#meat-template').html();
        const meatTemplate = Handlebars.compile(meatSource);
        const meat = this.apiManager.getData().meat
        const meatHTML = meatTemplate(meat);
        $meat.append(meatHTML)
    }
    renderSavedUsers() {
        const $savedUsers = $("#saved-users-menu")
        $savedUsers.empty()
        $("#menu-container").empty()
        const source = $('#saved-users-menu-template').html();
        const template = Handlebars.compile(source);
        const savedUsers = this.apiManager.getSavedUsers()
        const HTML = template({ savedUsers });
        $("#menu-container").append(HTML)
    }
    saveUserPage() {
        const user = this.apiManager.getData()
        user.id = this.apiManager.getNewId()
        const savedUsers = this.apiManager.getSavedUsers()
        savedUsers.push(user)
        localStorage.setItem('savedUsers', JSON.stringify(savedUsers))
        this.renderSavedUsers()
    }
    loadUserPage(id) {
        const savedUsers = this.apiManager.getSavedUsers()
        const i = savedUsers.findIndex(u => u.id == id)
        this.apiManager.data = savedUsers[i]
        this.renderUser()
        this.renderFriends()
        this.renderQuote()
        this.renderPokemon()
        this.renderMeat()
    }
}
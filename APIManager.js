
class APIManager {
    constructor() {
        this.data = {}
    }
    getRandomUsers() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success: (data) => {
                this.data.users = data.results.map(u => {
                    return {
                        name: u.name.first + " " + u.name.last,
                        city: u.location.city,
                        state: u.location.state,
                        img: u.picture.large
                    }
                })
            }
        })
    }
    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest?format=text',
            success: (data) => {
                this.data.quote = data
            }
        })
    }
    getPokemon() {
        const num = this.getRandomInt(500)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            success: (data) => {
                this.data.pokemon = { name: data.species.name, img: data.sprites.back_default }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("error")
            }

        })
    }
    getMeat() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat&sentences=3&format=text',
            success: (data) => {
                this.data.meat = data
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("error")
            }

        })
    }
    getSavedUsers() {
        if (localStorage.savedUsers)
            return JSON.parse(localStorage.savedUsers)
        return []
    }
    getNewId() {
        if (localStorage.idCount) {
            const id = localStorage.idCount
            const newId = +id + 1
            localStorage.setItem("idCount", newId)
            return newId
        }
        localStorage.setItem("idCount", "0")
        return "0"
    }

    getData() {
        return this.data
    }
    logData() {
        console.log(this.data);
    }
    getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}


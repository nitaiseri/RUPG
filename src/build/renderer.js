"use strict";
class Renderer {
    constructor() { }
    render(data) {
        this.renderPersonalData(data.user);
        this.renderQuote(data.quote);
        this.renderPokemon(data.pokemon);
        this.renderIpsum(data.ipsum);
        this.renderFriends(data.user.friends);
    }
    renderPersonalData(userData) {
        const source = $('#personal-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(userData);
        $('#personal-data').append(newHTML);
    }
    renderQuote(quote) {
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(quote);
        $('#quote').append(newHTML);
    }
    renderPokemon(pokemon) {
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);
        $('#pokemon').append(newHTML);
    }
    renderIpsum(ipsum) {
        const source = $('#ipsum-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(ipsum);
        $('#about').append(newHTML);
    }
    renderFriends(friends) {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ friends });
        $('.friends-container').append(newHTML);
    }
}

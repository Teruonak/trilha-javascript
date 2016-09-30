'use strict';
(function($) {

var inputNome = $('#nome');
var buttonAdicionar = $('#adicionar');
var lista = $('#lista');

  buttonAdicionar.click(function() {
    var nome = inputNome.value();
    lista.append(`<li>${nome}</li>`);
  });

})($);

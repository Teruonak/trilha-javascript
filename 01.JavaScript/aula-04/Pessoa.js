function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.getPersonInfo = function() {
    return this.nome + ' ' + this.idade;
  }

  return this.getPersonInfo();
}

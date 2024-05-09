// Definindo as estratégias
const estrategiaOnibus = {
    irParaAeroporto: function() {
      console.log("Pegar o ônibus para chegar ao aeroporto.");
    }
  };
  
  const estrategiaTaxi = {
    irParaAeroporto: function() {
      console.log("Pedir um táxi para chegar ao aeroporto.");
    }
  };
  
  const estrategiaBicicleta = {
    irParaAeroporto: function() {
      console.log("Andar de bicicleta para chegar ao aeroporto.");
    }
  };
  
  // Contexto que permite escolher e usar uma estratégia
  class Viajante {
    constructor(estrategia) {
      this.estrategia = estrategia;
    }
  
    setEstrategia(estrategia) {
      this.estrategia = estrategia;
    }
  
    irParaAeroporto() {
      this.estrategia.irParaAeroporto();
    }
  }
  
  // Exemplo de uso
  const viajante = new Viajante(estrategiaOnibus);
  
  console.log("Viajante escolheu o ônibus:");
  viajante.irParaAeroporto();
  
  // Mudando a estratégia dinamicamente
  viajante.setEstrategia(estrategiaTaxi);
  
  console.log("\nViajante agora escolheu o táxi:");
  viajante.irParaAeroporto();
  
  // Mudando novamente a estratégia
  viajante.setEstrategia(estrategiaBicicleta);
  
  console.log("\nViajante agora escolheu a bicicleta:");
  viajante.irParaAeroporto();
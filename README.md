# Strategy - Design Patterns

 O Strategy é um padrão de projeto
comportamental que permite que você defina
uma família de algoritmos, coloque-os em
classes separadas, e faça os objetos deles
intercambiáveis.



|Situação e Problema|
|-|
|1 - Imagine que você tem que chegar ao aeroporto. Você pode pegar um ônibus, pedir um táxi, ou subir em suabicicleta. Essas são suas estratégias de transporte.
Você pode escolher uma das estratégias dependendo de fatores como orçamento ou restrições de tempo.
|![Diagrama de Classes](https://github.com/avilagabriella/Strategy/assets/140626679/92dcebf4-dc8b-44b3-a07e-909f94b0e745)|



# JavaScript com a solução do problema: 
```
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
```

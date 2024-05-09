# Strategy - Design Patterns

 O Strategy é um padrão de projetocomportamental que permite que você definauma família de algoritmos, coloque-os em classes separadas, e faça os objetos delesintercambiáveis.



|Situação e Problema|
|-|
| Imagine que você tem que chegar ao aeroporto. Você pode pegar um ônibus, pedir um táxi, ou subir em sua bicicleta. Essas são suas estratégias de transporte. Você pode escolher uma das estratégias dependendo de fatores como orçamento ou restrições de tempo.
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

# Solução:

1- DEFINIÇÃO DE ESTRATÉGIAS: São definidos três objetos (**estrategiaOnibus**, **estrategiaTaxi**, **estrategiaBicicleta**), cada um com um método **irParaAeroporto** que descreve como chegar ao aeroporto usando um ônibus, táxi ou bicicleta, respectivamente.

2- CONTEXTO: A classe **Viajante** representa o contexto onde uma estratégia será usada. Ele possui um método **irParaAeroporto**, que delega a chamada ao método **irParaAeroporto** da estratégia atualmente definida.

3- EXEMPLO DE USO: Um objeto **viajante** é instanciado com a estratégia de ônibus. Ele chama **irParaAeroporto**, que imprime a mensagem relacionada à estratégia de ônibus. Em seguida, a estratégia é alterada dinamicamente para táxi e bicicleta, e a mesma função **irParaAeroporto** é chamada, mas agora ela imprime mensagens relacionadas a cada uma das novas estratégias.

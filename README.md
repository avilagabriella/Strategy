# Strategy - Design Patterns

 O Strategy é um padrão de projeto
comportamental que permite que você defina
uma família de algoritmos, coloque-os em
classes separadas, e faça os objetos deles
intercambiáveis.



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

1- O padrão Strategy sugere que você pegue uma classe que faz algo específico de muitas maneiras diferentes e extraia todos esses algoritmos em classes separadas chamadas estratégias.

2- A classe original, chamada contexto, deve possuir um campo para armazenar uma referência a uma das estratégias. O contexto delega o trabalho a um objeto de estratégia vinculado, em vez de executá-lo sozinho.

3- O contexto não é responsável por selecionar um algoritmo apropriado para o trabalho. Em vez disso, o cliente passa a estratégia desejada para o contexto. Na verdade, o contexto não sabe muito sobre estratégias. Funciona com todas as estratégias através da mesma interface genérica, que expõe apenas um único método de acionamento do algoritmo encapsulado na estratégia selecionada.

4- Desta forma o contexto torna-se independente de estratégias concretas, podendo adicionar novos algoritmos ou modificar os existentes sem alterar o código do contexto ou outras estratégias.

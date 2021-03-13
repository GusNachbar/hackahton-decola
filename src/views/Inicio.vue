<template>
  <div class="green lighten-5">
    <v-container class="text-center">
      <h2 class="coleta my-3">Coleta Seletiva</h2>
      <v-img class="imagemLixo" src="../assets/lixo2.png" alt=""></v-img>
     <v-list-item-icon> 
      <h3 class="importancia">Importância ambiental</h3>

      <v-icon class="alerta">mdi-alert</v-icon>
      </v-list-item-icon>

      <p class="primeiropar">
        O destino final dos resíduos domésticos, industriais e de construção
        civil é um dos agravantes da degradação do meio ambiente. A coleta
        seletiva é uma alternativa que permite diminuir a quantidade de lixo
        produzido e o reaproveitamento de diversos materiais já transformados,
        ajudando a preservar a natureza. A participação da sociedade é de suma
        importância para desenvolvimento de projetos de Educação Ambiental.
      </p>

      <v-list-item-icon>
        <h3 class="ajudar">Como podemos ajudar?</h3>

        <v-icon class="ajudaricone">mdi-account-question</v-icon>
      </v-list-item-icon>
      <p class="segundopar">
        Confira no nosso menu lateral os pontos de Coleta e mais informações sobre os tipos
        de resíduos.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
.imagemLixo {
  border: 1px solid #2e7d32;
  border-radius: 10px;
}

.primeiropar {
  font-weight: bold;
}

.segundopar {
  font-weight: bold;
}

.coleta {
  color: #1b5e20;
}

.importancia {
  color: #1b5e20;
  font-weight: bold;
}

.ajudar {
  color: #1b5e20;
}

.alerta {
    color: #1b5e20;
    margin-left: 4px;
}

.ajudaricone{
  color: #1b5e20;
  margin-left: 4px;
}
</style>

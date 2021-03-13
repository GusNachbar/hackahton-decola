<template>
  <div class="green lighten-5">
    <v-container class="mt-16 text-center">
      <h2 class="coleta">Coleta Seletiva</h2>
      <v-img class="imagemLixo" src="../assets/lixo2.png" alt=""></v-img>
      
      <h3 class="importancia">Importancia ambiental</h3>

      <p>
        O destino final dos resíduos domésticos, industriais e de construção
        civil é um dos agravantes da degradação do meio ambiente. A coleta
        seletiva é uma alternativa que permite diminuir a quantidade de lixo
        produzido e o reaproveitamento de diversos materiais já transformados,
        ajudando a preservar a natureza. A participação da sociedade é de suma
        importância para desenvolvimento de projetos de Educação Ambiental.
      </p>

      <v-list-item-icon>
        <h3 class="ajudar">Como podemos ajudar?</h3>

        <v-icon>mdi-account-question</v-icon>
      </v-list-item-icon>
      <p>
        Confira no nosso Menu Pontos de Coleta e Mais informações sobre os tipos
        de resíduos
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

.coleta {
  color: #1b5e20;
}

.importancia {
  color: #1b5e20;
}

.ajudar {
  color: #1b5e20;
}
</style>
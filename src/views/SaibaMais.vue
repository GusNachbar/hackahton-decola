<template>

  <v-main class="green lighten-5">
    <v-container> 
      <v-img src="../assets/Lixos.png" alt="Lixos" class="bannerLixos d-flex justify-center mx-auto"></v-img>
    </v-container>


    <v-list class="green lighten-5">
        <v-list-item>
          <v-list-item-icon>
              <v-img src="../assets/lixo-organico-azul.png" class="imgLixo"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Papel</v-list-item-title>
            <v-list-item-action-text>Exemplos: jornais, revistas, impressos em geral, caixas de papelão e embalagens longa-vida.</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-list class="green lighten-5">
        <v-list-item>
          <v-list-item-icon>
            <v-img src="../assets/lixo-organico-amarelo.png" class="imgLixo"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Metal</v-list-item-title>
            <v-list-item-action-text>Exemplos: latinhas de cerveja, refrigerante e sucos, esquadrias e molduras de quadros.</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-list class="green lighten-5">
        <v-list-item>
          <v-list-item-icon>
            <v-img src="../assets/lixo-organico-marrom.png" class="imgLixo"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Orgânico</v-list-item-title>
            <v-list-item-action-text>Exemplos: flores, casca de banana, sanduíches, refrigerante, leite, manteiga, couro, cabelo, geleia, gordura, salada, shampoo, tecido, papel, fruta, açúcar, animais, insetos, mel, sementes.</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
    </v-list>    

    <v-list class="green lighten-5">
        <v-list-item>
          <v-list-item-icon>
            <v-img src="../assets/lixo-organico-verde.png" class="imgLixo"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Vidro</v-list-item-title>
            <v-list-item-action-text>Exemplos: rascos, garrafas, vidros de conserva.</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
    </v-list>

      <v-list class="green lighten-5">
        <v-list-item>
          <v-list-item-icon>
           <v-img src="../assets/lixo-organico-vermelho.png" class="imgLixo"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Plástico</v-list-item-title>
            <v-list-item-action-text>Exemplos: garrafas, embalagens de produtos de limpeza, potes de cremes e xampus, tubos e canos, brinquedos, sacos, sacolas e saquinhos de leite, papéis plastificados, metalizados ou parafinados, como embalagens de biscoito.</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
      </v-list>
   
 

  </v-main>
  

</template>

<script>
export default {};
</script>

<style scoped>

.imgLixo {
  max-width: 50px;
}

.bannerLixos {
  max-width: 500px;
  border: 1px solid #2e7d32;
  border-radius: 10px;
}

.v-list-item .v-list-item__title {
  color: #1b5e20;
  font-weight: bold;
}

</style>

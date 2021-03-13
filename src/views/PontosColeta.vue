<template>
  <div class="green lighten-5 text-center">
    <span class="white--text"></span>
    <v-container>
      <h1>Pontos de Coleta</h1>
      <v-list v-for="pontos of PontosColeta" :key="pontos.id" class="green lighten-5 text-center " >
        <v-list-item class="d-flex my-auto">
          <v-list-item-icon>
              <v-img :src="pontos.imagem" class="imgPontos" size="50"> </v-img>
          </v-list-item-icon>
            
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ pontos.nome }}</v-list-item-title>
            <v-list-item-action-text>
                {{pontos.endereco + " - " + pontos.cep}}
            </v-list-item-action-text>
             <div class="textCategoria">
                <span >Categorias: </span>
               
                <span v-for="categoria in pontos.categorias" :key="categoria" class="ml-2">
                    {{categoria + ';'}}   
                </span>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PontosColeta",
  data() {
    return {
      PontosColeta: [],
    };
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.PontosColeta = json;
      });
  },
};
</script>

<style scoped>
.imgPontos{
max-width: 50px;
border: 1px solid #2e7d32;
border-radius: 10px;   
display: flex;
align-items: center;
margin-top: 15px;
}
.textCategoria{
    display: flex;
    flex-flow: wrap;
    align-content: flex-start;
    justify-content:center;
    margin-top: 10px;

}

h1{
  color: #1b5e20;
  border-bottom: 3px solid #2e7d32;
}
</style>

<template>
    <div class="purple darken-2 text-center">
    <span class="white--text">Lorem ipsum</span>
    <v-container>
        <thead>
            <tr class="mt-3 text-justify">Pontos de Coleta</tr>
        </thead>
        <tbody>
            <tr v-for="pontos of PontosColeta" :key="pontos.id">
            <td>
                <v-avatar size="24">
                <img :src="pontos.imagem"/>
                </v-avatar>
                <span class="pl-2 text-right">{{ pontos.nome }}</span>
            </td>
            <td class="text-right">{{ pontos.endereco }}</td>
            </tr>
        </tbody>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'PontosColeta',

    data(){
        return {
            PontosColeta: [],
        }
    },

    created(){
        fetch('https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json').then(resposta=>resposta.json())
        .then(json=>{
            this.PontosColeta = json;
        })
    }
}
</script>

<style scoped>

</style>

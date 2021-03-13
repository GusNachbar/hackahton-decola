<template>
    <v-container>
        <h1>Pontos de Coleta</h1>
        <thead>
            <h1>Teste</h1>
        </thead>
        <tbody>
            <tr v-for="pontos of PontosColeta" :key="pontos.id">
            <td> {{ pontos.nome}} </td>
            <td>
                <v-avatar size="24">
                <img :src="pontos.imagem"/>
                </v-avatar>
                <span class="pl-2">{{ pontos.nome }}</span>
            </td>
            <td class="text-right">{{ pontos.endereco }}</td>
            </tr>
        </tbody>
    </v-container>
</template>

<script>
export default {
    name: 'PontosColeta',

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

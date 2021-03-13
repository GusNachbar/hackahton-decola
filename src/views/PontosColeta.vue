<template>
    <div class="purple darken-2 text-center">
    <span class="white--text">Lorem ipsum</span>
    <v-container>
         <h1>Pontos de Coleta</h1>
         <table v-for="pontos of PontosColeta" :key="pontos.id">
            <thead >
                <th>  
                    {{pontos.nome}}
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Materiais que Coleta: </td>
                    <td v-for="categoria in pontos.categorias" :key="categoria" >
                        {{categoria}}
                    </td>
                </tr>
                <tr>
                    <td>Endereço</td>
                    <td class="text-right">{{ pontos.endereco }}</td>
                </tr>
                <td>
                    <v-avatar size="24">
                    <img :src="pontos.imagem"/>
                    </v-avatar>
                    <span class="pl-2">{{ pontos.categorias}}</span>
                </td>
                
                
            </tbody>
        </table>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'PontosColeta',
    data(){
        return{
            PontosColeta:[]
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

<template>
  <v-app>
    <v-main>
    <PontosColeta />
    
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import PontosColeta from './views/PontosColeta'

export default {
  name: 'App',
  components:{
    PontosColeta
  },
  data: () => ({
    //
  }),
};
</script>

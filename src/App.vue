<template>
  <v-app>
<<<<<<< HEAD
    <v-main>
    <PontosColeta />
    
    <router-view/>
    </v-main>
=======
    <AppTopBar/>
>>>>>>> 847c57934462c8d1015a17cf76cb1da0436b5150
  </v-app>
</template>


<script>
import AppTopBar from './components/shared/AppTopBar';

import PontosColeta from './views/PontosColeta'

export default {
<<<<<<< HEAD
  name: 'App',
  components:{
    PontosColeta
=======
  name: "App",
  components: {
    AppTopBar,
>>>>>>> 847c57934462c8d1015a17cf76cb1da0436b5150
  },
  data: () => ({
    //
  }),
};
</script>

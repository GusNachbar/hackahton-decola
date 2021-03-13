<template>
  <v-app>
    <AppTopBar/>
    <Inicio/>
  </v-app>
</template>


<script>
import AppTopBar from './components/shared/AppTopBar';
import Inicio from './components/Inicio'

export default {
  name: "App",
  components: {
    AppTopBar,
    Inicio
  },
  data: () => ({
    //
  }),
};
</script>

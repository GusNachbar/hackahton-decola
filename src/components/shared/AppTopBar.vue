<template>
  <div class="app-top-bar">
    <v-app-bar color="green lighten-3" app dark>
      <v-app-bar-nav-icon color="green darken-4" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="appTitulo">RECICLATHON</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer class="green lighten-4" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/pontosdeColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-delete-empty</v-icon>
              </v-list-item-icon>
              <v-list-item-title>PONTOS DE COLETA</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/saibamais">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-crosshairs-question</v-icon>
              </v-list-item-icon>
              <v-list-item-title>SAIBA MAIS</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
    
<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
.appTitulo{
  color:#1b5e20;
}
</style>






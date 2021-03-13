<template>
  <div class="app-top-bar">
    <v-app-bar app color="green lighten-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Vamos nos conscientizar?</v-toolbar-title>
    </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="green--text text--lighten-2"
          >
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>HOME</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-recycle</v-icon>
                </v-list-item-icon>
                <v-list-item-title>PONTOS DE COLETA</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/">
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
</style>






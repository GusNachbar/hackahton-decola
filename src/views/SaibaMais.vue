<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>
          mdi-star
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-list>
</template>

<script>
export default {};
</script>

<style scoped></style>

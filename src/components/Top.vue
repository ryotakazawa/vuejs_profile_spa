<template>
<v-app>
  <v-container>
    <v-layout
      v-if="$vuetify.breakpoint.xs"
      text-center
      row
      wrap
      >
      <v-flex >
        <v-img
          :src="require('../assets/topPage.png')"
          contain                    
          height="450"
        ></v-img>
      </v-flex>
      <v-flex>
        <h1 class="display-3 font-weight-bold">Ryo Takazawa</h1>
        <h4>-Could you employ me?-</h4>
      </v-flex>
    </v-layout>
    <v-layout
      v-else
      align-center
      row
      wrap
      >
      <v-flex xs3 >
      </v-flex>
      <v-flex xs3 class="pl-8">
        <h1 class="display-3 font-weight-bold">Ryo Takazawa</h1>
        <h4>-Could you employ me?-</h4>
      </v-flex>
      <v-flex xs5 class="pl-4">
        <v-img
          :src="require('../assets/topPage.png')"
          contain                    
          height="450"
        ></v-img>
      </v-flex>
      <v-flex xs2 > 
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>


<style scoped>
</style>
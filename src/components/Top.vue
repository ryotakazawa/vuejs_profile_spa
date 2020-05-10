<template>
<v-app>
  <v-container>
    <v-layout
      v-if="$vuetify.breakpoint.mdAndDown"
      text-center
      row
      wrap
      >
      <v-flex>
        <v-img
          :src="require('../assets/topPage.png')"
          contain                    
          height="450"
        ></v-img>
      </v-flex>
      <v-flex>
        <h1 data-aos="zoom-in">Ryo Takazawa</h1>
        <h3><vue-typer text="-Web developer-" :repeat='0' pre-type-delay='1000' type-delay='80' ></vue-typer></h3>
      </v-flex>
    </v-layout>
    <v-layout
      v-else
      align-center
      row
      wrap
      class="mt-3"
      >
      <v-flex xs3 >
      </v-flex>
      <v-flex xs2 class="ml-8" >
        <h1 class="display-3 font-weight-bold" data-aos="zoom-in-left" data-aos-duration="1000"><span style="color: #e80135;">R</span>yo Takazawa</h1>
        <h4 class="font-italic font-weight-bold"><vue-typer text="-Could you employ me?-" :repeat='0' pre-type-delay='1500' ></vue-typer></h4>
        
      </v-flex>
      <v-flex xs6 class="ml-8">
        <v-img
          :src="require('../assets/topPage.png')"
          contain                    
          height="465"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        ></v-img>
      </v-flex>
      <v-flex xs1>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  data: () => ({
    //
  }),
  components: {
    VueTyper
  },
};
</script>


<style scoped>
</style>
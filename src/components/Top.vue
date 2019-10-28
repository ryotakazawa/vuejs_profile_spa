<template>
  <v-container>
    <v-layout
      
      align-center
      row
      wrap
      >
      <v-flex xs3 >
        
      </v-flex>
      <v-flex xs2 >
        <h1 class="display-3 font-weight-bold pl-8">Make<br/>Better<br/>Tommorow<br/></h1>
      </v-flex>
      <v-flex xs6 class="pl-4">
        <v-img
          :src="require('../assets/topPage.png')"
          contain                    
          height="500"
        ></v-img>
      </v-flex>
      <v-flex xs2 >
        
      </v-flex>
    </v-layout>
  </v-container>
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
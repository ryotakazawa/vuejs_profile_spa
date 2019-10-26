<template>
  <v-app id="inspire">
    <v-container>
      <v-layout justify-center>
        <v-card-title class="font-weight-bold">
          <h1 data-aos="fade-up">{{ userName }}</h1>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  props: ['userName'],
  data: () => ({
    offset: 0,
      top: 0,
  }),
};
</script>

<template>
  <v-container>
    <v-layout justify-center>
      <v-card-title class="font-weight-bold">
        <h1>{{ userName }}</h1>
      </v-card-title>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: ['userName'],
  data: () => ({
    //
  }),
};
</script>

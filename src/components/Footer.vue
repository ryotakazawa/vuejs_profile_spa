<template>
    <v-footer
        absolute
        padless
        color="transparent"
    >
        <v-card
        class="flex"
        flat
        tile
        color="transparent"
        >
        <v-card-text class="text-center">
            {{ new Date().getFullYear() }} — <strong>Ryo Takazawa</strong>
        </v-card-text>
        </v-card>
    </v-footer>
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
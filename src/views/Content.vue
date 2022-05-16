/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container fluid class="content" height="100%">
    <div class="text_first text-h5 font-weight-black ma-5 text-center">
      BookContent
    </div>
    <v-card style="margin: auto" width="70%" min-height="700">
      {{ todos }}
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style></style>

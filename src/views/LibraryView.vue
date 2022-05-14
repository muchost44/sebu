/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container fluid>
    <v-row>
      <v-container fluid>
        <div class="text_first text-h5 font-weight-black ma-5 text-center">
          My Library
        </div>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <div></div>
        <v-row v-for="row in 12 / 4" :key="row">
          <v-col v-for="col in 4" :key="col">
            <v-card height="225" width="150" color="sixth">
              {{ col + (row * 4 - 1) }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LibraryView",
};
</script>

<style></style>

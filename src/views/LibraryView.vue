/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container fluid class="pb-7">
    <v-row>
      <v-container fluid>
        <div class="text_first text-h5 font-weight-black ma-5 text-center">
          My Library
        </div>
      </v-container>
    </v-row>
    <v-row>
      div
      <v-container class="d-flex flex-wrap justify-space-between">
        <v-card v-for="book in library" :key="book" height="225" color="sixth">
          <router-link
            class="router-link"
            :to="'/detail/' + book.id"
            style="color: white"
          >
            <v-img height="225" width="150" :src="book.photo"></v-img>
          </router-link>
        </v-card>
        <!-- {{ library }} -->

        <!-- <v-row v-for="row in books / 4" :key="row">
          <v-col v-for="col in 4" :key="col">
            <v-card height="225" width="150" color="sixth">
              {{ (row - 1) * 4 + 1 }}
              <v-img :src="books[(row - 1) * 4 + 1].photo"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "LibraryView",
  data() {
    return {
      offset: 0,
    };
  },
  apollo: {
    library: {
      query() {
        return gql`
          query MyQuery($limit: Int!, $offset: Int!) {
            library: books(limit: $limit, offset: $offset) {
              id
              title
              photo
            }
          }
        `;
      },
      variables: {
        limit: 12,
        offset: 0,
      },
    },
  },
};
</script>

<style></style>

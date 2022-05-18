/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container fluid class="content" height="100%">
    <div class="text_first text-h5 font-weight-black ma-5 text-center">
      {{ book.title }}
    </div>
    <v-card style="margin: auto" width="70%" min-height="700">
      {{ book.content }}
    </v-card>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Content",
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  apollo: {
    book: {
      query() {
        return gql`
          query MyQuery($id: Int!) {
            book: books_by_pk(id: $id) {
              id
              isbn
              language
              photo
              title
              writer
              content
            }
          }
        `;
      },
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
</script>

<style></style>

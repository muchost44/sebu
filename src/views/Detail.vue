/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container class="my-6" fill-height fluid>
    <v-row>
      <v-col cols="4">
        <div class="d-flex justify-center">
          <v-card width="250">
            <v-img :src="detail_book.photo"></v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="8">
        <v-container>
          <v-row no-gutters justify="center">
            <v-col cols="2"> </v-col>
            <v-col cols="6">
              <div
                class="text_first text-h5 font-weight-black ma-5 text-center"
              >
                {{ detail_book.title }}
              </div>
            </v-col>
            <v-col cols="4"></v-col>
          </v-row>
          <!-- 
              language
              publication_year -->
          <v-row no-gutters justify="center" class="subtitle-2">
            <v-col cols="2"> ISBN </v-col>
            <v-col cols="4"> : {{ detail_book.isbn }}</v-col>
          </v-row>
          <v-row no-gutters justify="center" class="subtitle-2">
            <v-col cols="2"> Writer </v-col>
            <v-col cols="4"> : {{ detail_book.writer }} </v-col>
          </v-row>
          <v-row no-gutters justify="center" class="subtitle-2">
            <v-col cols="2"> Language </v-col>
            <v-col cols="4"> : {{ detail_book.language }} </v-col>
          </v-row>
          <v-row no-gutters justify="center" class="subtitle-2">
            <v-col cols="2"> Publisher Year </v-col>
            <v-col cols="4"> : {{ detail_book.publication_year }} </v-col>
          </v-row>
          <v-row no-gutters justify="center" class="subtitle-2">
            <v-col cols="2"> Publisher </v-col>
            <v-col cols="4"> : {{ detail_book.publisher }} </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card
                height="300"
                width="600"
                color="fifth"
                class="pa-8 body-1"
              >
                {{ detail_book.description }}
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters class="subtitle-2">
            <!-- <div style="width: 600px" class="d-flex justify-center mt-3">
              <v-btn color="primary" elevation="2" large>Buy This Book</v-btn>
            </div> -->
            <div style="width: 600px" class="d-flex justify-center mt-3">
              <v-btn color="primary" elevation="2" large>Lets Read !</v-btn>
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Detail",
  data: () => ({
    //
    // id: 5,
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  apollo: {
    detail_book: {
      query() {
        return gql`
          query MyQuery($id: Int!) {
            detail_book: books_by_pk(id: $id) {
              description
              id
              isbn
              language
              photo
              publication_year
              publisher
              title
              writer
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

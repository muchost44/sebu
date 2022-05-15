/* eslint-disable prettier/prettier */ /* eslint-disable */
<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col cols="4">
        <div class="d-flex justify-center">
          <v-card height="225" width="150" color="sixth"> </v-card>
        </div>
      </v-col>
      <v-col cols="8">
        <div class="text_first text-h5 font-weight-black ma-5 text-center">
          Judul
        </div>
        <v-container>
          <v-row no-gutters v-for="item in 4" :key="item">
            <v-col cols="4"> Writer </v-col>
            <v-col cols="6"> : Tere Liye </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card height="300" width="600" color="fifth" class="pa-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem accusantium quisquam maxime at, veritatis
                nesciunt quae nulla obcaecati numquam et repellat omnis! Labore
                doloremque, dolorum animi neque exercitationem ipsum est numquam
                eaque eius corrupti accusamus perferendis ab corporis
                repellendus, reiciendis nobis, nemo doloribus quo non porro
                soluta? Architecto asperiores laborum unde itaque. Delectus,
                soluta reiciendis repellendus, nesciunt accusamus quidem ipsam
                corporis nobis beatae facere deleniti nemo porro placeat cum
                aliquam eos officia similique culpa voluptatem!
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style></style>

<template>
  <v-app>
    <v-app-bar color="third" app>
      <!-- <div class="small_box" @click="drawer = !drawer">
        <v-app-bar-nav-icon text color="third"></v-app-bar-nav-icon>
      </div> -->
      <v-btn @click="drawer = !drawer" tile icon large class="ml-1 mr-4"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRYhe2ZQWsTQRSAv9ndbjFJE1OltbVV1NL2oBdFBZF60pt46tGLFBEv/gX/gsceFBXxLB4E24OH6sGKCCqIKB4qpqa2DU02kW5293lI4snZJKWbTcDvuDMw38y+fW9mR1FHRFLATeAKcBhIEC8ukAMWgTtKqRyAAhCRaeAZcCQ2vXCKwKxSakHVV/Y93SvbwAFOGdTCoNtlAVLAbSUir4Bzcdu0iGMA43FbtEHKAKy4LdrBiFugXUJX1xdh/ucai4UtHN+PVCRlmlzMZrgxMhy6iqHCc1++cT//a5fV9DzZ2ORtqczdyaPaPtrJrGxvd1S2wb38Gt+3XW27VjjnViMRaoUf7g6Ejyf2kLU6n0AGLYsTCf02RiucMk0eTB0jY5mRiP2LjGXycGqCpKn/7JSI5IARXYf1qsdyyaEcRJslkobJ2YEU+/rC32pT4W6j5wpHzwm3lAYCwBOJVkSpllYvVLjs+7xxyuTdKgHRChsohu0+TqeSJE19ZtJOSoClosOq60YuCxAgrLouS8VS6Gha4S3fp+B1vtoVPI8tz9O268Mm4pgNQymlbdMKZywrltKcNS3SO4lhBcxk0oz02RjoZ7xbGChGbZuZvenQ0VqqdD2T1hoYgB0SV52k5ypdzwk3DYn1qsfrkkMl4u1lor693N9kexna+nSjwNXPXylGfGJukDZNHk1PcHkwq+2jzRKO73No+R2FkKoTBYOWxcqZk9pThzaGP1Z+d1wWYNPz+FCpaNu1wgdtOxKhVhgLGVsrPN5vc214KBKhMOYODDHWrxcOrXQBML+aZ6EDv6oGTJNL2QzXm/yq+n8IjRqD2pvvGQxgLW6JNqga1O7BeoUXSkRGgU9AOm6bJgTABaN+wzhL7R6sWwmAW0qpl3+fiMikiDwWEUe6B1dEnovI+YbnH7E/dKswwngnAAAAAElFTkSuQmCC"
      /></v-btn>
      <v-toolbar-title
        text
        class="text_white pt-4"
        style="
          font-family: 'Baloo Tammudu 2', cursive;
          font-weight: 800;
          font-size: 36px;
        "
      >
        Sebu
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="4" style="display: flex; align-item: center">
        <v-text-field
          label="Search"
          solo
          dense
          color="fifth"
          hide-details
        ></v-text-field>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="third" dark temporary>
      <v-list-item>
        <v-list-item-content>
          <v-toolbar-title
            text
            class="text_white pt-4 text-center"
            style="
              font-family: 'Baloo Tammudu 2', cursive;
              font-weight: 800;
              font-size: 36px;
            "
          >
            Sebu
          </v-toolbar-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              <router-link class="router-link" to="/" style="color: white">
                Home
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              <router-link
                class="router-link"
                to="/library"
                style="color: white"
              >
                Library
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              <router-link
                class="router-link"
                to="/wishlist"
                style="color: white"
              >
                Wishlist
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-card color="first" height="100px" width="100%">
      <!-- <div class="text_first text-h5 font-weight-black ma-5">
              Footer
            </div> -->
    </v-card>
  </v-app>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
  apollo: {
    todos: {
      query() {
        return gql`
          {
            todos: todo {
              id
              label
            }
          }
        `;
      },
      subscribeToMore: {
        document: gql`
          subscription MySubscription {
            todo {
              id
              label
            }
          }
        `,
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          // Here, return the new result from the previous with the new data
          console.log("~ todos ~ Prev ", previousResult);
          console.log("Subscribtion Data ", subscriptionData);
          return {
            todos: subscriptionData.data.todo,
          };
        },
      },
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.v-main {
  margin: 0px;
  padding: 0px;
}
.content {
  background-color: #daf8e3;
}
.text_first {
  color: #005582;
}
.text_fifth {
  color: #daf8e3;
}
.text_white {
  color: #ffffff;
}
.small_box {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  margin-right: 30px;
}

.router-link {
  text-decoration: none;
  color: black;
}
</style>

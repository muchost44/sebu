import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://vue-alta-9.hasura.app/v1/graphql",
});

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: "wss://vue-alta-9.hasura.app/v1/graphql",
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// new Vue({
//   router,
//   store,
//   vuetify,
//   apolloProvider,
//   render: (h) => h(App),
// }).$mount("#app");
new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
});

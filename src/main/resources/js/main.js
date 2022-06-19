import Vue from 'vue'
import Vuetify from 'vuetify'
import '@babel/polyfill'
import 'api/resource'
import router from 'router/router'
import App from 'pages/App.vue'
import store from 'store/store'
import { connect } from "./util/ws"
import 'vuetify/dist/vuetify.min.css'
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    Vue,
    dsn: "https://d5171d63d5994912a1accc711cbea892@o1278824.ingest.sentry.io/6478761",
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ["localhost", "my-site-url.com", /^\//],
        }),
    ],
    tracesSampleRate: 1.0,
});

Sentry.configureScope(scope =>
    scope.setUser({
        id: profile && profile.id,
        username: profile && profile.name
    })
)

if (profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    router,
    vuetify: new Vuetify(),
    render: a => a(App)
})
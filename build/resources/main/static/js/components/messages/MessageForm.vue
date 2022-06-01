<template>
  <v-layout row>
    <v-text-field
        label="New message"
        placeholder="Write something"
        v-model="text"
        @keyup.enter="save"
    />
    <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="#474747"
        class="ma-2 white--text"
        v-on:click="save"
        @click="loader = 'loading3'"
    >
      Save
    </v-btn>
  </v-layout>
</template>

<script>
  import { mapActions } from "vuex"

export default {
  props: ['messageAttr'],
  data() {
    return {
      loader: null,
      loading3: false,
      text: '',
      id: ''
    }
  },
  watch: {
    messageAttr(newVal, oldVal) {
      this.text = newVal.text
      this.id = newVal.id
    },
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1200)

      this.loader = null
    }
  },
  methods: {
    ...mapActions(['addMessageAction', 'updateMessageAction']),
    save() {
      const message = {
        id: this.id,
        text: this.text
      }
      if (this.id) {
        this.updateMessageAction(message)
      } else {
        this.addMessageAction(message)
      }
      this.text = ''
      this.id = ''
    }
  }
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<!--
<template>
    <v-layout row class="mt-3">
        <v-text-field
            label="New message"
            placeholder="Write something"
            v-model="text"
        />
      <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="#474747"
          class="ma-2 white--text"
          v-on:click="save"
          @click="loader = 'loading3'"
      >
        Save
      </v-btn>
    </v-layout>
</template>
-->

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
          @click="loader = 'loading3'"
          v-on:click="save"
      >
        Save
      </v-btn>
    </v-layout>
</template>

<script>
    import messagesApi from 'api/messages';

    export default {
        props: ['messages', 'messageAttr'],
        data() {
            return {
                text: '',
                id: '',
                loader: null,
                loading3: false
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

            setTimeout(() => (this[l] = false), 1000)

            this.loader = null
          }
        },
        methods: {
            save() {
              const message = {
                id: this.id,
                text: this.text
              }

              if (this.id) {
                messagesApi.update(message).then(result =>
                    result.json().then(data => {
                      const index = this.messages.findIndex(item => item.id === data.id)
                      this.messages.splice(index, 1, data)
                    })
                )
              } else {
                messagesApi.add(message).then(result =>
                    result.json().then(data => {
                      const index = this.messages.findIndex(item => item.id === data.id)

                      if (index > -1) {
                        this.messages.splice(index, 1, data)
                      } else {
                        this.messages.push(data)
                      }
                    })
                )
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
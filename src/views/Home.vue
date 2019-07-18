<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <p class="display-3 font-weight-thin">
          Discover the wonderful world of the Universal Language
        </p>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Button from '../components/feedback/Button'
import Feedback from '../components/feedback/Feedback'

export default {
  name: 'Home',
  components: {
    Button,
    Feedback
  },
  data () {
    return {
      buttons: [
        '100100',
        '100010',
        '100001',
        '010100',
        '010010',
        '010001',
        '001100',
        '001010',
        '001001',
      ]
    }
  },
  methods: {
    buttonCompose(first, second) {
      return first.substr(0, 3) + second.substr(3, 3);
    }
  }
}
</script>

<style>
  .button-table td {
    padding: 5px;
  }
</style>

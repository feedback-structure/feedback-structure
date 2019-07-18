<template>
  <v-content>
    <v-container>
      <h1>Feedback Examples</h1>
      <Feedback value="123456" width="200" />
      <Feedback value="324615" width="200" />
      <Feedback value="634512" width="200" />
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
    }
  },
  methods: {

  }
}
</script>

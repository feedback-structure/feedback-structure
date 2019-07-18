<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Feedback Structure</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <h1>Buttons</h1>
      <table class="button-table">
        <tr>
          <td></td>
          <td v-for="(col, coli) in buttons" :key="coli">
            <Button :type="col" color="yellow" />
          </td>
        </tr>
        <tr v-for="(row, rowi) in buttons" :key="rowi">
          <td>
            <Button :type="row" color="yellow" />
          </td>
          <td v-for="(col, coli) in buttons" :key="coli">
            <Button :type="buttonCompose(row, col)" />
          </td>
        </tr>
      </table>
      <br>
      <h1>Feedback Examples</h1>
      <Feedback value="123456" />
    </v-content>
  </v-app>
</template>

<script>
import Button from './components/feedback/Button'
import Feedback from './components/feedback/Feedback'

export default {
  name: 'App',
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
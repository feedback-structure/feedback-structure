<template>
  <v-content>
    <v-container>
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

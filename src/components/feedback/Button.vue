<template>
  <svg :width="width" :height="height">
    <!-- top row -->
    <circle :cx="1.7 * radius" :cy="1.6 * radius" :r="radius" :fill="fills[type[0]]" />
    <circle :cx="4.5 * radius" :cy="1.6 * radius" :r="radius" :fill="fills[type[1]]" />
    <circle :cx="7.3 * radius" :cy="1.6 * radius" :r="radius" :fill="fills[type[2]]" />
    <!-- bottom row -->
    <circle :cx="1.7 * radius" :cy="4.4 * radius" :r="radius" :fill="fills[type[3]]" />
    <circle :cx="4.5 * radius" :cy="4.4 * radius" :r="radius" :fill="fills[type[4]]" />
    <circle :cx="7.3 * radius" :cy="4.4 * radius" :r="radius" :fill="fills[type[5]]" />
  </svg>
</template>

<script>
  export default {
    data: () => ({
      colors: {
        red: "#EE6352",
        blue: "#1098F7",
        green: "#297373",
        yellow: "#FFAD05"
      }
    }),
    props: {
      type: {
        type: String,
        default: "000000"
      },
      color: {
        type: String,
        default: 'red'
      },
      width: {
        default: 72
      }
    },
    computed: {
      radius: function () {
        return this.width / 9;
      },
      height: function () {
        return this.width * 6 / 9;
      },
      fills: function () {
        let primary = (this.color == 'yellow') ? this.colors.yellow : this.colors.red;
        let secondary = (this.color == 'yellow') ? this.colors.green : this.colors.blue;
        return {
          "0": primary,
          "1": secondary
        }
      }
    }
  }
</script>

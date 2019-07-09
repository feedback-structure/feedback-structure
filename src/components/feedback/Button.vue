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
        blue: "#1098F7"
      }
    }),
    props: {
      type: {
        type: String,
        default: "000000"
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
        return {
          "0": this.colors.red,
          "1": this.colors.blue
        }
      }
    }
  }
</script>

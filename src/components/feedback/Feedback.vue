<template>
  <svg :width="width" :height="height">
    <defs>
      <g id="arrow-left">
        <line :x1="-0.1 * radius" :y1="0" :x2="0.1 * radius" :y2="-0.1 * radius" :stroke="colors.red" />
        <line :x1="-0.1 * radius" :y1="0" :x2="0.1 * radius" :y2="0.1 * radius" :stroke="colors.red" />
      </g>
      <g id="arrow-right">
        <line :x1="0.1 * radius" :y1="0" :x2="-0.1 * radius" :y2="-0.1 * radius" :stroke="colors.red" />
        <line :x1="0.1 * radius" :y1="0" :x2="-0.1 * radius" :y2="0.1 * radius" :stroke="colors.red" />
      </g>
    </defs>

    <!-- long diagonals -->
    <line :x1="coords.x1" :y1="coords.y1" :x2="coords.x3" :y2="coords.y2" :stroke="colors.grey" />
    <line :x1="coords.x1" :y1="coords.y2" :x2="coords.x3" :y2="coords.y1" :stroke="colors.grey" />

    <!-- short diagonals -->
    <line :x1="coords.x1" :y1="coords.y1" :x2="coords.x2" :y2="coords.y2" :stroke="colors.grey" />
    <line :x1="coords.x2" :y1="coords.y1" :x2="coords.x3" :y2="coords.y2" :stroke="colors.grey" />

    <line :x1="coords.x1" :y1="coords.y2" :x2="coords.x2" :y2="coords.y1" :stroke="colors.grey" />
    <line :x1="coords.x2" :y1="coords.y2" :x2="coords.x3" :y2="coords.y1" :stroke="colors.grey" />

    <!-- function ids -->
    <text :x="coords.x1" :y="coords.y1" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="baseline">1</text>
    <text :x="coords.x2" :y="coords.y1" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="baseline">2</text>
    <text :x="coords.x3" :y="coords.y1" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="baseline">3</text>

    <text :x="coords.x1" :y="coords.y2" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="hanging">4</text>
    <text :x="coords.x2" :y="coords.y2" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="hanging">5</text>
    <text :x="coords.x3" :y="coords.y2" :font-size="0.8 * radius" text-anchor="middle" dominant-baseline="hanging">6</text>

    <!-- arcs -->
    <path :d="arcs['0']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['1']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['2']" :stroke="colors.red" fill="transparent" />

    <path :d="arcs['3']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['4']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['5']" :stroke="colors.red" fill="transparent" />

    <!-- arrows -->
    <use xlink:href="#arrow-left" :x="(coords.x1 + coords.x2) / 2" :y="1.005 * radius" />
    <use xlink:href="#arrow-left" :x="(coords.x2 + coords.x3) / 2" :y="1.005 * radius" />
    <use xlink:href="#arrow-right" :x="(coords.x1 + coords.x3) / 2" :y="0.35 * radius" />

    <use xlink:href="#arrow-left" :x="(coords.x1 + coords.x2) / 2" :y="4.995 * radius" />
    <use xlink:href="#arrow-left" :x="(coords.x2 + coords.x3) / 2" :y="4.995 * radius" />
    <use xlink:href="#arrow-right" :x="(coords.x1 + coords.x3) / 2" :y="5.65 * radius" />

    <rect width="100%" height="100%" stroke="black" fill="transparent" />
  </svg>
</template>

<script>
  export default {
    data: () => ({
      colors: {
        grey: "#666666",
        red: "#aa0000"
      }
    }),
    props: {
      value: {
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
      },
      arcs: function () {
        let r = this.radius;
        let c = this.coords;
        let arcs = {
          // top row
          "0": "M " + (c.x1 + 0.3 * r) + " " + (c.y1 - 0.3 * r) + " Q " + (c.x1 + c.x2) / 2 + " " + (0.7 * r) + " " + (c.x2 - 0.3 * r) + " " + (c.y1 - 0.3 * r),
          "1": "M " + (c.x2 + 0.3 * r) + " " + (c.y1 - 0.3 * r) + " Q " + (c.x2 + c.x3) / 2 + " " + (0.7 * r) + " " + (c.x3 - 0.3 * r) + " " + (c.y1 - 0.3 * r),
          "2": "M " + (c.x1 + 0.3 * r) + " " + (c.y1 - 0.4 * r) + " Q " + (c.x1 + c.x3) / 2 + " " + (- 0.5 * r) + " " + (c.x3 - 0.3 * r) + " " + (c.y1 - 0.4 * r),

          // bottom row
          "3": "M " + (c.x1 + 0.3 * r) + " " + (c.y2 + 0.3 * r) + " Q " + (c.x1 + c.x2) / 2 + " " + (5.3 * r) + " " + (c.x2 - 0.3 * r) + " " + (c.y2 + 0.3 * r),
          "4": "M " + (c.x2 + 0.3 * r) + " " + (c.y2 + 0.3 * r) + " Q " + (c.x2 + c.x3) / 2 + " " + (5.3 * r) + " " + (c.x3 - 0.3 * r) + " " + (c.y2 + 0.3 * r),
          "5": "M " + (c.x1 + 0.3 * r) + " " + (c.y2 + 0.4 * r) + " Q " + (c.x1 + c.x3) / 2 + " " + (6.5 * r) + " " + (c.x3 - 0.3 * r) + " " + (c.y2 + 0.4 * r),
        }

        return arcs;
      },
      coords: function () {
        return {
          "x1": 0.5 * this.radius,
          "x2": 4.5 * this.radius,
          "x3": 8.5 * this.radius,
          "y1": 1.6 * this.radius,
          "y2": 4.4 * this.radius,
        }
      }
    }
  }
</script>

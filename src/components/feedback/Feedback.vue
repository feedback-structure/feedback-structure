<template>
  <svg :width="width" :height="height">
    <defs>
      <g :id="defs.arrow_left">
        <line :x1="-0.3 * radius" :y1="0" :x2="0.3 * radius" :y2="-0.3 * radius" :stroke="colors.red" />
        <line :x1="-0.3 * radius" :y1="0" :x2="0.3 * radius" :y2="0.3 * radius" :stroke="colors.red" />
      </g>
      <g :id="defs.arrow_right">
        <line :x1="0.3 * radius" :y1="0" :x2="-0.3 * radius" :y2="-0.3 * radius" :stroke="colors.red" />
        <line :x1="0.3 * radius" :y1="0" :x2="-0.3 * radius" :y2="0.3 * radius" :stroke="colors.red" />
      </g>
    </defs>

    <!-- long diagonals -->
    <line :x1="coords.x1 + 0.5 * radius" :y1="coords.y1" :x2="coords.x3 - 0.5 * radius" :y2="coords.y2" :stroke="colors.grey" />
    <line :x1="coords.x1 + 0.5 * radius" :y1="coords.y2" :x2="coords.x3 - 0.5 * radius" :y2="coords.y1" :stroke="colors.grey" />

    <!-- short diagonals -->
    <line :x1="coords.x1 + 0.5 * radius" :y1="coords.y1" :x2="coords.x2" :y2="coords.y2 - 0.3 * radius" :stroke="colors.grey" />
    <line :x1="coords.x2" :y1="coords.y1 + 0.3 * radius" :x2="coords.x3 - 0.5 * radius" :y2="coords.y2" :stroke="colors.grey" />

    <line :x1="coords.x1 + 0.5 * radius" :y1="coords.y2" :x2="coords.x2" :y2="coords.y1 + 0.3 * radius" :stroke="colors.grey" />
    <line :x1="coords.x2" :y1="coords.y2 - 0.3 * radius" :x2="coords.x3 - 0.5 * radius" :y2="coords.y1" :stroke="colors.grey" />

    <!-- function ids -->
    <text :x="coords.x1 + 0.3 * radius" :y="coords.y1" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="baseline">1</text>
    <text :x="coords.x2" :y="coords.y1" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="baseline">2</text>
    <text :x="coords.x3 - 0.3 * radius" :y="coords.y1" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="baseline">3</text>

    <text :x="coords.x1 + 0.3 * radius" :y="coords.y2" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="hanging">4</text>
    <text :x="coords.x2" :y="coords.y2" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="hanging">5</text>
    <text :x="coords.x3 - 0.3 * radius" :y="coords.y2" :font-size="1.4 * radius" text-anchor="middle" dominant-baseline="hanging">6</text>

    <!-- arcs -->
    <path :d="arcs['0']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['1']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['2']" :stroke="colors.red" fill="transparent" />

    <path :d="arcs['3']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['4']" :stroke="colors.red" fill="transparent" />
    <path :d="arcs['5']" :stroke="colors.red" fill="transparent" />

    <!-- arrows -->
    <use :xlink:href="'#' + defs.arrow_left" :x="(coords.x1 + coords.x2) / 2" :y="1.35 * radius" />
    <use :xlink:href="'#' + defs.arrow_left" :x="(coords.x2 + coords.x3) / 2" :y="1.35 * radius" />
    <use :xlink:href="'#' + defs.arrow_right" :x="(coords.x1 + coords.x3) / 2" :y="0.55 * radius" />

    <use :xlink:href="'#' + defs.arrow_left" :x="(coords.x1 + coords.x2) / 2" :y="4.65 * radius" />
    <use :xlink:href="'#' + defs.arrow_left" :x="(coords.x2 + coords.x3) / 2" :y="4.65 * radius" />
    <use :xlink:href="'#' + defs.arrow_right" :x="(coords.x1 + coords.x3) / 2" :y="5.45 * radius" />

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
        console.log(this.width / 9);
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
          "0": "M " + (c.x1 + 0.6 * r) + " " + (c.y1 - 0.3 * r) + " Q " + (c.x1 + c.x2) / 2 + " " + (1.0 * r) + " " + (c.x2 - 0.6 * r) + " " + (c.y1 - 0.3 * r),
          "1": "M " + (c.x2 + 0.6 * r) + " " + (c.y1 - 0.3 * r) + " Q " + (c.x2 + c.x3) / 2 + " " + (1.0 * r) + " " + (c.x3 - 0.6 * r) + " " + (c.y1 - 0.3 * r),
          "2": "M " + (c.x1 + 0.6 * r) + " " + (c.y1 - 0.6 * r) + " Q " + (c.x1 + c.x3) / 2 + " " + (- 0.3 * r) + " " + (c.x3 - 0.6 * r) + " " + (c.y1 - 0.6 * r),

          // bottom row
          "3": "M " + (c.x1 + 0.6 * r) + " " + (c.y2 + 0.3 * r) + " Q " + (c.x1 + c.x2) / 2 + " " + (5.0 * r) + " " + (c.x2 - 0.6 * r) + " " + (c.y2 + 0.3 * r),
          "4": "M " + (c.x2 + 0.6 * r) + " " + (c.y2 + 0.3 * r) + " Q " + (c.x2 + c.x3) / 2 + " " + (5.0 * r) + " " + (c.x3 - 0.6 * r) + " " + (c.y2 + 0.3 * r),
          "5": "M " + (c.x1 + 0.6 * r) + " " + (c.y2 + 0.6 * r) + " Q " + (c.x1 + c.x3) / 2 + " " + (6.3 * r) + " " + (c.x3 - 0.6 * r) + " " + (c.y2 + 0.6 * r),
        }

        return arcs;
      },
      coords: function () {
        return {
          "x1": 0.5 * this.radius,
          "x2": 4.5 * this.radius,
          "x3": 8.5 * this.radius,
          "y1": 2 * this.radius,
          "y2": 4 * this.radius,
        }
      },
      defs: function () {
        let unique = Math.random().toString(36).substr(2, 9);
        return {
          "arrow_left": "arrow_left_" + unique,
          "arrow_right": "arrow_right_" + unique
        }
      }
    }
  }
</script>

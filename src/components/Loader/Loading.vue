<template>
  <div class="loading">
    <svg class="loading-spinner">
      <circle
        :cx="circlePositions[index] && circlePositions[index].x"
        :cy="circlePositions[index] && circlePositions[index].y"
        :r="item.radius"
        :fill="item.color"
        v-for="(item, index) in circles"
        :key="index"/>
    </svg>
  </div>
</template>

<script>
const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 30;

function positionOnCircle(radius, angle, center) {
  return {
    x: center.x + (radius * Math.cos(toRadians(angle))),
    y: center.y + (radius * Math.sin(toRadians(angle)))
  };
};

function toRadians(angle) {
  return angle * Math.PI / 180;
};

function calculatePositions(component) {
  let angleIncrement = 360 / component.circles.length;
  let positions = {};
  component.circles.forEach((circle, index) => {
    positions[index] = positionOnCircle(
      RADIUS,
      angleIncrement * index,
      {x: CENTER_X, y: CENTER_Y}
    )
  });
  return positions;
}

export default {
  data() {
    return {
      circles: [
        {color: '#5293ee', radius: 0},
        {color: '#a2a8d3 ', radius: 0},
        {color: '#38598b', radius: 0},
        {color: '#79c2d0', radius: 0},
        {color: '#5585b5', radius: 0},
        {color: '#eaf6f6', radius: 0},
        {color: '#142d4c', radius: 0},
        {color: '#5dacbd', radius: 0},
        {color: '#007cb9', radius: 0},
      ],
      counter: 0,
      interval: null
    }
  },
  computed: {
    circlePositions: calculatePositions
  },
  created() {
    this.interval = setInterval(() => {
      this.counter++;
      this.circles = this.circles.map((item, index) => ({
        ...item,
        radius: (this.counter + index) % 8
      }));
    }, 70);
  },
  destroyed() {
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss" scoped>

.loading{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-spinner {
    width: 100px;
    height: 100px;
  }

}
</style>

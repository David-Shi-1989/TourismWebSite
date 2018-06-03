<template>
  <span :title="getScore + '分'">
    <i class="fa fa-star" v-for="fullStar in parseInt(getScore)" :key="'fullStar' + fullStar"></i>
    <i v-if="(getScore - (parseInt(getScore))) > 0" class="fa fa-star-half-empty"></i>
    <i v-for="blankStar in (5 - Math.ceil(getScore))" :key="'blankStar' + blankStar" class="fa fa-star-o"></i>
    <slot name="mySlot"></slot>
  </span>
</template>

<script>
export default {
  data () {
    return {
      score: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    fontSize: {
      type: Number,
      default: 12
    },
    color: {
      type: String,
      default: '#e7c70d'
    }
  },
  computed: {
    getScore () {
      return this.value
    }
  }
}
</script>

<style scoped>
i.fa{
  width:11px;
  color: rgb(231, 199, 13);
}
</style>

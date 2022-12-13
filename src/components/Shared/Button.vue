<script>
  export default {
    props : {
      text : {
        type : String,
        required : true
      },
      handler : {
        type : Function,
        required : false,
        default : () => {}
      },
      backgroundColor : {
        type : String,
        required : false,
        default : "#18191A"
      },
      size : {
        type : String,
        required : false,
        default : "15px 32px"
      }

    },
  }
</script>

<template>
    <button class="btn" type="button" @click="handler" :style='{"backgroundColor" : backgroundColor , "padding" : size}'> {{text}} </button>
</template>


<style lang="scss" scoped>
  .btn{
    border: 1px solid #212121;
    border-radius: 0.8rem;
    color: white;
    margin-right: 1rem;
    text-align: center;
    cursor: pointer;
  }
</style>

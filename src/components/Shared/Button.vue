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
      },
      clickable : {
        type : Boolean,
        required : false,
        default : true,
      },
      isClicked : {
        type : Boolean,
        required : false,
        default : false,
      }
    },
    computed: {
      isClickable(){
        if(this.clickable){
          return "pointer"
        }
        return "not-allowed"
      },
      customBorder(){
        if(this.isClicked){
          return "1px solid #5293ee"
        }
        return "1px solid #212121"
      }
    }
  }
</script>

<template>
    <button class="btn"
    type="button"
    @click="handler"
    :style='{"backgroundColor" : backgroundColor , "padding" : size , "cursor" : isClickable , border : customBorder}'
    :disabled="!clickable"
    >
    {{text}}
     </button>
</template>


<style lang="scss" scoped>
  .btn{
    width: 100%;
    border-radius: 0.8rem;
    color: white;
    text-align: center;
    // cursor: pointer;
  }
</style>

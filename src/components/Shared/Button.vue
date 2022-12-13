<script>
  export default {
    props : {
      text : {
        type : String,
        required : true
      },
      handler : {
        type : Function,
        required : false
      },
      style : {
        type : Object,
        required : false,
        default : {
          backgroundColor : "#4CAF50",
          border : "none",
          color : "white",
          padding : "15px 32px",
          textAlign : "center",
          textDecoration : "none",
          display : "inline-block",
          fontSize : "16px",
          margin : "4px 2px",
          cursor : "pointer"
        }
      }
    },
  }
</script>

<template>
    <button @click="handler" :style="style" >{{text}}</button>
</template>


<style lang="scss" scoped>
</style>

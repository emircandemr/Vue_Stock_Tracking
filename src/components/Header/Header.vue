<script>
  import Button from "../Shared/Button.vue"

  export default {
    components :{
      Button
    },
    data() {
      return {
        buttonData : [
          {
            text : "Add Stock",
            handler : "addStock",
          },
          {
            text : "Refresh"
          }
        ]
      }
    }

  }
</script>

<template>
  <div class="header">
    <Button v-for="button in buttonData" :text="button.text" :handler="button.handler"></Button>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }


</style>

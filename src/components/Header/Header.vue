<script>
import Button from "../Shared/Button.vue"
import { filter24hrTicker } from "../../services/data.js"
  export default {
    components :{
      Button
    },
    data() {
      return {
        buttonData : [
          {
            text : "Add Stock",
            handler : this.modalChange
          },
          {
            text : "Refresh"
          }
        ]
      }
    },
    methods:{
      modalChange(){
        filter24hrTicker("ET")
        this.$store.commit('modalChangeStatu')
      }
    }


  }
</script>

<template>
  <div class="header">
    <Button v-for="button in buttonData" :text="button.text" :handler="button.handler" ></Button>
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

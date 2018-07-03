<style lang="less">
  .table-list{
    width:100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    table{
      width:100%;
      color: #4bf9fb;
      min-width: 500px;
      text-align: center;
      tr{
        margin:0 3px;
        background: url("../assets/image/table-border-line.png") no-repeat;
        background-size: 98% 2px;
        background-position: 50% 100%;
        td{
          padding:7px 0;
          &:nth-child(1){
            width:50px;
          }
        }
        &:hover{
          color:#fff;
        }
        &:nth-child(1){
          background:#12308d;
        }
      }

    }

  }
</style>
<template>
  <div class="table-list border-bg">
    <table>
      <tr v-for="items in tableData">
        <td v-for="item in items">{{item}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props:['tableData']
  }
</script>

<template>
  <div>
    <p>othello</p>
    <table border="9" cellspacing="0">
      <tr v-for="i in y" v-bind:key="i">
        <td v-for="j in x" v-bind:key="j" class="cell">
          <span v-if="table[i][j] == '黒'" class='black' >
          </span >
          <span v-if="table[i][j] == '白'" class="white">
          </span>
          <span v-if="table[i][j] == '黒置'" v-on:click="canput" class="Canput">
          </span>
          <span v-if="table[i][j] == '空白'" class="space" >
            <!-- {{ table[i][j] }} -->
          </span>
        </td>
      </tr>
    </table>
    <p>{{ message }}</p>
    <router-link to="/about"></router-link>
  </div>
</template>

<script>
const table_y = 8;
const table_x = 8;
const array_table = [['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','','']];
var msg = ''
export default {
  data () {
    return{
      y: table_y,
      x: table_x,
      table: array_table,
      message: msg
    }
  },
  created: function(){
    this.isinit();
    this.mytarn();
  },
    mounted: function(){
      this.canput();
      this.whetherCanPut();
    },
    methods: {
      isinit() {
        for(var i=0;i < array_table.length; i++ ){
          for(var j=0; j < array_table[i].length; j++){
            if ( ( i==4 && j ==4 ) || ( i==5 &&j==5 ) ){
              array_table[i][j] =  '黒'
            }else if( (i==4 && j == 5) || (i == 5 && j==4 )){
              array_table[i][j] =  '白'
            }else{
              array_table[i][j] =  "空白"
              // 置けるかどうか判別してarray_tableに入れとくか
            }
          }
        }
      },
      canput: function () {

      },
      whetherCanPut: function () {
        // 置ける位置かどうか判別
        return true
      },
      mytarn(){
      }
    }
}
</script>
<style lang="less">
.cell{
  height: 50px;
  width: 50px;
  padding: auto;
  background-color: aqua;
}
.black{
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: black;
  display: inline-block;
}
.white{
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: white;
  display: inline-block;
}
.space{
  border-radius: 50%;
}
.Canput{
  background-color:wheat;
  display: inline-block;
  /* height: 45px; */
  /* width: 45px; */
  border-radius: 50%;
}
</style>

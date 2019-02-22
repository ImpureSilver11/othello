<template>
  <div>
    <p>othello</p>
    <table border="9" cellspacing="0">
      <tr v-for="i in y" v-bind:key="i">
        <td v-for="j in x" v-bind:key="j" class="cell">
          <span v-if="table[i][j].color == '黒'" :class='table[i][j].class' >
            <!-- {{ j }}{{ i }} -->
          </span >
          <span v-else-if="table[i][j].color == '白'" :class='table[i][j].class'>
            <!-- {{ j }}{{ i }} -->
          </span>
          <button v-else-if="whetherCanPut(j, i, '黒') == true && table[i][j].color == ''" v-on:click="putStone(i,j)" :class="table[i][j].class">
            <!-- v-on:click="putStone(i,j)" -->
            <!-- クリックイベント追加 -->
            {{ table[i][j].color }}
          </button>
          <span v-else-if="whetherCanPut(j, i, '黒') == false && table[i][j].color == ''" :class='table[i][j].class' >
            {{ j }}{{ i }}
          </span>
        </td>
      </tr>
    </table>
    <p>{{ message }}</p>
    <router-link to="/about"></router-link>
  </div>
</template>

<script>

const array_table = [['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','','']];
var msg = ''
export default {
  data () {
    return{
      y: 8,
      x: 8,
      table: array_table,
      message: msg
    }
  },
  created: function(){
    this.isinit();
  },
  methods: {
    isinit() {
      for(var i=0;i < array_table.length; i++ ){
        for(var j=0; j < array_table[i].length; j++){
          if ( ( i==4 && j ==4 ) || ( i==5 &&j==5 ) ){
            array_table[i][j] = {
              color: '黒',
              class: 'black'
            }
          }else if( (i==4 && j == 5) || (i == 5 && j==4 )){
            array_table[i][j] =  {
              color: '白',
              class: 'white'
              }
          }else{
            array_table[i][j] =  {
              color: '',
              class: 'space'
              }
          }
        }
      }
    },
    putStone(i, j){
      // array_table[i][j] = "黒"
      // this.table = array_table
      this.message += 1
      this.table[i][j] ={
       color: "黒",
       class: 'black'
      }
    },
    whetherCanPut: function (i, j, tarn) {
      // 自分の位置と周辺(八方向)を判別して相手コマ(白なら黒、黒なら白)がある場合
      // その方向を調べて行って自分と同じ色がある場合はCanPut
      if (this.stoneReplaceLeftTop(i, j, tarn) ||
          this.stoneReplaceTop(i, j ,tarn) ||
          this.stoneReplaceRightTop(i, j, tarn) ||
          this.stoneReplaceLeft(i, j, tarn) ||
          this.stoneReplaceRight(i, j, tarn)||
          this.stoneReplaceDown(i, j, tarn) ||
          this.stoneReplaceLeftDown(i, j, tarn) ||
          this.stoneReplaceRightDown(i, j, tarn) ){
            this.table[i][j] = {
              color: '',
              class: "canput"
            } 
        return true
      }
      return false
    },
    stoneReplaceLeftTop(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // x=1 y=1
      if( x == 1 || y == 1 || array_table[x-1][y-1].color != enemy){
        return false
      }
      var i = x
      for(var j = y ; i > 0; i--){
        if(array_table[i][j].color == myStone ){
          return true
        }else if(i == 1 ){
          return false
        }
        i--;
      }
      return false
    },
    stoneReplaceTop(x, y ,myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // x=1 y=1~8
      if( y == 1 || array_table[x][y-1].color != enemy){
        return false
      }
      for(var i = y ; i > 0; i--){
        if(array_table[x][i].color == myStone ){
          return true
        }
      }
      return false
    },
    stoneReplaceRightTop(x, y, myStone){
      const enemy = myStone == "黒" ? "白": "黒"
      // x =1 y = 8
      if(x == 8 || y == 1 || array_table[x+1][y-1].color != enemy){
        return false
      }
      var i = x;
      for(var j = y ; j >0 ; j--){
        if(array_table[i][j].color == myStone){
          return true
        }else if(i == 8){
          return false
        }
        i++;
      }
      return false
    },
    stoneReplaceLeft(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // y=1
      if(x == 1 || array_table[x-1][y].color != enemy ){
        return false
      }
      for(var i = x; i>0; i--){
        if(array_table[i][y].color == myStone){
          return true
        }
      }
      return false
    },
    stoneReplaceRight(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // y=8
      if(x == 8 || array_table[x+1][y].color != enemy){
        return false
      }
      for(var i = x; i < 9 ; i++ ){
        if(array_table[i][y].color == myStone){
          return true
        }
      }
      return false
    },
    stoneReplaceLeftDown(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      if(x == 1 || y == 8 || array_table[x-1][y+1].color != enemy ){
        return false
      }
      var i = x;
      for(var j = y ; j < 9 ; j++ ){
        if(array_table[i][j].color == myStone ){
          return true
        }else if(i ==1 ){
          return false
        }
        i--;
      }
      return false
    },
    stoneReplaceDown(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // x = 8
      if(y == 8 || array_table[x][y+1].color != enemy){
        return false
      }
      for(var i = y; i < 9; i++){
        if(array_table[x][i].color == myStone){
          return true
        }
      }
      return false
    },
    stoneReplaceRightDown(x, y, myStone){
      const enemy = myStone == "黒" ? "白" : "黒"
      // x=8 y=8
      if(x == 8 || y == 8 || array_table[x+1][y+1].color != enemy ){
        return false
      }
      var i = x;
      for(var j = y ; j < 9 ; j++ ){
        if(array_table[i][j].color == myStone){
          return true
        }else if(i == 8){
          return false
        }
        i++;
      }
      return false
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
.canput{
  // TODO: それっぽい色にしたい
  background-color:wheat;
  display: inline-block;
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
</style>

<template>
  <div>
    <p>othello</p>
    <table border="9" cellspacing="0">
      <tr v-for="i in y" v-bind:key="i">
        <td v-for="j in x" v-bind:key="j">
          <span v-if="table[i][j] == '黒'">
            {{ table[i][j] }}
          </span >
          <span v-if="table[i][j] == '白'">
            {{ table[i][j] }}
          </span>
          <span v-if="table[i][j] == '空白'">
            {{ table[i][j] }}
          </span>
        </td>
      </tr>
    </table>
    <router-link to="/about"></router-link>
  </div>
</template>

<script>
const table_y = 8;
const table_x = 8;
const array_table = [['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','',''],['','','','','','','','','']];

export default {
  data () {
    return{
      y: table_y,
      x: table_x,
      table: array_table
    }
  },
  created: function(){
    this.isinit();
    this.mytarn();
  },
    computed: {
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
            }
          }
        }
      },
      mytarn(){
      }
    }
}
</script>
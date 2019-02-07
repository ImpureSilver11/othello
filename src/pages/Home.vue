<template>
  <div>
    <p>othello</p>
    <table border="9" cellspacing="0">
      <tr v-for="i in y" v-bind:key="i">
        <td v-for="j in x" v-bind:key="j">
          <span v-on:click="mytarn">
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
const array_table = [
  ['00','01','02','03','04','05','06','07','08'],
  ['10','11','12','13','14','15','16','17','18'],
  ['20','21','22','23','24','25','26','27','28'],
  ['30','31','32','33','34','35','36','37','38'],
  ['40','41','42','43','44','45','46','47','48'],
  ['50','51','52','53','54','55','56','57','58'],
  ['60','61','62','63','64','65','66','67','68'],
  ['70','71','72','73','74','75','76','77','78'],
  ['80','81','82','83','84','85','86','87','88']
];
export default {
  data () {
    return{
      y: table_y,
      x: table_x,
      table: array_table
    }
  },
    computed: {
      isinit () {
      }
    },
    methods: {
        mytarn(){
        }
    }
}
</script>
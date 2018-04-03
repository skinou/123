<template>
   <ul>
       <li v-for="(item,index) in model" :key="index">

            <div v-if="item.type === 'string'||item.type === 'boolean'||item.type === 'number'">
                <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">
                <span>{{item.type}}aaaaa</span>
                <input type="text" class="value">
                <button type="button">删除</button>
            </div>

            <div v-if="item.type === 'object'">
                <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">
                <span>{{item.type}}aaaaa</span>
                <item2 :model="item.properties"></item2>
                <button type="button">删除</button>
            </div>

            <div v-if="item.type === 'array'">
                <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">
                <span>{{item.type}}aaaa</span>
                <array :model="item.items"></array>
                 <button type="button">删除</button>
            </div>

           
       </li>
       <li>
            <button type="button">添加</button>
       </li>

   </ul>
</template>

<script type="text/ecmascript-6">
  import item from "./item"
export default {
    name:"array",
    props: {
        model: Array
    },
   components:{
        'item2':item,
      },
}
</script>

<style scoped>

 ul {
    padding-left: 2em;
    line-height: 1.5em;
    list-style-type: none;
    margin: 10px;
  }
  li{
    margin: 10px;
  }
  input{
    border: none;
    background-color: whitesmoke;
    height: 30px;
  }
  label{
    width: 100px;
    background-color: dodgerblue;
    padding: 10px;
    height: 10px;
  }
  .add{
    background-color: dodgerblue;
    text-align: center;
    color: white;
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .disabled{
    background-color: red;
    padding-left: 20px;
    font-weight: bold;
    color: whitesmoke;
  }
  .value{
    width: 500px;
    padding-left:20px;
    color: dodgerblue;
    font-weight: bold
  }
</style>
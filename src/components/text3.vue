<template>

  <li>
    <!--<div class="item" v-if="model instanceof Array">-->
      <!--<input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">-->
      <!--<span>{{model.type}})</span>-->
      <!--<span v-if="isFolder" @click="toggle">[ {{ open ? '-' : '+' }} ]</span>-->
      <!--<ul v-show="open" v-if="isFolder">-->
        <!--<item-->
          <!--:model="model.items">-->
        <!--</item>-->
        <!--<li><button type="button" @click="addChild" class="add">添加</button></li>-->
      <!--</ul>-->
    <!--</div>-->

    <div class="item" v-if="typeof model === 'object'">
      <!--<input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">-->
      <!--<span>{{model.type}})</span>-->
      <!--<input type="text">-->
      <!--<span v-if="isFolder" @click="toggle">[ {{ open ? '-' : '+' }} ]</span>-->
      <!--<ul v-show="open" v-if="isFolder">-->
        <!--<item-->
          <!--v-for="(item, index) in model.properties"-->
          <!--:key="index"-->
          <!--:model="item">-->
        <!--</item>-->
        <!--<li><button type="button" @click="addChild" class="add">添加</button></li>-->
      <!--</ul>-->
      <div  v-for="(item, index) in array" :key="index">
        <span>{{item}}</span>
        <!--<span>{{typeof item}}</span>-->
        <!--<div v-if="typeof item==='string'">-->
          <!--<input type="text" v-model="item"/>-->
        <!--</div>-->
      </div>


    </div>

    <!--<div class="item" v-else>-->
      <!--<input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">-->
      <!--<span>{{model.type}})</span>-->
      <!--<input type="text">-->
    <!--</div>-->


  </li>

</template>

<script>
    export default {
      name: "text3",
      props: {
        model: Object
      },
      created(){
        for(let item in this.model){
          // console.log(item+':'+this.model[item]);
          let obj = {};
          obj[item]=this.model[item];
          this.array.push(obj)
        }
        console.log(this.array)
      },
      data: function () {
        return {
          open: false,
          array:[]
        }
      },
      computed: {
        isFolder: function () {
          if(this.model.type==='array'){
            // this.model.items.push(this.model.items[0])
            return this.model.items
          }
          else{
            return this.model.properties
          }
        }
      },
      methods: {
        toggle: function () {
          if (this.isFolder) {
            this.open = !this.open
          }
        },
        addChild: function () {
          // if(this.model.type==='array'){
          //   // this.model.items.push(this.model.items[0])
          //   this.model.items = Object.assign(this.model.items,)
          // }
          // else{
          //   this.model.properties.push({
          //     name: 'new'
          //   })
          // }

        }
      }
    }
</script>

<style scoped>
  .item {
    display: inline-block;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 2em;
    line-height: 1.5em;
    list-style-type: dot;
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
    width: 80px;
    height: 50px;
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

  span{
    display: block;
  }
</style>

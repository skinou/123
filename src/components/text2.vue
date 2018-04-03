<template>

  <li>
    <div class="item" v-if="getModel.type === 'array'">
      <input type="text" :name=" getModel.title" :value=" getModel.title" disabled class="disabled">
      <!-- <span>({{model.type}})</span> -->
      <span @click="toggle"> {{ open ? '-' : '+' }} </span>
      <ul >
        <item
         v-for="(item, index) in getModel.items"
          :key="index"
          :model="item">
        </item>
       <li><button type="button" @click="addChild(getModel.items)" class="add">添加({{isFolder1.length}})</button></li>
      </ul>
      
    </div>

    <div class="item" v-else-if="getModel.type === 'object'">
      <input type="text" :name=" getModel.title" :value="getModel.title" disabled class="disabled">
      <span @click="toggle"> {{ open ? '-' : '+' }} </span>
      <ul>
        <item
          v-for="(item, index) in getModel.properties"
          :key="index"
          :model="item">
        </item>
      </ul>
    </div>

    <div class="item" v-else>
      <input type="text" :name=" model.title" :value=" model.title" disabled class="disabled">
      <input type="text"  v-model=" model.val" class="value">
    </div>


  </li>

</template>

<script>
    export default {
      name: "item",
      props: {
        model: Object
      },
      created(){
        // this.model = this.schema
        // console.log(this.model)

      },
      data: function () {
        return {
          open: false,
          // model:Object
        }
      },
      computed: {
        isFolder: function () {
          if(this.model.type==='array'){
            return this.model.items
          }
          else{
            return this.model.properties
          }
        },
        isFolder1() {
          return this.model.items
        },
         isFolder2() {
           return this.model.properties
        },
        getModel(){
          return this.model
        }

      },
      methods: {
        deepCopy(p, c) {
    　　  var c = c || {};
    　　    for (var i in p) {
    　　      if (typeof p[i] === 'object') {
    　　　　　   c[i] = (p[i].constructor === Array) ? [] : {};
    　　　　　　 this.deepCopy(p[i], c[i]);
    　　　　　}

              else {
                c[i] = p[i];
    　　　　　}
    　　　　}
    　　　　return c;
    　　},
        toggle() {
           this.open = !this.open
          // if (this.isFolder) {
          //   console.log(this.isFolder)
           
          // }
        },
        addChild(items) {
          let newObj = this.deepCopy(items[0]);
          // let index = this.model.items.length;
          // newObj.title = index;
          items.push(newObj)
          console.log(this.isFolder1.length)
          console.log(this.isFolder1)
          console.log(this.getModel)
        }
      }
    }
</script>

<style scoped>
  .item {
    display: inline-block;
  }
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

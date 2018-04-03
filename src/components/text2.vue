<template>

  <li>
    <div class="item" v-if="model.type === 'array'">
      <input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">
      <!-- <span>({{model.type}})</span> -->
      <span v-if="isFolder" @click="toggle"> {{ open ? '-' : '+' }} </span>
      <ul v-show="open" v-if="isFolder">
        <item
         v-for="(item, index) in model.items"
          :key="index"
          :model="item">
        </item>
        <!--<button type="button" @click="addChild" class="add">删除</button>-->
        <!--v-for="(item, index) in model.items"-->
        <!--:key="index"-->
        <li><button type="button" @click="addChild" class="add">添加</button></li>
      </ul>
    </div>

    <div class="item" v-else-if="model.type === 'object'">
      <input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">
      <!-- <span>({{model.type}})</span> -->
      <!-- <input type="text"> -->
      <span v-if="isFolder" @click="toggle"> {{ open ? '-' : '+' }} </span>
      <ul v-show="open" v-if="isFolder">
        <item
          v-for="(item, index) in model.properties"
          :key="index"
          :model="item">
        </item>

        <!--<li class="add" @click="addChild">+</li>-->
         <!--<li><button type="button" @click="addChild" class="add">添加</button></li>-->
        <!--<li @click="addChild">添加</li>-->
      </ul>
    </div>

    <div class="item" v-else>
      <input type="text" :name=" model.title" v-model=" model.title" disabled class="disabled">
      <!-- <span>{{model.type}})</span> -->
      <input type="text"  v-model=" model.val" class="value">

      <!-- <ul v-if="model.val instanceof Array">
        <li v-for="(item,index) in model.val" :key="index">
          <input type="text" :name=" model.title" :value="index" disabled class="disabled">
          <span>{{model.type}})</span>
          <input type="text"  v-model="model.val[index]" class="value">
        </li>
      </ul> -->

      <!-- <div v-else>
      </div> -->
      <!--<span v-if="isFolder" @click="toggle">[ {{ open ? '-' : '+' }} ]</span>-->
      <!--<ul v-show="open" v-if="isFolder">-->
        <!--<item-->
          <!--v-for="(item, index) in model.properties"-->
          <!--:key="index"-->
          <!--:model="item">-->
        <!--</item>-->
        <!--<li class="add" @click="addChild">+</li>-->
      <!--</ul>-->
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
            // this.model.items.push(this.model.items[0])
            return this.model.items
          }
          else{
            return this.model.properties
          }
          // return this.model.children &&
          //   this.model.children.length
        }
      },
      methods: {
    //      deepCopy(p, c) {
    // 　　　　var c = c || {};
    // 　　　　for (var i in p) {
    // 　　　　　　if (typeof p[i] === 'object') {
    // 　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
    // 　　　　　　　　this.deepCopy(p[i], c[i]);
    // 　　　　　　} else {
    // 　　　　　　　　　c[i] = p[i];
    // 　　　　　　}
    // 　　　　}
    // 　　　　return c;
    // 　　},
        toggle: function () {
          if (this.isFolder) {
            this.open = !this.open
          }
        },
        addChild: function () {
          // console.log(this.model.items[0]);
          // let newObj = this.deepCopy(items[0]);
          // let index = items.length;
          // newObj.title = index
          // items.push(newObj)
          // if(this.model.properties) {
          //   this.model.properties = Object.assign(this.model.properties, {
          //     title: '12132132123',
          //     type:"string"
          //
          //   })
          // }

          if(this.model.type==='array'){
            this.model.items.push(this.model.items[0])
            // this.model.items = Object.assign(this.model.items,)
          }
          // else{
          //   this.model.properties.push({
          //     title: 'new',
          //     type:'string',
          //     val:"12312313"
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

<template>

   <div>
        <ul v-if="model.type">

            <li v-if="model.type === 'array'">
                     <ul>
                        <li v-for="(item,index) in model.items" :key="index">
                              <div v-if="item.type === 'string'||item.type === 'boolean'">
                                  <input type="text" :name=" item.title" :value="index" disabled class="disabled">
                                  <!--<span>{{item.type}}aaaaa</span>-->
                                  <input type="text" class="value" v-model="item.val">
                                  <button type="button" class="delte"  @click="delte(index, model.items)">删除</button>
                              </div>


                              <div v-else-if="item.type==='boolean'">
                                  <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">

                                  <input type="radio"  value="true" name="true" v-model="item.val">
                                  <label>true</label>

                                  <input type="radio"  value="false" name="false" v-model="item.val">
                                  <label>false</label>

                                  <button type="button" class="delte"  @click="delte(index, model.items)">删除</button>
                              </div>


                              <div v-else-if="item.type === 'integer'">
                                <input type="text" :name=" item.title" :value="index" disabled class="disabled">
                                <!--<span>{{item.type}}aaaaa</span>-->
                                <input type="number" class="value" v-model="item.val">
                                <button type="button" class="delte"  @click="delte(index, model.items)">删除</button>
                              </div>


                              <div v-else-if="item.type === 'object'">
                                  <input type="text" :name=" item.title" :value="index" disabled class="disabled">
                                  <!--<span>{{item.type}}aaaaa</span>-->
                                  <item :model="item.properties"></item>
                                  <button type="button" class="delte" @click="delte(index, model.items)">删除</button>
                              </div>

                              <div v-else-if="item.type === 'array'">
                                <input type="text" :name=" model.title" :value="index" disabled class="disabled">
                                <!--<span>{{model.type}}-&#45;&#45;</span>-->
                                 <item :model="item"></item>
                                 <button type="button" class="delte" @click="delte(index, model.items)">删除</button>
                              </div>
                        </li>
                        <li>
                              <button type="button" class="add" @click="add(model.items)">添加</button>
                        </li>
                    </ul>
                    <!-- <array :model="model.items"></array> -->
            </li>

            <li v-else-if="model.type === 'object'">
                    <input type="text" :name=" model.title" :value="model.title" disabled class="disabled">
                     <!--<span>{{model.type}}++</span>-->
                    <item :model="model.properties"></item>
            </li>


        </ul>

        <ul v-else>
            <li v-for="(item,index) in model" :key="index">

                <div v-if="item.type === 'string'">
                    <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">
                    <!--<span>{{item.type}}***</span>-->
                    <input type="text" class="value" v-model="item.val">
                </div>


                <div v-else-if="item.type==='boolean'">
                  <input type="text" :name="item.title" :value=" item.title" disabled class="disabled">

                    <input type="radio"  value="true" :name="item.title" v-model="item.val">
                    <label>true</label>

                    <input type="radio"  value="false" :name="item.title" v-model="item.val">
                    <label>false</label>

                </div>


                <div v-else-if="item.type === 'integer'">
                  <input type="text" :name=" item.title" :value="index" disabled class="disabled">
                  <!--<span>{{item.type}}aaaaa</span>-->
                  <input type="number" class="value" v-model="item.val">
                </div>

                 <div v-if="item.type === 'object'">
                     <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled">
                     <!--<span>{{item.type}}////</span>-->
                    <item :model="item.properties"></item>
                </div>

                 <div v-if="item.type === 'array'">
                     <!-- <input type="text" :name=" item.title" :value=" item.title" disabled class="disabled"> -->
                     <!-- <span>{{item.type}}&&&&</span> -->
                    <!-- <array :model="item.items"></array> -->
                   <input type="text" :name=" item.title" :value="item.title" disabled class="disabled">
                   <!--<span>{{item.type}}-&#45;&#45;</span>-->
                    <item :model="item"></item>


                </div>

            </li>
        </ul>

   </div>


</template>

<script type="text/ecmascript-6">
import array from "./array"
export default {
    name:"item",
    props: {
      model: Object
    },
    created(){
      if(this.model.type==='array'){
        let obj = this.deepCopy(this.model.items[0]);
        this.itemData = Object.assign({},this.itemData,obj);
        console.log(this.itemData)

      }
    },
    components: {
      'array':array
    },
    data(){
      return{
        itemData:{}
      }
    },
    methods:{
      add(items){
         let newObj = this.deepCopy(this.itemData);
        // this.itemData = Object.assign({},this.itemData,obj);
        // let newObj = this.deepCopy(items[0]);
          // let index = this.model.items.length;
          // newObj.title = index;
          items.push(newObj);
          // console.log(items);
          // this.$router.push('/')
      },
      deepCopy(p, c) {
    　　  let temp = c || {};
    　　    for (let i in p) {
    　　      if (typeof p[i] === 'object') {
              temp[i] = (p[i].constructor === Array) ? [] : {};
    　　　　　　 this.deepCopy(p[i], temp[i]);
    　　　　　}
            //   else if (typeof p[i] === 'string') {
            //     // temp[i] = ''
            //     p[i] = '';
            //     temp[i] = p[i]
            //
            // }
            // else if (typeof p[i] === 'boolean') {
            //    p[i] = false;
            //    temp[i] = p[i]
            // }
            // else if (typeof p[i] === 'number') {
            //    p[i] = 0;
            //    temp[i] = p[i]
            // }
              else {
                temp[i] = p[i]
            }

    　　　　}
    　　　　return temp;
    　　},
      delte(index,data){
        data.splice(index,1);
        console.log(data)
      },
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
    background-color: black;
    text-align: center;
    color:whitesmoke;
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  .delte{
     background-color:red;
    text-align: center;
    color: white;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .disabled{
    background-color:dodgerblue;
    padding-left: 20px;
    font-weight: bold;
    color: whitesmoke;
    margin-bottom: 10px;
  }
  .value{
    width: 500px;
    padding-left:20px;
    color: dodgerblue;
    font-weight: bold
  }
</style>

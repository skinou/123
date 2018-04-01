<template>
  <div>

    <div v-if="data.type">
      <div class="content">
        <!--<span>{{data.type}}</span>-->

        <div v-if="data.type==='string'" class="item">
          <label :for="data.title">{{data.title}}</label>
          <input type="text" :name="data.title">
        </div>

        <div v-else-if="data.type==='boolean'" class="item">
          <label :for="data.title">{{data.title}}</label>

          <input type="radio"  value="true" name="true">
          <label>true</label>

          <input type="radio"  value="false" name="false">
          <label>false</label>
        </div>

        <div v-else-if="data.type==='number'" class="item">
          <label :for="data.title">{{data.title}}</label>
          <input type="number" autofocus :name="data.title">
        </div>

        <div v-else-if="data.type==='array'">
          <div v-if="data.items.type === 'string'" class="item">
            <label :for="data.title">{{data.title}}</label>
            <input type="number" autofocus :name="data.title">
            <button type="button">添加数组</button>
          </div>

          <div v-else-if="data.items.type === 'object'" class="item">
            <h4>{{data.title}}</h4>
            <text1 :data="data.items.properties"></text1>
            <button type="button">添加对象属性（数组）</button>
          </div>

          <div v-else-if="data.items.type === 'array'" class="item">
            <h4>{{data.title}}</h4>
            <text1 :data="data.items"></text1>
            <button type="button">添加123123数组</button>
          </div>
        </div>


        <div v-else-if="data.type==='object'" class="item">
          <h4>{{data.title}}</h4>
          <text1 :data="data.properties"></text1>
          <button type="button">添加对象属性</button>
        </div>

      </div>
    </div>

    <div v-else>
      <div v-for="item in data" :key="item.title" class="content">
        <text1 :data="item"></text1>
      </div>
    </div>


    <!--<div v-for="item in data" :key="item.title" class="content">-->

      <!--<h4>{{item}}</h4>-->

      <!--<h1>{{item}}</h1>-->

      <!--<div v-if="item.type==='string'" class="item">-->
        <!--<label :for="item.title">{{item.title}}</label>-->
        <!--<input type="text" :name="item.title">-->
      <!--</div>-->

      <!--<div v-else-if="item.type==='boolean'" class="item">-->
        <!--<label :for="item.title">{{item.title}}</label>-->

        <!--<input type="radio"  value="true" name="true">-->
        <!--<label>true</label>-->

        <!--<input type="radio"  value="false" name="false">-->
        <!--<label>false</label>-->

      <!--</div>-->

      <!--<div v-else-if="item.type==='number'">-->
        <!--<div class="item">-->
          <!--<label :for="item.title">{{item.title}}</label>-->
          <!--<input type="number" autofocus :name="item.title">-->

        <!--</div>-->
      <!--</div>-->

      <!--<div v-else-if="item.type==='array'">-->

        <!--<div v-if="item.items.type === 'string'" class="item">-->
          <!--<label :for="item.title">{{item.title}}123456789</label>-->
          <!--<input type="number" autofocus :name="item.title">-->
          <!--<button type="button">添加数组</button>-->
        <!--</div>-->

        <!--<div v-else-if="item.items.type === 'object'" class="item">-->
          <!--<h4>{{item.title}}</h4>-->
          <!--<text1 :data="item.items.properties"></text1>-->
          <!--<button type="button">添加对象属性（数组）</button>-->
        <!--</div>-->

        <!--<div v-else-if="item.items.type === 'array'" class="item">-->
          <!--<h4>{{item.title}}</h4>-->
          <!--<h6>{{item.items}}</h6>-->
          <!--<text1 :data="item.items"></text1>-->
          <!--<button type="button">添加123123数组</button>-->
        <!--</div>-->

      <!--</div>-->


      <!--<div v-else-if="item.type==='object'">-->
        <!--<h4>{{item.title}}</h4>-->
        <!--<text1 :data="item.properties"></text1>-->
        <!--<button type="button">添加对象属性</button>-->
      <!--</div>-->
   <!---->
    <!--</div>-->
  </div>

</template>

<script>
    export default {
      name: "text1",
      created(){
        // console.log(this.data)
        for(let item in this.data){
          console.log(item);
          console.log(this.data[item].type)
        }
      },
      props:{
        data: Object
      },
      methods(){

      }
    }
</script>

<style scoped>
  h4{
    text-align: left;
    padding-left: 30px;
  }
  .content{
    padding-left: 30px;
    text-align: left;
  }
  .item{
    display: inline-block;
  }
</style>

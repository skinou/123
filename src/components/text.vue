<template>
   <div>
        <!-- <ele :data="obj"></ele>   -->
      <div v-if="data.type==='string'">
          <div class="item">
            <label :for="data.name">{{data.name}} </label> 
            <input type="text" autofocus :name="data.name" v-model="data.value" @blur="data.check(data)">
             <span v-show="data.message!==''" class="error">{{data.message}}</span>
            <!-- <span v-show="data.message!==''" class="error">{{data.message}}</span> -->
        </div>
      </div>

       <div v-else-if="data.type==='integer'">
          <div class="item">
            <label :for="data.name">{{data.name}}：</label> 
            <input type="number" autofocus :name="data.name" v-model="data.value" @blur="data.check(data)">
            <span v-show="data.message!==''" class="error">{{data.message}}</span>
        </div>
      </div>

       <div v-else-if="data.type==='drop'">
          <div class="item">
               <label :for="data.name">{{data.name}}：</label> 
              <select v-model="data.value" @blur="data.check(data)">
                <option disabled value="">请选择</option>
                <option v-for="item in data.enum" :key="item">{{item}}</option>
            </select>
            <span v-show="data.message!==''" class="error">{{data.message}}</span>
        </div>
      </div>


       <div v-else-if="data.type==='boolean'">
          <div class="item">
               <label :for="data.name">{{data.name}}：</label> 

                <input type="radio"  value="true" v-model="data.value" @blur="data.check(data)">
                <label for="true">true</label>
    
                <input type="radio"  value="false" v-model="data.value" @blur="data.check(data)">
                <label for="false">false</label>

            <span v-show="data.message!==''" class="error">{{data.message}}</span>
        </div>
      </div>


      <div v-else-if="data.type==='object'||data.type==='array'">
          <div class="item">
              <h1 v-if="data.h===1" >{{data.name}}</h1>
              <h2 v-else-if="data.h===2" >{{data.name}}</h2>
              <h3 v-else-if="data.h===3" >{{data.name}}</h3>
              <h4 v-else-if="data.h===4" >{{data.name}}</h4>
            <!-- <span v-show="data.message!==''" class="error">{{data.message}}</span> -->
        </div>
      </div>



   </div>
</template>

<script type="text/ecmascript-6">
import element from "./text"
export default {
    components: {
        "ele":element
    },
    props:{
        data:Object
    },

   data() {
       return {
           obj:{
                name:"132132123132",
                title:"12332132",
                type:"integer",
                value:'',
            }
            // data: {
            //     name:'ercode',
            //     title: "ercode",
            //     value:'',
            //     description: "",
            //     message:'',
            //     type: "string"
            // },
       }
   },
}
</script>

<style scoped>
.item{
    display: inline-block;
}
.error{
    display: block;
}
</style>
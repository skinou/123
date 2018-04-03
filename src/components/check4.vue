<template>
<div>
  <!--<h2>{{schema.title}}</h2>-->
  <!--<text1 :data="schema"></text1>-->
  <ul id="demo">
    <item
      class="item"
      :model="treeData">
    </item>
  </ul>
</div>
</template>

<script>
  import text3 from "./text3"
    export default {
      name: "check4",
      components:{
        'item':text3
      },
      created(){

      },
      data(){
        return {
          treeData: {
            name: 'My Tree',
            children: [
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  {
                    name: 'child folder',
                    children: [
                      { name: 'hello' },
                      { name: 'wat' }
                    ]
                  },
                  { name: 'hello' },
                  { name: 'wat' },
                  {
                    name: 'child folder',
                    children: [
                      { name: 'hello' },
                      { name: 'wat' }
                    ]
                  }
                ]
              }
            ]
          },
          newData:{}
        }
      }
    }
</script>

<style scoped>

</style>

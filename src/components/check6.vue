<template>
   <div>
       <item :model="schema"></item>

   </div>
</template>

<script type="text/ecmascript-6">
import text4 from "./text4"
 import data from "../data2"
export default {
   data() {
       return {
           schema:data.schema2
       }
       
   },
   components: {
       'item':text4,
   }
}
</script>

<style scoped>
</style>
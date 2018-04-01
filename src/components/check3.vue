<template>
   <div>

       <div v-for="(item,index) in element2" :key="index">
            <!--<ele :data="data.properties"></ele> -->
       </div>

   </div>
</template>

<script type="text/ecmascript-6">
import sData from "../data"
import data2 from "../data2"
import element from "./text"
export default {
    mounted(){

        let name = "schema"
        this.generate(this.schema2,name,1)
        // console.log(this.element)
        // console.log('1231231132123132')
        console.log(this.element2)
    },

    data() {
       return {
           schema2:data2.schema,
           schema:sData.scheme,
        //    element:[],
           element2:[]

       }
    },

    methods:{
        generate(schema,name,h){

            let type = schema.type
            if(type === "object"){


                //  let obj = {
                //         name:name,
                //         title:schema.title,
                //         type:"object",
                //         item:[]
                //     }

                    let obj2 = {
                        name:name,
                        title:schema.title,
                        type:"object",
                        h:h

                    }

                if(name !== ''){
                    this.element2.push(obj2)
                }


                if(schema.properties){
                    h+=1
                    for(let i in schema.properties){
                        // this.generate(schema.properties[i],obj.item,i)

                        this.generate(schema.properties[i],i,h)
                    }
                }

                // element.push(obj)


            }
            else if(type === "string"){
                if(schema.enum){
                    let obj = {
                        name:name,
                        title:schema.title,
                        type:"drop",
                        value:'',
                        enum:schema.enum,
                        message:'',
                         check: (obj)=>{
                            if(obj.value === ''){
                                obj.message = "不能为空"
                            }
                            else{
                                obj.message = ""
                            }

                        },

                    }
                    // element.push(obj)
                    this.element2.push(obj)
                }
                else{
                     let obj = {
                        name:name,
                        title:schema.title,
                        type:"string",
                        value:'',
                        message:'',
                         check: (obj)=>{
                            if(obj.value === ''){
                                obj.message = "不能为空"
                            }
                            else{
                                if(obj.minLength){
                                    if(obj.value.length < obj.minLength ){
                                        obj.message = "至少"+obj.minLength+"个字符"
                                    }
                                }
                                else if(obj.maxLength){
                                    if(obj.value.length > obj.maxLength ){
                                        obj.message = "至多"+obj.minLength+"个字符"
                                    }

                                }
                                else{
                                    obj.message = ""
                                }
                            }

                        },
                    }

                    if(schema.minLength){
                            if(obj.value.length < obj.minLength ){
                                obj.message = "至少"+obj.minLength+"个字符"
                            }
                        }
                    else if(schema.maxLength){
                            if(obj.value.length > obj.maxLength ){
                                obj.message = "至多"+obj.minLength+"个字符"
                        }

                    }


                    // element.push(obj)
                    this.element2.push(obj)
                }


            }
            else if(type === "integer"||type === "number"){
                let obj = {
                        name:name,
                        title:schema.title,
                        type:"integer",
                        minimum:schema.minimum,
                        maximum:schema.maximum,
                        value:'',
                        message:'',
                        check: (obj)=>{
                            if(obj.value === ''){
                                obj.message = "不能为空"
                            }
                             else if(minimum){
                                if(obj.value < minimum ){
                                    obj.message = "最小值为"+minimum;
                                }
                            }
                            else if(maximum){
                                if(obj.value > maximum ){
                                    obj.message = "最大值为"+maximum;
                                }

                            }
                            else{
                                obj.message = ""
                            }


                        },
                    }
                // element.push(obj)
                this.element2.push(obj)

            }
             else if(type === "boolean"){
                let obj = {
                        name:name,
                        title:schema.title,
                        type:"boolean",
                        value:false,
                        message:'',
                        check: (obj)=>{
                            if(obj.value === ''){
                                obj.message = "不能为空"
                            }
                            else{
                                obj.message = ""
                            }

                        },
                    }
                // element.push(obj)
                this.element2.push(obj)

            }
            else if(type === "array"){
                //  let obj = {
                //         name:name,
                //         title:schema.title,
                //         type:"array",
                //         item:[],
                //         // message:''
                //     }

                    let obj2 = {
                        name:name,
                        title:schema.title,
                        type:"array",
                        h:h
                    }

                    console.log("121231123123123")
                    console.log(obj2)

                    if(schema.items.type==="object"||schema.items.type==="array"){
                        let n = ''
                        this.element2.push(obj2)
                        //  this.generate(schema.items,obj.item,n)
                        h+=1
                         this.generate(schema.items,n,h)
                    }
                    else{
                        let obj3 = {
                        name:name,
                        title:schema.title,
                        type:"string",
                        value:'',
                        message:'',
                        check: (obj3)=>{
                            if(obj3.value === ''){
                                obj3.message = "不能为空"
                            }
                            else{
                                obj3.message = ""
                            }

                        },
                        }
                        this.element2.push(obj3)
                    }

                    // element.push(obj)
            }
        }
    },

    components: {
        "ele":element
    }
}
</script>

<style scoped>
</style>

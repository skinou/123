<template>
   <div>

        <div class="item">
            <label for="email">电子邮箱：</label> 
            <input type="email" :required="required" autofocus name="text" placeholder="您的电子邮箱" @blur="email.check(email)" v-model="email.value">
            <span v-show="email.message!==''" class="error">{{email.message}}</span>
        </div>

        <div class="item">
            <label for="name">姓名：</label> 
            <input type="name" :required="required" autofocus name="text" placeholder="您的电子邮箱" @blur="name.check(name)" v-model="name.value">
            <span v-show="name.message!==''" class="error">{{name.message}}</span>
        </div>

         <div class="item">
            <label for="age">年龄：</label> 
            <input type="text" :required="required" autofocus name="number" placeholder="你的年龄" @blur="age.check(age)" v-model.number="age.value">
            <span v-show="age.message!==''" class="error">{{age.message}}</span>
        </div>

         <div class="item">
             <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>

        

   </div>
</template>

<script type="text/ecmascript-6">
export default {
    created(){
        let obj = {
             value:'',
             message:''
        }
        console.log(obj.name)
        this.name = Object.assign({},obj)
        console.log(this.name)
        let check = (name)=>{
              if(name.value === ''){
                        name.message = "不能为空"
                    } 
                    else if(name.value.length>11){
                        name.message = "长度不能超过11"
                    }
                    else if(name.value.length<1){
                        name.message = "长度最小为5"
                    }
                    else{
                        name.message = ""
                    }
        }

        this.name = Object.assign(this.name,{
            check
        })
        console.log(this.name)
    },
   data() {
       return {
            required:true,
            name:{},
            email:{
                value:'',
                message:'',
                check: (email)=>{
                    if(email.value === ''){
                        email.message = "不能为空"
                    } 
                    else if(email.value.length>8){
                        email.message = "长度不能超过8"
                    }
                    else if(email.value.length<5){
                        email.message = "长度最小为5"
                    }
                    else{
                        email.message = ""
                    }
                },
            },
            age:{
                value:'',
                message:'',
                check: (age)=>{
                    if (!Number.isInteger(age.value)) {
                        age.message = '请输入数字值';
                    } else {
                        if(age.value>8){
                            age.message = "长度不能超过8"
                        }
                        else if(age.value<5){
                            age.message = "长度最小为5"
                        }
                        else{
                            age.message = ""
                        }
                    }
                }
           },
           selected:''


       }
   },
   methods:{
       check(email){
           if(email.value === ''){
               email.message = "不能为空"
           } 
           else if(email.value.length>8){
               email.message = "长度不能超过8"
           }
           else if(email.value.length<5){
               email.message = "长度最小为5"
           }
           else{
               email.message = ""
           }
       },
        check2(age){
            if (!Number.isInteger(age.value)) {
                 age.message = '请输入数字值';
            } else {
                if(age.value>8){
                    age.message = "长度不能超过8"
                }
                else if(age.value<5){
                    age.message = "长度最小为5"
                }
                else{
                    age.message = ""
                }
            }
       }
   },
   components: {

   }
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
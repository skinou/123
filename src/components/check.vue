<template>

<el-form :model="data" :rules="rules" ref="ruleForm"  class="form">
  <el-form-item   class="item" prop="name">
    <label for="name">name ({{properties.name.title}})</label>
    <el-input v-model="data.name" class="error"></el-input>
  </el-form-item>
   <el-form-item  class="item" prop="age">
      <label for="age">age ({{properties.age.title}})</label>
      <el-input v-model.number="data.age"></el-input>
  </el-form-item>
   <el-form-item class="item" prop="color">
    <label for="color">color ({{properties.favorite_color.title}})</label>
    <el-color-picker v-model="data.favorite_color"></el-color-picker>
  </el-form-item>

  <el-form-item class="item" prop="gender">
    <label for="color">gender ({{properties.gender.title}})</label>
     <el-select v-model="data.gender" placeholder="请选择">
            <el-option
            v-for="item in properties.gender.enum"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
    </el-select>
  </el-form-item>


   <h2>games ({{properties.games.title}})</h2>

   <el-form-item class="item" prop="games" v-for="(item,index) in data.games" :key="item">
        <label for="games">games ({{properties.games.title}})</label>
        <el-input v-model="data.games[index]"></el-input>
   </el-form-item>


    <h2>location ({{properties.location.title}})</h2>

    <el-form-item class="item" prop="city">
         <label for="city">city</label>
        <el-input v-model="data.location.city"></el-input>
   </el-form-item>

     <el-form-item class="item" prop="state">
         <label for="state">state</label>
        <el-input v-model="data.location.state"></el-input>
   </el-form-item>

     <el-form-item class="item" prop="citystate">
        <label for="citystate">city</label>
        <el-input v-model="data.location.citystate"></el-input>
   </el-form-item>



    <h2>pets ({{properties.pets.title}})</h2>

      <el-table
            :data="data.pets"
            border
             style="width: 100%"
            >
            <el-table-column
            fixed
            prop="type"
            label="type"
            width="250">
              <template slot-scope="scope">

                   <el-form-item class="item" prop="pets-type">
                        <el-select v-model="data.pets[scope.$index].type" placeholder="请选择">
                            <el-option
                            v-for="item in properties.pets.items.properties.type.enum"
                            :key="item"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>

              </template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="name"
            >
              <template slot-scope="scope">
                <el-form-item class="item" prop="pets-name">
                    <el-input v-model="data.pets[scope.$index].name"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
         </el-table>


  <!-- <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item> -->
</el-form>


 <!-- <div class="form">

     <div class="item">
         <label for="name">name ({{properties.name.title}})</label>
         <el-input v-model="data.name" class="error"></el-input>
     </div>

      <div class="item">
         <label for="age">age ({{properties.age.title}})</label>
         <el-input v-model="data.age"></el-input>
     </div>

      <div class="item">
         <label for="color">color ({{properties.favorite_color.title}})</label>
         <el-color-picker v-model="data.favorite_color"></el-color-picker>
     </div>

      <div class="item">
         <label for="gender">gender ({{properties.gender.title}})</label>
         <el-select v-model="data.gender" placeholder="请选择">
            <el-option
            v-for="item in properties.gender.enum"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
     </div>

     <div class="item">
         <h2>games ({{properties.games.title}})</h2>
          <div class="item" v-for="(item,index) in data.games" :key="item">
            <label for="games">{{properties.games.items.title}}</label>
             <el-input v-model="data.games[index]"></el-input>
        </div>
     </div>


      <div class="item">
          <h2>location ({{properties.location.title}})</h2>
          <div class="item">
              <label for="city">city</label>
              <el-input v-model="data.location.city"></el-input>
          </div>

           <div class="item">
              <label for="state">city</label>
              <el-input v-model="data.location.state"></el-input>
          </div>

           <div class="item">
              <label for="citystate">city</label>
              <el-input v-model="data.location.citystate"></el-input>
          </div>
     </div>

     <div class="item">
         <h2>pets ({{properties.pets.title}})</h2>
         <el-table
            :data="data.pets"
            border
             style="width: 100%"
            >
            <el-table-column
            fixed
            prop="type"
            label="type"
            width="250">
              <template slot-scope="scope">
                <el-select v-model="data.pets[scope.$index].type" placeholder="请选择">
                    <el-option
                    v-for="item in properties.pets.items.properties.type.enum"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="name"
            >
              <template slot-scope="scope">
                 <el-input v-model="data.pets[scope.$index].name"></el-input>
              </template>
            </el-table-column>
         </el-table>
     </div>

 </div>   -->
</template>

<script>
import sData from "../data"
 export default {
     created(){
         this.text(this.schema)
        //   if(this.schema.properties){
        //          for(let item in this.schema.properties){
        //              this.rules[item]=[];
        //              console.log(this.schema.required.includes(item))
        //              if(this.schema.required.includes(item)){
        //                   this.rules[item].push({ required: true, message: '不能为空', trigger: 'blur' })
        //              }

        //               for(let subitem in this.schema.properties[item]){
                
        //                 switch(subitem){
        //                     case "type":
        //                         let type = this.schema.properties[item].type;
        //                         if( (type == 'number')||(type == 'integer')) {
        //                              this.rules[item].push({
        //                                 type: 'number',
        //                                 message: '年龄必须为数字值'
        //                                 });
        //                             console.log(this.rules[item])
        //                         }
        //                         break;

        //                     case "description":
        //                         console.log(item +"(description)" +this.schema.properties[item].description);
        //                         break;

        //                     case "minLength":
        //                          let min = this.schema.properties[item].minLength;
        //                          let messageMin = '至少' + min + '个字符';
        //                          this.rules[item].push({
        //                                  min: min,
        //                                  message: messageMin,
        //                                  trigger: 'blur'
        //                                 });
        //                         console.log(this.rules[item])
        //                         break;

        //                     case "maxLength":
        //                          let max = this.schema.properties[item].maxLength;
        //                          let messageMax = '至多' + max + '个字符';
        //                          this.rules[item].push({
        //                                  max: max,
        //                                  message: messageMax,
        //                                  trigger: 'blur'
        //                                 });
        //                         console.log(this.rules[item])
        //                         break;

        //                     case "maximum":

        //                         let maxNum = this.schema.properties[item].maximum;

        //                         let maniment = (rule,value,callback) =>{
        //                                let max = this.schema.properties[item].maximum 
                
        //                                if (value > max ) {
        //                                 callback(new Error('最大值为'+ max));
        //                                 } else {
        //                                 callback();
        //                                 }
        //                         };

        //                          this.rules[item].push({
        //                              validator: maniment,
        //                               trigger: 'blur' 
        //                               });
        //                         console.log(this.rules[item])



        //                         break;

        //                     case "minimum":

        //                         let minNum = this.schema.properties[item].minimum;
                
        //                         let miniment = (rule, value, callback) => {
        //                                let min = this.schema.properties[item].minimum 

        //                                if (value < min) {
        //                                 callback(new Error('最小值为'+min));
        //                                 } else {
        //                                 callback();
        //                                 }
        //                         };

        //                          this.rules[item].push({
        //                              validator: miniment,
        //                               trigger: 'blur' 
        //                               });
        //                         console.log(this.rules[item])
        //                         break;

        //                     default:
        //                         continue;
        //                 }
                    
        //              }
            
        //          }
            
        //          console.log(this.rules)
        //      }
        //   if(this.schema.obj){
        //          console.log(true)
        //      }
        //      else{
        //          console.log(false)
        //      }
        //  console.log(this.item);
        //  console.log(this.schema);
        //  for (let i in sData.scheme.properties){
        //       console.log(i+':'+sData.scheme.properties[i]);
        //       if(sData.scheme.properties[i].properties){
        //           let arr = []
        //           for(let sub in sData.scheme.properties[i].properties){
        //               arr.push(sub);
        //           }
        //            this.item.push({i:arr})
        //       }
        //       else{
        //           this.item.push(i)
        //       }
              
        //  }
        //   console.log(this.item);
     },
     computed:{

     },
     methods:{
         text(schema){
              if(schema.properties){
                 for(let item in schema.properties){
                     this.rules[item]=[];

                     
                     if(schema.properties[item].properties){
                         this.text(schema.properties[item])
                     }



                    //  console.log(schema.required.includes(item))


                     if(schema.required && schema.required.includes(item)){
                          this.rules[item].push({ required: true, message: '不能为空', trigger: 'blur' })
                     }
                     
                      for(let subitem in schema.properties[item]){
                        // console.log(subitem)
                        switch(subitem){
                            case "type":
                                let type = schema.properties[item].type;
                                if( (type == 'number')||(type == 'integer')) {
                                     this.rules[item].push({
                                        type: 'number',
                                        message: '年龄必须为数字值'
                                        });
                                    console.log(this.rules[item])
                                }
                                break;

                            case "description":
                                console.log(item +"(description)" +schema.properties[item].description);
                                break;

                            case "minLength":
                                 let min = schema.properties[item].minLength;
                                 let messageMin = '至少' + min + '个字符';
                                 this.rules[item].push({
                                         min: min,
                                         message: messageMin,
                                         trigger: 'blur'
                                        });
                                console.log(this.rules[item])
                                break;

                            case "maxLength":
                                 let max = schema.properties[item].maxLength;
                                 let messageMax = '至多' + max + '个字符';
                                 this.rules[item].push({
                                         max: max,
                                         message: messageMax,
                                         trigger: 'blur'
                                        });
                                console.log(this.rules[item])
                                break;

                            case "maximum":

                                let maxNum = schema.properties[item].maximum;

                                let maniment = (rule,value,callback) =>{
                                       let max = schema.properties[item].maximum 
                
                                       if (value > max ) {
                                        callback(new Error('最大值为'+ max));
                                        } else {
                                        callback();
                                        }
                                };

                                 this.rules[item].push({
                                     validator: maniment,
                                      trigger: 'blur' 
                                      });
                                console.log(this.rules[item])



                                break;

                            case "minimum":

                                let minNum = schema.properties[item].minimum;
                
                                let miniment = (rule, value, callback) => {
                                       let min = schema.properties[item].minimum 

                                       if (value < min) {
                                        callback(new Error('最小值为'+min));
                                        } else {
                                        callback();
                                        }
                                };

                                // console.log(minNum);
                                //  let messageMinNum = '最小值为'+minNum;
                                 this.rules[item].push({
                                     validator: miniment,
                                      trigger: 'blur' 
                                      });
                                console.log(this.rules[item])
                                break;

                            default:
                                continue;
                        }
                    
                     }
                    //  console.log('---------------------------------------------')
                    //  console.log('---------------------------------------------')
                 }
                //   console.log(this.rules)
                 console.log(this.rules)
             }
         }

     },
     data(){
         return{

             data:sData.data,
             item:[],
             schema:sData.scheme,
             properties:sData.scheme.properties,
              rules: {
                // name: [
                //     { required: true, message: '请输入名字', trigger: 'blur' },
                //     { min: 4, message: '至少3个字符', trigger: 'blur' }
                // ],
                // age: [
                //     { required: true, message: '请输入年龄', trigger: 'change' },
                //     { type: 'number', message: '年龄必须为数字值'}
                // ],
                // color: [
                //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                // ],
            }
        }
    },


 }

</script>

<style>
.form{
    width: 800px;
    margin: 0 auto;
    text-align: left;
}
.item{
    margin: 20px;
}
.item>label{
    display: inline-block;
    margin: 10px;
    font-size: large;
    font-weight: bold;
}
.el-color-picker{
    margin-top: 5px;
    vertical-align: top;
}

/* .error>.el-input__inner{
    border-color: red 
} */
 
</style>

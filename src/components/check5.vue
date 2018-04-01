<template>
<div>
  <p>(You can double click on an item to turn it into a folder.)</p>

  <!-- the demo root element -->
  <ul id="demo">
    <item
      class="item"
      :model="schema">
    </item>
  </ul>
</div>
</template>

<script>
  import text2 from "./text2"
    export default {
      name: "check5",
      components:{
        'item':text2
      },
      data(){
        return{
          schema:{
            name:'schema',
            title: "schema",
            type: "object",
            description: "123456465",
            properties: {
              name: {
                name:'name',
                title: "name",
                description: "",
                type: "string"
              },
              title: {
                title: "title",
                description: "",
                type: "string"
              },
              fappid: {
                title: "fappid",
                description: "",
                type: "string"
              },
              storageName: {
                title: "storageName",
                description: "",
                type: "string"
              },
              ercode: {
                title: "ercode",
                description: "",
                type: "string"
              },
              server: {
                title: "server",
                description: "",
                type: "string"
              },
              debug: {
                title: "debug",
                description: "",
                type: "boolean"
              },
              isCover: {
                title: "isCover",
                description: "",
                type: "boolean"
              },
              isSubscribe: {
                title: "isSubscribe",
                description: "",
                type: "boolean"
              },
              totalCount: {
                title: "totalCount",
                description: "",
                type: "number"
              },
              shareConfig: {
                name:'shareConfig',
                title: "shareConfig",
                type: "object",
                description: "",
                properties: {
                  base: {
                    name:'base',
                    title: "base",
                    type: "object",
                    description: "",
                    properties: {
                      title: {
                        title: "title",
                        description: "",
                        type: "string"
                      },
                      desc: {
                        title: "desc",
                        description: "",
                        type: "string"
                      },
                      imgUrl: {
                        title: "imgUrl",
                        description: "",
                        type: "string"
                      }
                    }
                  },
                  forward: {
                    name:"forward",
                    title: "forward",
                    type: "object",
                    description: "",
                    properties: {
                      title: {
                        title: "title",
                        description: "",
                        type: "string"
                      },
                      desc: {
                        title: "desc",
                        description: "",
                        type: "string"
                      },
                      imgUrl: {
                        title: "imgUrl",
                        description: "",
                        type: "string"
                      }
                    }
                  }
                }

              },

              banner: {
                title: "banner",
                type: "array",
                description: "",
                items: {
                  type: "string",
                  title: "",
                  description: ""
                }
              },
              other_banner: {
                title: "other_banner",
                type: "array",
                description: "",
                items: {
                  type: "string",
                  title: "",
                  description: ""
                }
              },

              poster: {
                title: "poster",
                type: "object",
                description: "",
                properties: {
                  desc: {
                    title: "",
                    type: "array",
                    description: "",
                    items: {
                      type: "string",
                      title: "",
                      description: ""
                    }
                  }
                }
              },

              prize_item: {
                title: "prize_item",
                type: "array",
                description: "",
                items: {
                  title: "",
                  type: "object",
                  description: "",
                  properties: {
                    prize_no: {
                      title: "prize_no",
                      description: "",
                      type: "string"
                    },
                    prize_content: {
                      title: "prize_content",
                      description: "",
                      type: "string"
                    }
                  }
                }
              },

              doorInfo: {
                title: "doorInfo",
                type: "array",
                description: "",
                items: {
                  title: "1",
                  type: "array",
                  description: "",
                  items: {
                    type: "string",
                    title: "2",
                    description: ""
                  }
                }
              }


            }
          }






          // treeData:{
          //   name:'schema',
          //   title: "schema",
          //   type: "object",
          //   children: [
          //     {
          //       name:'name',
          //       title: "name",
          //       description: "",
          //       type: "string"
          //     },
          //     {
          //       name:'debug',
          //       title: "debug",
          //       description: "",
          //       type: "boolean"
          //     },
          //     {
          //       name:'totalCount',
          //       title: "totalCount",
          //       description: "",
          //       type: "number"
          //     },
          //     {
          //       name:'shareConfig',
          //       title: "shareConfig",
          //       type: "object",
          //       children: [
          //         {
          //           name:'base',
          //           title: "base",
          //           type: "object",
          //           children: [
          //             {
          //               name: "title",
          //               title: "title",
          //               description: "",
          //               type: "string"
          //             },
          //           ]
          //         },
          //       ]
          //     },
          //
          //     {
          //       name: "banner",
          //       title: "banner",
          //       type: "array",
          //       description: "",
          //       children: [
          //         {
          //           type: "string",
          //           title: "",
          //           description: ""
          //         }
          //       ]
          //     },
          //
          //     {
          //       name:'doorInfo',
          //       title: "doorInfo",
          //       type: "array",
          //       description: "",
          //       children:[
          //         {
          //           // name: "1",
          //           type: "array",
          //           description: "",
          //           children: [
          //             {
          //               type: "string",
          //               // name: "2",
          //               description: ""
          //             }
          //           ]
          //         },
          //       ]
          //     },
          //
          //
          //     {
          //       name:'prize_item',
          //       title: "prize_item",
          //       type: "array",
          //       description: "",
          //       children: [
          //         {
          //           name:'',
          //           title: "",
          //           type: "object",
          //           description: "",
          //           children:[
          //             {
          //               name:'prize_no',
          //               title: "prize_no",
          //               description: "",
          //               type: "string"
          //             },
          //             {
          //               name:'prize_content',
          //               title: "prize_content",
          //               description: "",
          //               type: "string"
          //             }
          //           ]
          //         }
          //       ],
          //     },
          //
          //
          //
          //
          //   ]
          // }
        }
      }
    }
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>

<template>
<div>
  <h2>{{schema.title}}</h2>
  <text1 :data="schema"></text1>
</div>
</template>

<script>
  import text1 from "./text1"
    export default {
      name: "check4",
      components:{
        'text1':text1
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
        }



      }
    }
</script>

<style scoped>

</style>

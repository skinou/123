<template>
<div>
  <p>(You can double click on an item to turn it into a folder.)</p>

  <!-- the demo root element -->
  <!--<ul id="demo">-->
    <!--<item-->
      <!--class="item"-->
      <!--:model="schema">-->
    <!--</item>-->
  <!--</ul>-->

  <ul id="demo">
    <item2
      class="item"
      :model="schemaData">
    </item2>
  </ul>
</div>
</template>

<script>
  import text2 from "./text2"
  import text3 from "./text3"
    export default {
      name: "check5",
      created(){
        console.log(typeof this.schemaData)
      },
      components:{
        'item':text2,
        'item2':text3
      },
      data(){
        return{
          schemaData:{
            name: "模板",
            title: "萌动全城，寻找最萌宝宝！",
            fappid: "",
            storageName: "libai2ss_s11+yjq-db",
            ercode: "resources/img/ercode.png",
            server: "http://lbldg.com/mengbao",
            iconUrl: "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png",
            debug: true,
            isCover: true,
            isSubscribe: true,
            totalCount: 2,
            shareConfig: {
              base: {
                title: "萌动全城，寻找最萌宝宝！",
                desc: "萌宝驾到~好爸爸送壕礼啦~",
                imgUrl:
                  "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png"
              },
              forward: {
                title: "急~~##name##就差你的一票了！",
                desc: "哎哟，哥哥姐姐蜀黍阿姨们，投宝宝一票嘛~么么哒。",
                imgUrl:
                  "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png"
              }
            },
            banner: ["resources/img/db/banner.png", "resources/img/banner2.png"],
            other_banner: ["resources/img/db/banner.png"],
            time: {
              startDate: "2017/4/28",
              endDate: "2017/6/5",
              startVote: "2017/4/28",
              endVote: "2017/6/5"
            },
            prule: {
              title: "萌动全城，寻找金华最萌宝宝",
              content:
                "活动期间，扫描活动门店物料中二维码进入活动页面，上传购买好爸爸品牌产品的购物小票后，即可上传萌宝（限人类）照片，填写信息及联系方式。上传成功后分享链接或个人海报，即可在活动期间进行拉票。",
              time: "2017年5月28日-2017年6月3日",
              rule:
                "根据参赛作品在活动期间的参与及拉票数，获得投票排名大奖、每日排名奖！",
              explain: "（活动期间每个微信账号每天可以投三票）"
            },
            poster: {
              desc: [
                "家有好爸爸，左拥右抱好亲肤。",
                "亲肤相拥，让爱更亲近。",
                "好盆友，要亲肤抱。",
                "╭(╯^╰)╮，宝宝不开心，要亲肤抱",
                "抱抱蹭蹭好亲肤",
                "好爸爸带你寻找最萌宝宝",
                "家有好爸爸，守护宝宝点滴成长",
                "家有萌宝，好爸爸守护宝宝快乐成长。"
              ]
            },
            makesure: {
              title:
                "1、所有参赛者一旦上传自己的作品，则被视为无条件接受本次活动的所有规定，包括： ",
              content:
                "2、确保上传内容的合法性。一旦上传照片，即被视为该照片的用户或已取得合法授权、且未经发表或出版，该照片不会侵犯他人著作权、肖像权、名誉权和其他合法权益。如发现任何侵犯他人合法权益的行为，将被取消参加活动资格。如因此引发任何侵权及相关法律责任，由参赛者本人承担。",
              time:
                "3、参赛者上传照片视为其同意活动主办方在本次商业活动中无偿使用，本次活动结束后将删除相关图片。",
              rule:
                "4、主办方将对上传照片进行审核，有任何违反法律法规、本活动的有关规定、以及任何主办方认为不适合在本次活动中出现的内容，主办方有权在不事先通知的前提下立即将其删除或屏蔽。",
              explain: "（活动期间每个微信号每天可以投三票）"
            },
            baomingInfo: { info1: "我的海报", info2: "分享拉票" },
            rulepage: {
              productNum: [
                "resources/img/db/img_product_1.png",
                "resources/img/db/img_product_2.png",
                "resources/img/db/img_product_3.png",
                "resources/img/db/img_product_4.png"
              ],
              theme: "寻找最萌宝宝",
              activityTime: "门店参与时间5月28日-6月4日，线上投票截止时间：6月4日24:00",
              awardTime: "6月10日 15:00",
              awardPlace: "德州市德城区德百澳德乐购物中心",
              activityDoor: "德百系统7家门店",
              joinRule: [
                "活动期间，扫描活动门店物料中二维码进入活动页面，上传购买好爸爸品牌产品的购物小票后，即可上传萌宝（限人类）照片，填写信息及联系方式。上传成功后分享链接或个人海报，即可在活动期间进行拉票，根据参赛作品在活动期间的参与及拉票数，获得投票排名大奖、每日排名奖！（活动期间每个微信账号每天可以投三票）",
                "本活动公平、公正、公开，若出现盗用他人照片或冒用他人名义参加比赛、通过技术手段进行刷票、上传不符合相关法律法规的照片等行为，一经发现立即取消参赛资格。",
                "立白集团保留法律允许范围内对此活动的解释权。"
              ],
              prize_item: [
                {
                  prize_no: "特等奖：第1名（1人）",
                  prize_content: "奖励价值2999元名牌全自动洗衣机1台。"
                },
                {
                  prize_no: "一等奖：第2-3名（2人）",
                  prize_content: "奖励价值1000元系统购物卡1张。"
                },
                {
                  prize_no: "二等奖：第4-11名（8人）",
                  prize_content: "奖励价值200元系统购物卡1张。"
                },
                {
                  prize_no: "三等奖：第12-50名（39人）",
                  prize_content: "奖励价值100元立白大礼包1套。"
                },
                {
                  prize_no: "单日排名奖（8天）",
                  prize_content: "每天新上传作品中票数第一名：奖励价值50元立白大礼包1套"
                }
              ],
              award: { desc: "（优惠活动详情以店内促销为准，欢迎到店咨询、选购）" }
            },
            doorInfo: [
              [
                "供销城东店",
                "延安路173号"
              ],
              [
                "供销昌安店",
                "中心北路398号"
              ],
              ["供销柯桥店", "笛扬路农贸市场二楼"]
            ]
          },








          // schema:{
          //   name:'schema',
          //   title: "schema",
          //   type: "object",
          //   description: "123456465",
          //   properties: {
          //     name: {
          //       name:'name',
          //       title: "name",
          //       description: "",
          //       type: "string"
          //     },
          //     title: {
          //       title: "title",
          //       description: "",
          //       type: "string"
          //     },
          //     fappid: {
          //       title: "fappid",
          //       description: "",
          //       type: "string"
          //     },
          //     storageName: {
          //       title: "storageName",
          //       description: "",
          //       type: "string"
          //     },
          //     ercode: {
          //       title: "ercode",
          //       description: "",
          //       type: "string"
          //     },
          //     server: {
          //       title: "server",
          //       description: "",
          //       type: "string"
          //     },
          //     debug: {
          //       title: "debug",
          //       description: "",
          //       type: "boolean"
          //     },
          //     isCover: {
          //       title: "isCover",
          //       description: "",
          //       type: "boolean"
          //     },
          //     isSubscribe: {
          //       title: "isSubscribe",
          //       description: "",
          //       type: "boolean"
          //     },
          //     totalCount: {
          //       title: "totalCount",
          //       description: "",
          //       type: "number"
          //     },
          //     shareConfig: {
          //       name:'shareConfig',
          //       title: "shareConfig",
          //       type: "object",
          //       description: "",
          //       properties: {
          //         base: {
          //           name:'base',
          //           title: "base",
          //           type: "object",
          //           description: "",
          //           properties: {
          //             title: {
          //               title: "title",
          //               description: "",
          //               type: "string"
          //             },
          //             desc: {
          //               title: "desc",
          //               description: "",
          //               type: "string"
          //             },
          //             imgUrl: {
          //               title: "imgUrl",
          //               description: "",
          //               type: "string"
          //             }
          //           }
          //         },
          //         forward: {
          //           name:"forward",
          //           title: "forward",
          //           type: "object",
          //           description: "",
          //           properties: {
          //             title: {
          //               title: "title",
          //               description: "",
          //               type: "string"
          //             },
          //             desc: {
          //               title: "desc",
          //               description: "",
          //               type: "string"
          //             },
          //             imgUrl: {
          //               title: "imgUrl",
          //               description: "",
          //               type: "string"
          //             }
          //           }
          //         }
          //       }
          //
          //     },
          //
          //     banner: {
          //       title: "banner",
          //       type: "array",
          //       description: "",
          //       items: {
          //         type: "string",
          //         title: "",
          //         description: ""
          //       }
          //     },
          //     other_banner: {
          //       title: "other_banner",
          //       type: "array",
          //       description: "",
          //       items: {
          //         type: "string",
          //         title: "",
          //         description: ""
          //       }
          //     },
          //
          //     poster: {
          //       title: "poster",
          //       type: "object",
          //       description: "",
          //       properties: {
          //         desc: {
          //           title: "desc",
          //           type: "array",
          //           description: "",
          //           items: {
          //             type: "string",
          //             title: "",
          //             description: ""
          //           }
          //         }
          //       }
          //     },
          //
          //     prize_item: {
          //       title: "prize_item",
          //       type: "array",
          //       description: "",
          //       items: {
          //         title: "",
          //         type: "object",
          //         description: "",
          //         properties: {
          //           prize_no: {
          //             title: "prize_no",
          //             description: "",
          //             type: "string"
          //           },
          //           prize_content: {
          //             title: "prize_content",
          //             description: "",
          //             type: "string"
          //           }
          //         }
          //       }
          //     },
          //
          //     doorInfo: {
          //       title: "doorInfo",
          //       type: "array",
          //       description: "",
          //       items: {
          //         title: "1",
          //         type: "array",
          //         description: "",
          //         items: {
          //           type: "string",
          //           title: "2",
          //           description: ""
          //         }
          //       }
          //     }
          //
          //
          //   }
          // }






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

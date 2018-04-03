const schema = {
    title: "",
    type: "object",
    description: "",
    properties: {
      name: {
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
      iconUrl: {
        title: "iconUrl",
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
        title: "",
        type: "object",
        description: "",
        properties: {
          base: {
            title: "",
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
            title: "",
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
        title: "",
        type: "array",
        description: "",
        items: {
          type: "string",
          title: "",
          description: ""
        }
      },
      other_banner: {
        title: "",
        type: "array",
        description: "",
        items: {
          type: "string",
          title: "",
          description: ""
        }
      },
      time: {
        title: "",
        type: "object",
        description: "",
        properties: {
          startDate: {
            title: "startDate",
            description: "",
            type: "string"
          },
          endDate: {
            title: "endDate",
            description: "",
            type: "string"
          },
          startVote: {
            title: "startVote",
            description: "",
            type: "string"
          },
          endVote: {
            title: "endVote",
            description: "",
            type: "string"
          }
        }
      },
      prule: {
        title: "",
        type: "object",
        description: "",
        properties: {
          title: {
            title: "title",
            description: "",
            type: "string"
          },
          content: {
            title: "content",
            description: "",
            type: "string"
          },
          time: {
            title: "time",
            description: "",
            type: "string"
          },
          rule: {
            title: "rule",
            description: "",
            type: "string"
          },
          explain: {
            title: "explain",
            description: "",
            type: "string"
          }
        }
      },
      poster: {
        title: "",
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
      makesure: {
        title: "",
        type: "object",
        description: "",
        properties: {
          title: {
            title: "title",
            description: "",
            type: "string"
          },
          content: {
            title: "content",
            description: "",
            type: "string"
          },
          time: {
            title: "time",
            description: "",
            type: "string"
          },
          rule: {
            title: "rule",
            description: "",
            type: "string"
          },
          explain: {
            title: "explain",
            description: "",
            type: "string"
          }
        }
      },
      baomingInfo: {
        title: "",
        type: "object",
        description: "",
        properties: {
          info1: {
            title: "info1",
            description: "",
            type: "string"
          },
          info2: {
            title: "info2",
            description: "",
            type: "string"
          }
        }
      },
      rulepage: {
        title: "",
        type: "object",
        description: "",
        properties: {
          productNum: {
            title: "",
            type: "array",
            description: "",
            items: {
              type: "string",
              title: "",
              description: ""
            }
          },
          theme: {
            title: "theme",
            description: "",
            type: "string"
          },
          activityTime: {
            title: "activityTime",
            description: "",
            type: "string"
          },
          awardTime: {
            title: "awardTime",
            description: "",
            type: "string"
          },
          awardPlace: {
            title: "awardPlace",
            description: "",
            type: "string"
          },
          activityDoor: {
            title: "activityDoor",
            description: "",
            type: "string"
          },
          joinRule: {
            title: "",
            type: "array",
            description: "",
            items: {
              type: "string",
              title: "",
              description: ""
            }
          },
          prize_item: {
            title: "",
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
          award: {
            title: "",
            type: "object",
            description: "",
            properties: {
              desc: {
                title: "desc",
                description: "",
                type: "string"
              }
            }
          }
        }
      },
      doorInfo: {
        title: "doorInfo",
        type: "array",
        description: "",
        items: {
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
    }
};
  

const schema2 = {
  title: "schema",
  type: "object",
  description: "",
  properties: {
    name: {
      title: "name",
      description: "",
      type: "string",
      val: "模板",
    },
    title: {
      title: "title",
      description: "",
      type: "string",
      val: "萌动全城，寻找最萌宝宝！",
    },
    fappid: {
      title: "fappid",
      description: "",
      type: "string",
      val: ""
    },
    storageName: {
      title: "storageName",
      description: "",
      type: "string",
      val: "libai2ss_s11+yjq-db",
    },
    ercode: {
      title: "ercode",
      description: "",
      type: "string",
      val: "resources/img/ercode.png",
    },
    server: {
      title: "server",
      description: "",
      type: "string",
      val: "http://lbldg.com/mengbao",
    },
    iconUrl: {
      title: "iconUrl",
      description: "",
      type: "string",
      val: "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png",
    },
    debug: {
      title: "debug",
      description: "",
      type: "boolean",
      val: true
    },
    isCover: {
      title: "isCover",
      description: "",
      type: "boolean",
      val: true
    },
    isSubscribe: {
      title: "isSubscribe",
      description: "",
      type: "boolean",
      val: true
    },
    totalCount: {
      title: "totalCount",
      description: "",
      type: "number",
      val: 2
    },

    shareConfig: {
      title: "shareConfig",
      type: "object",
      description: "",
      properties: {
        base: {
          title: "base",
          type: "object",
          description: "",
          properties: {
            title: {
              title: "title",
              description: "",
              type: "string",
              val: "萌动全城，寻找最萌宝宝！",
            },
            desc: {
              title: "desc",
              description: "",
              type: "string",
              val: "萌宝驾到~好爸爸送壕礼啦~",
            },
            imgUrl: {
              title: "imgUrl",
              description: "",
              type: "string",
              val: "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png",
            }
          }
        },
        forward: {
          title: "forward",
          type: "object",
          description: "",
          properties: {
            title: {
              title: "title",
              description: "",
              type: "string",
              val: "急~~##name##就差你的一票了！",
            },
            desc: {
              title: "desc",
              description: "",
              type: "string",
              val: "哎哟，哥哥姐姐蜀黍阿姨们，投宝宝一票嘛~么么哒。",
            },
            imgUrl: {
              title: "imgUrl",
              description: "",
              type: "string",
              val: "http://lbldg.com/mengbao/public/h5-mb/resources/img/shareIcon.png"
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
        description: "",
        val: ["resources/img/db/banner.png", "resources/img/banner2.png"],
      }
    },



    other_banner: {
      title: "other_banner",
      type: "array",
      description: "",
      items: {
        type: "string",
        title: "",
        description: "",
        val: ["resources/img/db/banner.png"]
      }
    },

    rulepage: {
      title: "rulepage",
      type: "object",
      description: "",
      properties: {
        productNum: {
          title: "productNum",
          type: "array",
          description: "",
          items: {
            type: "string",
            title: "",
            description: "",
            val: [
              "resources/img/db/img_product_1.png",
              "resources/img/db/img_product_2.png",
              "resources/img/db/img_product_3.png",
              "resources/img/db/img_product_4.png"
            ],
          }
        },
        theme: {
          title: "theme",
          description: "",
          type: "string",
          val: "寻找最萌宝宝",
        },
        activityTime: {
          title: "activityTime",
          description: "",
          type: "string",
          val: "门店参与时间5月28日-6月4日，线上投票截止时间：6月4日24:00",
        },
        awardTime: {
          title: "awardTime",
          description: "",
          type: "string",
          val: "6月10日 15:00",
        },
        awardPlace: {
          title: "awardPlace",
          description: "",
          type: "string",
          val: "德州市德城区德百澳德乐购物中心",
        },
        activityDoor: {
          title: "activityDoor",
          description: "",
          type: "string",
          val:"德百系统7家门店",
        },
        joinRule: {
          title: "joinRule",
          type: "array",
          description: "",
          items: {
            type: "string",
            title: "",
            description: "",
            val: [
              "活动期间，扫描活动门店物料中二维码进入活动页面，上传购买好爸爸品牌产品的购物小票后，即可上传萌宝（限人类）照片，填写信息及联系方式。上传成功后分享链接或个人海报，即可在活动期间进行拉票，根据参赛作品在活动期间的参与及拉票数，获得投票排名大奖、每日排名奖！（活动期间每个微信账号每天可以投三票）",
              "本活动公平、公正、公开，若出现盗用他人照片或冒用他人名义参加比赛、通过技术手段进行刷票、上传不符合相关法律法规的照片等行为，一经发现立即取消参赛资格。",
              "立白集团保留法律允许范围内对此活动的解释权。"
            ],
          }
        },
        prize_item: {
          title: "prize_item",
          type: "array",
          description: "",
          val:[
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
        award: {
          title: "award",
          type: "object",
          description: "",
          properties: {
            desc: {
              title: "desc",
              description: "",
              type: "string"
            }
          }
        }
      }
    },


    doorInfo: {
      title: "doorInfo",
      type: "array",
      description: "",
      val: [
        ["供销城东店", "延安路173号"],
        ["供销昌安店", "中心北路398号"],
        ["供销柯桥店", "笛扬路农贸市场二楼"]
      ],
      items: {
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

  }
}


export default {
  schema,
  schema2
}


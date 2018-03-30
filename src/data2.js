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
        title: "",
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
  

  export default {
    schema
}
    
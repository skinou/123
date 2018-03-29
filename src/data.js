const data = {
    age: 25,
    favorite_color: "#ffa500",
    gender: "male",
    location: {
      city: "San Francisco",
      state: "CA",
      citystate: "San Francisco, CA"
    },
    games: ["a", "b", "c"],
    pets: [
      {
        type: "dog",
        name: "Walter"
      }
    ],
    name: "Jeremy Dorn"
  }
    //
const scheme = {
    title: "人的结构",
    type: "object",
    required: ["name", "age", "city"],
    properties: {
        name: {
            title: "名字",
            type: "string",
            description: "First and Last name",
            minLength: 4,
            maxLength: 8,
            default: "Jeremy Dorn"
        },
        age: {
            title: "年龄",
            type: "integer",
            default: 25,
            minimum: 18,
            maximum: 99
        },
    
        favorite_color: {
            title: "喜欢的颜色",
            type: "string",
            format: "color",
            default: "#ffa500"
        },
        games: {
            type: "array",
            title: "游戏",
            description: "从小到大玩的游戏",
            items: {
                type: "string",
                title: "游戏类别"
            }
        },
        gender: {
            type: "string",
            title: "性别",
            enum: ["male", "female"]
        },
        location: {
            type: "object",
            title: "住址",
            properties: {
                city: {
                    type: "string",
                    default: "San Francisco"
                },
                state: {
                    type: "string",
                    default: "CA"
                },
                citystate: {
                    type: "string",
                    description:
                    "This is generated automatically from the previous two fields",
                    template: "{{city}}, {{state}}",
                    watch: {
                        city: "location.city",
                        state: "location.state"
                    }
                }
            }
        },
        pets: {
            type: "array",
            format: "table",
            title: "养过动物",
            uniqueItems: true, //是否不能重复
            items: {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        enum: ["cat", "dog", "bird", "reptile", "other"],
                        default: "dog"
                    },
                    name: {
                        type: "string"
                    }
                }
            },
            default: [
                {
                    type: "dog",
                    name: "Walter"
                }
            ]
        }
    }
}

export default {
    data,
    scheme
}
    

  
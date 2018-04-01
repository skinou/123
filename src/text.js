const schema = {

  name: '',
  title: '',
  fappid: '',
  storageName: '',
  ercode: '',
  server: '',
  iconUrl: '',
  debug: '',
  isCover: '',
  isSubscribe: '',
  totalCount: '',

  shareConfig: {

    base: {
      title: '',
      desc: '',
      imgUrl: ''
    },

    forward: {
      title: '',
      desc: '',
      imgUrl: ''
    }
  },

  banner: [],
  other_banner: [],

  properties: {

    time: {

      startDate: '',
      endDate: '',
      startVote: '',
      endVote: '',
    },

    prule: {
      title: '',
      content: '',
      time: '',
      rule: '',
      explain: ''
    },

    poster: {
      desc: []
    },

    makesure: {
      title: '',
      content: '',
      time: '',
      rule: '',
      explain: ''
    },

    baomingInfo: {
      info1: '',
      info2: ''
    },

    rulepage: {
      productNum: [],
      theme: '',
      activityTime: '',
      awardTime: '',
      awardPlace: '',
      activityDoor: '',
      joinRule: [],

      prize_item: [
        {
          prize_no:''
        },
        {
          prize_content:''
        }

      ],

      award: {
        desc: ''
      }

    },
    doorInfo: [
      ['123','123123']
    ],
  }
};


export default {
  schema
}

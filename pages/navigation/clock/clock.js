Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://v1.alapi.cn/api/lajifenlei?name=' + value,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    console.log(value)
                    console.log(res.data)
                    resolve(res.data.data)
                }
            })
        })
    },
    selectResult: function (e) {
        wx.showModal({
          showCancel: false,
          content: e.detail.item.explain,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        console.log('select result', e.detail)
    },
});
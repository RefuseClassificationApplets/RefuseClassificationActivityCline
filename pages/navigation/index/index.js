Page({

  /**
   * 页面的初始数据
   */
  data: {
    //暂时固定轮播，后期从服务器获取
    background: ['/common/image/banner1.jpg', '/common/image/banner1.jpg', '/common/image/banner1.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list: [
      {
        id: 'nav',
        name: '相关资料',
        open: false,
        pages: [{ id: 'cy', name: '厨余垃圾', text: '是指家庭中产生的菜帮菜叶、瓜果皮核、剩菜剩饭、废弃食物等易腐性垃圾；从事餐饮经营活动的企业和机关、部队、学校、企业事业等单位集体食堂在食品加工、饮食服务、单位供餐等活动中产生的食物残渣、食品加工废料和废弃食用油脂；以及农贸市场、农产品批发市场产生的蔬菜瓜果垃圾、腐肉、肉碎骨、水产品、畜禽内脏等。其中，废弃食用油脂是指不可再食用的动植物油脂和油水混合物。' }, 
        { id: 'kh', name: '可回收物', text: '是指在日常生活中或者为日常生活提供服务的活动中产生的，已经失去原有全部或者部分使用价值，回收后经过再加工可以成为生产原料或者经过整理可以再利用的物品， 主要包括废纸类、塑料类、玻璃类、金属类、电子废弃物类、织物类等 。' },
        { id: 'yh', name: '有害垃圾', text: '是指生活垃圾中的有毒有害物质，主要包括 废电池 废荧光灯管 (日光灯管、节能灯等)， 废温度计，废血压计，废药品及其包装物，废油漆、溶剂及其包装物，废杀虫剂、消毒剂及其包装物，废胶片及废相纸 等。' },
        { id: 'qt', name: '其他垃圾', text: '是指除厨余垃圾、可回收物、有害垃圾之外的生活垃圾，以及难以辨识类别的生活垃圾。' }]
      }, {
        id: 'view',
        name: '成员介绍',
        open: false,
        pages: [{ id: 'hs', name: '韩硕', text: 'CTO组组长，负责技术开发，自媒体运营' }, 
        { id: 'hsh', name: '黄韶华', text: 'CPO组，负责实践过程方案撰写等方案撰写' },
        { id: 'sds', name: '孙涤生', text: 'CPO组组长，负责实践过程方案撰写等方案撰写' },
        { id: 'wyt', name: '王羽桐', text: 'CAO组，负责文艺策划工作' },
        { id: 'ysq', name: '阴思琪', text: 'CTO组，负责技术开发，自媒体推广' },
        { id: 'zhy', name: '周洪宇', text: 'CFO组，负责团队支出预算控制工作。' },
        { id: 'fyn', name: '冯亚宁', text: 'CFO组，负责团队支出预算控制工作。' },
        { id: 'acf', name: '安超凡', text: 'CTO组，负责技术开发，自媒体推广' },
        { id: 'swa', name: '舒文奥', text: '实践团团长，负责统筹协调，策划活动，带团冲锋' },
        { id: 'zzh', name: '张梓含', text: '实践团副团长，负责统筹协调，策划活动，带团冲锋' },]
      }, {
        id: 'content',
        name: '实践团介绍',
        open: false,
        pages: [{ id: 'zt', name: '活动主题', text: '关注公共卫生，聚焦人民健康。疫情期间，公共卫生引起全国人民广泛重视。计算机学院“青春有你”暑期实践团以公共卫生与健康为核心，积极开展垃圾分类、科学运动等活动，并充分利用自己的专业技能，通过开发垃圾分类识别小程序、垃圾分类线上积分小程序等，传播卫生知识，促进全民健康。' }, 
        { id: 'fyn', name: '垃圾分类宣传周', text: '积极响应国家和学校号召，实践团首先开展的活动是垃圾分类宣讲，通过给社区居民分发我们订做的垃圾分类宣传单，科普垃圾分类相关知识，来提高居民们的环保意识。这项活动取得了不错的成果，得到了社区居民们的积极响应。' },
        { id: 'fyn', name: '团队建设周', text: '在这一周，我们设计了实践团的logo、口号、团歌等，制作了实践团成员自我介绍视频，并通过开展垃圾分类在线知识竞赛、线上k歌比赛、线上运动打卡等，打造轻松愉快的学习氛围和力争向上的团队精神，为接下来的工作开展奠定良好基础。' },
        { id: 'fyn', name: '企业分享周', text: '在这一周，我们邀请到了铁道科学研究院博士、新浪产品运营总监、山西交通科学院大项目经理、北京创盈智通技术主管、交大博士等，分享行业前沿技术，讲述就业需求，助力大学生学业与职业规划。并且为我们团队活动提供了一些技术开发工作方面的指导。' },
        { id: 'fyn', name: '技术研讨周', text: '技术开发工作贯穿活动始终。在本周我们技术担当组进行技术开发知识普及和分享，他们将通过通俗易懂的方式，将其在实践过程中所学知识与团内成员进行分享，保证知识的流动，提升整团的专业素养。' },
        { id: 'fyn', name: '总结交流周', text: '在最后一周，我们交流心得体会，完成实践总结报告。通过这次实践活动，我们不仅增长了见识，开拓了思维，还在团成员不能面对面沟通的不利条件下，有了我们自己的小确幸：我们之间多了份默契，少了些怨气；多了份包容，少了些计较；多了份友情，少了些无趣……在这最后的一周时间里，我们为美好而充实的实践活动画上一个完美的句号，并期待下次实践活动能与曾经的队友再次成团。' }]
      }
    ],
    theme: 'light'
  },
  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
  },

  jump: function (e) {
    wx.showModal({
      showCancel: false,
      content: e.currentTarget.dataset['text'],
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },

  openUrl: function (e) {
    var type = e.currentTarget.dataset.type
    var url = '/pages/navigation/clock/clock'
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/home/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    list: [{
      title: '打卡领红包',
      desc: '您有1个10元红包可领取',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171226_2kall2je2079dh6ddkgc31d27cce2_38x38.png'
    }, {
      title: '优惠券',
      desc: '满100减20',
      slot: true,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_7ida8bdc21j18b91aa2ii3lk38b9i_38x38.png'
    }, {
      title: '钱和红包',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171011_0acg74g776ig2459c1c6gkge07hch_40x40.png'
    }, {
      title: '我的消息',
      desc: '和卖家沟通在这里',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_0ea73id6h6926k281cdhia0dg5gdg_38x38.png'
    }, {
      title: '我的收藏',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_6h37fg4074i3a2l2gb92dbbc15k84_38x38.png'
    }, {
      title: '足迹',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_00di1ei7f095j8b996icg79kl91kc_38x38.png'
    }, {
      title: '我的拼团',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_55gkg003el4k2jbg2d2ieh030fjcf_38x38.png'
    }, {
      title: '充值中心',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/180109_26hggaiha8k7blig5k4ihk5k967ii_38x38.png'
    }]
},

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {
  wx.showToast({
    title: '登录成功',
    icon: 'success',
    duration: 2000
  });
  if (app.globalData.userInfo) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  } else {
    wx.navigateTo({
      url: '../../index/index',
    })
  }
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {
  if (app.globalData.userInfo) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  } else {
    wx.navigateTo({
      url: '../../index/index',
    })
  }
},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})
// pages/home/comlist/comlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lAnimate: '',
    list:[
      {
        title: '视图容器',
        type: 'success',
        show: false,
        itemlist: [
          {
            name: 'view',
            src: './view/view'
          },
          {
            name: 'swiper',
            src: './swiper/swiper'
          },
          {
            name: 'swiper-item',
            src: ''
          }
        ]
      },
      {
        title: '基础内容',
        type: 'waiting',
        show: false,
        itemlist: [
          {
            name: 'text',
            src: ''
          },
          {
            name: 'icon',
            src: ''
          },
          {
            name: 'progress',
            src: ''
          }
        ]
      },
      {
        title: '媒体组件',
        type: 'success',
        show: false,
        itemlist: [
          {
            name: 'image',
            src: ''
          },
          {
            name: 'camera',
            src: './camera/camera'
          }
        ]
      }
    ]
  },
  clickcontent: function(event){
    const that = this;
    const index = event.currentTarget.dataset.index;
    const isShow = !this.data.list[index].show;
    this.setData({ 
      ['list[' + index + '].show']: isShow,
     });
    // this.trigger();
  },
  naviTo(event){
    const src = event.currentTarget.dataset.item.src;
    if(src){
      wx.navigateTo({
        url: src,
      })
    } else {
      wx.showToast({
        title: '暂未开发',
        icon: 'none'
      })
    }
  },
  trigger(){
    let vm = this;
    let option = {
      duration: 100, // 动画执行时间
      timingFunction: 'ease-in' // 动画执行效果
    };
    var lanimation = wx.createAnimation(option); // 创建动画
    // 起点
    lanimation.translateX(100);
    lanimation.opacity(0.1).step();
    vm.setData({
      lAnimate: lanimation.export(),// 开始执行动画
    })
    setTimeout(() => {
      // 起点
      lanimation.translateX(0);
      lanimation.opacity(1).step();
      var temp = vm.data.start;
      vm.setData({
        lAnimate: lanimation.export(),// 开始执行动画
      })
    }, 100);
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
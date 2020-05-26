// pages/home/morecomlist/morecomlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading:true,
    src:'https://www.baidu.com/s?rsv_idx=1&ch=12&tn=98010089_dg&wd=%E5%88%86%E4%BA%AB&fenlei=256&usm=2&ie=utf-8&rsv_cq=&rsv_dl=0_right_recommends_merge_21102&euri=496700a410394324bc0ce8c15166bf39',
    classificationList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classificationList:[
        {id:'001',title:'第一',active:true,list:[{title:'第一01',src:this.data.src},{title:'第一02',src:this.data.src},{title:'第一03',src:this.data.src},{title:'第一04',src:this.data.src}]},
        {id:'002',title:'第二',active:false,list:[{title:'第二01',src:this.data.src},{title:'第二02',src:this.data.src},{title:'第二03',src:this.data.src},{title:'第二04',src:this.data.src}]},
        {id:'003',title:'第三',active:false,list:[{title:'第三01',src:this.data.src},{title:'第三02',src:this.data.src},{title:'第三03',src:this.data.src},{title:'第三04',src:this.data.src}]},
        {id:'004',title:'第四',active:false,list:[{title:'第四01',src:this.data.src},{title:'第四02',src:this.data.src},{title:'第四03',src:this.data.src},{title:'第四04',src:this.data.src}]},
      ]
    })
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
    // "mp-loading": "/node_modules/weui-miniprogram/src/loading/loading"
    setTimeout(() => {
      this.setData({
        showLoading:false
      })
    }, 2000);
    const _observer = wx.createIntersectionObserver({observeAll:true});
    /* this.data.classificationList.map(item=>{
      
    }) */
      _observer.relativeTo('.content').observe('.classificationItem-text', (res) => {
        console.log(res);
        /* this.setData({
          appear: res.intersectionRatio > 0
        }) */
      })
  },
  goTo(e){
    const id = '.classificationItem-'+e.target.dataset.id;
    const that = this;
    wx.pageScrollTo({
      selector:id,
      success:function(res){
        const list = that.data.classificationList.map(item=>{
          item.active= false;
          if(item.id==e.target.dataset.id){
            item.active= true;
          }
          return item;
        })
        that.setData({
          classificationList:list
        })
      }
    })
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
    if (this._observer) this._observer.disconnect()
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
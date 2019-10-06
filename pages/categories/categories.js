
// pages/categories/categories.js
// 在页面生命周期函数上方，导入 request 模块
// 导入的时候解构对象的 request
// require()  需要写完整的相对路径，不能直接从根目录触发
const { request } = require("../../utils/request.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  初始化左侧默认索引
    activeIndex:0,
    //初始化分类总数据
    classify:[],
    //初始化二级分类
    subClassify:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用方法，请求数据
    this.getGoodsList()
  },
  // 封装请求商品列表数据方法
  getGoodsList(){
    //调用自已封装的request方法
    request({
      url:"categories"
    }).then(res=>{
      this.setData({
        classify:res,
        subClassify: res[this.data.activeIndex].children
      })
      console.log(this.data.classify)
    })
  },
  //点击分类左侧切换选项卡
  changeTab(event){
    const { index } = event.currentTarget.dataset
    //更新数据
    this.setData({
      activeIndex:index
    })
    console.log(this.data.activeIndex)
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
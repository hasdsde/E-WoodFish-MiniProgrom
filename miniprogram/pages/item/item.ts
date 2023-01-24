// pages/item/item.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    score: 0,
    items:[]
  },
  handleCost:function (e:any) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var that = this
    wx.request({
      url:'https://muyu.hasdsd.cn/api/item/getAll',
      success(res:any){
        that.data.items =res.data.data
        that.setData({
          items:res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that:any = this
    wx.getStorage({
      key:'username',
      success(res:any){
        // that.data.username = res.data
        that.setData({
          username:res.data
        })
      }
    })
    wx.getStorage({
      key:'score',
      success(res:any){
        // that.data.score = res.data
        that.setData({
          score:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
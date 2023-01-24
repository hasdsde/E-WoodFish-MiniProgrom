// pages/login/login.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  //获取前端值
  getUserName:function(e:any){
    this.setData({
      username : e.detail.value
    })
  },
  getPassword:function(e:any){
    this.setData({
      password:e.detail.value
    })
  },
  //登录
  handleLogin: function(e:any){
    if (this.data.username=='') {
      wx.showModal({
        title:'提示',
        content:'用户名不能为空',
        showCancel:false
      })
    }else{
      
    }
  },
  //注册
  handeleRegister:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
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
      wx.request({
        method:'POST',
        url:'https://muyu.hasdsd.cn/api/user/login',
        data:{
          username:this.data.username,
          password:this.data.password
        },
        success(res:any){
          //登录成功
          if (res.data.code==200) {
            console.log(res.data)
            wx.setStorage({
              key:'username',
              data:res.data.data.username
            })
            wx.setStorage({
              key:'score',
              data:res.data.data.score
            })
            wx.showToast({
              title:'登录成功',
              icon:'success',
              duration:1000,
            })
            wx.switchTab({
              url:'../index/index'
            })
          }else{
            wx.showModal({
              title:'提示',
              content:res.data.msg,
              showCancel:false
            })
          }
        }
      })
    }
  },
  //注册
  handeleRegister:function(){
    var that:any = this
    if (this.data.username=='') {
      wx.showModal({
        title:'提示',
        content:'用户名不能为空',
        showCancel:false
      })
    }else{
      wx.request({
        method:'POST',
        url:'https://muyu.hasdsd.cn/api/user/reg',
        data:{
          username:this.data.username,
          password:this.data.password
        },
        success(res:any){
         
          //注册成功
          if (res.data.code==200) {
            wx.setStorage({
              key:'username',
              data:that.data.username
            })
            wx.setStorage({
              key:'score',
              data:0
            })
            wx.showModal({
              title:'提示',
              content:'注册成功',
              showCancel:false
            })
            wx.switchTab({
              url:'../index/index'
            })
          }else{
            wx.showModal({
              title:'提示',
              content:res.data.msg,
              showCancel:false
            })
          }
        }
      })
    }
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
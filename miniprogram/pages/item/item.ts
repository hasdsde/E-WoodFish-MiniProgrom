// pages/item/item.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    score: 0,
    items:[],
    name:''
  },
  handleCost:function (e:any) {
    var that = this
    if (this.data.score>e.currentTarget.dataset.cost) {
      wx.request({
        url:'https://muyu.hasdsd.cn/api/cost/one?username='+this.data.username+'&cost='+e.currentTarget.dataset.cost+'&itemid='+e.currentTarget.dataset.id+'&palt=1',
        success(res:any){
          if (e.currentTarget.dataset.id==1) {
            that.data.name = '佛'
          }else if(e.currentTarget.dataset.id==2){
            that.data.name = '韩'
          }else{
            that.data.name = '宝'
          }
          if (res.data.code==200) {
            //消费成功
            wx.showModal({
              title:'使用完成',
              content:that.data.name+'不在乎',
              showCancel:false,
              success (res) {
                if (res.confirm) {
                  wx.showToast({
                    title: '此处应该有音乐',
                    icon: 'success',
                    duration: 2000
                  })
                }
              }
            })
            that.data.score = that.data.score-e.currentTarget.dataset.cost
            that.setData({
              score:that.data.score
            })
            wx.setStorage({
              key:'score',
              data:that.data.score
            })
          }else{
            wx.showModal({
              title:'提示',content:'余额不足!',showCancel:false,
            })
          }
        }
      })
    }else{
      wx.showModal({
        title:'提示',content:'余额不足!',showCancel:false
      })
    }
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
    console.log('重新加载');
    var that:any = this
    wx.getStorage({
      key:'username',
      success(res:any){
        that.data.username = res.data
        that.setData({
          username:res.data
        })
      }
    })
    wx.getStorage({
      key:'score',
      success(res:any){
        that.data.score = res.data
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
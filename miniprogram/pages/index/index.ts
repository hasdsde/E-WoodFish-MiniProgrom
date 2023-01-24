// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    username: '',
    score: 0
  },
  onLoad() {
    var that:any = this
    console.log('==========onLoad==========')
    wx.getStorage({
      key: 'username',
      success(res: any) {
        if (res == null) {
          wx.showToast({
            title: '获取信息失败',
            icon: 'error',
            duration: 1000
          })
        } else {
          //获取信息成功
          wx.showToast({
            title: '获取信息成功',
            icon: 'success',
            duration: 1000
          })
          that.setData({
            username:res.data
          })
          wx.getStorage({
            key:'score',
            success(res:any){
              that.setData({
                score:res.data
              })
            }
          })
        }
      },
      fail(res: any) {
        wx.showToast({
          title: '获取信息失败',
          icon: 'error',
          duration: 1000
        })
        wx.navigateTo({
          url:'../login/login'
        })
      }
    })
  },
  clickBtn: function (e: Function) {
    wx.showToast({
      title: '操作成功',
      icon: 'success',
      duration: 1000
    })

  }
})

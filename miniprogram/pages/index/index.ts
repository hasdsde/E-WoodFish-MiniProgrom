// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    username: '',
    score: 0
  },
  onShow(){
    console.log('重新加载')
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
    var that =  this
    wx.request({
      url:'https://muyu.hasdsd.cn/api/logs/swear?score=1&username='+that.data.username,
      success(res:any){
        //点击成功
        if (res.data.code==200) {
          console.log(res.data)
          wx.setStorage({
            key:'score',
            data:res.data.data.score
          })
        }
        that.setData({
          score:res.data.data.score
        })
      }
    })
    wx.showToast({
      title: '操作成功',
      icon: 'success',
      duration: 1000
    })

  },
  logout:function(e:Function){
    wx.showModal({
      title: '提示',
      content: '确定要退出账号吗？',
      success (res) {
        if (res.confirm) {
          wx.clearStorage()
          wx.navigateTo({
            url:'../login/login'
          })
        } else if (res.cancel) {
        }
      }
    })

  }
})

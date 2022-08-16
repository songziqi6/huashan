// index.js
let niupi;
let biaodanzhi;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex: 0,
    urls:0,
    type:''
   
  },
 

  swiperChange(e) {
   const that = this;
   that.setData({
     swiperIndex: e.detail.current,
   })
 },
 input:function(e){
 niupi=this.getURLFromString(e.detail.value)
     this.shujuqingqiu()
 },
 dianji:function(){
   this.setData({
    type:''
   })
     
   
 },


 

 
 getURLFromString: function(t) {
  var a = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  return a.test(t) ? t.match(a)[0] : "";
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  shujuqingqiu:function(huidiao){
    wx.request({
      url: `http://api.yidianzhuye.com/jk/dsp/pp.php?url=${niupi}`,
     success:(res)=>{
   this.setData({
     urls:res.data.results,


   })
   
     }  
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





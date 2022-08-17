// index.js
let niupi;
let biaodanzhi;
let baocun;
let niupi2=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex: 0,
    urls:0,
    type:'',
    dianshu:0,
   startX:0,
   startY:0,
   yidian1:"none",
   yidian2:"none",
  },
 

  swiperChange(e) {
   const that = this;
   that.setData({
     swiperIndex: e.detail.current,
   })
 },
 ceshikaishi:function(e){
  this.setData({
    startX: e.changedTouches[0].clientX,
    startY: e.changedTouches[0].clientY
  })
 },
 angle(start, end) {
  var _X = end.X - start.X,
    _Y = end.Y - start.Y;
  //返回角度 Math.atan()返回数字的反正切值
  return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
},
 ceshijieshu:function(e){
  let {startX,startY} = this.data;
  let touchMoveX = e.changedTouches[0].clientX;
  let touchMoveY = e.changedTouches[0].clientY;
  let angle = this.angle({
    X: startX,
    Y: startY
  }, {
    X: touchMoveX,
    Y: touchMoveY
  });
  if (Math.abs(angle) < 45 && touchMoveX < startX) {
    if(this.data.dianshu!=this.data.urls.length-1){
      this.data.dianshu++
    }
  };
  if (Math.abs(angle) < 45 && touchMoveX > startX ) {
    if(this.data.dianshu!=0){
      this.data.dianshu-- 
    }
    
    
  }

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

 baocun:function(){
  wx.downloadFile({
    url: `${this.data.urls[this.data.dianshu].url}`,//图片的地址
     success:function(res){
       const tempFilePath = res.tempFilePath  //如果请求成功，则通过res中的tempFilePath 得到需要下载的图片地址
       console.log(tempFilePath); //方便查看，这里打印路径，并且提示请求成功
       wx.showToast({
         title: '保存成功',
         duration: 2000//持续的时间
       });
      
       wx.saveImageToPhotosAlbum({
         filePath: tempFilePath,  //设置下载图片的地址
         success:function(){
           console.log('成功');
      ; 
         }
     })
    
   }
   })
   
     },


baocunquanbu(){
  niupi2=0;
  wx.downloadFile({
    url: `${this.data.urls[niupi2++].url}`,//图片的地址
     success:function(res){
       const tempFilePath = res.tempFilePath  //如果请求成功，则通过res中的tempFilePath 得到需要下载的图片地址
       console.log(tempFilePath); //方便查看，这里打印路径，并且提示请求成功
       wx.showToast({
         title: '保存成功',
         duration: 2000//持续的时间
       });
      
       wx.saveImageToPhotosAlbum({
         filePath: tempFilePath,  //设置下载图片的地址
         success:function(){
           console.log('成功');
      ; 
         }
     })
    
   }
   })
   
     },


     


quanbu:function(){
for(var i=0;i<=this.data.urls.length;i++){
this.baocunquanbu()

}




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
      url: `http://api.yidianzhuye.com/jk/dsp/?url=${niupi}`,
     success:(res)=>{
      console.log(res.data.results);
      
if (res.data.results!=null)
{

  this.setData({
    yidian2:'con',
urls:res.data.results,

  })
  return 
}
if (res.data.data.url!=null)
     {
       
      this.setData({
        yidian1:'con',
        urls:res.data.data.url
          })
       return
    
     }



  
 
   
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





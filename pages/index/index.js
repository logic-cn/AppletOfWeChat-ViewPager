//index.js
//获取应用实例
var app = getApp()
var initData = '\t让每个人都能享受科技的乐趣\n\n小米公司正式成立于2010年，是一家专注于高端智能手机、互联网电视以及智能家居生态链建设的创新型科技企业。\n\n让每个人都能享受科技的乐趣”是小米公司的愿景。小米公司应用了互联网开发模式开发产品的模式，用极客精神做产品\n\n用互联网模式干掉中间环节，致力于让全球每个人，都能享用来自中国的优质科技产品。';
var self ='技术支持@XXX网络研究院\n联系我们：18888888888\n微信号:demo';
var shijiam ='营业时间:7:30-20:30 冬夏一致';
var weixinhao ='微信号：demo';
Page({
  data: {
    text: initData,
    selftext:self,
    shijian:shijiam,
    weixinhao:weixinhao,
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    avatarUrl: null,
    pictures: ['../images/self.png',
    ],
    "banner_list": [
      {
        "banner": [
          {
              "pic_url": "../images/837.png",
          },
          {
              "pic_url": "../images/241.png",
          },
          {
              "pic_url": "../images/258.png",
          },
          {
              "pic_url": "../images/312.png",
          },
          {
              "pic_url": "../images/332.png",
          }
        ]
      },
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  },
  makePhoneCall:function(){
      wx.makePhoneCall({
          phoneNumber: '0451-XXXXXX',
      })
  },
  makemap:function(){
      wx.navigateTo({
          url: '../map/map',
      })
  },
  makePhoneCall2:function(){
      wx.makePhoneCall({
          phoneNumber: '18888888888',
      })
  },
})

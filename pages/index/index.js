const app = getApp()
import { formatTime } from '../../utils/util'
// import socket from '../../utils/socket'


app.getUserInfo();
Page({
  data: {
    list: []
  },
  goPage(e) {
    let newlist = this.data.list
    console.log(this.data)
    const index = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset)
    newlist[index].count = 0;
    this.setData({
      list: newlist
    })
    wx.navigateTo({
      url: '../message/message?name=' + e.currentTarget.dataset.name + "&id=" + e.currentTarget.dataset.id
    })
  },
  onReady(){
    const socketio = app.globalData.socketio
    socketio.emit('message', 'this.data.nickname')
    socketio.on('login', function (msg) {


    })

  },
  onLoad() {

    /*        socket.onMessage((data)=>{
                console.log(data)
                if(data.cmd != "CMD" || data.subCmd != 'ROOMS')
                    return
                data.rooms.forEach((room)=>{
                    room.updated = formatTime(room.updated)
                })
                if(data.cmd == 'CMD' && data.subCmd == 'ROOMS'){
                    this.setData({
                        list: data.rooms
                    })
                }
            })
            setTimeout(()=>{
           
                socket.sendMessage({
                    cmd:'ROOMS'
                })
            }, 2000)*/
    var lists = [
      {
        avatar: "https://m.gyiso.com/static/upload/bbsimgs/162969d5-c24c-4101-a3d6-1408d44e3850.jpg",
        name: "王浩",
        text: "哈哈",
        updated: "22:00",
        count: 1,
        id: "1"
      },
      {
        avatar: "https://m.gyiso.com/static/upload/bbsimgs/f6b0f4e5-99d0-496c-b28a-8aaeec993409.jpg",
        name: "成凤杰",
        text: "干什么呢",
        updated: "17:30",
        count: 0,
        id: "2"
      },
      {
        avatar: "https://m.gyiso.com/static/upload/bbsimgs/0a27ee17-76ed-4ecc-93bf-f285246254a0.jpg",
        name: "梁雨",
        text: "O(∩_∩)O",
        updated: "16:00",
        count: 0,
        id: "3"
      },
      {
        avatar: "https://m.gyiso.com/static/upload/bbsimgs/a1372063-6c5a-4d88-9cf0-b6f8659df2e9.jpg",
        name: "廖芳樱",
        text: "那先不管了",
        updated: "14:00",
        count: 14,
        id: "4"
      },
      {
        avatar: "https://m.gyiso.com/static/upload/bbsimgs/b57ac7e9-b526-462d-9613-669e8675fcf1.jpg",
        name: "邓福滨",
        text: "可以",
        updated: "10:00",
        count: 7,
        id: "5"
      }
    ];
    this.setData({
      list: lists
    })
  }
})
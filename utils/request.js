//用于封装request方法
const request = (param)=>{
  //显示提示框
  wx.showLoading({
    title: '疯狂加载中..'
  });

  //封装成promise对象
  return new Promise((resolve, reject) => {
    //基准路径
    const baseURL = "https://api.zbztb.cn/api/public/v1/";
    wx.request({
      url: baseURL + param.url,
      //请求成功回调函数
      success: (res) => {
        //解构数据
        const { message } = res.data
        //请求成功，执行resolve,并传输message数据
        resolve(message)
      },
      //请求失败回调函数
      fail: (err) => {
        reject(err)
      },
      //请求结束的回调函数
      complete: (res) => {
        //隐藏提示框 
        wx.hideLoading()
      },
    })
  })

}

//模块导出对象
module.exports ={
  request
}
let param = { // 配置多个地址
    url: 'http://192.168.1.58:45555/api-work-lib/api/v1/' // 173测试服务器
    // url : "http://172.21.91.25/service", //25测试服务器
}
var bmConfig = {
    api: param.url,
    timeout: '10000'
}
window.bmConfig = bmConfig

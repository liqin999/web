let param = { // 配置多个地址
    url: 'http://172.22.26.173/service' // 173测试服务器
    // url : "http://172.21.91.25/service", //25测试服务器
}
var bmConfig = {
    api: param.url,
    timeout: '10000',
    activeTextColor: '#ffd04b',
    MenubackgroundColor: '#545c64'
}
window.bmConfig = bmConfig

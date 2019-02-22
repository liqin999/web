<template>
    <!-- 登录页面 -->
    <div class="login-account">
            <!-- 背景图片 -->
            <div class="show-image"
                 :key="item"
                 v-for="item in showImages"
                 :style="'background-image:url(' + item.src + ')'"></div>
                <!-- 登录 -->
            <div class="login">
                <div class="title">
                    <h3>社办报刊全媒体采编系统</h3>
                </div>
                <!-- 登录信息 -->
                <div class="input">
                    <el-input  v-model="reqUser.userName"
                              placeholder="| 用户名"  style="border-radius: 20px;">
                                <i slot="prefix" class="iconfont icon-icon"></i>
                            </el-input>
                    <el-input  v-model="reqUser.password"
                              type="password"
                              placeholder="| 密码">
                                <i slot="prefix" class="iconfont icon-mima1"></i>
                            </el-input>
                    <!-- <div class="createCode">
                        <el-input v-model="userCode"
                                  prefix-icon="el-icon-ump-key"
                                  placeholder="验证码"
                                  @keyup.enter.native="signIn()"></el-input>
                        <span class="code"
                              @click="switchCode()">
                            {{ loginCode }}
                        </span>
                    </div> -->
                    <div class="sign-in">
                        <el-button round
                                   @click="signIn()">登录</el-button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginCode: '',
            userCode: '',
            reqUser: {      // 帐号密码
                userName: '',
                password: ''
            },
            showImages: [                      // 登录页图片
                {
                    src: require('../../assets/img/login1.jpg')
                }
            ]
        }
    },
    methods: {
        // 效验码函数
        // createCode () {
        //     this.loginCode = ''
        //     let codeLength = 4
        //     let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z']
        //     for (let i = 0; i < codeLength; i++) {
        //         let index = Math.floor(Math.random() * 62)
        //         this.loginCode += random[index]
        //     }
        // },
        // 切换效验码
        // switchCode () {
        //     this.createCode()
        // },
        // 登录
        signIn () {
            let userCode = this.userCode.toUpperCase()
            let loginCode = this.loginCode.toUpperCase()
            if (this.reqUser.userName.length === 0 || this.reqUser.password.length === 0 || userCode !== loginCode) {
                if (this.reqUser.userName.length === 0) {
                    this.$message({
                        message: '请输入用户名',
                        type: 'warning'
                    })
                } else if (this.reqUser.password.length === 0) {
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    })
                // } else if (userCode !== loginCode) {
                //     this.$message({
                //         message: '效验码不正确',
                //         type: 'warning'
                //     })
                //     // this.createCode()
                }
            } else {
                // 用户登录成功后！
                this.$router.push('/dataService')
            }
        }
    },
    mounted () {
        // this.createCode()
    }
}
</script>

<style scoped>
.login-account {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100vh;
}
.show-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50%;
    background-size: cover;
}
.login-account .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    z-index: 99;
    text-align: center;
    font-family: Raleway, sans-serif;
    font-weight: 300;
    background: linear-gradient(
        230deg,
        rgba(53, 8, 138, 0) 0%,
        rgb(46, 43, 56) 100%
    );
    padding: 1em 2em;
    line-height: 1.5;
}
.login-account .title {
    color: #fdfbfb;
    margin-bottom: 30px;
    font-size: 30px;
}
/* .login-account .createCode {
    position: relative;
}
.login-account .createCode .code {
    position: absolute;
    top: 10px;
    cursor: pointer;
    letter-spacing: 3px;
    right: 5px;
    color: #fff;
} */
.login-account .text {
    margin-top: 10px;
}
.login-account .text .text-pass {
    float: left;
}
.login-account .text .text-reg {
    float: right;
}
</style>
<style>
.login-account .input .el-input {
    margin-bottom: 30px;
    font-size:14px;
}
.login-account .input .el-input__inner {
    background: transparent;
    background-position: 15px 10px;
    border: 2px solid #4fa1d9;
    color: #61bfff;
    border-radius: 20px;
    /* text-indent: 10px; */
}
.login-account .input .sign-in .el-button {
    background: transparent;
    width: 100%;
    margin-top: 20px;
    border: 2px solid #4fa1d9;
    color: #4fa1d9;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    font-size: 14px;
}
.login-account .input .sign-in .el-button:hover {
    color: #fff;
    background: #4fa1d9;
    cursor: pointer;
}
</style>

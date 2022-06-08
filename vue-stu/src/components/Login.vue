<template>
  <div class="login_container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/logo.png" />
      </div>
      <div class="login-form">
        <el-form :model="form" ref="loginform" label-width="0px" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" prefix-icon="el-icon-goods" @keyup.enter="login"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入名称', trigger: 'change' }]
      }
    }
  },
  methods: {
    resetForm() {
      console.log('vm实例: ', this)
      let formInstance = this.$refs.loginform
      formInstance.resetFields()
    },
    login() {
      let formInstance = this.$refs.loginform
      formInstance.validate((valid) => {
        if (!valid) return
        this.$http
          .post('login', this.form)
          .then(({ data: result }) => {
            if (result.meta.status !== 200) {
              this.$message.error('登录失败!!')
              return
            }
            this.$message.info('登录成功')
            // 保存token 到sessionStorage
            sessionStorage.setItem('token', result.data.token)
            this.$router.push('/home')
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }
}
</script>

<style scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar-box {
  border: 1px solid #eee;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.avatar-box > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.login-form {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>

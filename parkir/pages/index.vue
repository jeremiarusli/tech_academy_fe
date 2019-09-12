<template>
  <div clas="login">
    <el-card class="box-card">
      <div slot="header">
        <span>Login</span>
      </div>
      <div>
        <el-form label-width="120px">
          <el-form-item label="Username">
            <el-input v-model="input.username" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="input.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button round style="width: 320px;" type="primary" @click="login()">
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.input.username,
            password: this.input.password
          }
        })
        this.$router.push('/in')
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
.box-card {
    width: 480px;
    margin: auto;
    margin-top: 150px;
    display: block;
}
</style>

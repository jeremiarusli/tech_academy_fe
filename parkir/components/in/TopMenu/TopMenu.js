export default {
  name: 'TopMenu',

  methods: {
    async handleLogout () {
      await this.$auth.logout()
    }
  }
}

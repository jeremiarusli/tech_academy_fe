<template>
  <div>
    <el-header>
      <top-menu />
    </el-header>
    <el-container>
      <el-aside width="250px">
        <side-menu />
      </el-aside>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideMenu from '~/components/in/SideMenu'
import TopMenu from '~/components/in/TopMenu'

export default {
  components: {
    SideMenu,
    TopMenu
  }
}
</script>

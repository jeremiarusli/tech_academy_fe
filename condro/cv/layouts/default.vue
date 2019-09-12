<template>
  <el-container>
    <el-row :gutter="10">
      <el-col :span="16" :offset="4" :xs="{ span: 24, offset: 0 }">
        <el-header></el-header>
        <el-main>
          <nuxt />
        </el-main>
        <el-footer>Version 2019.1</el-footer>
      </el-col>
    </el-row>
  </el-container>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

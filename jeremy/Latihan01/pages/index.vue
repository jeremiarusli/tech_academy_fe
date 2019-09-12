<template>
  <div class="bg-color">
    <el-row class="padding-top padding-bottom">
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :md="{ span: 16, offset: 4 }"
        :lg="{ span: 16, offset: 4 }"
        :xl="{ span: 16, offset: 4 }"
      >
        <el-row>
          <el-col class="bg-color-left" :span="10">
            <profile />
            <contact />
            <skills />
            <language />
          </el-col>
          <el-col class="bg-color-right" :span="14">
            <cv />
            <exp />
            <edu />
            <personality />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import profile from '~/components/profile'
import contact from '~/components/contact'
import skills from '~/components/skills'
import language from '~/components/language'
import cv from '~/components/cv'
import exp from '~/components/exp'
import edu from '~/components/edu'
import personality from '~/components/personality'
export default {
  components: {
    profile,
    contact,
    skills,
    language,
    cv,
    exp,
    edu,
    personality
  }
}
</script>
<style>
.bg-color {
  background-color: #4a4a4a;
}
.bg-color-left {
  background-color: #e9f0f7;
  align-items: center;
  justify-content: center;
  min-height: 1100px;
}
.bg-color-right {
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  min-height: 1100px;
}
.padding-top {
  padding-top: 80px;
  background-color: #4a4a4a;
}
.padding-bottom {
  padding-bottom: 80px;
  background-color: #4a4a4a;
}
</style>

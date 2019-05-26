<template>
  <el-card shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
    <el-container class="course-card">
      <el-aside width="120px">
        <img v-lazy="course.posterUrl" width="100%" height="100%">
      </el-aside>
      <el-container>
        <el-header height="20px">
          <el-row type="flex" justify="space-between">
            <el-col :span="6">{{ course.name }}</el-col>
            <el-col :span="4" class="right"><span>{{ course.likecount }}人收藏</span></el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="course-description">
            {{ course.description }}
          </div>
        </el-main>
        <el-footer height="20px">
          <el-link>详情</el-link>
        </el-footer>
      </el-container>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .el-card {
    height: 175px;
  }

  .el-container > * {
    margin: 5px 0;
  }

  .el-main {
    padding: 5px 20px;
  }

  .movie-card {
    height: 100%;
  }

  .movie-description {
    max-height: 100px;
    min-height: 40px;
    font-size: 14px;
    color: #666
  }

  .right {
    text-align: right;
  }
</style>

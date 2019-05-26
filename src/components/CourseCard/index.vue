<template>
  <el-card :body-style="{ padding: '0px' }" class="width">
    <img :src="course.posterUrl" class="image">
    <div style="padding=40px" >
      <span style="margin=10px">{{ course.name }}</span>
      <div style="padding=30px" >
        <el-rate
          v-model="course.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
     <router-link :to="'/course/info/' + course.id">
            <el-button type="primary" size="mini" round>详情</el-button>
          </router-link>
      </div>
    </div>
  </el-card>
<!--
  <el-card shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
    <el-container class="course-card">
     <el-aside width="100px">
       <img src="" alt="">
     </el-aside>
      <el-container>
        <el-header height="20px">
          <el-row type="flex" justify="space-between">
            <el-col :span="6" >{{ course.name }}</el-col>
          </el-row>
        </el-header>
        <el-main height="40px">
        </el-main>
        <el-footer height="20px">
          <router-link :to="'/course/info/' + course.id">
            <el-button type="primary" size="mini" round>详情</el-button>
          </router-link>
        </el-footer>

      </el-container>
       <el-aside width="120px">
         <el-col>课程评分</el-col>
         <el-rate
              v-model="course.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
      </el-aside>
    </el-container>
  </el-card> -->
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
  .width {
    width: 50%;
  }
  .image {
    width: 100%;
    display: block;
  }
  /* .el-container > * {
    margin: 5px 0;

  }

  .el-main {
    padding: 5px 20px;
    margin-top:20px;
  }
  .el-row{
    margin-top: 10px;
  }

  .course-card {
    height: 100%;
  }

  .course-description {
    max-height: 100px;
    min-height: 40px;
    font-size: 14px;
    color: #666
  } */
</style>

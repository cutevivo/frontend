<template>
  <el-card >
   <div><img :src="course.posterUrl" class="image"></div>
    <div style="padding=40px" >
      <div class="title">{{course.name}}</div>
      <div class="course-information">{{course.teacher}}</div>
       <div> <el-rate 
          v-model="course.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
        </div>
        <div class="course-information">{{course.description}}</div>
        <div>  
          <router-link :to="'/course/info/' + course.id">
            <el-button class="button">详情</el-button>
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

  .el-card {
    width:100%;
    height:100%;
  }
  
  .el-col {
    height: 100%;
  }

  .course-information {
    font-family: monospace;
    color: grey;
    height: 100%;
  }

  .title {
    font-family:"微软雅黑";
  }
  
</style>

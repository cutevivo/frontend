<template>
  <el-card class="father">
   <div><img :src="course.posterUrl" class="image"></div>
    <div class="course">
      <div class="title">{{course.courseName}}</div>
      <div class="course-information">{{course.teacher}}</div>
       <div> <el-rate
          v-model="course.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
        </div>
        <div class="course-information">
          <span class="overflow">{{ course.description.length > 100 ? course.description.slice(0, 100) + '...' : course.description }}</span>
        </div>
    </div>
    <div class="footer">
      <router-link :to="'/course/info/' + course.courseId">
        <el-button class="button">详情</el-button>
      </router-link>
    </div>
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
  div {
    margin: 3px 0;
  }

  .father {
    position: relative;
  }

  .course {
    height: 100%;
  }

  .footer {
    position: absolute;
    bottom: 1%;
  }

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

  .course-information {
    font-family: monospace;
    width: 100%;
    color: grey;
    height: 100%;
  }

  .overflow {
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  .title {
    font-family:"微软雅黑";
  }

</style>

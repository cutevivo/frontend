<template>
  <!-- <el-row>
    <el-col :span="8">
      <course-card v-for="course in courses" :key="course.id" :course="course" class="content" />
    </el-col>
  </el-row> -->
  <div class="main-container">
    <el-row v-for="(tmpCourses, i) in listCourses" :key="i" :gutter="20">
      <el-col :span="6" v-for="(course, j) in tmpCourses" :key="j">
        <course-card :course="course" class="content"></course-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import CourseCard from '@/components/CourseCard'

export default {
  name: 'CourseList',
  components: {
    'course-card': CourseCard
  },
  data() {
    return {
      courses: [
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '数据结构',
          teacher:'许卓尔',
          description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关',
          score: 4.0
        },
        {
          id: 7,
          posterUrl: 'https://szimg.mukewang.com/5ad05dc00001eae705400300-360-202.jpg',
          teacher:'许卓尔',
          name: '计算机网络',
          description:'计算机网络是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。',
          score: 3.5
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher:'许卓尔',
          description: '一门很棒的课',
          score: 4.0
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher:'许卓尔',
          description: '一门很棒的课',
          score: 4.0
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher:'许卓尔',
          description: '一门很棒的课',
          score: 4.0
        }
      ]
    }
  },
  computed: {
    listCourses: function() {
      const courses = this.courses
      const sectionCount = 4
      var arrTmp = []
      for(let i=0; i < courses.length; ++i) {
        const index = parseInt(i / sectionCount)
        if(index >= arrTmp.length) {
          arrTmp.push([])
        }
        arrTmp[index].push(courses[i])
      }
      return arrTmp
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-container {
    margin: 0 5%;
  }
  .content {
    margin: 10px 0px;
  }
</style>

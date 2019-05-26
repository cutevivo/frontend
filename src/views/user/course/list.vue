<template>
  <el-row>
    <el-col :span="8">
      <course-card v-for="course in courses" :key="course.id" :course="course" class="content" />
    </el-col>
  </el-row>
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
          description: '一门很棒的课',
          score: 4.0
        },
        {
          id: 7,
          posterUrl: 'https://szimg.mukewang.com/5ad05dc00001eae705400300-360-202.jpg',
          teacher:'许卓尔',
          name: '计算机网络',
          description:'哈哈哈哈',
          score: 3.5
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .cards-container {
    padding: 20px;
    background-color: #f0f2f5;
    height: 100%;
  }

  .content {
    margin: 10px 0px;
  }
</style>

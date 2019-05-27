<template>
  <!-- <el-row>
    <el-col :span="8">
      <course-card v-for="course in courses" :key="course.id" :course="course" class="content" />
    </el-col>
  </el-row> -->
  <el-container class="main-container">
    <el-main>
      <el-row v-for="(tmpCourses, i) in listCourses" :key="i" :gutter="20">
          <el-col v-for="(course, j) in tmpCourses" :key="j" :span="6">
            <course-card :course="course" />
          </el-col>
        </el-row>
    </el-main>
  </el-container>

</template>

<script>
import CourseCard from '@/components/CourseCard'
import { getCourses } from '@/api/course'
export default {
  name: 'CourseList',
  components: {
    'course-card': CourseCard
  },
  data() {
    return {
      coursesLoading: true,
      courses: []
    }
  },
  created() {
    this.fetchCourses()
  },
  computed: {
    listCourses: function() {
      const courses = this.courses
      const sectionCount = 4
      var arrTmp = []
      for (let i = 0; i < courses.length; ++i) {
        const index = parseInt(i / sectionCount)
        if (index >= arrTmp.length) {
          arrTmp.push([])
        }
        arrTmp[index].push(courses[i])
      }
      return arrTmp
    }
  },
  methods: {
    fetchCourses() {
      this.coursesLoading = true
      getCourses().then(response => {
        this.courses = response.data || []
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    height: 363px;
  }

  .el-col {
    height: 100%;
  }

  .main-container {
    margin: 0 0 0 0;
    padding: 10px 0;
  }

  .el-card {
    height: 100%;
  }

</style>

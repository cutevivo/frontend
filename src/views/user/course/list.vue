<template>
  <!-- <el-row>
    <el-col :span="8">
      <course-card v-for="course in courses" :key="course.id" :course="course" class="content" />
    </el-col>
  </el-row> -->
  <el-container class="main-container">
    <el-aside width="15%">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>大一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">离散数学</el-menu-item>
            <el-menu-item index="1-2">计算系统基础</el-menu-item>
            <el-menu-item index="1-3">软件工程</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>大二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">数据科学</el-menu-item>
            <el-menu-item index="1-2">计算机组成</el-menu-item>
            <el-menu-item index="1-3">软件工程二</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <el-row v-for="(tmpCourses, i) in listCourses" :key="i" :gutter="20">
            <el-col v-for="(course, j) in tmpCourses" :key="j" :span="6">
              <course-card :course="course" />
            </el-col>
          </el-row>
      </el-main>
    </el-container>
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

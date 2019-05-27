<template>
  <div class="dashboard-container">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in imagesbox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="热门课程" name="first">
        <div>
          <el-row v-for="(tmpCourses, i) in listCourses" :key="i" :gutter="20">
            <el-col v-for="(course, j) in tmpCourses" :key="j" :span="6">
              <course-card :course="course" />
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="课程分类" name="second">
        <div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="专业课" name="1">
              <el-col :span="4"><el-link href="https://element.eleme.io" target="_blank">软件工程</el-link></el-col>
              <el-col :span="4"><el-link type="primary">计算机</el-link></el-col>
              <el-col :span="4"><el-link type="primary">更多...</el-link></el-col>
            </el-collapse-item>
            <el-collapse-item title="通识课" name="2">
              <el-col :span="4"><el-link href="https://element.eleme.io" target="_blank">文学</el-link></el-col>
              <el-col :span="4"><el-link type="primary">历史</el-link></el-col>
              <el-col :span="4"><el-link type="primary">更多...</el-link></el-col>
            </el-collapse-item>
            <el-collapse-item title="通修课" name="3">
              <el-col :span="4"><el-link href="https://element.eleme.io" target="_blank">数学</el-link></el-col>
              <el-col :span="4"><el-link type="primary">英语</el-link></el-col>
              <el-col :span="4"><el-link type="primary">政治</el-link></el-col>
              <el-col :span="4"><el-link type="primary">更多...</el-link></el-col>
            </el-collapse-item>
            <el-collapse-item title="其他" name="4">
              <el-col :span="4"><el-link type="primary">更多...</el-link></el-col>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CourseCard from '@/components/CourseCard'
export default {
  name: 'Dashboard',
  components: {
    'course-card': CourseCard
  },
  data() {
    return {
      activeNames: ['1'],
      imagesbox: [
        { id: 0, idView: require('../../assets/images/p1.png') },
        { id: 1, idView: require('../../assets/images/p2.png') },
        { id: 2, idView: require('../../assets/images/p3.png') }
      ],
      courses: [
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '数据结构',
          teacher: '许卓尔',
          description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关',
          score: 4.0
        },
        {
          id: 7,
          posterUrl: 'https://szimg.mukewang.com/5ad05dc00001eae705400300-360-202.jpg',
          teacher: '许卓尔',
          name: '计算机网络',
          description: '计算机网络是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。',
          score: 3.5
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher: '许卓尔',
          description: '一门很棒的课',
          score: 4.0
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher: '许卓尔',
          description: '一门很棒的课',
          score: 4.0
        },
        {
          id: 8,
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
          name: '计算机系统',
          teacher: '许卓尔',
          description: '一门很棒的课',
          score: 4.0
        }
      ],
      methods: {
        handleChange(val) {
          console.log(val)
        }
      }

    }
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

  .image{
    height:100%;
    width:100%;
  }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

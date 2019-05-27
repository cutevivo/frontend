<template>
  <div>
    <div class="course-info">
      <img :src="course.posterUrl" class="image">
      <div class="course-title">{{ course.name }}</div>
      <el-container direction="vertical">
        <el-main>
          <div class="course-des">
            <div>{{ course.teacher }}</div>
            <div>{{ course.description }}</div>
          </div>
        </el-main>
        <el-foot>
          <div class="test">
            <div style="text-align: left; font-size: 12px">评分</div>
            <div>
              <el-rate
                v-model="course.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              />
            </div>
          </div>
        </el-foot>
      </el-container>
      <el-tabs tab-position="left" style="height: 100%;" :stretch="true" @tab-click="handleClick">
        <el-tab-pane v-for="(chapter, index) in this.chapters" :key="index" :label="chapter.name">
          <div class="notes-container">
            <note-card v-for="note in notes" :key="note.id" :note="note" class="note-container" />
          </div>
        </el-tab-pane>
      </el-tabs>
      <div>
        <book-card v-for="book in books" :key="book.id" :book="book" class="book-container" />
      </div>
    </div>
  </div>
</template>

<script>
// import CourseCard from '@/components/CourseCard'
import NoteCard from '@/components/NoteCard'
import { fetchCourse } from '@/api/course'
import { fetchNotes } from '@/api/note'

export default {
  name: 'CourseInfo',
  components: {
    'note-card': NoteCard
  },
  computed: {
    chapters: function() {
      return [...Array(parseInt(this.course.chapterNum)).keys()].map(i => {
        return {
          index: i,
          name: `第${i + 1}章`
        }
      })
    }
  },
  data() {
    return {
      course: null,
      courseId: 1,
      chapterId: 1,
      notes: []
    }
  },
  created: function() {
    this.courseId = this.$route.params && this.$route.params.id
    this.fetchCourse(this.courseId)
    this.fetchNotes(this.courseId, this.chapterId)
  },
  methods: {
    handleClick(tab, event) {
      const id = tab.paneName
      this.chapterId = this.course.chapters[id].index
    },
    fetchCourse(id) {
      fetchCourse(id).then(response => {
        this.course = response.data || {}
      }).catch(err => {
        console.log(err)
      })
    },
    fetchNotes(courseId, chapterId) {
      fetchNotes(courseId, chapterId).then(response => {
        this.notes = response.data.notes
        debugger
      })
    }
  }
}
</script>

<style scoped>
  img {
    height: 100%;
    width: 100%;
  }
  .el-tabs {
    margin: 0 10% 100px 10%;
  }
  .el-tab-pane {
    margin-bottom: 10px;
  }
  .course {
    height: 200px;
  }
  .course-info {
    padding: 0;
    height: 100%;
    margin: 5px 10%;
  }
  .note-container {
    margin-bottom: 5px;
  }
  .el-tabs {
    padding-left: 20px;
  }
  .image{
    margin-top: 10px;
    margin-bottom:10px;
    height: 200px;
    width: 100%;
    filter: blur(15px);
  }
  .course-title{
    font-family:'Gill Sans';
    font-size: 200%;
    margin-left: 10px;
    margin-bottom: 20px;
    color:black;

  }
  .course-des{
    margin-left: 10px;
    color: gray;
    margin-right: 10px;
  }
  .test{
    margin-left: 30px;
    margin-bottom: 40px;
  }
</style>


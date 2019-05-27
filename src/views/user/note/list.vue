<template>
  <div>
    <div class="course-info">
      <div class="course-title">我的笔记</div>
          <div class="notes-container">
            <note-card v-for="note in notes" :key="note.noteId" :note="note" class="note-container" />
          </div>
    </div>
    <div class="referance" />
  </div>
</template>

<script>
// import CourseCard from '@/components/CourseCard'
import NoteCard from '@/components/NoteCard'
import { fetchUserNotes } from '@/api/note'

export default {
  name: 'CourseInfo',
  components: {
    // 'course-card': CourseCard,
    'note-card': NoteCard
  },
  data() {
    return {
      notes: [],
      type: '',
      userId
    }
  },
  created: function() {
    this.type = this.$route.params && this.$route.params.type
    this.userId = this.$store.state.user.token
    this.fetchNotes()
  },
  methods: {
    handleClick(tab, event) {
      const id = tab.paneName
      this.chapterId = this.course.chapters[id].index
    },
    fetchNotes() {
      fetchUserNotes(this.userId, this.type).then(response => {
        this.notes = response.data || []
      }).catch(err => {
        console.log(err)
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
    height: 100px;
    width: 100%;
    filter:blur(20px);
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
    margin-right: 150px;
  }
  .test{
    margin-left: 30px;
    margin-bottom: 40px;
  }
</style>


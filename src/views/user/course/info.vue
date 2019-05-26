<template>
  <div class="course-info">
    <course-card :course="course" />
    <el-tabs tab-position="left" style="height: 100%;" :stretch="true" @tab-click="handleClick">
      <el-tab-pane v-for="(chapter, index) in course.chapters" :key="index" :label="chapter.name">
        <div class="notes-container">
          <note-card v-for="note in notes" :key="note.id" :note="note" class="content" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard'
import NoteCard from '@/components/NoteCard'

export default {
  name: 'CourseInfo',
  components: {
    'course-card': CourseCard,
    'note-card': NoteCard
  },
  data() {
    return {
      chapterId: 0,
      course: {
        id: 8,
        posterUrl: 'https://pic4.zhimg.com/v2-420c56ceacffe9b0593d7c09df6fd934_1200x500.jpg',
        name: '夏目友人帐',
        description: '啥都不知道',
        likecount: 5,
        chapters: [
          {
            index: 1,
            name: '第一章'
          },
          {
            index: 2,
            name: '第一章'
          },
          {
            index: 3,
            name: '第一章'
          },
          {
            index: 4,
            name: '第一章'
          },
          {
            index: 5,
            name: '第一章'
          }
        ]
      }
    }
  },
  computed: {
    notes: function() {
      return [
        {
          id: this.chapterId,
          name: 'xxx',
          likecount: this.chapterId,
          description: 'xxxxxx'
        },
        {
          id: this.chapterId,
          name: 'xxx',
          likecount: this.chapterId,
          description: 'xxxxxx'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      const id = tab.paneName
      this.chapterId = this.course.chapters[id].index
    }
  }
}
</script>

<style scoped>
  .course-info {
    padding: 0;
    height: 100%;
  }

  .el-tabs {
    padding-left: 20px;
  }
</style>


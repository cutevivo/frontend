<template>
  <div>
    <div class="course-info">
      <el-container>
      </el-container>
      <el-tabs tab-position="left" style="height: 100%;" :stretch="true" @tab-click="handleClick">
        <el-tab-pane v-for="(chapter, index) in course.chapters" :key="index" :label="chapter.name">
          <div class="notes-container">
            <note-card v-for="note in notes" :key="note.id" :note="note" class="note-container" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="referance">
    </div>
  </div>
</template>

<script>
// import CourseCard from '@/components/CourseCard'
import NoteCard from '@/components/NoteCard'

export default {
  name: 'CourseInfo',
  components: {
    // 'course-card': CourseCard,
    'note-card': NoteCard
  },
  created: function() {
    // this.chapterId = 1;
  },
  data() {
    return {
      chapterId: 1,
      course: {
        id: 8,
        posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
        name: '数据结构',
        description: '啥都不知道',
        score: 4,
        chapters: [
          {
            index: 1,
            name: '第一章'
          },
          {
            index: 2,
            name: '第二章'
          },
          {
            index: 3,
            name: '第三章'
          },
          {
            index: 4,
            name: '第四章'
          },
          {
            index: 5,
            name: '第五章'
          }
        ]
      }
    }
  },
  computed: {
    notes: function() {
      return [
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: '瑞士计算机科学'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
        }
      ]
    },
    books: function() {
      return [
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: '瑞士计算机科学'
        },
        {
          id: '12345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          text: 'xxxxxx'
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
  }
  .note-container {
    margin-bottom: 5px;
  }
  .el-tabs {
    padding-left: 20px;
  }
</style>


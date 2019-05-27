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
        <el-tab-pane v-for="(chapter, index) in course.chapters" :key="index" :label="chapter.name">
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
import BookCard from '@/components/BookCard'
export default {
  name: 'CourseInfo',
  components: {
    // 'course-card': CourseCard,
    'note-card': NoteCard,
    'book-card': BookCard
  },
  data() {
    return {
      chapterId: 1,
      course: {
        id: 8,
        posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
        name: '数据结构',
        teacher: '许卓尔',
        description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有',
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
          id: '1234',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          isLike: false,
          text: '瑞士计算机科学'
        },
        {
          id: '1345',
          name: 'xxx',
          time: '2019-5-18 20:36:13',
          likecount: this.chapterId,
          isLike: true,
          text: 'xxxxxx'
        }
      ]
    },
    books: function() {
      return [
        {id: 8,
        posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
        name: '数据结构',
        teacher: '许卓尔',
        description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有',
        score: 4,
        },
        {id: 8,
        posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',
        name: '数据结构',
        teacher: '许卓尔',
        description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有',
        score: 4,
        }
      ]
    }
  },
  created: function() {
    // this.chapterId = 1;
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


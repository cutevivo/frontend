<template>
  <el-container class="elContainer">
    <el-aside width="15%" class="aside"></el-aside>
    <el-container width="70%" class="elContainer">
      <el-header class="title">
        数据结构：八大数据结构分类
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="1">
            <div class="head">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3914950518,3569645197&fm=26&gp=0.jpg" class="img">
            </div>
          </el-col>
          <el-col :span="23">
            <div>
              <span>作者</span><br>
              <span>简介</span><br>
            </div>
          </el-col>
        </el-row>
        <div class="note">
          <div :v-html="html" />
        </div>
      </el-main>
      <el-footer>
        <el-col :span="6" :offset="12">
          <el-button type="warning" icon="el-icon-star-off" circle @click="getHtml"></el-button>
        </el-col>
      </el-footer>
    </el-container>
    <el-aside width="15%" class="aside"></el-aside>
    <div class="hide">
      <markdown-editor ref="markdownEditor" v-model="note.content" language="en_US" height="300px" class="none" />
    </div>
  </el-container>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { fetchNote } from '@/api/note'

const defaultNote = {
  title: 'Title', // 文章题目
  content: '## Title\n - list\n - list2', // 文章内容
  content_short: '', // 文章摘要
  display_time: '', // 前台展示时间
  id: undefined,
  author: 'Author',
  score: 0
}

export default {
  name: 'CreateForm',
  components: {
    'markdown-editor': MarkdownEditor
  },
  data() {
    return {
      content: '',
      title: '',
      html: '<h2>Title</h2><ul><li>list</li><li>list2</li></ul>',
      note: Object.assign({}, defaultNote)
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    console.log('Is viewing ' + id)
    this.fetchData(id)
  },
  methods: {
    setPageTitle() {
      const title = '查看笔记'
      document.title = `${title} - ${this.note.title}`
    },
    getHtml() {
      debugger
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    },
    fetchData(id) {
      this.getHtml()
      this.note.content = "##Title\n-a\n-b"
      // fetchNote(id).then(reponse => {
      //   this.note = reponse.data
      //   this.setPageTitle()
      // }).catch(err => {
      //   console.log(err)
      // }).finally(() => {
      //   this.getHtml()
      // })
    }
  }
}
</script>

<style scoped>
  .hide {
    display: none;
  }

  .note {
    margin: 0 20%;
  }

  .elContainer{
    padding-top: 40px;
    margin-block: 30px;
  }
  .row{
    margin-top: 10px;
  }
  .title{
    font-size: 200%;
    padding-block: 20px;
    font-weight: 900;
  }
  .text{
    margin-left:20px;
    margin-right: 20px;
  }
  .aside{
    margin-left:20px;
    margin-right: 20px;
  }
  .img{
    height: 100%;
    width: 100%;
  }
  .head{
    height:100%;
    width:100%;
  }
  .el-row {
    margin-bottom: 20px;
   
  }
</style>


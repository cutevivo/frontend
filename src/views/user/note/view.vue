<template>
  <div>
    <div class="author">
    </div>
    <div class="note">
      <div v-html="html" />
    </div>
    <div class="hide">
      <markdown-editor ref="markdownEditor" v-model="note.content" :language="language" height="300px" class="none" />
    </div>
  </div>
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
      html: '',
      note: Object.assign({}, defaultNote)
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    console.log('Is viewing ' + id)
    this.fetchData(id)
  },
  methods: {
    fetchData(id) {
      fetchNote(id).then(reponse => {
        this.note = reponse.data
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.getHtml()
      })
    },
    setPageTitle() {
      const title = '查看笔记'
      document.title = `${title} - ${this.note.title}`
    },
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
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
</style>


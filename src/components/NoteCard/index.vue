<template>
  <el-card shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
    <el-container class="note-card">
      <el-container>
        <el-header height="20px">
          <el-row justify="space-between">
            <el-col :span="6"><div>{{ note.header }}</div></el-col>
            <el-col :span="6" :offset="6"><div class="collection"><span>{{ note.thumbs }}人收藏</span></div></el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="note-description">{{ note.comment }}</div>
        </el-main>
        <el-footer height="20px">
          <el-col :span="6">
            <router-link :to="'/note/view/' + note.noteId">
              <el-button type="text">更多</el-button>
            </router-link>
          </el-col>
          <el-col :span="6" :offset="12">
            <div class="collection">
              <el-button :type="this.btnType" icon="el-icon-star-off" circle @click="onCollection" />
            </div>
          </el-col>
        </el-footer>
      </el-container>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLike: this.note.isLike
    }
  },
  computed: {
    btnType: function() {
      console.log('type change' + this.isLike)
      return this.isLike ? 'warning' : 'text'
    }
  },
  methods: {
    onCollection: function() {
      this.isLike = !this.isLike
      // TODO: 更新后台
    }
  }
}
</script>

<style scoped>
  .el-card {
    height: 175px;
  }

  .el-container > * {
    margin: 5px 0;
  }

  .el-main {
    padding: 5px 20px;
  }

  .note-card {
    height: 100%;
  }

  .time {
    color: #304156;
  }
  .collection {
    text-align: right;
  }

  .note-description {
    max-height: 100px;
    min-height: 40px;
    font-size: 14px;
    color: #666
  }

  .right {
    text-align: right;
  }
</style>

<template>
  <el-card shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
    <el-container class="note-card">
      <el-container>
        <el-header height="20px">
          <el-row type="flex" justify="space-between">
            <el-col :span="6">{{ note.name }}</el-col>
            <el-col :span="4" class="right"><span>{{ note.likecount }}人收藏</span></el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="note-description">
            {{ note.description }}
          </div>
        </el-main>
        <el-footer height="20px">
          <router-link :to="'/note/info/' + note.id">
            <el-button type="primary" size="small">详情</el-button>
          </router-link>
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

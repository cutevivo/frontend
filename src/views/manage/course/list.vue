<template>
  <div>
    <h1>这里是所有课程</h1>
    <router-link :to="'/manage/comment/' + row.id">
      <el-button type="primary" size="small">
        管理评论
      </el-button>
    </router-link>

    <router-link :to="'/manage/edit/' + row.id">
      <el-button type="primary" size="small">
        修改信息
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: {
        id: 1
      }
    }
  }
}
</script>

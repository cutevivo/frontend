<template>
  <el-card class="father">
    <div><img :src="book.posterUrl" class="image"></div>
    <div class="book">
      <div class="title">{{ book.name }}</div>
      <div class="book-information">{{ book.teacher }}</div>
      <div> <el-rate
        v-model="book.score"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      />
      </div>
      <div class="book-information">
        <span class="overflow">{{ book.description.length > 100 ? book.description.slice(0, 100) + '...' : book.description }}</span>
      </div>
    </div>
    <div class="footer">
      <router-link :to="'/book/info/' + book.id">
        <el-button class="button">详情</el-button>
      </router-link>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  div {
    margin: 3px 0;
  }

  .father {
    position: relative;
  }

  .book {
    height: 100%;
  }

  .footer {
    position: absolute;
    bottom: 1%;
  }

  .width {
    width: 50%;
  }

  .image {
    width: 100%;
    display: block;
  }

  .el-card {
    width:100%;
    height:100%;
  }

  .book-information {
    font-family: monospace;
    width: 100%;
    color: grey;
    height: 100%;
  }

  .overflow {
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  .title {
    font-family:"微软雅黑";
  }

</style>
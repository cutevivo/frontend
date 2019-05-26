<template>
  <div class="movies-container">
    <course-card v-for="course in courses" :key="course.id" :course="course" class="content" />
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard'

export default {
  name: 'CourseList',
  components: {
    'course-card': CourseCard
  },
  data() {
    return {
      courses: [
        {
          id: 8,
          posterUrl: 'https://pic4.zhimg.com/v2-420c56ceacffe9b0593d7c09df6fd934_1200x500.jpg',
          name: '夏目友人帐',
          description: '啥都不知道',
          likecount: 5
        },
        {
          id: 7,
          posterUrl: 'https://pic4.zhimg.com/v2-420c56ceacffe9b0593d7c09df6fd934_1200x500.jpg',
          name: '夏目友人帐',
          description: '在人与妖怪之间过着忙碌日子的夏目，偶然与以前的同学结城重逢，由此回忆起了被妖怪缠身的苦涩记忆。此时，夏目认识了在归还名字的妖怪记忆中出现的女性·津村容莉枝。和玲子相识的她，现在和独子椋雄一同过着平稳的生活。夏目通过与他们的交流，心境也变得平和。但这对母子居住的城镇，却似乎潜伏着神秘的妖怪。在调查此事归来后，寄生于猫咪老师身体的“妖之种”，在藤原家的庭院中，一夜之间就长成树结出果实。而吃掉了与自己形状相似果实的猫咪老师，竟然分裂成了3个',
          likecount: 6
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .movies-container {
    padding: 20px;
    background-color: #f0f2f5;
    height: 100%;
  }

  .content {
    margin: 10px 0px;
  }
</style>

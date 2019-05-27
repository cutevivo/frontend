export default [
  // user login
  {
    url: '/course/all',
    type: 'get',
    response: config => {
      return {
        success: true,
        data: {
          courses: [
            {
              courseId: 8,
              posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',	
              courseName: '数据结构',
              teacher: '许卓尔',
              description: '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关',	
              score: 4.0,
              chapterNum: 8
            },
            {
              courseId: 7,
              posterUrl: 'https://szimg.mukewang.com/5ad05dc00001eae705400300-360-202.jpg',	
              teacher:'许卓尔',
              courseName: '计算机网络',
              description:'计算机网络是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。',	
              score: 3.5,
              chapterNum: 5
            },	
            {	
              courseId: 8,	
              posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',	
              courseName: '计算机系统',	
              teacher:'许卓尔',	
              description: '一门很棒的课',	
              score: 4.0,
              chapterNum: 6
            },	
            {	
              courseId: 8,	
              posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',	
              courseName: '计算机系统',	
              teacher:'许卓尔',	
              description: '一门很棒的课',	
              score: 4.0,
              chapterNum: 7
            },	
            {	
              courseId: 8,	
              posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',	
              courseName: '计算机系统',	
              teacher:'许卓尔',	
              description: '一门很棒的课',	
              score: 4.0,
              chapterNum: 8
            }	
          ]
        }
      }
    }
  },
  {
    url: '/course/info\.*',
    type: 'get',
    response: config => {
      return {
        success: true,
        code: 20000,
        data: {	
          courseId: 8,	
          posterUrl: 'https://szimg.mukewang.com/5c62a4dc0812e84106000338-360-202.jpg',	
          courseName: '计算机系统',	
          teacher:'许卓尔',	
          description: '一门很棒的课',	
          score: 4.0,
          chapterNum: 8
        }	
      }
    }
  },
  {
    url: '/note/list\.*',
    type: 'get',
    response: config => {
      return {
        success: true,
        code: 200,
        data: {
          notes: [
            {
              id: '1234',
              name: 'xxx',
              time: '2019-5-18 20:36:13',
              likecount: 123,
              isLike: false,
              text: '瑞士计算机科学'
            },
            {
              id: '1345',
              name: 'xxx',
              time: '2019-5-18 20:36:13',
              likecount: 55,
              isLike: true,
              text: 'xxxxxx'
            }
          ]
        }
      }
    }
  }
]

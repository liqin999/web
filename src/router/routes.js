//一级路由的信息
/**
    栏目/版面库   columnsLayout
    我的稿库      myManuscript
    其他人员库     otherManuscript
    媒体公共库     mediaManuscript
    组室公共库     groupManuscript
    专题库        specialManuscript
    已签稿库      signedManuscript  
    大样调阅      reviewDetail 
    搜索稿件      searchManuscript  
    稿件流向      manuscriptFlow
    稿件库管理    manuscriptSetting
    写稿         writeManuscript 
    投稿         sendManuscript 
    新闻日历      newsCalendar  
 */
const columnsLayout = r =>require.ensure([], () => r(require("@/pages/columnsLayout/index.vue")), "columnsLayout");
const myManuscript = r =>require.ensure([], () => r(require("@/pages/myManuscript/index.vue")), "myManuscript");
const otherManuscript = r =>require.ensure([], () => r(require("@/pages/otherManuscript/index.vue")), "otherManuscript");

const mediaManuscript = r =>require.ensure([], () => r(require("@/pages/mediaManuscript/index.vue")), "mediaManuscript");
const groupManuscript = r =>require.ensure([], () => r(require("@/pages/groupManuscript/index.vue")), "groupManuscript");
const specialManuscript = r =>require.ensure([], () => r(require("@/pages/specialManuscript/index.vue")), "specialManuscript");

const signedManuscript = r =>require.ensure([], () => r(require("@/pages/signedManuscript/index.vue")), "signedManuscript");
const reviewDetail = r =>require.ensure([], () => r(require("@/pages/reviewDetail/index.vue")), "reviewDetail");
const searchManuscript = r =>require.ensure([], () => r(require("@/pages/searchManuscript/index.vue")), "searchManuscript");
const manuscriptFlow = r =>require.ensure([], () => r(require("@/pages/manuscriptFlow/index.vue")), "manuscriptFlow");
const manuscriptSetting = r =>require.ensure([], () => r(require("@/pages/manuscriptSetting/index.vue")), "manuscriptSetting");

const writeManuscript = r =>require.ensure([], () => r(require("@/pages/writeManuscript/index.vue")), "writeManuscript");
const sendManuscript = r =>require.ensure([], () => r(require("@/pages/sendManuscript/index.vue")), "sendManuscript");
const newsCalendar = r =>require.ensure([], () => r(require("@/pages/newsCalendar/index.vue")), "newsCalendar");

export const routes = [
    {
        path: "/columnsLayout",
        component: columnsLayout,
    },
    {
        path: "/myManuscript",
        component: myManuscript,
    },
    {
        path: "/otherManuscript",
        component: otherManuscript,
    },

    {
        path: "/mediaManuscript",
        component: mediaManuscript,
    },
    {
        path: "/groupManuscript",
        component: groupManuscript,
    },
    {
        path: "/specialManuscript",
        component: specialManuscript,
    },

    {
        path: "/signedManuscript",
        name: "signedManuscript",
        components: {//命名视图形式
            default: signedManuscript
        },
      },

      {
        path: "/reviewDetail",
        component: reviewDetail,
      },
      {
        path: "/searchManuscript",
        component: searchManuscript,
      },
      {
        path: "/manuscriptFlow",
        component: manuscriptFlow,
      },
      {
         path: "/manuscriptSetting",
         component: manuscriptSetting,
     },
        {
            path: "/writeManuscript",
            component: writeManuscript,
        },
        {
            path: "/sendManuscript",
            component: sendManuscript,
        },
        {
            path: "/newsCalendar",
            component: newsCalendar,
        },

];

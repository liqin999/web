// 一级路由的信息
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
const columnsLayout = r => require.ensure([], () => r(require('@/pages/columnsLayout/index.vue')), 'columnsLayout')
const myManuscript = r => require.ensure([], () => r(require('@/pages/myManuscript/index.vue')), 'myManuscript')
const otherManuscript = r => require.ensure([], () => r(require('@/pages/otherManuscript/index.vue')), 'otherManuscript')

const mediaManuscript = r => require.ensure([], () => r(require('@/pages/mediaManuscript/index.vue')), 'mediaManuscript')
const groupManuscript = r => require.ensure([], () => r(require('@/pages/groupManuscript/index.vue')), 'groupManuscript')
const specialManuscript = r => require.ensure([], () => r(require('@/pages/specialManuscript/index.vue')), 'specialManuscript')

const signedManuscript = r => require.ensure([], () => r(require('@/pages/signedManuscript/index.vue')), 'signedManuscript')
const reviewDetail = r => require.ensure([], () => r(require('@/pages/reviewDetail/index.vue')), 'reviewDetail')
const searchManuscript = r => require.ensure([], () => r(require('@/pages/searchManuscript/index.vue')), 'searchManuscript')
const manuscriptFlow = r => require.ensure([], () => r(require('@/pages/manuscriptFlow/index.vue')), 'manuscriptFlow')
const manuscriptSetting = r => require.ensure([], () => r(require('@/pages/manuscriptSetting/index.vue')), 'manuscriptSetting')

const writeManuscript = r => require.ensure([], () => r(require('@/pages/writeManuscript/index.vue')), 'writeManuscript')
const sendManuscript = r => require.ensure([], () => r(require('@/pages/sendManuscript/index.vue')), 'sendManuscript')
const newsCalendar = r => require.ensure([], () => r(require('@/pages/newsCalendar/index.vue')), 'newsCalendar')

// buttons路由
const sendDraft = r => require.ensure([], () => r(require('@/components/buttons/sendDraft/sendDraft.vue')), 'sendDraft')
const deleteDraft = r => require.ensure([], () => r(require('@/components/buttons/deleteDraft/deleteDraft.vue')), 'deleteDraft')
const edit = r => require.ensure([], () => r(require('@/components/buttons/edit/edit.vue')), 'edit')
const issuance = r => require.ensure([], () => r(require('@/components/buttons/issuance/issuance.vue')), 'issuance')
const markRead = r => require.ensure([], () => r(require('@/components/buttons/markRead/markRead.vue')), 'sendmarkReadDraft')
const reviewers = r => require.ensure([], () => r(require('@/components/buttons/reviewers/reviewers.vue')), 'reviewers')
const split = r => require.ensure([], () => r(require('@/components/buttons/split/split.vue')), 'split')
const submit = r => require.ensure([], () => r(require('@/components/buttons/submit/submit.vue')), 'submit')
const version = r => require.ensure([], () => r(require('@/components/buttons/version/version.vue')), 'version')
const draftLabel = r => require.ensure([], () => r(require('@/components/buttons/draftLabel/draftLabel.vue')), 'draftLabel')
// buttons弹窗路由
const draftMessageBox = r => require.ensure([], () => r(require('@/components/buttons/sendDraft/box/draftMessageBox.vue')), 'draftMessageBox')
const issuanceMessageBox = r => require.ensure([], () => r(require('@/components/buttons/issuance/box/issuanceMessageBox.vue')), 'issuanceMessageBox')
const labelMessageBox = r => require.ensure([], () => r(require('@/components/buttons/draftLabel/box/labelMessageBox.vue')), 'labelMessageBox')

export const routes = [{
    path: '/columnsLayout',
    component: columnsLayout
},
{
    path: '/myManuscript',
    component: myManuscript
},
{
    path: '/otherManuscript',
    component: otherManuscript
},

{
    path: '/mediaManuscript',
    component: mediaManuscript
},
{
    path: '/groupManuscript',
    component: groupManuscript
},
{
    path: '/specialManuscript',
    component: specialManuscript
},

{
    path: '/signedManuscript',
    name: 'signedManuscript',
    components: {
        default: signedManuscript
    }
},
{
    path: '/reviewDetail',
    component: reviewDetail
},
{
    path: '/searchManuscript',
    component: searchManuscript
},
{
    path: '/manuscriptFlow',
    component: manuscriptFlow
},
{
    path: '/manuscriptSetting',
    component: manuscriptSetting
},
{
    path: '/writeManuscript',
    component: writeManuscript
},
{
    path: '/sendManuscript',
    component: sendManuscript
},
{
    path: '/newsCalendar',
    component: newsCalendar
},
// buttons路由定义
{
    path: '/sendDraft',
    component: sendDraft
},
{
    path: '/draftMessageBox',
    component: draftMessageBox
},
{
    path: '/deleteDraft',
    component: deleteDraft
},
{
    path: '/edit',
    component: edit
},
{
    path: '/issuance',
    component: issuance
},
{
    path: '/markRead',
    component: markRead
},
{
    path: '/reviewers',
    component: reviewers
},
{
    path: '/split',
    component: split
},
{
    path: '/submit',
    component: submit
},
{
    path: '/version',
    component: version
},
{
    path: '/draftLabel',
    component: draftLabel
},
// buttons弹窗路由
{
    path: '/issuanceMessageBox',
    component: issuanceMessageBox
},
{
    path: '/labelMessageBox',
    component: labelMessageBox
}
]

import component from './components/index.vue'

export default {
    name: '示例组件',
    previewData: {
        routeAlias: '/alias',
        props: {
            open:true,
            msgList:['dddd']
        }
    },
    ctrl: {
        component
    }
}

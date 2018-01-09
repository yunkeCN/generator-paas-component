<template>
    <div class="marquee-wrap">
        <div>
            {{msgList[0]}}
        </div>
        <div v-if="open" class="colse-btn">X</div>
    </div>
</template>

<script>

    export default {
        props: {
            value: Object,
            msgList: Array,
            open: Boolean
        },
        data() {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        beforeCreate() {
        },
        updated() {
            console.log(this)
        },
        created() {
            console.log(this)
        }
    }
</script>

<style lang="less">
    .marquee-wrap .colse-btn {
    }

</style>

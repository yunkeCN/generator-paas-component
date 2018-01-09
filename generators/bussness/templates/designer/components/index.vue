<template>
  <div>
    <div v-for="(msg,index) in list" :key="index">{{msg}}</div>
    <el-switch type="checkbox" v-model="isOpen" @change="commit"/>
  </div>
</template>

<script>
  export default {
    props: {
      value: Object
    },
    data() {
      return {
        isOpen: false,
        list: []
      };
    },
    watch: {
      value: {
        deep: true,
        immediate: true,
        handler(val) {
          (this.list = val.props.msgList), (this.isOpen = val.props.open);
        }
      }
    },
    methods: {
      commit(open) {
        this.$emit('onupdate', {
          props: {
            open,
            msgList: this.list
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>

</style>

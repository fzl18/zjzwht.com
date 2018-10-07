<template>
  <div class="leftSide" :class=" value ? 'show':''">
    <dl>
      <dt> 侧边显示</dt>
      <dd>1</dd>
      <dd>2</dd>
      <dd>3</dd>
      <dd @click="close">关闭</dd>
    </dl>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }, 
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){
            this.$emit('input',false)
        }
    }
}
</script>


<style lang="less" scoped>
@height:100vh;
@width:30%;
.leftSide{
    height:@height;
    width:@width;
    background:rgba(255, 255, 0, .8);
    border-left:2px solid #333;
    position: fixed;
    transition:all 1s ease;
    top:0;
    left:-@width;
    z-index:999;
    color:#000;
    padding:20px;
    opacity:0;
}
.show{
    left:0;
    opacity:1;
}
</style>
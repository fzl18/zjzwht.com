<template>
  <div class="topSide" :class=" value ? 'show':''">
    <dl>
      <dt> 顶部下降显示</dt>
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
        return({
        })
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
@height:500px;
@width:600px;
.topSide{
    height:@height;
    width:@width;
    background: #fff;
    border:5px solid #333;
    position: fixed;
    transition:all 1s ease;
    top:-@height;
    left:calc(50% - @width/2);
    z-index:999;
    // transform:translate(0,-@height)
}
.show{    
    top: calc(50% - @height/2);
    // transform:translate(0,0)
}
</style>
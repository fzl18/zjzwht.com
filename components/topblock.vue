<template>
  <div class="topSide" :class=" value ? 'show':''">
    <dl>
      <dt> 顶部下降显示</dt>
      <dd @click="changeSkin(1)">skin1</dd>
      <dd @click="changeSkin(2)">skin2</dd>
      <dd @click="close">关闭</dd>
    </dl>
    <changeLang />
  </div>
</template>

<script>
import changeLang from "./changeLang";
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
    components:{
        changeLang
    },
    methods:{
        close(){
            this.$store.commit('toggle','topShow')
        },
        changeSkin(type){
            if(localStorage.skin && localStorage.skin != type){
                localStorage.skin = type
                location.reload()
            }else if(!localStorage.skin){
                localStorage.skin = type
                location.reload()
            }else{
                return
            }
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
    padding:20px;
    opacity:0;
    // transform:translate(0,-@height)
}
.show{    
    top: calc(50% - @height/2);
    opacity:1;
    // transform:translate(0,0)
}
</style>
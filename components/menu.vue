<template>
  <div class="mainbox no">
    <div class="menu">      
      <Affix :offset-top="100" @on-change="change">
        <dl>
          <dt></dt>
          <dd v-for="(item,index) in this.lang[this.local].menu" @click="jumpTo(`#part-${index + 1}`)" :class=" activeMenu == (index )? 'cur':''" >{{item}}</dd>
        </dl>
        <div @click="$store.commit('toggle','topShow')">{{lang[local].setting}}{{topShow ? lang[local].hide:lang[local].show}}</div> 
        <div @click="$store.commit('toggle','leftShow')">{{lang[local].leftSide}}{{leftShow ? lang[local].hide:lang[local].show}}</div>
        <a href="javascript:;" @click="jumpTo('#index')">top</a>
      </Affix> 
    </div>
  </div>
</template>
<script>
    import {mapState} from "vuex"
    export default {
        data(){
          return{
            activeMenu:0,
            allOffset:[]
          }
        },
        computed:
          mapState(['lang','local','topShow','leftShow'])
        ,
        mounted(){
          this.$nextTick(function () {
          this.lang[this.local].menu.map((d,i)=>{
            this.allOffset.push(document.querySelector(`#part-${i+1}`).offsetTop)
          })
            window.addEventListener('scroll', this.onScroll)
          })
        },
        methods:{
          change(){
          },
          onScroll() {
            let scrolled = document.documentElement.scrollTop || document.body.scrollTop
            let count = 0
            let len = this.allOffset.length
            this.allOffset.map((d,i)=>{
              if (scrolled > d ){
                count++
                (i == (len -1)) && (this.activeMenu = count)
              }else{
                this.activeMenu = count
              }
            })            
          },
          jumpTo(id){
            let len = document.querySelector(id).offsetTop
            const sTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollTop(window, sTop, len, this.duration)
          },

          scrollTop(el, from = 0, to, duration = 1000, endCallback) {
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = (
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        return window.setTimeout(callback, 1000/60);
                    }
                );
            }
            const difference = Math.abs(from - to);
            const step = Math.ceil(difference / duration * 50);
            function scroll(start, end, step) {
                if (start === end) {
                    endCallback && endCallback();
                    return;
                }

                let d = (start + step > end) ? end : start + step;
                if (start > end) {
                    d = (start - step < end) ? end : start - step;
                }

                if (el === window) {
                    window.scrollTo(d, d);
                } else {
                    el.scrollTop = d;
                }
                window.requestAnimationFrame(() => scroll(d, end, step));
            }
            scroll(from, to, step);
          }
        }
    }
</script>

<style lang="less" scoped>
@width:120px;
.mainbox{
  position: relative;
}
.menu{
  text-align:center;
  position:absolute;
  width: @width;
  right:-@width;
  dd{    
    display:block;
    cursor:pointer;
    &.cur{color:red}
  }
}
</style>



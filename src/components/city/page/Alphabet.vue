<template>
    <div class="alphabet">
      <ul>
        <li class="item" v-for="item of letters" :key="item" :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}</li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props:{
          cities:Object
        },
        computed:{
          letters(){
            const letters = []
            for(let i in this.cities){
              letters.push(i)
            }
            return letters
          }
        },
        data(){
          return{
            touchStatus:false,
            startY:0
          }
        },
        updated(){
          this.startY = this.$refs['B'][0].offsetTop
        },
        methods:{
          handleLetterClick(e){
          this.$emit('change',e.target.innerText)
          },
          handleTouchStart(){
            this.touchstatus = true
          },
          handleTouchMove(e){
            if(this.touchstatus){
              if(this.timer){
                clearTimeout(this.timer)
              }
              this.timer = setTimeout(function (){
                const touchY = e.touches[0].clientY
                console.log(touchY)
                const index = Math.floor((touchY - this.startY) /20)
                if(index >=0 && index < this.letters.length){
                  this.$emit('change',this.letters[index])
                }
              },16)
            }
          },
          handleTouchEnd(){
            this.touchstatus = false
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .alphabet
    display: flex
    flex-direction :column
    justify-content :center
    position :absolute
    top: 1rem
    right:0
    bottom:0
    width :.4rem
    .item
      line-height : .45rem
      text-align :center
</style>

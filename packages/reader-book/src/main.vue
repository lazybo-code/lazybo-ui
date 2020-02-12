<template>
  <div class="lazy-reader" :class="className">
    <!-- 读取文字区域 -->
    <content class="lazy-page-read-content">
      <article class="lazy-read-article" :style="{margin: `0 ${clearance}px`}">
        <section
          ref="readerBook"
          class="lazy-reader-book"
          :style="{transform: `translateX(${translateX+move}px)`, transition: `all ${animationSeconds}s ease`, fontSize: `${fontSize}rem`}">
          <h3 v-if="title">{{ title }}</h3>
          <p v-for="(item, index) in readerBook" :key="index">{{ item }}</p>
        </section>
      </article>
    </content>
    <!-- 全屏覆盖区域 -->
    <div
      class="lazy-reader-cover"
      @touchstart="touchStart"
      @touchend="touchEnd"
      @touchmove="touchMove">
      <!-- 上方数据 -->
      <div class="lazy-cover-top">
        <h1 v-if="pageCurrent > 0" class="lazy-read-book-name">
          <slot name="cover-top" :data="slotData">{{ title }}</slot>
        </h1>
      </div>
      <!-- 三块区域 左 中 右 -->
      <div @click="previousPage" class="lazy-cover-left"/>
      <div @click="onCenter" class="lazy-cover-centre"/>
      <div @click="nextPage" class="lazy-cover-right"/>
      <!-- 下方数据 -->
      <div class="lazy-cover-bottom">
        <span class="lazy-page-statistical">
          <slot name="cover-bottom-left" :data="slotData">{{ pageCurrent + 1 }}/{{ pageTotal }}</slot>
        </span>
        <span class="lazy-more">
          <slot name="cover-bottom-right" :data="slotData"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LaReaderBook',
    props: {
      title: {type: String, default: ''},
      content: {type: String, default: ''},
      clearance: {type: Number, default: 16},
      fontSize: {type: Number, default: 1.125},
      className: {type: String, default: ''},
      animationSeconds: {type: Number, default: 0.3},
      noLeftRightClick: {type: Boolean, default: false},
    },
    data: () => ({
      pageTotal: 0,
      pageCurrent: 0,
      translateX: 0,
      startPoint: 0,
      move: 0,
    }),
    computed: {
      slotData() {
        return {
          page: {
            total: this.pageTotal,
            current: this.pageCurrent + 1
          },
          title: this.title,
        };
      },
      readerBook() {
        this.calculateTotalPage();
        return this.content.split(/\n/g);
      }
    },
    methods: {
      touchStart(e) {
        this.startPoint = e.touches[0].screenX;
      },
      touchEnd(e) {
        let end = e.changedTouches[0].screenX;
        let start = this.startPoint;
        let delta = start - end;
        if (delta > 10) {
          this.nextPage();
        } else if (delta < -10) {
          this.previousPage();
        }
        this.move = 0;
      },
      touchMove(e) {
        this.move = e.changedTouches[0].screenX - this.startPoint;
      },
      created() {
        this.calculateTotalPage();
      },
      previousPage() {
        if (this.noLeftRightClick) return;
        if (this.pageCurrent <= 0) {
          this.onToEnd(0);
          return;
        }
        this.pageCurrent--;
        this.calculateTranslateX();
        if (this.pageCurrent - 1 === 0) {
          this.onToEnd(1);
        }
      },
      nextPage() {
        if (this.noLeftRightClick) return;
        if (this.calculatePage(this.pageCurrent)) {
          this.onToEnd(3);
          return;
        }
        this.pageCurrent++;
        this.calculateTranslateX();
        if (this.pageCurrent + 1 === this.pageCurrent) {
          this.onToEnd(2);
        }
      },
      calculateTotalPage() {
        this.$nextTick(() => {
          this.pageTotal = parseInt(this.$refs.readerBook.scrollWidth / (this.$refs.readerBook.offsetWidth));
        })
      },
      onToEnd(type) {
        this.$emit('onToEnd', type);
      },
      onCenter() {
        this.$emit('onCenter')
      },
      calculateTranslateX() {
        this.translateX = -(this.$refs.readerBook.offsetWidth + this.clearance) * (this.pageCurrent);
      },
      calculatePage(page) {
        const number = (this.$refs.readerBook.offsetWidth) * (page + 1);
        return this.$refs.readerBook.scrollWidth - number <= this.$refs.readerBook.offsetWidth;
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../styles/scss/reader-book";
</style>

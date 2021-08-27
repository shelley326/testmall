import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";
import { BACKTOP_DISTANCE } from "common/const";

export const itemListnerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    //对监听事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log("我是混入中的内容");
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data: function() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE;
    }
  }
};

/* import {POP, NEW, SELL} from "./const";

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
} */

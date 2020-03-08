<template>
  <div>
    <div class="inputContent">
      <div class="block">
        <span class="b-title">日期</span>
        <span class="b-content">2020.02.04</span>
      </div>
      <div class="block">
        <span class="b-title">关键字</span>
        <span class="b-content-1">请输入线路、车牌号或e通卡号</span>
      </div>
      <div class="block">
        <span class="b-title">类型</span>
        <span class="b-content">全部</span>
      </div>
      <div class="block">
        <span class="b-title">地区</span>
        <span class="b-content">厦门</span>
      </div>
    </div>
    <div class="remind">注：可输入任意一项进行查询；数据更新截止时间：2020.02.05</div>
    <div class="button">查询</div>
  </div>
</template>

<script>
export default {
  name: 'html',
  components: {},
  props: {},
  computed: {},
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {}
}
</script>
<style scoped lang='scss'>
$ue-width: 750;
@function px2rem($px) {
  @return #{$px/$ue-width * 10}rem;
}
.inputContent {
  margin: px2rem(249) px2rem(20) px2rem(20) px2rem(20);
  width: px2rem(710);
  height: px2rem(388);
  background-color: rgba(255, 255, 255, 1);
  border-radius: px2rem(8);
}
.block {
  width: 100%;
  height: px2rem(97);
  position: relative;
  font-size: px2rem(30);
  line-height: px2rem(97);
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: px2rem(30);
    right: px2rem(30);
    width: px2rem(650);
    height: px2rem(2);
    background-color: #e8e8e8;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  .b-title {
    margin-left: px2rem(32);
    color: #323232;
  }
  .b-content {
    margin-left: px2rem(108);
  }
  .b-content-1 {
    margin-left: px2rem(79);
    color: #ababab;
  }
}
.remind {
  margin-left: px2rem(21);
  font-size: px2rem(22);
  color: #ABABAB;
}
.button {
  width: px2rem(710);
  height: px2rem(72);
  margin-top: px2rem(30);
  margin-left: px2rem(20);
  background-color: #48ADF5;
  border-radius: px2rem(8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: px2rem(32);
  color: #ffffff;
  letter-spacing: px2rem(2.98);
  &:active {
    background-color: rgb(32, 154, 241);
  }
}
</style>

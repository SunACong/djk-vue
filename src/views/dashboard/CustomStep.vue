<template>
  <div>
    <div class="custom-steps">
      <div class="left-steps">
        <el-steps align-center>
          <el-step
            v-for="(d, i) in topSteps"
            :key="d.title"
            :icon="i !== active? 'el-icon-success':'el-icon-loading'"
            :title="d.title"
            :description="d.description"
            :status="active > i ? 'finish' : ''"
            @click.native="throwActive(i)"
          />
        </el-steps>
        <div class="left-steps-bottom">
          <el-steps class="left-steps-bottom-item" align-center>
            <el-step
              v-for="(d, i) in bottomSteps"
              :key="i"
              :icon="i == stepsData.length - active - 1?'el-icon-loading':'el-icon-success'"
              :title="d.title"
              :description="d.description"
              :status="i > stepsData.length - active - 2 ? 'finish' : ''"
              @click.native="throwActive(stepsData.length-i-1)"
            />
          </el-steps>
        </div>

      </div>
      <div class="right-steps" @click="throwActive(7)">
        <div class="circle" :class="[active>7 ? 'finish' : '']">
          <p class="icon">
            <i :class="active==7? 'el-icon-loading':'el-icon-success'" />
            <span class="tips">
              <span>{{ midSteps.title }}</span>
              <span>{{ midSteps.description }}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomStep',
  props: {
    stepsData: {
      type: Array,
      default() {
        return []
      }
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      topSteps: [],
      midSteps: {},
      bottomSteps: [],
      midFlag: false,
      midNum: 0
    }
  },
  watch: {
    active() {
      this._setActive()
    }
  },
  mounted() {
    this._initStepsData()
  },
  methods: {
    throwActive(i) {
      this.$emit('active', i)
    },
    // 测试方法
    _next() {
      this.active++
      this._setActive()
    },
    _setActive() {
      console.log(this.active)
      if (this.active > this.topSteps.length) {
        this.midFlag = true
      }
      if (this.active === 0) {
        this.midFlag = false
      }
    },
    // 初始化数据
    _initStepsData() {
      const stepsData = this.stepsData
      if (stepsData && stepsData.length > 0) {
        const n = Math.floor(stepsData.length / 2)
        this.midNum = n
        this.topSteps = stepsData.slice(0, n)
        this.midSteps = stepsData[n]
        this.bottomSteps = stepsData.slice(n + 1).reverse()
      }
    }
  }
}
</script>

<style scoped lang="less">
.circle {
  width: 160px;
  height: 110px;
  margin-top: 10px;
  border: 5px solid #c0c4cc;
  border-radius: 0 30% 30% 0/50%;
  border-left: none;
  position: relative;
  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    width: 36px;
    height: 36px;
    transform: translate(55%, -50%);
    background-color: #fff;
    border-radius: 50%;
    color: #c0c4cc;
    text-align: center;
    font-size: 12px;
    border: 8px solid #ffffff;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-success {
      font-size: 36px;
      color: #cecece;
    }
    .el-icon-loading {
      font-size: 36px;
      color: #cecece;
    }
    .tips {
      display: flex;
      position: absolute;
      left: 30px;
      font-size: 12px;
      color: #c0c4cc;
      width: 80px;
      padding-right: 8px;
      flex-direction: column;
      text-align: center;
      > span:first-child {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  &.finish {
    border-color: #409eff;
    .icon {
      .el-icon-success {
        color: #409eff;
      }
      .tips {
        color: #409eff;
      }
    }
  }
}
</style>

<style scoped lang="less">
.custom-steps {
  // padding: 40px;
  display: flex;
  .left-steps {
    width: calc(~"100% - 160px");
    .left-steps-bottom{

      margin-top: 40px;
      .left-steps-bottom-item{

      }
    }
    // height: 40px;
    // float: left;
  }
  .right-steps {
    /*float: right;*/
    margin-left: -100px;
  }
  // /deep/.el-step__icon {
  //   // /*background: #f6f6f6;
  // }
  /deep/.el-step__icon-inner {
    font-size: 36px;
  }
  /deep/.el-step__line {
    background: transparent;
    border-top: 5px solid;
    .el-step__line-inner {
      border-width: 0 !important;
    }
  }
  /deep/.el-step {
    position: relative;
    .el-step__head.is-process {
      color: #c0c4cc;
      border-color: #c0c4cc;
    }
    .el-step__title.is-process {
      color: #c0c4cc;
      font-weight: unset;
    }
  }
}
</style>


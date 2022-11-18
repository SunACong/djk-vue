<template>
  <div>
    <div class="custom-steps">
      <div class="left-steps">
        <el-steps align-center >
          <el-step
            v-for="(d, i) in topSteps"
            :key="d.title"
            icon="el-icon-success"
            :title="d.title"
            :description="d.description"
            :status="active > i ? 'finish' : ''"
          />
        </el-steps>
        <el-steps align-center >
          <el-step
            v-for="(d, i) in bottomSteps"
            :key="i"
            icon="el-icon-success"
            :title="d.title"
            :description="d.description"
            :status="i > stepsData.length - active - 2 ? 'finish' : ''"
          />
        </el-steps>
      </div>
      <div class="right-steps">
        <div class="circle" :class="[midFlag ? 'finish' : '']">
          <p class="icon">
            <i class="el-icon-success" />
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
        this.bottomSteps = stepsData.slice(n).reverse()
      }
    }
  }
}
</script>

<style scoped lang="less">
.circle {

  width: 150px;
  height: 300px;
  margin-top: 10px;
  border: 0px solid #c0c4cc;
  border-radius: 0 25% 25% 0/50%;
  border-left: none;
  position: relative;
  .icon {
    position: absolute;
    right: 35px;
    top: 50%;
    width: 40px;
    height: 11px;
    transform: translate(55%, -50%);
    background-color: #fff;
    border-radius: 50%;
    color: #000000;
    text-align: center;
    font-size: 11px;
    border: 8px solid #ffffff;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-success {
      font-size: 0;
      color: #cecece;
    }
    .tips {
      display: flex;
      position: absolute;
      right: 0px;
      font-size: 0px;
      color: #c0c4cc;
      width: 11px;
      padding-right: 11px;
      flex-direction: column;
      text-align: center;
      > span:first-child {
        font-size: 0px;
        font-weight: 100;
      }
    }
  }
  &.finish {
    border-color: #00ff00;
    .icon {
      .el-icon-success {
        color: #00ff00;
      }
      .tips {
        color: #00ff00;
      }
    }
  }
}
</style>

<style scoped lang="less">
.custom-steps {
  padding: 30px;
  display: flex;
  .left-steps {
    width: calc(~"100% - 10px");
    float: right;
  }
  .right-steps {
    /*float: right;*/
    margin-left: -50px;
  }
  /deep/.el-step__icon {
    ///*background: #f6f6f6;
  }
  /deep/.el-step__icon-inner {
    font-size: 40px;
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
      color: #00FF00;
      border-color: #c0c4cc;
    }
    .el-step__title.is-process {
      color: #5a5e66;
      font-weight: unset;
    }
  }
}
</style>


<template>
  <div class="layout-body">
    <div class="top-text">
      模块功能说明：这是铸轧的功能模块，该模块主要查询显示铸轧工序的详细信息。在下方输入框输入对应的计划单号、熔次号或者冷轧卷号即可查询冷轧生产的流程信息。样例可输入熔次号号（5-002）
    </div>
    <div class="top-select">
      <el-select v-model="value" placeholder="请输入熔次号/铸轧卷号/冷轧卷号" style="width: 400px; margin-top: 50px" filterable clearable @blur="getCurVal">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button type="primary" style="margin-left: 15px">搜索</el-button>
    </div>
    <custom-step :steps-data="stepData" :active="active" />
    <div class="bottom-form">
      <v-form-render ref="vFormRef" :form-json="formJson[3]" />
    </div>
  </div>
</template>

<script>
import CustomStep from '@/views/dashboard/CustomStep'
import { getProcessMonitor } from '@/api/ErpPlanRollcasting'
import { formJson0 } from '@/api/ErpPlanRollcasting'
import { formJson1 } from '@/api/LmdpCastSmeltHold'
import { formJson2 } from '@/api/LmdpCastHoldingFurnace'
import { formJson3 } from '@/api/LmdpCastProduced'
import { formJson5 } from '@/api/LmdpQcCastReel'
import { formJson6 } from '@/api/ErpPlanColdreductionstrip'
import { formJson7 } from '@/api/LmdpColdRecord'
import { formJson8 } from '@/api/LmdpColdFurnaceRecord'
import { formJson12 } from '@/api/LmdpQcColdReelReport'
import { formJson9 } from '@/api/LmdpColdRereelerRecord'
import { formJson10 } from '@/api/LmdpColdStoreRecord'
import { formJson4 } from '@/api/LmdpCastReelStoreRecord'
import { formJson11 } from '@/api/LmdpQcColdInspect'
import { formJson13 } from '@/api/LmdpQcComplaintDetail'

export default {
  name: 'ProcessMonitor',
  components: {
    CustomStep
  },
  data() {
    return {
      formJson: [formJson0, formJson1, formJson2, formJson3, formJson4, formJson5,
        formJson6, formJson7, formJson8, formJson9, formJson10, formJson11,
        formJson12, formJson13],
      active: 0,
      stepData: [
        { title: '铸轧计划' },
        { title: '熔炼工序' },
        { title: '保温工序' },
        { title: '铸轧工序' },
        { title: '铸轧出入库' },
        { title: '铸轧质检' },
        { title: '冷轧计划' },
        { title: '冷轧工序' },
        { title: '退火工序' },
        { title: '重卷工序' },
        { title: '冷轧出入库' },
        { title: '冷轧巡检' },
        { title: '冷轧质检' },
        { title: '投诉处理' }
      ],
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  watch: {
    active: {
      handler(val) {
        this.$refs.vFormRef.setFormJson(this.formJson[val])
      }
    }
  },
  created() {
  },
  methods: {
    getCurVal(val) {
      console.log(val)
      this.value = val.target.value
      this.active += 1
      console.log(this.active)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/processMonitor/allProcessMonitor.scss';

</style>

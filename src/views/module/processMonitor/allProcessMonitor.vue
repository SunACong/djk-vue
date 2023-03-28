<template>
  <div class="layout-body">
    <div class="top-text">
      模块功能说明：这是整体生产流程功能模块，该模块主要查询整个生产流程步骤的状态，流程步骤下方是每个流程的详细信息，在下方输入框输入计划单号/熔次号/冷轧卷号可以查询整个生产流程的状态。样例可输入冷轧卷号（ZZ2205-005）
    </div>
    <div class="top-select">
      <el-cascader v-model="selectValue" placeholder="熔次号/铸轧卷号/冷轧卷号" class="top-select-input" :options="options" filterable />
      <el-button type="primary" style="margin-left: 15px" @click="getSelectValue()">搜索</el-button>
    </div>
    <custom-step :steps-data="stepData" :active="active" />
    <div class="bottom-form">
      <v-form-render ref="vFormRef" :form-json="formJson[active]" />
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
      selectValue: null,
      options: [
        {
          value: '1',
          label: '熔次号',
          children: [{
            value: '1-115',
            label: '1-115'
          }]
        },
        {
          value: '2',
          label: '铸轧卷号',
          children: [{
            value: '1057A1140228',
            label: '1057A1140228'
          }]
        },
        {
          value: '3',
          label: '冷轧卷号',
          children: [{
            value: '1057A114',
            label: '1057A114'
          }]
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
    getProcessMonitor().then(res => {
      console.log(res)
    })
  },
  methods: {
    getSelectValue(val) {
      console.log(val)
      // this.value = val.target.value
      // this.active += 1
      // console.log(this.active)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/processMonitor/allProcessMonitor.scss';

</style>

<template>
  <div class="layout-body">
    <div class="top-text">
      整体生产流程功能模块，查询某个卷在生产流程中的某个位置<hr>
      查询功能：输入框选择熔次号/铸轧卷号/冷轧卷号，点击查询后展示当前卷所在流程步骤<hr>
      点击功能：查询完成后点击已完成的步骤，可查看该步骤的详细信息
    </div>
    <div class="top-select">
      <el-cascader v-model="selectValue" placeholder="熔次号/铸轧卷号/冷轧卷号" class="top-select-input" :options="options" filterable />
      <el-button type="primary" style="margin-left: 15px" @click="getSelectValue(selectValue)">搜索</el-button>
    </div>
    <custom-step :steps-data="stepData" :active="active" @active="getActive" />
    <div class="bottom-form">
      <v-form-render ref="vFormRef" :form-json="formJson[current]" />
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
const FormMap = new Map()
FormMap.set(0, 'erpPlanRollcasting')
FormMap.set(1, 'lmdpCastSmeltHold')
FormMap.set(2, 'lmdpCastHoldingFurnace')
FormMap.set(3, 'lmdpCastProduce')
FormMap.set(4, 'lmdpCastReelStoreRecord')
FormMap.set(5, 'lmdpQcCastReel')
FormMap.set(6, 'erpPlanColdreductionstrip')
FormMap.set(7, 'lmdpColdRecord')
FormMap.set(8, 'lmdpColdFurnaceRecord')
FormMap.set(9, 'lmdpColdRereelerRecord')
FormMap.set(10, 'lmdpColdStoreRecord')
FormMap.set(11, 'lmdpQcColdInspect')
FormMap.set(12, 'lmdpQcColdReelReport')
FormMap.set(13, 'lmdpQcComplaintDetail')
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
      active: null,
      current: null,
      formData: {},
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
            value: '1-057',
            label: '1-057'
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
        this.$refs.vFormRef.setFormJson(this.formJson[val - 2])
        this.$refs.vFormRef.setFormData(this.formData[`${FormMap.get(val)}`])
      }
    },
    current: {
      handler(val) {
        this.$refs.vFormRef.setFormJson(this.formJson[val])
        this.$refs.vFormRef.setFormData(this.formData[`${FormMap.get(val)}`])
      }
    }
  },
  created() {
  },
  methods: {
    getActive(val) {
      if (val > this.active) {
        this.$message({
          message: '暂未开始',
          type: 'warning'
        })
      } else {
        this.current = val
      }
    },
    async getSelectValue(val) {
      let query = null
      if (val != null) {
        query = {
          type: val[0],
          number: val[1]
        }
      }
      await this.getList(query)
    },
    getList(query) {
      getProcessMonitor(query).then(res => {
        this.formData = res.data
        let count = 0
        for (const key in res.data) {
          if (res.data[key] != null) {
            count++
          }
        }
        if (count === 0) {
          this.$message({
            message: '未查询到数据',
            type: 'warning'
          })
          this.active = null
          this.current = null
        } else {
          this.active = count - 1
          this.current = count - 1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/processMonitor/allProcessMonitor.scss';

</style>

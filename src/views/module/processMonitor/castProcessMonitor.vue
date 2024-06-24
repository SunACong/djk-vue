<template>
  <div class="layout-body">
    <div class="top-text">
      整体生产流程功能模块，查询某个卷在生产流程中的某个位置<hr>
      查询功能：输入框选择熔次号/铸轧卷号/冷轧卷号，点击查询后展示当前卷所在流程步骤<hr>
      点击功能：查询完成后点击已完成的步骤，可查看该步骤的详细信息
    </div>
    <div class="mid-process">
      <div class="top-select">
      <el-select v-model="type" style="width: 130px" @change="changeType(type)">
        <el-option
          v-for="(item, index) in typeOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="selectValue" filterable clearable :placeholder="'请选择'+typeOptions[type].label" :filter-method="dataFilter">
        <el-option
          v-for="(item, index) in valueOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" style="margin-left: 15px" @click="getSelectValueAndType(selectValue, 1)">搜索</el-button>
    </div>
    <custom-step-1 :steps-data="stepData" :active="active" @active="getActive" :status="status"/>
    </div>
    
    <div class="bottom-form">
      <v-form-render ref="vFormRef"/>
    </div>
  </div>
</template>

<script>
import CustomStep1 from '@/views/dashboard/CustomStep1'
import { getProcessMonitor } from '@/api/ErpPlanRollcasting'
import { formJson0 } from '@/api/ErpPlanRollcasting'
import { getCastSmeltHoldList, formJson1 } from '@/api/LmdpCastSmeltHold'
import { formJson2 } from '@/api/LmdpCastHoldingFurnace'
import { getCastProduceList, formJson3 } from '@/api/LmdpCastProduced'
import { formJson4 } from '@/api/LmdpQcCastReel'
import { formJson6 } from '@/api/ErpPlanColdreductionstrip'
import { getColdRecordList, formJson7 } from '@/api/LmdpColdRecord'
import { formJson8 } from '@/api/LmdpColdFurnaceRecord'
import { formJson12 } from '@/api/LmdpQcColdReelReport'
import { formJson9 } from '@/api/LmdpColdRereelerRecord'
import { formJson10 } from '@/api/LmdpColdStoreRecord'
import { formJson5 } from '@/api/LmdpCastReelStoreRecord'
import { formJson11 } from '@/api/LmdpQcColdInspect'
import { formJson13 } from '@/api/LmdpQcComplaintDetail'
import { getDictList } from '@/api/reportDict'
import { getUserDictList } from '@/api/sysUser'
import { getColdProduceList } from '@/api/LmdpColdProduce'
const reportDict = new Map()
const userDict = new Map()
const FormMap = new Map()
FormMap.set(0, 'erpPlanRollcasting')
FormMap.set(1, 'lmdpCastSmeltHold')
FormMap.set(2, 'lmdpCastHoldingFurnace')
FormMap.set(3, 'lmdpCastProduce')
FormMap.set(4, 'lmdpQcCastReel')
FormMap.set(5, 'lmdpCastReelStoreRecord')
FormMap.set(6, 'erpPlanColdreductionstrip')
FormMap.set(7, 'lmdpColdRecord')
FormMap.set(8, 'lmdpColdFurnaceRecord')
FormMap.set(9, 'lmdpColdRereelerRecord')
FormMap.set(10, 'lmdpQcColdReelReport')
FormMap.set(11, 'lmdpColdStoreRecord')
FormMap.set(12, 'lmdpQcComplaintDetail')
export default {
  name: 'ProcessMonitor',
  components: {
    CustomStep1
  },
  data() {
    return {
      formJson: [formJson0, formJson1, formJson2, formJson3, formJson4, formJson5,
        formJson6, formJson7, formJson8, formJson9, formJson12,
        formJson10, formJson13],
      active: -2,
      current: null,
      status: [],
      formData: {},
      stepData: [
        { title: '铸轧计划' },
        { title: '熔炼工序' },
        { title: '保温工序' },
        { title: '铸轧工序' },
        { title: '铸轧质检' },
        { title: '铸轧出入库' },

        { title: '冷轧计划' },
        { title: '冷轧工序' },
        { title: '退火工序' },
        { title: '重卷工序' },
        { title: '冷轧质检' },
        { title: '冷轧出入库' },


        { title: '投诉处理' }
      ],
      selectValue: null,
      type: null,
      typeOptions: [
        { label: '铸轧卷号', value: 0 }
      ],
      valueOptions: [],
      reportDict: reportDict,
      userDict: userDict,
      formKey: null
    }
  },
  watch: {
    current: {
      handler(val) {
        this.$refs.vFormRef.setFormJson(this.formJson[val])
        console.log(this.formData[`${FormMap.get(val)}`])
        setTimeout(() => {
          this.$refs.vFormRef.setFormData(this.formData[`${FormMap.get(val)}`])
        }, 1000)
      }
    }
  },
  created() {
    this.type = this.typeOptions[0].value
    // 搜索框默认熔次号
    getCastProduceList().then(res => {
      this.valueOptions = res.data.map(item => ({
        label: item.reelNum,
        value: item.reelNum
      }))
    })
  },
  methods: {
    dataFilter(val) {
      this.selectValue = val
    },
    changeType(type) {
    },
    getActive(val) {
      if (val > this.active-1) {
        this.$message({
          message: '暂未开始',
          type: 'warning'
        })
      } else {
        this.current = val
      }
    },
    async getSelectValueAndType(val, type) {
      let query = null
      console.log({ val, type })
      if ((val != null && val != '') && type != null) {
        query = {
          number: val,
          type: type
        }
      }else{
        this.$message({
            message: '请输入对应卷号',
            type: 'warning'
          })
          return
      }
      await this.getList(query)
    },
    getList(query) {
      getProcessMonitor(query).then(async res => {
        this.formData = res.data
        this.status = res.data.status
        let count = res.data.length
        if (count === null) {
          this.$message({
            message: '未查询到数据',
            type: 'warning'
          })
          this.active = -2
          this.current = null
        } else {
          this.active = count
          this.$refs.vFormRef.setFormJson(this.formJson[count-1])
          console.log(this.formData[`${FormMap.get(count-1)}`])
          setTimeout(() => {
            this.$refs.vFormRef.setFormData(this.formData[`${FormMap.get(count-1)}`])
          }, 1000)
          this.current = count-1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/processMonitor/allProcessMonitor.scss';

</style>

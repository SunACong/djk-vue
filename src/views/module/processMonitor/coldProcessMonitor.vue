<template>
  <div class="layout-body">
    <div class="top-text">
      冷轧生产流程功能模块，查询某个卷在冷轧生产流程中的某个位置<hr>
      查询功能：输入框选择冷轧卷号，点击查询后展示当前卷所在流程步骤<hr>
      点击功能：查询完成后点击已完成的步骤，可查看该步骤的详细信息
    </div>
    <div class="top-select">
      <el-select v-model="type" style="width: 130px" @change="changeType(type)">
        <el-option
            v-for="(item, index) in typeOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="selectValue" filterable clearable :placeholder="冷轧卷号">
        <el-option
            v-for="(item, index) in valueOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-button type="primary" style="margin-left: 15px" @click="getSelectValueAndType(selectValue, type)">搜索</el-button>
    </div>
    <custom-step1 :steps-data="stepData" :active="active" @active="getActive" />
    <div class="bottom-form">
      <v-form-render ref="vFormRef" />
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
import { formJson5 } from '@/api/LmdpQcCastReel'
import { formJson6 } from '@/api/ErpPlanColdreductionstrip'
import { getColdRecordList, formJson7 } from '@/api/LmdpColdRecord'
import { formJson8 } from '@/api/LmdpColdFurnaceRecord'
import { formJson12 } from '@/api/LmdpQcColdReelReport'
import { formJson9 } from '@/api/LmdpColdRereelerRecord'
import { formJson10 } from '@/api/LmdpColdStoreRecord'
import { formJson4 } from '@/api/LmdpCastReelStoreRecord'
import { formJson11 } from '@/api/LmdpQcColdInspect'
import { formJson13 } from '@/api/LmdpQcComplaintDetail'
import { getDictList } from '@/api/reportDict'
import { getUserDictList } from '@/api/sysUser'
const reportDict = new Map()
const userDict = new Map()
const FormMap = new Map()

FormMap.set(0, 'lmdpColdRecord')
FormMap.set(1, 'lmdpColdFurnaceRecord')
FormMap.set(2, 'lmdpColdRereelerRecord')
FormMap.set(4, 'lmdpColdStoreRecord')
FormMap.set(3, 'lmdpQcColdReelReport')

export default {
  name: 'ProcessMonitor',
  components: {
    CustomStep1
  },
  data() {
    return {
      formJson: [
         formJson7, formJson8, formJson9, formJson12,
        formJson10],
      active: null,
      current: null,
      formData: {},
      stepData: [

        { title: '冷轧工序' },
        { title: '退火工序' },
        { title: '重卷工序' },
        { title: '冷轧质检' },
        { title: '冷轧出入库' },



      ],
      selectValue: null,
      type: null,
      typeOptions: [

        { label: '冷轧卷号', value: 2 }
      ],
      valueOptions: [],
      reportDict: reportDict,
      userDict: userDict
    }
  },
  watch: {
    active: {
      handler(val) {
        this.$refs.vFormRef.setFormJson(this.formJson[val - 2])
        const formData = this.dictToValue(this.formData[`${FormMap.get(val)}`])
        this.$refs.vFormRef.setFormData(formData)
      }
    },
    current: {
      handler(val) {
        this.$refs.vFormRef.setFormJson(this.formJson[val])
        setTimeout(() => {
          const formData = this.dictToValue(this.formData[`${FormMap.get(val)}`])
          this.$refs.vFormRef.setFormData(formData)
        }, 500)
      }
    }
  },
  async mounted() {
    // 获取报表所有字典存入map中
    await getDictList().then(res => {
      res.data.forEach(item => {
        this.reportDict.set(item.value, item.chdesc)
      })
    })
    await getUserDictList().then(res => {
      res.data.forEach(item => {
        this.userDict.set(item.userId, item.realName)
      })
    })
  },
  created() {
    this.type = this.typeOptions[0].value
    // 搜索框默认熔次号
    getColdRecordList().then(res => {
      this.valueOptions = res.data.map(item => ({
        label: item.batchNum,
        value: item.batchNum
      }))
    })
  },
  methods: {
    changeType(type) {
      if (type === 0) {
        getCastSmeltHoldList().then(res => {
          this.valueOptions = res.data.map(item => ({
            label: item.smeltTimes,
            value: item.smeltTimes
          }))
        })
      } else if (type === 1) {
        getCastProduceList().then(res => {
          this.valueOptions = res.data.map(item => ({
            label: item.reelNum,
            value: item.reelNum
          }))
        })
      } else if (type === 2) {
        getColdRecordList().then(res => {
          this.valueOptions = res.data.map(item => ({
            label: item.batchNum,
            value: item.batchNum
          }))
        })
      }
    },
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
    async getSelectValueAndType(val, type) {
      let query = null
      console.log({ val, type })
      if (val != null && type != null) {
        query = {
          number: val,
          type: type
        }
      }
      await this.getList(query)
    },
    dictToValue(data) {
      for (const key in data) {
        if (this.reportDict.has(data[`${key}`])) {
          data[`${key}`] = this.reportDict.get(data[`${key}`])
        }
        if (this.userDict.has(data[`${key}`])) {
          data[`${key}`] = this.userDict.get(data[`${key}`])
        }
      }
      return data
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

<template>
  <div class="layout-body">
    <div class="top-text">
      铸轧生产流程功能模块，查询某个卷在生产流程中的某个位置<hr>
      查询功能：输入框选择铸轧卷号，点击查询后展示当前卷所在流程步骤<hr>
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
      <el-select v-model="selectValue" filterable clearable :placeholder="熔次号">
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
const reportDict = new Map()
const userDict = new Map()
const FormMap = new Map()
FormMap.set(0, 'lmdpCastSmeltHold')
FormMap.set(1, 'lmdpCastHoldingFurnace')
FormMap.set(2, 'lmdpCastProduce')
FormMap.set(3, 'lmdpCastReelStoreRecord')
FormMap.set(4, 'lmdpQcCastReel')

export default {
  name: 'ProcessMonitor',
  components: {
    CustomStep1
  },
  data() {
    return {
      formJson: [formJson1, formJson2, formJson3, formJson4, formJson5
      ],
      active: null,
      current: null,
      formData: {},
      stepData: [

        { title: '熔炼工序' },
        { title: '保温工序' },
        { title: '铸轧工序' },
        { title: '铸轧质检' },
        { title: '铸轧出入库' }

      ],
      selectValue: null,
      type: null,
      typeOptions: [

        { label: '铸轧卷号', value: 1 }

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
    // 搜索框默认铸轧卷号
    getCastProduceList().then(res => {
      this.valueOptions = res.data.map(item => ({
        label: item.reelNum,
        value: item.reelNum
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
          this.active = count - 2
          this.current = count - 2
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/processMonitor/allProcessMonitor.scss';

</style>

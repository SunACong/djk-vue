<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryForm" :model="queryParams" size="small" :inline="true" label-width="68px">
      <el-form-item label="标准名称" prop="processName">
        <el-input
          v-model="queryParams.processName"
          placeholder="请输入标准名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="厚差" prop="thicknessDiff">
        <el-input
          v-model="queryParams.thicknessDiff"
          placeholder="请输入厚差"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="宽差" prop="widthDiff">
        <el-input
          v-model="queryParams.widthDiff"
          placeholder="请输入宽差"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="平直度" prop="straightness">
        <el-input
          v-model="queryParams.straightness"
          placeholder="请输入平直度"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中凸度低" prop="mediumConvexityLow">
        <el-input
          v-model="queryParams.mediumConvexityLow"
          placeholder="请输入中凸度低"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中凸度高" prop="mediumConvexityHigh">
        <el-input
          v-model="queryParams.mediumConvexityHigh"
          placeholder="请输入中凸度高"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="卷径低" prop="rollDiameterLow">
        <el-input
          v-model="queryParams.rollDiameterLow"
          placeholder="请输入卷径低"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="卷径高" prop="rollDiameterHigh">
        <el-input
          v-model="queryParams.rollDiameterHigh"
          placeholder="请输入卷径高"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="卷重低" prop="rollWeightLow">
        <el-input
          v-model="queryParams.rollWeightLow"
          placeholder="请输入卷重低"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="卷重高" prop="rollWeightHigh">
        <el-input
          v-model="queryParams.rollWeightHigh"
          placeholder="请输入卷重高"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="抗拉强度低" prop="tensileStrengthLow">
        <el-input
          v-model="queryParams.tensileStrengthLow"
          placeholder="请输入抗拉强度低"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="抗拉强度高" prop="tensileStrengthHigh">
        <el-input
          v-model="queryParams.tensileStrengthHigh"
          placeholder="请输入抗拉强度高"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="延伸率" prop="elongation">
        <el-input
          v-model="queryParams.elongation"
          placeholder="请输入延伸率"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="表面质量" prop="surface">
        <el-input
          v-model="queryParams.surface"
          placeholder="请输入表面质量"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
        >新增</el-button>
      </el-col>
      <!-- <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
        >导出</el-button>
      </el-col> -->
      <right-toolbar :show-search.sync="showSearch" @queryTable="getList" />
    </el-row>

    <el-table v-loading="loading" :data="standardList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!-- <el-table-column label="主键" align="center" prop="id" /> -->
      <el-table-column label="标准名称" align="center" prop="processName" />
      <el-table-column label="厚差" align="center" prop="thicknessDiff" />
      <el-table-column label="宽差" align="center" prop="widthDiff" />
      <el-table-column label="平直度" align="center" prop="straightness" />
      <el-table-column label="中凸度低" align="center" prop="mediumConvexityLow" />
      <el-table-column label="中凸度高" align="center" prop="mediumConvexityHigh" />
      <el-table-column label="卷径低" align="center" prop="rollDiameterLow" />
      <el-table-column label="卷径高" align="center" prop="rollDiameterHigh" />
      <el-table-column label="卷重低" align="center" prop="rollWeightLow" />
      <el-table-column label="卷重高" align="center" prop="rollWeightHigh" />
      <el-table-column label="抗拉强度低" align="center" prop="tensileStrengthLow" />
      <el-table-column label="抗拉强度高" align="center" prop="tensileStrengthHigh" />
      <el-table-column label="延伸率" align="center" prop="elongation" />
      <el-table-column label="表面质量" align="center" prop="surface" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 0px 20px 20px;float: right;font-size: 20px;">
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
    </div>

    <!-- 添加或修改111对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="标准名称" prop="processName">
          <el-input v-model="form.processName" placeholder="请输入标准名称" />
        </el-form-item>
        <el-form-item label="厚差" prop="thicknessDiff">
          <el-input v-model="form.thicknessDiff" placeholder="请输入厚差" />
        </el-form-item>
        <el-form-item label="宽差" prop="widthDiff">
          <el-input v-model="form.widthDiff" placeholder="请输入宽差" />
        </el-form-item>
        <el-form-item label="平直度" prop="straightness">
          <el-input v-model="form.straightness" placeholder="请输入平直度" />
        </el-form-item>
        <el-form-item label="中凸度低" prop="mediumConvexityLow">
          <el-input v-model="form.mediumConvexityLow" placeholder="请输入中凸度低" />
        </el-form-item>
        <el-form-item label="中凸度高" prop="mediumConvexityHigh">
          <el-input v-model="form.mediumConvexityHigh" placeholder="请输入中凸度高" />
        </el-form-item>
        <el-form-item label="卷径低" prop="rollDiameterLow">
          <el-input v-model="form.rollDiameterLow" placeholder="请输入卷径低" />
        </el-form-item>
        <el-form-item label="卷径高" prop="rollDiameterHigh">
          <el-input v-model="form.rollDiameterHigh" placeholder="请输入卷径高" />
        </el-form-item>
        <el-form-item label="卷重低" prop="rollWeightLow">
          <el-input v-model="form.rollWeightLow" placeholder="请输入卷重低" />
        </el-form-item>
        <el-form-item label="卷重高" prop="rollWeightHigh">
          <el-input v-model="form.rollWeightHigh" placeholder="请输入卷重高" />
        </el-form-item>
        <el-form-item label="抗拉强度低" prop="tensileStrengthLow">
          <el-input v-model="form.tensileStrengthLow" placeholder="请输入抗拉强度低" />
        </el-form-item>
        <el-form-item label="抗拉强度高" prop="tensileStrengthHigh">
          <el-input v-model="form.tensileStrengthHigh" placeholder="请输入抗拉强度高" />
        </el-form-item>
        <el-form-item label="延伸率" prop="elongation">
          <el-input v-model="form.elongation" placeholder="请输入延伸率" />
        </el-form-item>
        <el-form-item label="表面质量" prop="surface">
          <el-input v-model="form.surface" placeholder="请输入表面质量" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listStandard, getStandard, delStandard, addStandard, updateStandard } from '@/api/productStandard'

export default {
  name: 'ProductStandard',
  data() {
    return {
    // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 111表格数据
      standardList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        processName: null,
        thicknessDiff: null,
        widthDiff: null,
        straightness: null,
        mediumConvexityLow: null,
        mediumConvexityHigh: null,
        rollDiameterLow: null,
        rollDiameterHigh: null,
        rollWeightLow: null,
        rollWeightHigh: null,
        tensileStrengthLow: null,
        tensileStrengthHigh: null,
        elongation: null,
        surface: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
  /** 查询111列表 */
    getList() {
      this.loading = true
      listStandard(this.queryParams).then(response => {
        this.standardList = response.data.records
        this.total = response.data.total
        this.loading = false
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        processName: null,
        thicknessDiff: null,
        widthDiff: null,
        straightness: null,
        mediumConvexityLow: null,
        mediumConvexityHigh: null,
        rollDiameterLow: null,
        rollDiameterHigh: null,
        rollWeightLow: null,
        rollWeightHigh: null,
        tensileStrengthLow: null,
        tensileStrengthHigh: null,
        elongation: null,
        surface: null
      }
      this.resetForm('form')
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm')
      this.handleQuery()
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset()
      this.open = true
      this.title = '添加111'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids
      getStandard(id).then(response => {
        this.form = response.data
        this.open = true
        this.title = '标准修改'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateStandard(this.form).then(response => {
              console.log('hahah')
              this.$modal.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addStandard(this.form).then(response => {
              this.$modal.msgSuccess('新增成功')
              this.open = false
              this.getList()
            })
          }
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids
      this.$modal.confirm('是否确认删除111编号为"' + ids + '"的数据项？').then(function() {
        return delStandard(ids)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess('删除成功')
      }).catch(() => {})
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/standard/export', {
        ...this.queryParams
      }, `standard_${new Date().getTime()}.xlsx`)
    }
  }
}
</script>

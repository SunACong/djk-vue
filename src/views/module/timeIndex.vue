<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryForm" :model="queryParams" size="small" :inline="true" label-width="68px">
      <el-form-item label="铸轧计划平均时长" prop="castplan">
        <el-input
          v-model="queryParams.castplan"
          placeholder="请输入铸轧计划平均时长"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="熔炉生产平均时间" prop="smelthold">
        <el-input
          v-model="queryParams.smelthold"
          placeholder="请输入熔炉生产平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温平均时间" prop="baowen">
        <el-input
          v-model="queryParams.baowen"
          placeholder="请输入保温平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温(精练 一)平均时间" prop="baowen1">
        <el-input
          v-model="queryParams.baowen1"
          placeholder="请输入保温(精练 一)平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温(精练 二)平均时间" prop="baowen2">
        <el-input
          v-model="queryParams.baowen2"
          placeholder="请输入保温(精练 二)平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温(精练三)平均时间" prop="baowen3">
        <el-input
          v-model="queryParams.baowen3"
          placeholder="请输入保温(精练三)平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温(精练四)平均时间" prop="baowen4">
        <el-input
          v-model="queryParams.baowen4"
          placeholder="请输入保温(精练四)平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="保温(精练 五)平均时间" prop="baowen5">
        <el-input
          v-model="queryParams.baowen5"
          placeholder="请输入保温(精练 五)平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="铸轧生产平均时间" prop="castpro">
        <el-input
          v-model="queryParams.castpro"
          placeholder="请输入铸轧生产平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="铸轧卷质检平均时间" prop="castreel">
        <el-input
          v-model="queryParams.castreel"
          placeholder="请输入铸轧卷质检平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冷轧生产计划平均时间" prop="coldplan">
        <el-input
          v-model="queryParams.coldplan"
          placeholder="请输入冷轧生产计划平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冷轧工序平均时间" prop="coldproduce">
        <el-input
          v-model="queryParams.coldproduce"
          placeholder="请输入冷轧工序平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="退火平均时间" prop="furnace">
        <el-input
          v-model="queryParams.furnace"
          placeholder="请输入退火平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冷轧卷成品质检平均时间" prop="reelreport">
        <el-input
          v-model="queryParams.reelreport"
          placeholder="请输入冷轧卷成品质检平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="重卷中切平均时间" prop="rereeler">
        <el-input
          v-model="queryParams.rereeler"
          placeholder="请输入重卷中切平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冷轧卷入库平均时间" prop="store">
        <el-input
          v-model="queryParams.store"
          placeholder="请输入冷轧卷入库平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="包装检验平均时间" prop="package">
        <el-input
          v-model="queryParams.package"
          placeholder="请输入包装检验平均时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备注" prop="note">
        <el-input
          v-model="queryParams.note"
          placeholder="请输入备注"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['system:time:add']"
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['system:time:edit']"
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
          v-hasPermi="['system:time:remove']"
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
          v-hasPermi="['system:time:export']"
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
        >导出</el-button>
      </el-col>
      <right-toolbar :show-search.sync="showSearch" @queryTable="getList" />
    </el-row>

    <el-table v-loading="loading" :data="timeList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="铸轧计划平均时长" align="center" prop="castplan" />
      <el-table-column label="熔炉生产平均时间" align="center" prop="smelthold" />
      <el-table-column label="保温平均时间" align="center" prop="baowen" />
      <el-table-column label="保温(精练 一)平均时间" align="center" prop="baowen1" />
      <el-table-column label="保温(精练 二)平均时间" align="center" prop="baowen2" />
      <el-table-column label="保温(精练三)平均时间" align="center" prop="baowen3" />
      <el-table-column label="保温(精练四)平均时间" align="center" prop="baowen4" />
      <el-table-column label="保温(精练 五)平均时间" align="center" prop="baowen5" />
      <el-table-column label="铸轧生产平均时间" align="center" prop="castpro" />
      <el-table-column label="铸轧卷质检平均时间" align="center" prop="castreel" />
      <el-table-column label="冷轧生产计划平均时间" align="center" prop="coldplan" />
      <el-table-column label="冷轧工序平均时间" align="center" prop="coldproduce" />
      <el-table-column label="退火平均时间" align="center" prop="furnace" />
      <el-table-column label="冷轧卷成品质检平均时间" align="center" prop="reelreport" />
      <el-table-column label="重卷中切平均时间" align="center" prop="rereeler" />
      <el-table-column label="冷轧卷入库平均时间" align="center" prop="store" />
      <el-table-column label="包装检验平均时间" align="center" prop="package" />
      <el-table-column label="备注" align="center" prop="note" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            v-hasPermi="['system:time:edit']"
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            v-hasPermi="['system:time:remove']"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改生产工序平均时间存储对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="铸轧计划平均时长" prop="castplan">
          <el-input v-model="form.castplan" placeholder="请输入铸轧计划平均时长" />
        </el-form-item>
        <el-form-item label="熔炉生产平均时间" prop="smelthold">
          <el-input v-model="form.smelthold" placeholder="请输入熔炉生产平均时间" />
        </el-form-item>
        <el-form-item label="保温平均时间" prop="baowen">
          <el-input v-model="form.baowen" placeholder="请输入保温平均时间" />
        </el-form-item>
        <el-form-item label="保温(精练 一)平均时间" prop="baowen1">
          <el-input v-model="form.baowen1" placeholder="请输入保温(精练 一)平均时间" />
        </el-form-item>
        <el-form-item label="保温(精练 二)平均时间" prop="baowen2">
          <el-input v-model="form.baowen2" placeholder="请输入保温(精练 二)平均时间" />
        </el-form-item>
        <el-form-item label="保温(精练三)平均时间" prop="baowen3">
          <el-input v-model="form.baowen3" placeholder="请输入保温(精练三)平均时间" />
        </el-form-item>
        <el-form-item label="保温(精练四)平均时间" prop="baowen4">
          <el-input v-model="form.baowen4" placeholder="请输入保温(精练四)平均时间" />
        </el-form-item>
        <el-form-item label="保温(精练 五)平均时间" prop="baowen5">
          <el-input v-model="form.baowen5" placeholder="请输入保温(精练 五)平均时间" />
        </el-form-item>
        <el-form-item label="铸轧生产平均时间" prop="castpro">
          <el-input v-model="form.castpro" placeholder="请输入铸轧生产平均时间" />
        </el-form-item>
        <el-form-item label="铸轧卷质检平均时间" prop="castreel">
          <el-input v-model="form.castreel" placeholder="请输入铸轧卷质检平均时间" />
        </el-form-item>
        <el-form-item label="冷轧生产计划平均时间" prop="coldplan">
          <el-input v-model="form.coldplan" placeholder="请输入冷轧生产计划平均时间" />
        </el-form-item>
        <el-form-item label="冷轧工序平均时间" prop="coldproduce">
          <el-input v-model="form.coldproduce" placeholder="请输入冷轧工序平均时间" />
        </el-form-item>
        <el-form-item label="退火平均时间" prop="furnace">
          <el-input v-model="form.furnace" placeholder="请输入退火平均时间" />
        </el-form-item>
        <el-form-item label="冷轧卷成品质检平均时间" prop="reelreport">
          <el-input v-model="form.reelreport" placeholder="请输入冷轧卷成品质检平均时间" />
        </el-form-item>
        <el-form-item label="重卷中切平均时间" prop="rereeler">
          <el-input v-model="form.rereeler" placeholder="请输入重卷中切平均时间" />
        </el-form-item>
        <el-form-item label="冷轧卷入库平均时间" prop="store">
          <el-input v-model="form.store" placeholder="请输入冷轧卷入库平均时间" />
        </el-form-item>
        <el-form-item label="包装检验平均时间" prop="package">
          <el-input v-model="form.package" placeholder="请输入包装检验平均时间" />
        </el-form-item>
        <el-form-item label="备注" prop="note">
          <el-input v-model="form.note" placeholder="请输入备注" />
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
import { listTime, getTime, delTime, addTime, updateTime } from '@/api/system/time'

export default {
  name: 'Time',
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
      // 生产工序平均时间存储表格数据
      timeList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        castplan: null,
        smelthold: null,
        baowen: null,
        baowen1: null,
        baowen2: null,
        baowen3: null,
        baowen4: null,
        baowen5: null,
        castpro: null,
        castreel: null,
        coldplan: null,
        coldproduce: null,
        furnace: null,
        reelreport: null,
        rereeler: null,
        store: null,
        package: null,
        note: null
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
    /** 查询生产工序平均时间存储列表 */
    getList() {
      this.loading = true
      listTime(this.queryParams).then(response => {
        this.timeList = response.rows
        this.total = response.total
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
        updateTime: null,
        castplan: null,
        smelthold: null,
        baowen: null,
        baowen1: null,
        baowen2: null,
        baowen3: null,
        baowen4: null,
        baowen5: null,
        castpro: null,
        castreel: null,
        coldplan: null,
        coldproduce: null,
        furnace: null,
        reelreport: null,
        rereeler: null,
        store: null,
        package: null,
        note: null
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
      this.title = '添加生产工序平均时间存储'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids
      getTime(id).then(response => {
        this.form = response.data
        this.open = true
        this.title = '修改生产工序平均时间存储'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateTime(this.form).then(response => {
              this.$modal.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addTime(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除生产工序平均时间存储编号为"' + ids + '"的数据项？').then(function() {
        return delTime(ids)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess('删除成功')
      }).catch(() => {})
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/time/export', {
        ...this.queryParams
      }, `time_${new Date().getTime()}.xlsx`)
    }
  }
}
</script>

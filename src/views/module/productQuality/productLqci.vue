<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="卷号" prop="batchNum">
        <el-input
          v-model="queryParams.batchNum"
          placeholder="请输入卷号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="客户" prop="consumer">
        <el-input
          v-model="queryParams.consumer"
          placeholder="请输入客户"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8" style="display: flex;">
        <el-button
          style="margin: 0 10px 0 5px;"
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
        >新增</el-button>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" highlight-current-row border :data="lqciList" @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="55" align="center" /> -->
      <el-table-column label="卷号" align="center" prop="batchNum" />
      <el-table-column label="更新时间" align="center" prop="lqciTs" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.lqciTs) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客户" align="center" prop="consumer" />
      <el-table-column label="平直度" align="center" prop="singleStraightness" />
      <el-table-column label="中凸度" align="center" prop="singleMediumConvexity" />
      <el-table-column label="厚度" align="center" prop="finishedThickness" />
      <el-table-column label="宽度" align="center" prop="finishedWidth" />
      <el-table-column label="卷径" align="center" prop="finishedRollDiameter" />
      <el-table-column label="卷重" align="center" prop="finishedWeight" />
      <el-table-column label="表面质量" align="center" prop="surfaceQualityRemark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button> -->
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

    <!-- 添加或修改【请填写功能名称】对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="卷号" prop="batchNum">
          <el-input v-model="form.batchNum" placeholder="请输入卷号" :readonly="readOnly"/>
        </el-form-item>
        <el-form-item label="更新时间" prop="lqciTs">
          <el-date-picker
            readonly
            v-model="form.lqciTs"
            type="datetime"
            placeholder="该项自动添加">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="客户" prop="consumer">
          <el-input v-model="form.consumer" placeholder="请输入客户" />
        </el-form-item>
        <el-form-item label="平直度" prop="singleStraightness">
          <el-input v-model="form.singleStraightness" placeholder="请输入平直度" />
        </el-form-item>
        <el-form-item label="中凸度" prop="singleMediumConvexity">
          <el-input v-model="form.singleMediumConvexity" placeholder="请输入中凸度" />
        </el-form-item>
        <el-form-item label="厚度" prop="finishedThickness">
          <el-input v-model="form.finishedThickness" placeholder="请输入厚度" />
        </el-form-item>
        <el-form-item label="宽度" prop="finishedWidth">
          <el-input v-model="form.finishedWidth" placeholder="请输入宽度" />
        </el-form-item>
        <el-form-item label="卷径" prop="finishedRollDiameter">
          <el-input v-model="form.finishedRollDiameter" placeholder="请输入卷径" />
        </el-form-item>
        <el-form-item label="卷重" prop="finishedWeight">
          <el-input v-model="form.finishedWeight" placeholder="请输入卷重" />
        </el-form-item>
        <el-form-item label="表面质量" prop="surfaceQualityRemark">
          <el-input v-model="form.surfaceQualityRemark" placeholder="请输入表面质量" />
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
import { listLqci, getLqci, delLqci, addLqci, updateLqci } from "@/api/lqci";

export default {
  name: "Lqci",
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
      // 【请填写功能名称】表格数据
      lqciList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 是否可以更改卷号
      readOnly: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        batchNum: null,
        lqciTs: null,
        consumer: null,
        singleStraightness: null,
        singleMediumConvexity: null,
        finishedThickness: null,
        finishedWidth: null,
        finishedRollDiameter: null,
        finishedWeight: null,
        surfaceQualityRemark: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    haha(){
      console.log("dsasdsa");
    },
    /** 查询【请填写功能名称】列表 */
    getList() {
      this.loading = true;
      listLqci(this.queryParams).then(response => {
        this.lqciList = response.data.records
        this.total =  response.data.total
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        batchNum: null,
        lqciTs: null,
        consumer: null,
        singleStraightness: null,
        singleMediumConvexity: null,
        finishedThickness: null,
        finishedWidth: null,
        finishedRollDiameter: null,
        finishedWeight: null,
        surfaceQualityRemark: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      console.log("添加");
      this.readOnly = false
      this.open = true;
      this.title = "添加产品参数";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      this.readOnly = true
      const id = row.id || this.ids
      getLqci(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改产品随行卡参数";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateLqci(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addLqci(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除【请填写功能名称】编号为"' + ids + '"的数据项？').then(function() {
        return delLqci(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/lqci/export', {
        ...this.queryParams
      }, `lqci_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

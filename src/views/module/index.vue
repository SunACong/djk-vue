<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="${comment}" prop="holdRefine1BeginTime">
        <el-input
          v-model="queryParams.holdRefine1BeginTime"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1EndTime">
        <el-input
          v-model="queryParams.holdRefine1EndTime"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1Duration">
        <el-input
          v-model="queryParams.holdRefine1Duration"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1Temp">
        <el-input
          v-model="queryParams.holdRefine1Temp"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1Medium">
        <el-input
          v-model="queryParams.holdRefine1Medium"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1Dose">
        <el-input
          v-model="queryParams.holdRefine1Dose"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1ColdStuffDose">
        <el-input
          v-model="queryParams.holdRefine1ColdStuffDose"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1GroupId">
        <el-input
          v-model="queryParams.holdRefine1GroupId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1GroupName">
        <el-input
          v-model="queryParams.holdRefine1GroupName"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1CasterId">
        <el-input
          v-model="queryParams.holdRefine1CasterId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1CasterName">
        <el-input
          v-model="queryParams.holdRefine1CasterName"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1SmelterId">
        <el-input
          v-model="queryParams.holdRefine1SmelterId"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1SmelterName">
        <el-input
          v-model="queryParams.holdRefine1SmelterName"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1SamplingTime">
        <el-input
          v-model="queryParams.holdRefine1SamplingTime"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="holdRefine1SamplingTemp">
        <el-input
          v-model="queryParams.holdRefine1SamplingTemp"
          placeholder="请输入${comment}"
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
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:concise:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:concise:edit']"
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
          v-hasPermi="['system:concise:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:concise:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="conciseList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="${comment}" align="center" prop="id" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1BeginTime" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1EndTime" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1Duration" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1Temp" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1Medium" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1Dose" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1ColdStuffDose" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1GroupId" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1GroupName" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1CasterId" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1CasterName" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1SmelterId" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1SmelterName" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1SamplingTime" />
      <el-table-column label="${comment}" align="center" prop="holdRefine1SamplingTemp" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:concise:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:concise:remove']"
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

    <!-- 添加或修改【请填写功能名称】对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="${comment}" prop="holdRefine1BeginTime">
          <el-input v-model="form.holdRefine1BeginTime" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1EndTime">
          <el-input v-model="form.holdRefine1EndTime" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1Duration">
          <el-input v-model="form.holdRefine1Duration" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1Temp">
          <el-input v-model="form.holdRefine1Temp" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1Medium">
          <el-input v-model="form.holdRefine1Medium" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1Dose">
          <el-input v-model="form.holdRefine1Dose" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1ColdStuffDose">
          <el-input v-model="form.holdRefine1ColdStuffDose" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1GroupId">
          <el-input v-model="form.holdRefine1GroupId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1GroupName">
          <el-input v-model="form.holdRefine1GroupName" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1CasterId">
          <el-input v-model="form.holdRefine1CasterId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1CasterName">
          <el-input v-model="form.holdRefine1CasterName" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1SmelterId">
          <el-input v-model="form.holdRefine1SmelterId" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1SmelterName">
          <el-input v-model="form.holdRefine1SmelterName" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1SamplingTime">
          <el-input v-model="form.holdRefine1SamplingTime" placeholder="请输入${comment}" />
        </el-form-item>
        <el-form-item label="${comment}" prop="holdRefine1SamplingTemp">
          <el-input v-model="form.holdRefine1SamplingTemp" placeholder="请输入${comment}" />
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
import { listConcise, getConcise, delConcise, addConcise, updateConcise } from "@/api/system/concise";

export default {
  name: "Concise",
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
      conciseList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        holdRefine1BeginTime: null,
        holdRefine1EndTime: null,
        holdRefine1Duration: null,
        holdRefine1Temp: null,
        holdRefine1Medium: null,
        holdRefine1Dose: null,
        holdRefine1ColdStuffDose: null,
        holdRefine1GroupId: null,
        holdRefine1GroupName: null,
        holdRefine1CasterId: null,
        holdRefine1CasterName: null,
        holdRefine1SmelterId: null,
        holdRefine1SmelterName: null,
        holdRefine1SamplingTime: null,
        holdRefine1SamplingTemp: null
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
    /** 查询【请填写功能名称】列表 */
    getList() {
      this.loading = true;
      listConcise(this.queryParams).then(response => {
        this.conciseList = response.rows;
        this.total = response.total;
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
        holdRefine1BeginTime: null,
        holdRefine1EndTime: null,
        holdRefine1Duration: null,
        holdRefine1Temp: null,
        holdRefine1Medium: null,
        holdRefine1Dose: null,
        holdRefine1ColdStuffDose: null,
        holdRefine1GroupId: null,
        holdRefine1GroupName: null,
        holdRefine1CasterId: null,
        holdRefine1CasterName: null,
        holdRefine1SmelterId: null,
        holdRefine1SmelterName: null,
        holdRefine1SamplingTime: null,
        holdRefine1SamplingTemp: null
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
      this.open = true;
      this.title = "添加【请填写功能名称】";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getConcise(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改【请填写功能名称】";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateConcise(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addConcise(this.form).then(response => {
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
        return delConcise(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/concise/export', {
        ...this.queryParams
      }, `concise_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

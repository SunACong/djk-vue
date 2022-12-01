<template>
  <div class="app-container">
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
      <el-col :span="1.5">
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
      <!--      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>-->
    </el-row>
    <!-- 表格 -->
    <el-table v-loading="loading" :data="avaluateList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!--      <el-table-column label="id" align="center" prop="id" />-->
      <el-table-column label="指标名称" align="center" prop="name" />
      <el-table-column label="单位" align="center" prop="danWei" />
      <el-table-column label="最小值" align="center" prop="minValue" />
      <el-table-column label="最大值" align="center" prop="maxValue" />
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
    <!-- 分页插件 -->
    <div style="margin: 30px 20px 20px;float: right;font-size: 20px;">
      <el-pagination :current-page="currentPage" :page-sizes="[5, 10, 20, 50]"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />
    </div>
    <!-- 添加或修改值域对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="指标名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入指标名称" />
        </el-form-item>
        <el-form-item label="单位" prop="danWei">
          <el-input v-model="form.danWei" placeholder="请输入单位" />
        </el-form-item>
        <el-form-item label="最小值" prop="minValue">
          <el-input v-model="form.minValue" placeholder="请输入最小值" />
        </el-form-item>
        <el-form-item label="最大值" prop="maxValue">
          <el-input v-model="form.maxValue" placeholder="请输入最大值" />
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
import { getAvaluateList, getAvaluate, addAvaluate, updateAvaluate,delAvaluate } from "@/api/avaluate"

export default {
  name: "Avaluate",
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 100,
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
      // 值域表格数据
      avaluateList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        currentPage: null,
        pageSize: null,
        name: null,
        danWei: null,
        minValue: null,
        maxValue: null,
        deviceId: null

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
    /**
     * 更改pageSize
     * @param {Object} val
     */
    handleSizeChange(val) {
      this.pageSize = val
      this.getList()
    },
    /**
     * 更改当前页码
     * @param {Object} val
     */
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList()
    },
    /** 查询值域列表 */
    getList() {
      this.loading = true;
      getAvaluateList({deviceId: "重卷机1#"}).then((res) => {
        console.log("res",res)
        this.avaluateList = res.data;
        console.log(this.avaluateList)
        this.total = res.data.length;
        console.log(this.total)
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
        name: null,
        danWei: null,
        minValue: null,
        maxValue: null
      };
      // this.resetForm("form");
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
      this.title = "添加值域";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      // console.log(id)
      getAvaluate(id).then(response => {
        this.form = response.data;
        // console.log(response.data)
        this.open = true;
        this.title = "修改值域";
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除值域编号为"' + ids + '"的数据项？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'}).then(function() {
        return delAvaluate(ids);
      }).then(() => {
        this.getList();
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    /** 提交按钮 */
    submitForm() {
      // this.$refs["form"].validate(valid => {
      //   if (valid) {
      console.log(this.form)
      if (this.form.id != null) {
        updateAvaluate(this.form).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.open = false;
          this.getList();
        });
      } else {
        addAvaluate(this.form).then(response => {
          this.$message({
            message: '新增成功',
            type: 'success'
          });
          this.open = false;
          this.getList();
        });
      }
      //   }
      // });
    },
  }
};
</script>

<template>
	<div class="app-container">
		<div style="display: flex;">
			<div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" /></div>
			<span style="line-height: 20px; width:200px">生产流程监视</span>
			<el-input v-model="input_danhao" style="line-height: 10px; width:200px" size="mini" placeholder="请输入你要查询的生产计划单号"></el-input>
			<el-row>
				<el-button type="primary" size="mini">查询</el-button>
			</el-row>
      <el-input v-model="input_rongci" style="line-height: 10px; width:200px" size="mini" placeholder="请输入你要查询的熔次号"></el-input>
			<el-row>
				<el-button type="primary" size="mini">查询</el-button>
			</el-row>
      <el-input v-model="input_lengzha" style="line-height: 10px; width:200px" size="mini" placeholder="请输入你要查询的冷轧卷号"></el-input>
			<el-row>
				<el-button type="primary" size="mini">查询</el-button>
			</el-row>
		</div>
		<div align="center">
			<span style="line-height: 90px;" size="mini">当前生产流程： </span>
			<el-button type="primary" size="mini">保温</el-button>
		</div>
		<div >
			<CustomStep :steps-data="stepData" :active="active"></CustomStep>
		</div>
		<div style="display: flex;justify-content: space-between">
			<!-- 交期风险预判图表 -->
			<div class="top_card" >
				<el-card shadow="always" style="height: 500px">
					<div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
						<div style="display: flex;">
							<div style="font-size: 20px;color: blue;margin-right: 10px;"><i class="el-icon-s-help" />
							</div>
							<span style="line-height: 40px;display: flex">交期风险预判</span>
						</div>
						<div>
							<el-date-picker v-model="value1" type="daterange" start-placeholder="开始日期"
								end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
							</el-date-picker>
						</div>
					</div>
					<div>
						<el-table :data="fengxianData" border >
							<el-table-column fixed prop="order_num" label="订单号" >
							</el-table-column>
							<el-table-column prop="progress" label="进度" >
								<el-progress :percentage="80" ></el-progress>
							</el-table-column>
							<el-table-column prop="left_time" label="剩余时间" >
							</el-table-column>
							<el-table-column fixed="right" label="操作" >
								<template slot-scope="scope">
									<el-button @click="fengxianClick(scope.row)" type="text" size="small">查看</el-button>
									<!--                  <el-button type="text" size="small">编辑</el-button>-->
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-card>
			</div>
			<!--      异常流程显示图表 -->
			<div class="top_card">
				<el-card shadow="always" style="height: 500px">
					<div slot="header" style="line-height: 40px;display: flex;justify-content: space-between;">
						<div style="display: flex;">
							<div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si />
							</div>
							<span style="line-height: 40px;">异常流程显示</span>
						</div>
						<div>
							<el-date-picker v-model="value2" type="daterange" start-placeholder="开始日期"
								end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
							</el-date-picker>
						</div>
					</div>
					<div>
						<el-table :data="tableData" border >
							<el-table-column fixed prop="num" label="序号" >
							</el-table-column>
							<el-table-column prop="product_num" label="产品编号" >
							</el-table-column>
							<el-table-column prop="now_process" label="当前流程" >
							</el-table-column>
							<el-table-column prop="hang_time" label="停滞时间">
							</el-table-column>
							<el-table-column prop="note" label="备注" >
							</el-table-column>
							<el-table-column fixed="right" label="操作">
								<template slot-scope="scope">
									<!--                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
									<el-button type="text" @click="yichangClick(scope.row)">查看</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-card>
			</div>
		</div>
		<!--    交期风险信息显示查看对话框-->
		<el-dialog title="提示" :visible.sync="fengxianVisible" width="30%" :before-close="handleClose">
			<span>交期风险信息显示</span>
			<el-form label-width="80px" label-position="left" :model="fengxianAlign" :disabled="true">
				<el-form-item label="订单号">
					<el-input v-model="fengxianAlign.order_num"></el-input>
				</el-form-item>
				<el-form-item label="剩余时间">
					<el-input v-model="fengxianAlign.left_time"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="fengxianVisible = false">取 消</el-button>
				<el-button type="primary" @click="fengxianVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!--    异常流程信息显示查看对话框-->
		<el-dialog title="提示" :visible.sync="yichangVisible" width="30%" :before-close="handleClose">
			<span>异常流程信息显示</span>
			<el-form label-width="80px" label-position="left" :model="yichangAlign" :disabled="true">
				<el-form-item label="序号">
					<el-input v-model="yichangAlign.num"></el-input>
				</el-form-item>
				<el-form-item label="产品编号">
					<el-input v-model="yichangAlign.product_num"></el-input>
				</el-form-item>
				<el-form-item label="当前流程" >
					<el-input v-model="yichangAlign.now_process"></el-input>
				</el-form-item>
				<el-form-item label="停滞时间">
					<el-input v-model="yichangAlign.hang_time"></el-input>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="yichangAlign.note"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="yichangVisible = false">取 消</el-button>
				<el-button type="primary" @click="yichangVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import CustomStep from '@/views/dashboard/CustomStep'
	export default {
		name: 'ProcessMonitor',
		components: {
			CustomStep
		},
		data() {
			return {
        input_danhao: '',
        input_rongci: '',
        input_lengzha: '',
				active: 6,
				value1: '',
				value2: '',
				yichangVisible: false,
				fengxianVisible: false,
				fengxian: false,
				stepData: [{
						title: '步骤1铸扎生产计划确定',
						description: '创建时间：2022.02.22，最后修改时间：2022.02.22，厚度偏差：15mm,宽度偏差：15mm,中凸度%：15%，平均中凸度%：15%，客户名称：张三，内径/管芯材质：铜，卷径范围（mm）：15mm，单卷重量（吨)：15吨，卷数：15卷，合金牌号：A123456'
					},
					{
						title: '步骤2熔炉生产',
						description: '关联计划ID:plan_id' +
                '熔次号:A123456,牌号:A123456' +
                '装炉时间:2022.02.22,喷粉精炼#开始时间:2022.02.22,' +
                '喷粉精炼#结束时间:2022.02.22,取样时间:2022.02.22,配比班组id:123' +
                '配比班组名称:A班，精炼开始时间:2022.02.22' +
                '精炼结束时间:2022.02.22，倒炉作业#开始时间:2022.02.22' +
                '倒炉作业#结束时间:2022.02.22，创建时间:2022.02.22' +
                '修改时间:2022.02.22'
					},
					{
						title: '步骤3保温',
						description: '熔次号：A123456,牌号：A123456，创建时间:2022.02.22，修改时间:2022.02.22'
					},
          {
            title: '步骤4保温（第一次精炼）',
            description: '开始时间:2022.02.22' +
                '结束时间:2022.02.22,精炼剂#介质:铝' +
                '精炼剂#用量：150L，班组名称：A班'
          },
          {
            title: '步骤5保温（第二次精炼）',
            description: '开始时间:2022.02.22' +
                '结束时间:2022.02.22,精炼剂#介质:铝' +
                '精炼剂#用量：150L，班组名称：A班'
          },
          {
            title: '步骤6保温（第三次精炼）',
            description: '开始时间:2022.02.22' +
                '结束时间:2022.02.22,精炼剂#介质:铝' +
                '精炼剂#用量：150L，班组名称：A班'
          },
          {
            title: '步骤7保温（第四次精炼）',
            description: '开始时间:2022.02.22' +
                '结束时间:2022.02.22,精炼剂#介质:铝' +
                '精炼剂#用量：150L，班组名称：A班'
          },
          {
            title: '步骤8保温（第五次精炼）',
            description: '开始时间:2022.02.22' +
                '结束时间:2022.02.22,精炼剂#介质:铝' +
                '精炼剂#用量：150L，班组名称：A班'

          },
          {
            title: '',
            description: ''
          },
					{
						title: '步骤9铸扎生产',
						description: '关联计划ID：plan_id，关联熔次号：smelt_times，铸轧卷号：A123456' +
                '牌号：A123456' +
                '客户信息：张三' +
                '板厚：15cm' +
                '规格宽度15cm，上卷信息#上卷时间:2022.02.22' +
                '上卷信息#交班壁厚：15cm' +
                '上卷信息#交班卷重：15KG,下卷信息#库位号:15号' +
                '下卷信息#当班卷重：15KG' +
                '下卷信息#卸卷时间:2022.02.22' +
                '下卷信息#卷径±2mm：15mm,倒炉作业#时间:2022.02.22' +
                '倒炉作业#熔次号：A123456,创建时间:2022.02.22'
					},
					{
						title: '步骤10铸扎卷质检',
						description: '创建时间：2022.04.02，修改时间：2022.04.02，批号(铸轧卷号)：A123456' +
                '规格：15mm' +
                '牌号：A123456' +
                '重量：15g,厚度(mm)：15mm' +
                '宽度(mm)：15mm' +
                '表面质量：15mm' +
                '外观质量：15mm' +
                '评审结果:合格' +
                '综合判定：合格，下卷时间：2022.04.02'
					},
					{
						title: '步骤11冷轧生产计划确定',
						description: '冷轧带材计划编号：coldreductionstrip_num，创建时间：2022.04.02，客户名称：张三，交货日期A2：2022.04.02' +
                '交货日期B：2022.04.02，来料规格：合格' +
                '成品规格：合格，抗拉强度ob/Mpa：150' +
                '延伸率：150' +
                '折弯性能：好' +
                '纵向厚度偏差mm：150' +
                '宽度偏差mm：150' +
                '凸面率%：150n' +
                '产品外观质量及轧制要求：合格，合金牌号：A123456' +
                '平直度：15'
					},
					{
						title: '步骤12冷轧工序',
						description: '计划id：123456，(铸轧卷号)来料卷号：A123456' +
                '冷轧卷号：A123456' +
                '合金牌号：A123456，预定交货日期：2022.04.02' +
                '成品厚度：15mm' +
                '成品宽度：15mm，开坯时间：2022.04.02，中轧时间：2022.04.02，精轧时间：2022.04.02，冷轧成品重量：15g，' +
                '切 边时 间：2022.04.02，：2022.04.02，生产状态：正常' +
                '入库时间：2022.04.02' +
                '入库重量15g，创建时间：2022.04.02，修改时间：2022.04.02'
					},
					{
						title: '步骤13退火',
						description: '创建时间：2022.04.02' +
                '冷轧卷号：A123456' +
                '退火日期：2022.04.02' +
                '退火炉号：A123456' +
                '退火开始时间：2022.04.02' +
                '退火结束时间：2022.04.02' +
                '炉气温度(℃)Ⅰ区：1115℃' +
                '炉气温度(℃)Ⅱ区：1115℃' +
                '炉气温度(℃)Ⅲ区：1115℃' +
                '水压MPa：111' +
                '气压MPa：111'
					},
					{
						title: '步骤14冷轧卷成品质检',
						description: '创建时间：2022.04.02，修改时间：2022.04.02，客户名称\n' +
                '冷轧卷号：A123456' +
                '厚度：15mm' +
                '宽度：15mm' +
                '卷径：15mm' +
                '合金牌号：A123456' +
                '状态:好' +
                '重量：15g' +
                '板形质量：15g' +
                '尺寸偏差：15mm' +
                '力学性能:好' +
                '表面质量:好' +
                '外观质量:好' +
                '晶粒度：15mm' +
                '执行标准：A123456' +
                '综合判定:合格' +
                '不合格处理意见：重新熔炉' +
                '日期时间：2022.04.02'
					},
					{
						title: '步骤15重卷中切',
						description: '创建时间：2022.04.02，合金状态：好' +
                '产品名称：铝' +
                '来料卷号(铸轧卷号)：A123456' +
                '来料规格mm：15mm' +
                '加工后冷轧卷号：A123456' +
                '加工后规格mm:15mm' +
                '质量状况#质量情况:好' +
                '质量状况#判定结果：合格'
					},
          {
						title: '步骤16冷轧卷成品入库',
						description: '库位区域:江口' +
                '货架号：A123456' +
                '冷轧卷号：A123456' +
                '牌号：A123456' +
                '重量:15g' +
                '板型情况:好' +
                '用途：无' +
                '客户名称：张三' +
                '入库人：张三' +
                '入库时间：2022.04.02' +
                '创建人：张三' +
                '创建时间：2022.04.02' +
                '修改时间：2022.04.02'
					},
					{
						title: '步骤17包装检验',
						description: '创建时间：2022.04.02' +
                '修改时间：2022.04.02' +
                '冷轧卷号：A123456' +
                '规格：15mm' +
                '合金状态:好' +
                '卷径Φ：15mm' +
                '重量（t）:155t' +
                '包装日期：2022.04.02' +
                '报告时间：2022.04.02'
					}
				],
				yichangAlign: {},
				fengxianAlign: {},
				tableData: [{
					num: '001',
					product_num: 'A12034',
					now_process: '生产',
					hang_time: '2022.04.15',
					note: '温度过高'

				}, {
					num: '002',
					product_num: 'ACC034',
					now_process: '轧制',
					hang_time: '2022.06.55',
					note: '压力过大'
				}, {
					num: '003',
					product_num: 'BB2034',
					now_process: '质检',
					hang_time: '2022.08.15',
					note: '入库质检不过关'
				}, {
					num: '004',
					product_num: 'ABC034',
					now_process: '退火 ',
					hang_time: '2022.10.15',
					note: '退火过程失败'
				}],
				fengxianData: [{
					order_num: '001',
					progress: ' ',
					left_time: '18天7小时45分'
				}, {
					order_num: '002',
					progress: ' ',
					left_time: '22天2小时45分'
				}, {
					order_num: '003',
					progress: ' ',
					left_time: '8天5小时45分'
				}, {
					order_num: '004',
					progress: ' ',
					left_time: '2天12小时45分'
				}]
			}
		},
		watch: {},
		methods: {
			// handleClose(done) {
			// 	this.$confirm('确认关闭？')
			// 		.then( => {
			// 			done()
			// 		})
			// 		.catch( => {})
			// },
			// 风险流程操作
			fengxianClick(row) {
				console.log(row)
				this.fengxianVisible = true
				this.fengxianAlign = row
			},
			// 异常流程操作
			yichangClick(row) {
				console.log(row)
				this.yichangVisible = true
				this.yichangAlign = row
			},
			next() {
				if (this.active++ > 2) this.active = 0
			},
			format(percentage) {
				return percentage === 100 ? '满' : `${percentage}%`
			}
		}
	}
</script>
<style scoped="sass">
	.top_card {
		flex: 2;
		margin: 1% 1%;
	}

	.bottom_card {
		margin: 1% 1%;
	}

	/deep/ .el-card__header {
		padding: 10px 20px;
	}

	.el_progress {
		margin: 15px 0;
	}
</style>

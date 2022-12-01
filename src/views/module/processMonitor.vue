<template>
	<div class="app-container">
    <div style="background-color: white;padding: 20px 20px">
      <div style="display: flex;">
        <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" /></div>
        <span style="line-height: 20px; width:200px">生产流程监视</span>
        <div>
          <el-input v-model="queryParams.produceId" size="small" placeholder="计划单号/熔次号/冷轧卷号" :clearable="true" >
            <el-button slot="append"	style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query(queryParams.produceId)">
              查询
            </el-button>
          </el-input>
        </div>
  
      </div>
      <div align="center" style="color: #000000">
  
        <span style="line-height: 90px;" size="mini">当前生产流程：{{nowProduct}} </span>
  
      </div>
      <div >
        <CustomStep :steps-data="stepData" :active="active"></CustomStep>
      </div>
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
  import { getCastPlanList } from '@/api/ImdpCastPlan'
  import { getCastSmeltHoldList } from '@/api/ImdpCastSmeltHold'
  import { getCastHoldingFurnaceList } from '@/api/lmdpCastHoldingFurnace'
  import { getQcCastReelList } from '@/api/ImdpQcCastReel'
  import { getFirstConciseList } from '@/api/ImdpFirstConcise'
  import { getSecondConciseList } from '@/api/ImdpSecondConcise'
  import { getThirdConciseList } from '@/api/ImdpThirdConcise'
  import { getCastProduceList } from '@/api/ImdpCastProduce'
  import { getColdPlanList } from '@/api/ImdpColdPlan'
  import { getColdProduceList } from '@/api/ImdpColdProduce'
  import { getColdFurnaceRecordList } from '@/api/ImdpColdFurnaceRecord'
  import { getFourthConciseList } from '@/api/ImdpFourthConcise'
  import { getFifthConciseList } from '@/api/ImdpFifthConcise'
  import { getQcColdReelReportList } from '@/api/ImdpQcColdReelReport'
  import { getColdRereelerRecordList } from '@/api/ImdpColdRereelerRecord'
  import { getColdStoreRecordList } from '@/api/ImdpColdStoreRecord'
  import { getQcPackList } from '@/api/ImdpQcPack'

	export default {
		name: 'ProcessMonitor',
		components: {
			CustomStep
		},
		data() {
			return {
        // 查询参数
        queryParams: {
          produceId: '',
        },
        produceTitle: ['铸轧计划','熔炉生产','保温','保温（第一次精炼）','保温（第二次精炼）','保温（第三次精炼）','保温（第四次精炼）','保温（第五次精炼）','铸轧生产','铸轧卷质检','冷轧生产计划确定','冷轧工序','退火','冷轧卷成品质检','重卷中切','冷轧卷成品入库','包装检验'],
        nowProduct : null,
        // 显示搜索条件
        showSearch: true,
        // 个人基本信息表格数据
        informationList: [],
        input_danhao: '',
        input_rongci: '',
        input_lengzha: '',
				active: 0,
				value1: '',
				value2: '',
				yichangVisible: false,
				fengxianVisible: false,
				fengxian: false,
				stepData: [{
						title: '工序1：铸轧计划',
            description: '创建时间:' +
                '最后修改时间:' +
                '厚度偏差:' +
                '宽度偏差:' +
                '中凸度%：' +
                '平均中凸度%：' +
                '客户名称：' +
                '内径/管芯材质：' +
                '卷径范围（mm）：' +
                '单卷重量（吨)：' +
                '卷数：' +
                '合金牌号：'
					},
					{
						title: '工序2：熔炉生产',
						description: '关联计划ID: ' +
                '熔次号: ' +
                '牌号: ' +
                '装炉时间: ' +
                '喷粉精炼#开始时间: ,' +
                '喷粉精炼#结束时间: ' +
                '取样时间: ' +
                '配比班组id: ' +
                '配比班组名称:' +
                '精炼开始时间: ' +
                '精炼结束时间: ' +
                '倒炉作业#开始时间: ' +
                '倒炉作业#结束时间:' +
                '创建时间: ' +
                '修改时间: '
					},
					{
						title: '工序3：保温',
						description: '熔次号：' +
                '牌号：' +
                '创建时间:' +
                '修改时间: '
					},
          {
            title: '工序4：保温（精炼一）',
            description: '开始时间: ' +
                '结束时间:' +
                '精炼剂#介质: ' +
                '精炼剂#用量：' +
                '班组名称： '
          },
          {
            title: '工序5：保温（精炼二）',
            description: '开始时间: ' +
                '结束时间:' +
                '精炼剂#介质: ' +
                '精炼剂#用量： ' +
                '班组名称： '
          },
          {
            title: '工序6：保温（精炼三）',
            description: '开始时间: ' +
                '结束时间: ' +
                '精炼剂#介质: ' +
                '精炼剂#用量： ' +
                '班组名称： '
          },
          {
            title: '工序7：保温（精炼四）',
            description: '开始时间: ' +
                '结束时间: ' +
                '精炼剂#介质:' +
                '精炼剂#用量：' +
                '班组名称： '
          },
          {
            title: '工序8：保温（精炼五）',
            description: '开始时间: ' +
                '结束时间: ' +
                '精炼剂#介质:' +
                '精炼剂#用量：' +
                '班组名称： '

          },
					{
						title: '工序9：铸扎生产',
						description: '关联计划ID：' +
                '关联熔次号：' +
                '铸轧卷号： ' +
                '牌号： ' +
                '客户信息： ' +
                '板厚： ' +
                '规格宽度' +
                '上卷信息#上卷时间: ' +
                '上卷信息#交班壁厚： ' +
                '上卷信息#交班卷重：' +
                '下卷信息#库位号: ' +
                '下卷信息#当班卷重： ' +
                '下卷信息#卸卷时间: ' +
                '下卷信息#卷径±2mm：' +
                '倒炉作业#时间: ' +
                '倒炉作业#熔次号：' +
                '创建时间: '
					},
					{
						title: '工序10：铸扎卷质检',
						description: '创建时间：' +
                '修改时间：' +
                '批号(铸轧卷号)：   ' +
                '规格： ' +
                '牌号：   ' +
                '重量：' +
                '厚度(mm)：   ' +
                '宽度(mm)：    ' +
                '表面质量：    ' +
                '外观质量：    ' +
                '评审结果:     ' +
                '综合判定： ' +
                '下卷时间：  '
					},
					{
						title: '工序11：冷轧生产计划',
						description: '冷轧带材计划编号：' +
                '创建时间：' +
                '客户名称：' +
                '交货日期A2：  ' +
                '交货日期B：' +
                '来料规格：    ' +
                '成品规格：' +
                '抗拉强度ob/Mpa： ' +
                '延伸率： ' +
                '折弯性能： ' +
                '纵向厚度偏差mm： ' +
                '宽度偏差mm： ' +
                '凸面率%： ' +
                '产品外观质量及轧制要求：' +
                '合金牌号：   ' +
                '平直度： '
					},
					{
						title: '工序12：冷轧工序',
						description: '计划id：' +
                '(铸轧卷号)来料卷号：   ' +
                '冷轧卷号：   ' +
                '合金牌号：  ' +
                '预定交货日期：  ' +
                '成品厚度：    ' +
                '成品宽度：  ' +
                '开坯时间：  ' +
                '中轧时间： ' +
                '精轧时间：  ' +
                '冷轧成品重量：  ' +
                '切边时间：' +
                '生产状态： ' +
                '入库时间：  ' +
                '入库重量：' +
                '创建时间： ' +
                '修改时间：  '
					},
					{
						title: '工序13：退火',
						description: '创建时间：  ' +
                '冷轧卷号：   ' +
                '退火日期：  ' +
                '退火炉号：   ' +
                '退火开始时间：  ' +
                '退火结束时间：  ' +
                '炉气温度(℃)Ⅰ区：  ' +
                '炉气温度(℃)Ⅱ区：  ' +
                '炉气温度(℃)Ⅲ区：  ' +
                '水压MPa：   ' +
                '气压MPa：   '
					},
					{
						title: '工序14：冷轧卷成品质检',
						description: '创建时间：' +
                '修改时间：  ' +
                '客户名称 ' +
                '冷轧卷号：   ' +
                '厚度：    ' +
                '宽度：    ' +
                '卷径：    ' +
                '合金牌号：   ' +
                '状态: ' +
                '重量： ' +
                '板形质量： ' +
                '尺寸偏差：    ' +
                '力学性能: ' +
                '表面质量: ' +
                '外观质量: ' +
                '晶粒度：    ' +
                '执行标准：   ' +
                '综合判定:     ' +
                '不合格处理意见： ' +
                '日期时间：  '
					},
					{
						title: '工序15：重卷中切',
						description: '创建时间： ' +
                '合金状态： ' +
                '产品名称：  ' +
                '来料卷号(铸轧卷号)：   ' +
                '来料规格mm：    ' +
                '加工后冷轧卷号：   ' +
                '加工后规格mm:    ' +
                '质量状况#质量情况: ' +
                '质量状况#判定结果：     '
					},
          {
						title: '工序16：冷轧卷入库',
						description: '库位区域: ' +
                '货架号：   ' +
                '冷轧卷号：   ' +
                '牌号：   ' +
                '重量: ' +
                '板型情况: ' +
                '用途： ' +
                '客户名称： ' +
                '入库人： ' +
                '入库时间：  ' +
                '创建人： ' +
                '创建时间：  ' +
                '修改时间：  '
					},
					{
						title: '工序17：包装检验',
						description: '创建时间：  ' +
                '修改时间：  ' +
                '冷轧卷号：   ' +
                '规格：    ' +
                '合金状态: ' +
                '卷径Φ：    ' +
                '重量（t）: ' +
                '包装日期：  ' +
                '报告时间：  '
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
				}],
        monitorData:[]
			}
		},
		watch: {},
    created() {
      // getCastPlanList({planId: '1'}).then((res) => {
      //   console.log('2222222res: ', res)
      // })
    },
    methods: {
			handleClose() {
			},
      /**
       * 工序查询
       * @param {Object} val
       */
      query(val) {
        console.log(val)
        this.getList()

      },
      /**
       * 获取表格数据
       */
      async getList() {
        this.monitorData = []

        //数据初始化
        this.stepData[1].description = '关联计划ID: ' +            '熔次号: ' +            '牌号: ' +            '装炉时间: ' +            '喷粉精炼#开始时间: ,' +            '喷粉精炼#结束时间: ' +            '取样时间: ' +            '配比班组id: ' +            '配比班组名称:' +            '精炼开始时间: ' +            '精炼结束时间: ' +            '倒炉作业#开始时间: ' +            '倒炉作业#结束时间:' +            '创建时间: ' +            '修改时间: '
        this.stepData[2].description = '熔次号：' +        '牌号：' +        '创建时间:' +        '修改时间: '
        this.stepData[3].description = '开始时间: ' +            '结束时间:' +            '精炼剂#介质: ' +            '精炼剂#用量：' +            '班组名称： '
        this.stepData[4].description = '开始时间: ' +            '结束时间:' +            '精炼剂#介质: ' +            '精炼剂#用量： ' +            '班组名称： '
        this.stepData[5].description = '开始时间: ' +            '结束时间:' +            '精炼剂#介质: ' +            '精炼剂#用量： ' +            '班组名称： '
        this.stepData[6].description = '开始时间: ' +            '结束时间:' +            '精炼剂#介质: ' +            '精炼剂#用量： ' +            '班组名称： '
        this.stepData[7].description = '开始时间: ' +            '结束时间:' +            '精炼剂#介质: ' +            '精炼剂#用量： ' +            '班组名称： '
        this.stepData[8].description = '关联计划ID：' +            '关联熔次号：' +            '铸轧卷号： ' +            '牌号： ' +            '客户信息： ' +            '板厚： ' +            '规格宽度' +            '上卷信息#上卷时间: ' +            '上卷信息#交班壁厚： ' +            '上卷信息#交班卷重：' +            '下卷信息#库位号: ' +            '下卷信息#当班卷重： ' +            '下卷信息#卸卷时间: ' +            '下卷信息#卷径±2mm：' +            '倒炉作业#时间: ' +            '倒炉作业#熔次号：' +            '创建时间: '
        this.stepData[9].description = '创建时间：' +            '修改时间：' +            '批号(铸轧卷号)：   ' +            '规格： ' +            '牌号：   ' +            '重量：' +            '厚度(mm)：   ' +            '宽度(mm)：    ' +            '表面质量：    ' +            '外观质量：    ' +            '评审结果:     ' +            '综合判定： ' +            '下卷时间：  '
        this.stepData[10].description = '冷轧带材计划编号：' +            '创建时间：' +            '客户名称：' +            '交货日期A2：  ' +            '交货日期B：' +            '来料规格：    ' +            '成品规格：' +            '抗拉强度ob/Mpa： ' +            '延伸率： ' +            '折弯性能： ' +            '纵向厚度偏差mm： ' +            '宽度偏差mm： ' +            '凸面率%： ' +            '产品外观质量及轧制要求：' +            '合金牌号：   ' +            '平直度： '
        this.stepData[11].description = '计划id：' +            '(铸轧卷号)来料卷号：   ' +            '冷轧卷号：   ' +            '合金牌号：  ' +            '预定交货日期：  ' +            '成品厚度：    ' +            '成品宽度：  ' +            '开坯时间：  ' +            '中轧时间： ' +            '精轧时间：  ' +            '冷轧成品重量：  ' +            '切边时间：' +            '生产状态： ' +            '入库时间：  ' +            '入库重量：' +            '创建时间： ' +            '修改时间：  '
        this.stepData[12].description = '创建时间：  ' +            '冷轧卷号：   ' +            '退火日期：  ' +            '退火炉号：   ' +            '退火开始时间：  ' +            '退火结束时间：  ' +            '炉气温度(℃)Ⅰ区：  ' +            '炉气温度(℃)Ⅱ区：  ' +            '炉气温度(℃)Ⅲ区：  ' +            '水压MPa：   ' +            '气压MPa：   '
        this.stepData[13].description = '创建时间：' +            '修改时间：  ' +            '客户名称 ' +            '冷轧卷号：   ' +            '厚度：    ' +            '宽度：    ' +            '卷径：    ' +            '合金牌号：   ' +            '状态: ' +            '重量： ' +            '板形质量： ' +            '尺寸偏差：    ' +            '力学性能: ' +            '表面质量: ' +            '外观质量: ' +            '晶粒度：    ' +            '执行标准：   ' +            '综合判定:     ' +            '不合格处理意见： ' +            '日期时间：  '
        this.stepData[14].description = '创建时间： ' +            '合金状态： ' +            '产品名称：  ' +            '来料卷号(铸轧卷号)：   ' +            '来料规格mm：    ' +            '加工后冷轧卷号：   ' +            '加工后规格mm:    ' +            '质量状况#质量情况: ' +            '质量状况#判定结果：     '
        this.stepData[15].description = '库位区域: ' +            '货架号：   ' +            '冷轧卷号：   ' +            '牌号：   ' +            '重量: ' +            '板型情况: ' +            '用途： ' +            '客户名称： ' +            '入库人： ' +            '入库时间：  ' +            '创建人： ' +            '创建时间：  ' +            '修改时间：  '
        this.stepData[16].description = '创建时间：  ' +            '修改时间：  ' +            '冷轧卷号：   ' +            '规格：    ' +            '合金状态: ' +            '卷径Φ：    ' +            '重量（t）: ' +            '包装日期：  ' +            '报告时间：  '

        //铸轧生产计划确定
        let  { data : lmdpCP }  = await getCastPlanList(this.queryParams);
        this.monitorData.push(lmdpCP[0])
        this.stepData[0].description = "创建时间:"+this.monitorData[0].createTime+'最后修改时间:'+this.monitorData[0].lastmodifyTime+'厚度偏差mm:'+this.monitorData[0].thicknessDev+'宽度偏差mm:'+this.monitorData[0].widthDev+'中凸度%:'+this.monitorData[0].convexity+'平均中凸度%:'+this.monitorData[0].convexityAvg+'客户名称:'+this.monitorData[0].client+'内径/管芯材质:'+this.monitorData[0].inside+'卷径范围（mm）:'+this.monitorData[0].scope+'单卷重量（吨):'+this.monitorData[0].weight+'卷数:'+this.monitorData[0].count+'合金牌号:'+this.monitorData[0].alloyNumber
        // this.nowProduct = '铸轧生产计划确定'
        this.nowProduct = this.produceTitle[0]
        this.active = this.monitorData.length

        //熔炉生产
        let  { data : lmdpCSH }  = await getCastSmeltHoldList({ planId: lmdpCP[0].produceId});
        this.monitorData.push(lmdpCSH[0])
        this.stepData[1].description = "关联计划ID:"+this.monitorData[1].planId+'熔次号:'+this.monitorData[1].smeltTimes+'牌号:'+this.monitorData[1].brand+'装炉时间:'+this.monitorData[1].feedTime+'喷粉精炼#开始时间: '+this.monitorData[1].mimRefine1BeginTime+'喷粉精炼#结束时间:'+this.monitorData[1].mimRefine1EndTime+'取样时间:'+this.monitorData[1].refine1SamplingTime+'配比班组id:'+this.monitorData[1].refine1RatioGroupId+' 配比班组名称:'+this.monitorData[1].refine1RatioGroupName+':精炼开始时间::'+this.monitorData[1].grainRefine1BeginTime+' 精炼结束时间:'+this.monitorData[1].grainRefine1EndTime+'倒炉作业#开始时间:'+this.monitorData[1].turndownBeginTime+'倒炉作业#结束时间:'+this.monitorData[1].turndownEndTime+'创建时间:'+this.monitorData[1].createTime+'修改时间:'+this.monitorData[1].ts
        // this.nowProduct = '熔炉生产'
        this.nowProduct = this.produceTitle[1]
        this.active = this.monitorData.length

        //保温
        let  { data : lmdpCHF }  = await getCastHoldingFurnaceList({ smeltTimes: lmdpCSH[0].smeltTimes});
        this.monitorData.push(lmdpCHF[0])
        this.stepData[2].description = '熔次号:'+this.monitorData[2].smeltTimes+'牌号:'+this.monitorData[2].brand+'创建时间:'+this.monitorData[2].createTime+'修改时间:'+this.monitorData[2].ts
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[2]
        this.active = this.monitorData.length

        //保温(第一次)
        let  { data : lmdpFirstC }  = await getFirstConciseList({ holdRefine1GroupName: lmdpCSH[0].smeltTimes});
        this.monitorData.push(lmdpFirstC[0])
        this.stepData[3].description = "开始时间:"+this.monitorData[3].holdRefine1BeginTime+'结束时间:'+this.monitorData[3].holdRefine1EndTime+'精炼剂#介质:'+this.monitorData[3].holdRefine1Medium+'精炼剂#用量:'+this.monitorData[3].holdRefine1Dose+'班组名称:'+this.monitorData[3].holdRefine1GroupName
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[3]
        this.active = this.monitorData.length

        //保温(第二次)
        let  { data : lmdpSecondC }  = await getSecondConciseList({ holdRefine2GroupName: lmdpFirstC[0].holdRefine1GroupName});
        this.monitorData.push(lmdpSecondC[0])
        this.stepData[4].description = "开始时间:"+this.monitorData[4].holdRefine2BeginTime+'结束时间:'+this.monitorData[4].holdRefine2EndTime+'精炼剂#介质:'+this.monitorData[4].holdRefine2Medium+'精炼剂#用量:'+this.monitorData[4].holdRefine2Dose+'班组名称:'+this.monitorData[4].holdRefine2GroupName
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[4]
        this.active = this.monitorData.length

        //保温(第三次)
        let  { data : lmdpThirdC }  = await getThirdConciseList({ holdRefine3GroupName: lmdpSecondC[0].holdRefine2GroupName});
        this.monitorData.push(lmdpThirdC[0])
        this.stepData[5].description = "开始时间:"+this.monitorData[5].holdRefine3BeginTime+'结束时间:'+this.monitorData[5].holdRefine3EndTime+'精炼剂#介质:'+this.monitorData[5].holdRefine3Medium+'精炼剂#用量:'+this.monitorData[5].holdRefine3Dose+'班组名称:'+this.monitorData[5].holdRefine3GroupName
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[5]
        this.active = this.monitorData.length

        //保温(第四次)
        let  { data : lmdpFourthC }  = await getFourthConciseList({ holdRefine4GroupName: lmdpThirdC[0].holdRefine3GroupName});
        this.monitorData.push(lmdpFourthC[0])
        this.stepData[6].description = "开始时间:"+this.monitorData[6].holdRefine4BeginTime+'结束时间:'+this.monitorData[6].holdRefine4EndTime+'精炼剂#介质:'+this.monitorData[6].holdRefine4Medium+'精炼剂#用量:'+this.monitorData[6].holdRefine4Dose+'班组名称:'+this.monitorData[6].holdRefine4GroupName
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[6]
        this.active = this.monitorData.length

        //保温(第五次)
        let  { data : lmdpFifthC }  = await getFifthConciseList({ holdRefine5GroupName: lmdpFourthC[0].holdRefine4GroupName});
        this.monitorData.push(lmdpFifthC[0])
        this.stepData[7].description = "开始时间:"+this.monitorData[7].holdRefine5BeginTime+'结束时间:'+this.monitorData[7].holdRefine5EndTime+'精炼剂#介质:'+this.monitorData[7].holdRefine5Medium+'精炼剂#用量:'+this.monitorData[7].holdRefine5Dose+'班组名称:'+this.monitorData[7].holdRefine5GroupName
        // this.nowProduct = '保温'
        this.nowProduct = this.produceTitle[7]
        this.active = this.monitorData.length

        // 铸轧生产
        let  { data : lmdpCastPL }  = await getCastProduceList({ smeltTimes: lmdpFifthC[0].holdRefine5GroupName});
        this.monitorData.push(lmdpCastPL[0])
        this.stepData[8].description = "关联计划ID:"+this.monitorData[8].planId+'关联熔次号:'+this.monitorData[8].smeltTimes+'铸轧卷号:'+this.monitorData[8].reelNum+' 牌号:'+this.monitorData[8].brand+'客户信息:'+this.monitorData[8].customer+'板厚:'+this.monitorData[8].thick+'规格宽度:'+this.monitorData[8].width+'上卷信息#上卷时间:'+this.monitorData[8].procUpperTime+' 上卷信息#交班壁厚:'+this.monitorData[8].procUpperShiftTthick+'上卷信息#交班卷重:'+this.monitorData[8].procUpperShiftTweight+'下卷信息#库位号:'+this.monitorData[8].procLowerLocationNum+'下卷信息#当班卷重:'+this.monitorData[8].procLowerDutyWeight+'下卷信息#卸卷时间:'+this.monitorData[8].procLowerRemoveTime+'下卷信息#卷径±2mm:'+this.monitorData[8].procLowerRollDiameter+'倒炉作业#时间:'+this.monitorData[8].qtfhTurndownTime+'倒炉作业#熔次号:'+this.monitorData[8].qtfhTurndownSmeltNum+'创建时间:'+this.monitorData[8].createTime
        this.nowProduct = this.produceTitle[8]
        this.active = this.monitorData.length

        //铸轧卷质检
        let  { data : lmdpQCRL }  = await getQcCastReelList({ reelNum: lmdpCastPL[0].smeltTimes});
        this.monitorData.push(lmdpQCRL[0])
        this.stepData[9].description = "创建时间:"+this.monitorData[9].createTime+'修改时间:'+this.monitorData[9].ts+'(批号)铸轧卷号:'+this.monitorData[9].reelNum+' 牌号:'+this.monitorData[9].brand+'规格:'+this.monitorData[9].model+'重量:'+this.monitorData[9].weight+'厚度:'+this.monitorData[9].thickness+'宽度mm:'+this.monitorData[9].width+'表面质量:'+this.monitorData[9].surfaceQc+' 外观质量:'+this.monitorData[9].facadeQc+'评审结果:'+this.monitorData[9].judgeResult+'综合判定:'+this.monitorData[9].judgeReamrk+'下卷时间:'+this.monitorData[9].nextReelTime
        this.nowProduct = this.produceTitle[9]
        this.active = this.monitorData.length

        //冷轧生产计划确定
        let  { data : lmdpColdP }  = await getColdPlanList({ coldreductionstripNum: lmdpQCRL[0].reelNum});
        this.monitorData.push(lmdpColdP[0])
        this.stepData[10].description = "冷轧带材计划编号:"+this.monitorData[10].coldreductionstripNum+"创建时间:"+this.monitorData[10].createTime+'客户名称:'+this.monitorData[10].client+'交货日期A2:'+this.monitorData[10].deliveredTimeA2+'交货日期B2:'+this.monitorData[10].deliveredTimeB2+'来料规格:'+this.monitorData[10].comeSpec+'成品规格:'+this.monitorData[10].productSpec+'抗拉强度ob/Mpa:'+this.monitorData[10].tensileStrength+'延伸率:'+this.monitorData[10].elongation+'折弯性能:'+this.monitorData[10].bendingPerformance+'纵向厚度偏差mm:'+this.monitorData[10].warpWidth+'宽度偏差mm:'+this.monitorData[10].warpWidth+'凸面率%:'+this.monitorData[10].convexRate+'产品外观质量及轧制要求:'+this.monitorData[10].appearanceReq+'合金牌号:'+this.monitorData[10].alloyNumber+'平直度:'+this.monitorData[10].flatness
        this.nowProduct = this.produceTitle[10]
        this.active = this.monitorData.length

        //冷轧工序
        let  { data : lmdpColdProduce }  = await getColdProduceList({ reelNum: lmdpColdP[0].coldreductionstripNum});
        this.monitorData.push(lmdpColdProduce[0])
        this.stepData[11].description =  "计划ID:"+this.monitorData[11].planId+"(铸轧卷号)来料卷号:"+this.monitorData[11].reelNum+'冷轧卷号:'+this.monitorData[11].batchNum+'合金牌号:'+this.monitorData[11].brand+'预定交货日期:'+this.monitorData[11].deliveryDate+'成品厚度:'+this.monitorData[11].productThick+'成品宽度:'+this.monitorData[11].productWidth+'开坯时间:'+this.monitorData[11].coggingTime+'中轧时间:'+this.monitorData[11].midRollTime+'精轧时间:'+this.monitorData[11].planishTime+'冷轧成品重量:'+this.monitorData[11].coldProductWeight+'切边时间:'+this.monitorData[11].cutTime+'生产状态:'+this.monitorData[11].produceStatus+'入库时间:'+this.monitorData[11].storageInTime+'入库重量:'+this.monitorData[11].storageInWeight+'创建时间:'+this.monitorData[11].createTime+'修改时间:'+this.monitorData[11].ts
        this.nowProduct = this.produceTitle[11]
        this.active = this.monitorData.length

        //退火
        let  { data : lmdpCFRL }  = await getColdFurnaceRecordList({ batchNum: lmdpColdProduce[0].reelNum});
        this.monitorData.push(lmdpCFRL[0])
        this.stepData[12].description = "创建时间:"+this.monitorData[12].createTime+'冷轧卷号:'+this.monitorData[12].batchNum+'退火日期:'+this.monitorData[12].recordDate+'退火炉号:'+this.monitorData[12].furnaceNum+'退火开始时间:'+this.monitorData[12].startTime+'退火结束时间:'+this.monitorData[12].endTime+'炉气温度(℃)Ⅰ区:'+this.monitorData[12].gasTemperature1+'炉气温度(℃)ⅠI区:'+this.monitorData[12].gasTemperature2+'炉气温度(℃)ⅠII区:'+this.monitorData[12].gasTemperature3+'水压MPa:'+this.monitorData[12].hydraulicPressure+'气压MPa:'+this.monitorData[12].gasPressure
        this.nowProduct = this.produceTitle[12]
        this.active = this.monitorData.length

        //冷轧卷成品质检
        let  { data : lmdpQCCRR }  = await getQcColdReelReportList({ batchNum: lmdpCFRL[0].batchNum});
        this.monitorData.push(lmdpQCCRR[0])
        this.stepData[13].description = "创建时间:"+this.monitorData[13].createTime+'修改时间:'+this.monitorData[13].ts+'客户名称:'+this.monitorData[13].consumer+'冷轧卷号:'+this.monitorData[13].batchNum+'厚度:'+this.monitorData[13].thickness+'宽度mm:'+this.monitorData[13].width+'卷径:'+this.monitorData[13].rollDiameter+'合金牌号:'+this.monitorData[13].brand+'状态:'+this.monitorData[13].status+'重量:'+this.monitorData[13].weight+'板形质量:'+this.monitorData[13].shapeQc+'尺寸偏差:'+this.monitorData[13].dimensionalDeviation+'力学性能:'+this.monitorData[13].mechanicalProperty+'表面质量:'+this.monitorData[13].surfaceQc+'外观质量:'+this.monitorData[13].facadeQc+'晶粒度:'+this.monitorData[13].sampleLevel+'执行标准:'+this.monitorData[13].executiveStandard+'综合判定:'+this.monitorData[13].judgeResult+' 不合格处理意见:'+this.monitorData[13].handleAdvice+'日期时间:'+this.monitorData[13].reporTtime
        this.nowProduct = this.produceTitle[13]
        this.active = this.monitorData.length

        //重卷中切
        let  { data : lmdpQRRecord }  = await getColdRereelerRecordList({ reelNum: lmdpQCCRR[0].batchNum});
        this.monitorData.push(lmdpQRRecord[0])
        this.stepData[14].description = "创建时间:"+this.monitorData[14].createTime+'合金状态:'+this.monitorData[14].brand+'产品名称:'+this.monitorData[14].productName+'来料卷号(铸轧卷号):'+this.monitorData[14].reelNum+'来料规格mm:'+this.monitorData[14].originRegular+'加工后冷轧卷号:'+this.monitorData[14].batchNum+'加工后规格mm:'+this.monitorData[14].processedRegular+'质量状况#质量情况:'+this.monitorData[14].quality+'质量状况#判定结果:'+this.monitorData[14].result
        this.nowProduct = this.produceTitle[14]
        this.active = this.monitorData.length

        //冷轧卷成品入库
        let  { data : lmdpCSRL }  = await getColdStoreRecordList({ reelNum: lmdpQRRecord[0].reelNum});
        this.monitorData.push(lmdpCSRL[0])
        this.stepData[15].description = '库位区域:'+this.monitorData[15].area+'货架号:'+this.monitorData[15].shelves+'冷轧卷号:'+this.monitorData[15].reelNum+' 牌号:'+this.monitorData[15].brand+'重量:'+this.monitorData[15].weight+'板型情况:'+this.monitorData[15].plateCut+'客户名称:'+this.monitorData[15].consumerName+'入库时间:'+this.monitorData[15].storageTime+"创建时间:"+this.monitorData[15].createTime+'修改时间:'+this.monitorData[15].ts
        this.nowProduct = this.produceTitle[15]
        this.active = this.monitorData.length

        //包装检验
        let  { data : lmdpQcPack }  = await getQcPackList({ batchNum: lmdpCSRL[0].reelNum});
        this.monitorData.push(lmdpQcPack[0])
        this.stepData[16].description = "创建时间:"+this.monitorData[16].createTime+'修改时间:'+this.monitorData[16].ts+'冷轧卷号:'+this.monitorData[16].batchNum+'规格:'+this.monitorData[16].model+'合金状态:'+this.monitorData[16].alloyStatus+'卷径Φ:'+this.monitorData[16].rollDiameter+'重量（t）:'+this.monitorData[16].weight+'包装日期:'+this.monitorData[16].packageTime+'报告时间:'+this.monitorData[16].reportTime
        this.nowProduct = this.produceTitle[16]
        this.active = this.monitorData.length


      },
      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
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

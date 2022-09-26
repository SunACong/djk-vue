<template>
  <div>
    <div style="display: flex;justify-content: space-between;line-height: 20px;padding: 5px 5px">
      <div style="flex: 5;text-align: center;box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div>铸轧机</div>
        <div style="display: flex;justify-content: space-between">
          <div>
            <i class="el-icon-s-help" si />
            <div>1#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>2#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>3#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>4#铸轧机</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>5#铸轧机</div>
          </div>
        </div>
      </div>

      <div style="flex: 1;margin:0px 20px;text-align: center;box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div>重卷机</div>
        <div >
          <i class="el-icon-s-help" si />
          <div>1#重卷机</div>
        </div>
      </div>
      <div style="flex: 7; box-shadow: 5px 5px 2px #cccccc;padding: 0 5px">
        <div style="text-align: center">退火炉</div>
        <div style="display: flex;justify-content: space-between;text-align: center">
          <div >
            <i :class="true?'el-icon-s-help':'el-icon-phone'" si />
            <div>1#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>2#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>3#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>4#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>5#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>6#退火炉</div>
          </div>
          <div>
            <i class="el-icon-s-help" si />
            <div>7#退火炉</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设备健康分析图表 -->
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">2#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">3#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">4#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">5#铸轧机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex;margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">重卷机</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData2" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" >
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData4" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">1#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1"  stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}" >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>

            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">2#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">3#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">4#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">5#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">6#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <div style="display: flex; margin-top: 5px;">
      <div style="width: 54%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <div style="font-size: 20px;color: blue;margin-right: 3px;"><i class="el-icon-s-help" si /></div>
              <span style="line-height: 20px;">7#退火炉</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 100%" height="300px" :cell-style="{'text-align':'center','height':'10px','line-hight':'150px'}" :header-cell-style="{'text-align':'center'}"  >
              <el-table-column prop="xuhao" label="序号" min-width="10%" />
              <el-table-column prop="name" label="指标名称" min-width="20%" />
              <el-table-column prop="value" label="数值" min-width="20%" />
              <el-table-column prop="tubiao" label="图表" min-width="50%" >
                <template slot-scope="scope">
                  <div @click="getChart(scope.row)" style="text-align: center">
                    <AreaChart width="200px" height="63px"></AreaChart>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 18%">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">当前设备状态</span>
            </div>
          </div>
          <div style="font-size: 60px;color: blue;text-align: center;margin: 99px auto">
            <i class="el-icon-s-help" si />
            <div style="font-size: 30px;color: green;">正常</div>
          </div>
        </el-card>
      </div>
      <div class="health_status" style="width: 40%;height: 300px">
        <el-card shadow="always">
          <div slot="header" style="line-height: 20px;display: flex;justify-content: space-between;">
            <div style="display: flex;">
              <span style="line-height: 20px;">报警记录表</span>
            </div>
          </div>
          <div>
            <el-table :data="tableData" stripe style="width: 100%" height="300px" :show-header="false" >
              <el-table-column prop="id" label="序号" min-width="10%" />
              <el-table-column prop="data" label="日期" min-width="25%" />
              <el-table-column prop="address" label="编号" min-width="25%" />
              <el-table-column prop="status" label="状态" min-width="25%" />
              <el-table-column label="判定结果" min-width="15%" >
                <template>
                  <el-button
                    size="mini"
                    type="text"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
    <el-dialog :visible.sync="dialogVisible">
      <div style="display: flex;">
        <el-button style="" type="text"> 本周 </el-button>
        <el-button style="" type="text"> 本月 </el-button>
        <el-button style="margin-right: 10px;" type="text"> 本年 </el-button>
        <div>
          <el-date-picker
            v-model="qualifyDateRange"
            size="small"
            type="daterange"
            align="left"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          />
        </div>
      </div>
      <div>
        <AreaChart></AreaChart>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import AreaChart from '@/views/dashboard/AreaChart'
import BarChart1 from '@/views/dashboard/BarChart1'
import BarChart2 from '@/views/dashboard/BarChart2'
import BarChart3 from '@/views/dashboard/BarChart3'
import { getList } from '@/api/rewinder'
export default {
  components: {AreaChart, BarChart1, BarChart2, BarChart3},
  props: {},
  data() {
    return {
      qualifyDateRange: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '本年至今',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
            // const start = new Date(new Date().getFullYear(), 0)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tableData: [{
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '02',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '03',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }, {
        id: '04',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '压力过高'
      }, {
        id: '05',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '装置故障'
      }, {
        id: '06',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }, {
        id: '07',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电机温度过高'
      }],
      tableData1: [{
        xuhao: '01',
        name: '炉冷却水',
        value: '83'
      }, {
        xuhao: '02',
        name: '炉压缩空气',
        value: '83'
      }, {
        xuhao: '03',
        name: '金属料温温度曲线',
        value: '83'
      }, {
        xuhao: '04',
        name: '1区炉气温度曲线',
        value: '83'
      }, {
        xuhao: '05',
        name: '2区炉气温度曲线',
        value: '83'
      }, {
        xuhao: '06',
        name: '3区炉气温度曲线',
        value: '83'
      },{
        xuhao: '07',
        name: '炉气设定温度',
        value: '83'
      }],
      tableData2: [{
        xuhao: '01',
        name: '开卷机速度曲线',
        value: '83'
      }, {
        xuhao: '02',
        name: '开卷机电流曲线',
        value: '83'
      }, {
        xuhao: '03',
        name: '卷取机速度曲线',
        value: '83'
      }, {
        xuhao: '04',
        name: '卷取机电流曲线',
        value: '83'
      }],
      tableData3: [{
        xuhao: '01',
        name: '上辊电机电流',
        value: '83'
      }, {
        xuhao: '02',
        name: '下辊电机电流',
        value: '83'
      }, {
        xuhao: '03',
        name: '主水泵电机电流',
        value: '83'
      }, {
        xuhao: '04',
        name: '备用水泵电机电流',
        value: '83'
      }, {
        xuhao: '05',
        name: '卷取电机电流',
        value: '83'
      }, {
        xuhao: '06',
        name: '上辊水压',
        value: '83'
      }, {
        xuhao: '7',
        name: '下辊水压',
        value: '83'
      }, {
        xuhao: '8',
        name: '上辊水温',
        value: '83'
      }, {
        xuhao: '9',
        name: '下辊水温',
        value: '83'
      }, {
        xuhao: '10',
        name: '上辊流量',
        value: '83'
      }, {
        xuhao: '11',
        name: '下辊流量',
        value: '83'
      }, {
        xuhao: '12',
        name: '操作侧预载力',
        value: '83'
      }, {
        xuhao: '13',
        name: '传动侧预载力',
        value: '83'
      }],
      tableData4: [{
        id: '01',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '速度过快'
      }, {
        id: '02',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电流过高'
      }, {
        id: '03',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '速度过快'
      }, {
        id: '04',
        data: '2022/04/15 18:00',
        address: '编号ADGH12435',
        status: '电流过高'
      }],
      dialogVisible: false
    }
  },
  created() {
    getList().then((res) => {
      console.log(res)
    })
  },
  methods: {
    getChart: function(row) {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


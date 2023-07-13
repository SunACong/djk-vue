import request from '@/utils/request'

export function getlmdpQcComplaintDetaillList(params) {
  return request({
    url: '/lmdpQcComplaintDetail/list',
    method: 'get',
    params
  })
}
export const formJson13= {"widgetList":[{"type":"alert","icon":"alert","formItemFlag":false,"options":{"name":"alert35515","title":"投诉卷信息","type":"success","description":"","closable":true,"closeText":"","center":true,"showIcon":false,"effect":"light","hidden":false,"onClose":"","customClass":[],"label":"alert"},"id":"alert35515"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"complaintTime","label":"投诉日期","labelAlign":"label-right-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"editable":false,"format":"yyyy-MM-dd HH:mm:ss","valueFormat":"yyyy-MM-dd HH:mm:ss","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date6800"}],"options":{"name":"gridCol93832","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-93832"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"batchNum","label":"投诉卷号","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input102280"}],"options":{"name":"gridCol48841","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-48841"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"customer","label":"客户名称","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input101268"}],"options":{"name":"gridCol65566","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-65566"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"castDate","label":"铸轧日期","labelAlign":"label-right-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"editable":false,"format":"yyyy-MM-dd HH:mm:ss","valueFormat":"yyyy-MM-dd HH:mm:ss","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date38225"}],"options":{"name":"gridCol77901","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-77901"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"castModel","label":"铸轧规格","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input100444"}],"options":{"name":"gridCol77216","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-77216"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"brand","label":"合金","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input102314"}],"options":{"name":"gridCol95611","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-95611"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"coldDate","label":"冷轧日期","labelAlign":"label-right-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"editable":false,"format":"yyyy-MM-dd HH:mm:ss","valueFormat":"yyyy-MM-dd HH:mm:ss","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date62275"}],"options":{"name":"gridCol72855","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-72855"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"coldModel","label":"冷轧规格","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input10247"}],"options":{"name":"gridCol94572","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-94572"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productType","label":"产品类别","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input92738"}],"options":{"name":"gridCol83847","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-83847"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"weight","label":"重量","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input62800"}],"options":{"name":"gridCol72515","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-72515"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"hydrogenContent","label":"氢含量","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input116488"}],"options":{"name":"gridCol30450","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-30450"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"status","label":"状态","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input28428"}],"options":{"name":"gridCol28771","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-28771"}],"options":{"name":"grid33173","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid33173"},{"type":"alert","icon":"alert","formItemFlag":false,"options":{"name":"alert82002","title":"责任分解","type":"success","description":"","closable":true,"closeText":"","center":true,"showIcon":false,"effect":"light","hidden":false,"onClose":"","customClass":"","label":"alert"},"id":"alert82002"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"complaintDesc","label":"投诉问题","labelAlign":"label-right-align","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea23723"}],"options":{"name":"gridCol103483","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-103483"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"complaintWeight","label":"投诉重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input53647"}],"options":{"name":"gridCol6912","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-6912"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"scrapWeight","label":"报废重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input62572"}],"options":{"name":"gridCol85957","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-85957"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"demotionWeight","label":"降级重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input20498"}],"options":{"name":"gridCol69203","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-69203"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"castWeight","label":"铸轧责任重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input97847"}],"options":{"name":"gridCol117918","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-117918"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"coldWeight","label":"冷轧责任重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input21809"}],"options":{"name":"gridCol67594","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-67594"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"alPrice","label":"当时铝价（元）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input67741"}],"options":{"name":"gridCol108832","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-108832"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"managerName","label":"管理人员","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input75775"}],"options":{"name":"gridCol102324","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-102324"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"chargeName","label":"分管负责人","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input103746"}],"options":{"name":"gridCol84896","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-84896"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"directorName","label":"主管负责人","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input96022"}],"options":{"name":"gridCol57193","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-57193"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"managerPunishAmount","label":"管理人员处罚金额（元）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input82716"}],"options":{"name":"gridCol101252","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-101252"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"chargePunishAmount","label":"分管负责人处罚金额（元）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input81718"}],"options":{"name":"gridCol63252","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-63252"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"directorPunishAmount","label":"主管负责人处罚金额（元）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input16281"}],"options":{"name":"gridCol86672","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-86672"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input119615","label":"总损失金额（元）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input119615"}],"options":{"name":"gridCol80655","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-80655"}],"options":{"name":"grid61067","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid61067"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"picture-upload","icon":"picture-upload-field","formItemFlag":true,"options":{"name":"complaintReport","label":"投诉报告","labelWidth":"120","labelHidden":false,"columnWidth":"200px","disabled":false,"hidden":false,"required":false,"requiredHint":"","customRule":"","customRuleHint":"","uploadURL":"","uploadTip":"","withCredentials":false,"multipleSelect":false,"showFileList":true,"limit":3,"fileMaxSize":5,"fileTypes":["jpg","jpeg","png"],"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onBeforeUpload":"","onUploadSuccess":"","onUploadError":"","onFileRemove":"","onValidate":""},"id":"pictureupload34949"}],"options":{"name":"gridCol44732","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-44732"}],"options":{"name":"grid111168","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid111168"},{"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"castInspectDescription","label":"铸轧卷质检说明","labelAlign":"label-right-align","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea57064"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"coldInspectDescription","label":"冷轧卷质检说明","labelAlign":"label-right-align","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea38266"}],"options":{"name":"gridCol72435","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-72435"}],"options":{"name":"grid102943","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid102943"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":"","functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":"","jsonVersion":2,"dataSources":[],"onFormValidate":""}}
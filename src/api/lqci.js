import request from '@/utils/request'

// 查询lqci列表
export function listLqci(query) {
  return request({
    url: '/lqci/list',
    method: 'get',
    params: query
  })
}
 
// 查询lqci详细
export function getLqci(id) {
  return request({
    url: '/lqci/' + id,
    method: 'get'
  })
}

// 新增lqci
export function addLqci(data) {
  return request({
    url: '/lqci',
    method: 'post',
    data: data
  })
}

// 修改lqci
export function updateLqci(data) {
  return request({
    url: '/lqci',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delLqci(id) {
  return request({
    url: '/lqci/' + id,
    method: 'delete'
  })
}

export const Json14 = { 'widgetList': [{ 'type': 'input', 'icon': 'text-field', 'formItemFlag': true, 'options': { 'name': 'groupId', 'label': '测试', 'labelAlign': '', 'type': 'text', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': true, 'disabled': false, 'hidden': false, 'clearable': false, 'showPassword': false, 'required': false, 'requiredHint': '', 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'prefixIcon': '', 'suffixIcon': '', 'appendButton': false, 'appendButtonDisabled': false, 'buttonIcon': 'el-icon-search', 'onCreated': '', 'onMounted': '', 'onInput': 'groupId = window.getDict(value)\n', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': '', 'onAppendButtonClick': '' }, 'id': 'input82455' }], 'formConfig': { 'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': [], 'functions': 'function getDict(key){\n  const Dict = new Map()\n  Dict.set("qualify:", "测试")\n  Dict.set("unQualify:", "测试")\n  return Dict.get(key)\n}', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': 'const Dict = new Map()\nDict.set(1, "测试")\n', 'onFormDataChange': '' }}

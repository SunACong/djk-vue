/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2023-01-05 15:56:03
 * @LastEditTime: 2023-01-05 15:57:05
 * @LastEditors: 孙少聪
 */
// 表单重置
export function resetForm(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields()
  }
}

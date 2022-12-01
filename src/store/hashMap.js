export function HashMap() {
  // 定义长度
  var length = 0
  // 创建一个对象
  var obj = {}

  /**
  * 判断Map是否为空
  */
  this.isEmpty = function() {
    return length === 0
  }

  /**
  * 判断对象中是否包含给定Key
  */
  this.containsKey = function(key) {
    return (key in obj)
  }

  /**
  * 判断对象中是否包含给定的Value
  */
  this.containsValue = function(value) {
    for (var key in obj) {
      if (obj[key] === value) {
        return true
      }
    }
    return false
  }

  /**
  * 判断对象中是否包含给定的Value
  */
  this.containsValueReturnKey = function(value) {
    for (var key in obj) {
      if (obj[key] === value) {
        return key
      }
    }
    return '未找到'
  }

  /**
  *向map中添加数据
  */
  this.put = function(key, value) {
    if (!this.containsKey(key)) {
      length++
    }
    obj[key] = value
  }

  /**
  * 根据给定的Key获得Value
  */
  this.get = function(key) {
    return this.containsKey(key) ? obj[key] : null
  }

  /**
  * 根据给定的Key删除一个值
  */
  this.remove = function(key) {
    if (this.containsKey(key) && (delete obj[key])) {
      length--
    }
  }

  /**
  * 获得Map中的所有Value
  */
  this.values = function() {
    var _values = []
    for (var key in obj) {
      _values.push(obj[key])
    }
    return _values
  }

  /**
  * 获得Map中的所有Key
  */
  this.keySet = function() {
    var _keys = []
    for (var key in obj) {
      _keys.push(key)
    }
    return _keys
  }

  /**
  * 获得Map的长度
  */
  this.size = function() {
    return length
  }

  /**
  * 清空Map
  */
  this.clear = function() {
    length = 0
    obj = {}
  }
}

export function newHashMap() {
  var map = new HashMap()
  map.put('操作侧预载力', 0)
  map.put('备用水泵电机电流', 1)
  map.put('卷取电机电流', 2)
  map.put('传动侧预载力', 3)
  map.put('主水泵电机电流', 4)
  map.put('下辊电机电流', 5)
  map.put('下辊流量', 6)
  map.put('下辊水温', 7)
  map.put('下辊水压', 8)
  map.put('上辊电机电流', 9)
  map.put('上辊流量', 10)
  map.put('上辊水温', 11)
  map.put('上辊水压', 12)
  return map
}


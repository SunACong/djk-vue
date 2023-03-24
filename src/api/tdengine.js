export const dataSource = {
  host: '10.82.23.161',
  port: '6041',
  database: 'thingsboard',
  username: 'root',
  password: 'taosdata'
}

export const header = {
  contentType: 'application/json;charset=UTF-8',
  authorization: 'Basic ' + Buffer.from(`${dataSource.username}:${dataSource.password}`).toString('base64')
}


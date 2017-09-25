import { transferParamsToQueryString } from './utils'
import { timeout } from './promise'

export async function doGet (url = '', params = {}, options = {}, config = {
  handleErrorAutomatically: true,
  requestTimeout: 30 * 1000
}) {
  const {
    handleErrorAutomatically = true,
    requestTimeout = 30 * 1000
  } = config
  const requestUrl = url + '?' + transferParamsToQueryString(params)
  const configuration = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/www-url-encoded;charset=UTF-8',
      ...options
    }
  }
  const response = await timeout(requestTimeout)(fetch(requestUrl, configuration)).catch(e => {
    throw new Error('网络异常，请稍后再试。' || e.message)
  })

  let result = ''
  try {
    result = await response.json()
    if (handleErrorAutomatically) {
      if (!result) {
        throw new Error('系统繁忙，请稍后再试')
      }
      if (result.errorMsg) {
        throw new Error(result.errorMsg)
      }
    }
  } catch (e) {
    if (handleErrorAutomatically) {
      throw new Error(e.message)
    }
  }

  return result
}

export async function doJSONP (url = '', options ={}, config = {
  handleErrorAutomatically: true,
  requestTimeout: 30 * 1000
}) {
  const {
    handleErrorAutomatically = true,
    requestTimeout = 30 * 1000
  } = config
  const requestUrl = url + '?callback=getData'
  const configuration = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/www-url-encoded;charset=UTF-8',
      ...options
    }
  }
  const response = await timeout(requestTimeout)(fetch(requestUrl, configuration)).catch(e => {
    throw new Error('网络异常，请稍后再试。' || e.message)
  })

  let result = ''
  try {
    result = eval(response)
    if (handleErrorAutomatically && !result) {
      throw new Error('系统繁忙，请稍后再试')
    }
  } catch (e) {
    if (handleErrorAutomatically) {
      throw new Error(e.message)
    }
  }

  return result
}

export async function doPost (url = '', params = {}, options = {}, config = {
  handleErrorAutomatically: true,
  requestTimeout: 30 * 1000
}) {
  const {
    handleErrorAutomatically = true,
    requestTimeout = 30 * 1000
  } = config
  const requestUrl = url + '?' + transferParamsToQueryString(params)
  const configuration = {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/www-url-encoded;charset=UTF-8',
      ...options
    }
  }
  const response = await timeout(requestTimeout)(fetch(requestUrl, configuration)).catch(e => {
    throw new Error('网络异常，请稍后再试。' || e.message)
  })

  let result = ''
  try {
    result = await response.json()
    if (handleErrorAutomatically) {
      if (!result) {
        throw new Error('系统繁忙，请稍后再试')
      }
      if (result.errorMsg) {
        throw new Error(result.errorMsg)
      }
    }
  } catch (e) {
    if (handleErrorAutomatically) {
      throw new Error(e.message)
    }
  }
  return result
}

export async function getMyReadingBooks () {
  return await doJSONP('http://www.yxeye.com/douban/v2/book/user/cleveryun/collections')
}

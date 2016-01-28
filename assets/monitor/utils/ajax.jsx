/**
 * ajax({
 *  url: string,
 *  method: 'get/post',
 *  data/body: {},
 *  headers: {},
 *  timeout: number,
 *  success: function,
 *  fail/error: function,
 *  complete: function
 * })
 */

import request from 'superagent/lib/client'
import '../mocks/index.js'

export const DEFAULT_TIMEOUT = 10000

export const FORM_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8'

export const JSON_TYPE = 'application/json; charset=UTF-8'

export const TEXT_TYPE = 'text/plain; charset=UTF-8'

export const XML_TYPE = 'application/xml; charset=UTF-8'

export let setupConfig = {
  contextPath: ''
}

export function ajaxSetup(opts) {
  for (let key in setupConfig) {
    if (opts.hasOwnProperty(key)) {
      setupConfig[key] = opts[key]
    }
  }
}

export default function ajax(opts) {
  let method = opts.method ? opts.method.toLowerCase() : 'get'
  let req = request[method](setupConfig.contextPath + opts.url, opts.data || opts.body)
  let headers = opts.headers || {
    'Content-Type': method === 'post' ? FORM_TYPE : TEXT_TYPE
  }
  let errorHandler = opts.fail || opts.error
  let succHandler = opts.success
  let completeHandler = opts.complete
  for (let key in headers) {
    req.set(key, headers[key])
  }

  req.timeout(opts.timeout || DEFAULT_TIMEOUT)

  if (opts.withCredentials) {
    req.withCredentials()
  }

  if (succHandler || errorHandler) {
    req.end((err, res) => {
      if (err) {
        console.log(err)
      }

      if (!err && succHandler) {
        succHandler(res.body, res)
      } else if (err && errorHandler) {
        errorHandler(err, res)
      }

      if (completeHandler) {
        completeHandler(err, res)
      }
    })

    return req
  }

  return new Promise(function(resolve, reject) {
    req.end((err, res) => {
      if (!err) {
        res.req = req
        resolve(res)
      } else {
        console.log(err)
        reject(err)
      }
    })
  })
}

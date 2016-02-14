import _ from 'lodash'

export function sumAttr(ary, attr) {
  return ary.reduce(function(prev, curr) {
    let value = prev + parseFloat(!curr[attr] ? 0 : curr[attr])
    return Math.round(value * 100) / 100
  }, 0)
}

export function extractAttr(ary, attr) {
  let answer = []
  for (let i = 0, length = ary.length; i < length; i++) {
    answer.push(ary[i][attr])
  }
  return answer
}

export function validateUrl(url) {
  return _.startsWith(url, 'http://') || _.startsWith(url, 'https://')
}

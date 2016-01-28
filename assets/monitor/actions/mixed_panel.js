/**
 * flux standard action
 * payload 最好是保持为一个object
 * 如果是异步action，meta里面必须传入original（一包会有附属数据）
 */

/**
 * 切换Tab
 * data, url, tabIndex
 */
export function switchTab(info) {
  return {
    type: 'switch_tab',
    payload: info.data,
    meta: {
      ajax: true,
      url: info.url,
      // 原始action数据
      original: info
    }
  }
}

/**
 * 切换Tab
 * data, url, subTabIndex
 */
export function switchSubTab(info) {
  return {
    type: 'switch_sub_tab',
    payload: info.data,
    meta: {
      ajax: true,
      url: info.url,
      // 原始action数据
      original: info
    }
  }
}

/**
 * 查看下一级
 * data url level(number) rowData breadCrumb
 */
export function showChildLevel(info) {
  return {
    type: 'show_child_level',
    payload: info.data,
    meta: {
      ajax: true,
      url: info.url,
      original: info
    }
  }
}

/**
 * 查看上N级
 * data url level(number)
 */
export function showParentLevel(info) {
  return {
    type: 'show_parent_level',
    payload: info.data,
    meta: {
      ajax: true,
      url: info.url,
      original: info
    }
  }
}

/**
 * 图形表格切换
 * payload = {layout}
 */
export function changeLayout(info) {
  return {
    type: 'change_layout',
    payload: {
      layout: info.layout
    },
    meta: {
      original: info
    }
  }
}

// 这个用不上
// 客户端分页ajax请求
// export function requestClientPage(info) {
//   return {
//     type: 'request_client_page',
//     payload: info.data,
//     meta: {
//       ajax: true,
//       url: info.url,
//       original: info
//     }
//   }
// }

// 客户端分页，数据已请求 payload = {pagerID}
export function changeClientPage(info) {
  return {
    type: 'change_client_page',
    payload: {
      pagerID: info.pagerID
    },
    meta: {
      original: info
    }
  }
}

// 服务端分页
export function requestServerPage(info) {
  return {
    type: 'request_server_page',
    payload: info.data,
    meta: {
      ajax: true,
      url: info.url,
      original: info
    }
  }
}

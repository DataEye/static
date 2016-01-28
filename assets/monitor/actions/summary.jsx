export function getTopData(payload) {
  return {
    payload,
    type: 'get_top_data',
    meta: {
      ajax: true,
      url: '/getSummaryTopData.do'
    }
  }
}

export function getTableData(payload) {
  return {
    payload,
    type: 'get_table_data',
    meta: {
      ajax: true,
      url: '/getSummaryTableData.do'
    }
  }
}

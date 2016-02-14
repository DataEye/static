export function query(info) {
  return {
    payload:info,
    type: 'show_employee',
    meta: {
      ajax: true,
      url: '/getEmployeeList.do',
      original:info
    }
  }
}

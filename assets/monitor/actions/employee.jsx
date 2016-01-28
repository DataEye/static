export function query(payload) {
  return {
    payload,
    type: 'show_employee',
    meta: {
      ajax: true,
      url: '/getEmployeeList.do'
    }
  }
}

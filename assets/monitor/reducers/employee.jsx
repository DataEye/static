export default function(state = {
  loading: false,
  totalRecord:0,
  items: [],
  currentPage: 1
}, action) {
  switch (action.type) {
  case 'show_employee' :
    return Object.assign({}, state, {
      loading:true
    })

  case 'show_employee_ok' : {
    let content = action.payload.content
    return Object.assign({}, state, {
      loading:false,
      totalRecord:content.totalRecord,
      items: [
        ...content.content
      ],
      currentPage: action.meta.original.pageID
    })
  }
  case 'show_employee_error' :
    return state

  default:
    return state

  }
}

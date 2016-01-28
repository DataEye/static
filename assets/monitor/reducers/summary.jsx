export default function(state = {
  loading: false,
  topdata: [],
  tabledata:[]
}, action) {
  switch (action.type) {
  case 'get_top_data' :
    return Object.assign({}, state, {
      loading:true
    })

  case 'get_top_data_ok' :
    return Object.assign({}, state, {
      loading:false,
      topdata: [
        ...action.payload.content
      ]
    })

  case 'get_top_data_error' :
    return state

  case 'get_table_data' :
    return Object.assign({}, state, {
      loading:true
    })

  case 'get_table_data_ok' :
    return Object.assign({}, state, {
      loading:false,
      tabledata: [
        ...action.payload.content
      ]
    })

  case 'get_table_data_error' :
    return state

  default:
    return state
  }
}

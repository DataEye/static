import _ from 'lodash'

export default function(state = {
  loading: false,
  topdata: [],
  tabledata:[]
}, action) {
  switch (action.type) {
  case 'get_top_data' :
    return _.assign({}, state, {
      loading:true
    })

  case 'get_top_data_ok' :
    return _.assign({}, state, {
      loading:false,
      topdata: [
        ...action.payload.content
      ]
    })

  case 'get_top_data_error' :
    return state

  case 'get_table_data' :
    return _.assign({}, state, {
      loading:true
    })

  case 'get_table_data_ok' :
    return _.assign({}, state, {
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

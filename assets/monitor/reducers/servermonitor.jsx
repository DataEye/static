export default function(state = {
  server:{
    isLoading: false,
    totalRecord:0,
    items: []
  },
  group:{
    loading: false,
    totalRecord:0,
    totalItems: [],
    currentPageItems:[]
  },
  //moduleList:[],
  serverList:[]
}, action) {
  switch (action.type) {
  case 'show_server' :
    return Object.assign({}, state, {
      server: {
        error: false,
        isLoading: true,
        totalRecord:0,
        items: []
      }
    })

  case 'show_server_ok' : {
    let content = action.payload.content
    return Object.assign({}, state, {
      server: {
        isLoading: false,
        totalRecord: content.totalRecord,
        items: [
          ...content.content
        ]
      }
    })
  }

  case 'show_server_error' :
    return Object.assign({}, state, {
      server: {
        error: true,
        isLoading:false
      }
    })

  case 'get_module' : {
    return Object.assign({}, state, {
      moduleListLoading: true
    })
  }

  case 'get_module_ok' : {
    let content = action.payload.content
    return Object.assign({}, state, {
      moduleListLoading: false,
      moduleList: [
        ...content
      ]
    })
  }

  case 'get_module_error' :
    return Object.assign({}, state, {
      moduleListLoading: false
    })

  case 'load_server_list_ok' : {
    let content = action.payload.content
    return Object.assign({}, state, {
      serverList: [
        ...content
      ]
    })
  }

  case 'load_server_list_error' :
    return state

  case 'show_group' :
    return Object.assign({}, state, {
      group:{
        isLoading: true,
        error: false,
        totalRecord:0,
        totalItems: [],
        currentPageItems:[]
      }
    })

  case 'show_group_ok' : {
    let content = action.payload.content
    let pageSize = action.payload.pageSize
    let endIndex = pageSize > content.length ? content.length : pageSize
    return Object.assign({}, state, {
      group:{
        isLoading:false,
        totalRecord:content.length,
        totalItems: [
          ...content
        ],
        currentPageItems:content.slice(0, endIndex)
      }
    })
  }

  case 'show_group_error' :
    return Object.assign({}, state, {
      group:{
        isLoading: false,
        error: true,
        errorInfo: action.payload.content
      }
    })

  case 'next_group_page' : {
    let pageID = action.payload.pageID
    let pageSize = action.payload.pageSize
    let startIndex = (pageID - 1) * pageSize
    let endIndex = pageID * pageSize > state.totalRecord ?
      state.totalRecord : pageID * pageSize

    return Object.assign({}, state, {
      group: {
        loading: false,
        totalRecord:state.group.totalRecord,
        totalItems: state.group.totalItems,
        currentPageItems: state.group.totalItems.slice(startIndex, endIndex)
      }
    })
  }

  case 'add_group' : {
    return Object.assign({}, state, {
      addGroup: {
        status: 'start'
      }
    })
  }

  case 'add_group_ok' : {
    return Object.assign({}, state, {
      addGroup: {
        status: 'success'
      }
    })
  }

  case 'add_group_error' : {
    return Object.assign({}, state, {
      addGroup: {
        errorInfo: action.payload.content,
        status: 'error'
      }
    })
  }

  case 'delete_group' :
    return Object.assign({}, state, {
      deleteGroup: {
        status: 'start'
      }
    })

  case 'delete_group_ok' :
    return Object.assign({}, state, {
      deleteGroup: {
        status: 'success'
      }
    })

  case 'delete_group_error' :
    return Object.assign({}, state, {
      deleteGroup: {
        errorInfo: action.payload.content,
        status: 'error'
      }
    })

  case 'add_server' :
    return Object.assign({}, state, {
      addServer: {
        status: 'start'
      }
    })

  case 'add_server_ok' :
    return Object.assign({}, state, {
      addServer: {
        status: 'success'
      }
    })

  case 'add_server_error' :
    return Object.assign({}, state, {
      addServer: {
        errorInfo: action.payload.content,
        status: 'error'
      }
    })


  default:
    return state
  }
}

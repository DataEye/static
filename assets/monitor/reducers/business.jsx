import _ from 'lodash'

export default function(state = {
  totalItems:[],
  currentPageItems:[],
  totalRecord:0,
  loading:false,
  employeeList:[]
}, action) {
  switch (action.type) {
  case 'get_business':
    return _.assign({}, state, {
      loading: true
    })

  case 'get_business_ok' : {
    let items = action.payload.content
    let pageSize = action.meta.original.pageSize
    let endIndex = pageSize < items.length ? pageSize : items.length

    return _.assign({}, state, {
      totalRecord:items.length,
      totalItems: [
        ...items
      ],
      currentPageItems:items.slice(0, endIndex),
      loading: false
    })
  }

  case 'select_employee_ok' :
    return _.assign({}, state, {
      employeeList: [...action.payload.content]
    })

  case 'select_employee_error' :
    return state

  case 'next_page' : {
    debugger
    let pageID = action.payload.pageID
    let pageSize = action.payload.pageSize
    let startIndex = (pageID - 1) * pageSize
    let endIndex = pageID * pageSize > state.totalRecord ?
      state.totalRecord : pageID * pageSize

    return _.assign({}, state, {
      currentPageItems: state.totalItems.slice(startIndex, endIndex)
    })
  }

  case 'add_business_ok' : {
    return _.assign({}, state, {
      totalItems: [
        {
          id:action.payload.content,
          name:action.meta.original.busiName,
          omPersonName:action.meta.original.omPersonName,
          pid:0,
          moduleNum:0,
          moduleList:[]
        },
        ...state.totalItems
      ],
      currentPageItems:[
        {
          id:action.payload.content,
          name:action.meta.original.busiName,
          omPersonName:action.meta.original.omPersonName,
          pid:0,
          moduleNum:0,
          moduleList:[]
        },
        ...state.currentPageItems
      ]
    })
  }

  case 'add_business_error' :
    alert(action.payload.content)
    return state

  case 'delete_business_ok' : {
    let totalItems = state.totalItems
    const tindex = totalItems.findIndex((element) => {
      return element.id === action.meta.original.busiId
    })
    totalItems.splice(tindex, 1)

    let currentPageItems = state.currentPageItems
    const cindex = currentPageItems.findIndex((element) => {
      return element.id === action.meta.original.busiId
    })
    currentPageItems.splice(cindex, 1)
    return _.assign({}, state, {
      totalItems: totalItems,
      currentPageItems: currentPageItems
    })
  }

  case 'delete_business_error' :
    if (action.payload.statusCode === 408) {
      alert('业务已被使用,不能删除！')
    }
    return state

  case 'add_module_ok' : {
    let busiId = action.meta.original.busiId

    let newModule = {
      id:action.payload.content,
      name:action.meta.original.moduleName,
      omPersonName:action.meta.original.omPersonName,
      omPerson:action.meta.original.omPerson,
      pid:busiId
    }

    const t = state.totalItems.findIndex((element) => {
      return element.id === busiId
    })

    const c = state.currentPageItems.findIndex((element) => {
      return element.id === busiId
    })

    let obj = state.totalItems[t]

    obj.moduleList.push(newModule)

    return _.assign({}, state, {
      totalItems:[
        ...state.totalItems.slice(0, t),
        obj,
        ...state.totalItems.slice(t + 1, state.totalItems.length)
      ],
      currentPageItems:[
        ...state.currentPageItems.slice(0, c),
        obj,
        ...state.currentPageItems.slice(c + 1, state.currentPageItems.length)
      ]
    })
  }

  case 'add_module_error' :
    alert(action.payload.content)
    return state

  case 'delete_module_ok' : {
    const to = state.totalItems.findIndex((element) => {
      return element.id === action.meta.original.busiId
    })

    const cu = state.currentPageItems.findIndex((element) => {
      return element.id === action.meta.original.busiId
    })

    let obj1 = state.totalItems[to]
    let moduleList = obj1.moduleList

    const mo = state.totalItems.findIndex((element) => {
      return element.id === action.meta.original.moduleId
    })

    moduleList.splice(mo, 1)
    obj1.moduleList = moduleList


    return _.assign({}, state, {
      totalItems:[
        ...state.totalItems.slice(0, to),
        obj1,
        ...state.totalItems.slice(to + 1, state.totalItems.length)
      ],
      currentPageItems:[
        ...state.currentPageItems.slice(0, cu),
        obj1,
        ...state.currentPageItems.slice(cu + 1, state.currentPageItems.length)
      ]
    })
  }

  case 'delete_module_error' :
    if (action.payload.statusCode === 408) {
      alert('模块已被使用,不能删除！')
    }
    return state

  default :
    return state
  }
}

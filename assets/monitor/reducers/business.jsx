export default function(state = {
  totalItems:[],
  currentPageItems:[],
  totalRecord:0,
  loading:false,
  employeeList:[]
}, action) {
  switch (action.type) {
  case 'get_business':
    return Object.assign({}, state, {
      loading: true
    })

  case 'get_business_ok' : {
    let items = action.payload.content
    let pagesize = action.meta.original.pagesize
    let endIndex = pagesize < items.length ? pagesize : items.length

    return Object.assign({}, state, {
      totalRecord:items.length,
      totalItems: [
        ...items
      ],
      currentPageItems:items.slice(0, endIndex),
      loading: false
    })
  }

  case 'select_employee_ok' :
    return Object.assign({}, state, {
      employeeList: [...action.payload.content]
    })

  case 'select_employee_error' :
    return state

  case 'next_page' : {
    let pageid = action.payload.pageid
    let pagesize = action.payload.pagesize
    let startIndex = (pageid - 1) * pagesize
    let endIndex = pageid * pagesize > state.totalRecord ?
      state.totalRecord : pageid * pagesize

    return Object.assign({}, state, {
      currentPageItems: state.totalItems.slice(startIndex, endIndex)
    })
  }

  case 'add_business_ok' : {
    return Object.assign({}, state, {
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
    return Object.assign({}, state, {
      totalItems: totalItems,
      currentPageItems: currentPageItems
    })
  }

  case 'delete_business_error' :
    return state

  case 'add_module_ok' : {
    let busiId = action.meta.original.busiId

    let newModule = {
      id:action.payload.content,
      name:action.meta.original.moduleName,
      omPersonName:action.meta.original.omPersonName,
      omPerson:action.meta.original.omPerson,
      pid:busiId,
    }

    const t = state.totalItems.findIndex((element) => {
      return element.id === busiId
    })

    const c = state.currentPageItems.findIndex((element) => {
      return element.id === busiId
    })

    let obj = state.totalItems[t]

    obj.moduleList.push(newModule)

    return Object.assign({}, state, {
      totalItems:[
        ...state.totalItems.slice(0, t),
        obj,
        ...state.totalItems.slice(t + 1, state.totalItems.length)
      ],
      currentPageItems:[
        ...state.currentPageItems.slice(0, c),
        obj,
        ...state.currentPageItems.slice(c + 1, state.currentPageItems.length)
      ],
    })
  }

  case 'add_module_error' :
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


    return Object.assign({}, state, {
      totalItems:[
        ...state.totalItems.slice(0, to),
        obj1,
        ...state.totalItems.slice(to + 1, state.totalItems.length)
      ],
      currentPageItems:[
        ...state.currentPageItems.slice(0, cu),
        obj1,
        ...state.currentPageItems.slice(cu + 1, state.currentPageItems.length)
      ],
    })
  }

  case 'delete_module_error' :
    return state

  default :
    return state
  }
}

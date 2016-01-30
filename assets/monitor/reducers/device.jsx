export default function(state = {
  loading: false,
  loadingSelectData:false,
  totalRecord:0,
  currentPage:1,
  isSaved: false,
  isDeleted:false,
  items: [],
  initData:{
    deviceTypeList:[],
    cpuTypeList:[],
    osTypeList:[],
    kernalList:[],
    ispList:[],
    idcList:[],
    cabinetList:[],
    busiList:[],
    moduleList:[],
    deptList:[]
  },
  editData:{}}, action) {
  switch (action.type) {

  case 'show_device' :
    return Object.assign({}, state, {
      loading: true
    })

  case 'show_device_ok' :
    return Object.assign({}, state, {
      totalRecord:action.payload.content.totalRecord,
      isDeleted:false,
      items: [
        ...action.payload.content.content
      ],
      loading: false,
      currentPage:action.meta.original.pageID
    })

  case 'show_device_error' :
    return state

  case 'init_select_data' : {
    return Object.assign({}, state, {
      loadingSelectData:true
    })
  }

  case 'init_select_data_ok' :
    let content = action.payload.content
    return Object.assign({}, state, {
      loadingSelectData:false,
      initData:{
        deviceTypeList:content.devType,
        cpuTypeList:content.cpuType,
        osTypeList:content.osType,
        kernalList:content.kernal,
        ispList:content.isp,
        idcList:content.idc,
        cabinetList:content.cabinet,
        busiList:content.business,
        moduleList:content.module,
        deptLit:content.dept,
        employeeList:content.employee
      }
    })

  case 'init_select_data_error' :
    return state

  case 'add_device_error' :
    return Object.assign({}, state, {
      isSaved:false
    })

  case 'update_device_ok' :
    return Object.assign({}, state, {
      isSaved: true
    })

  case 'update_device_error' :
    return Object.assign({}, state, {
      isSaved:false
    })

  case 'delete_device' :
    return Object.assign({}, state, {
      isDeleted:false
    })


  case 'delete_device_ok' :
    return Object.assign({}, state, {
      isDeleted:true
    })

  case 'delete_device_error' :
    return Object.assign({}, state, {
      isDeleted:false
    })

  default:
    return state
  }
}

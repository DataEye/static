export default function(state = {
  loading: false,
  totalRecord:0,
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
      loading: false
    })

  case 'show_device_error' :
    return state

  case 'init_select_data' :
    return state

  case 'init_select_data_ok' :
    let content = action.payload.content
    return Object.assign({}, state, {
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

  case 'get_edit_data' :
    let devices = state.items
    const index = devices.findIndex((element) => {
      return element.id === action.payload.id
    })
    return Object.assign({}, state, {
      editData:devices[index]
    })

  case 'clear_editData' :
    return Object.assign({}, state, {
      editData: {
        devId: '',
        devType: 1,
        cabinat: 1,
        cpuNum: 0,
        cpuPhysicalCores: 0,
        os: 1,
        memory: 0,
        privateIp: '',
        publicIpList: [],
        isp: 1,
        deptId: 1,
        module: 1,
        backupAdmin: '',
        hostName: '',
        idcId: 0,
        netCardNum: 0,
        cpuType: 1,
        cpuLogicCores: 0,
        kernal: 1,
        diskNum: 0,
        diskSize: 0,
        diskDir: '',
        diskType: '',
        diskVolue: '',
        business: 1,
        admin: '',
        descs: '',
        diskDetails:[],
        busiModuleList:[]
      }
    })

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

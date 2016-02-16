import _ from 'lodash'

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
    return _.assign({}, state, {
      loading: true
    })

  case 'show_device_ok' :
    return _.assign({}, state, {
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
    return _.assign({}, state, {
      loadingSelectData:true
    })
  }

  case 'init_select_data_ok' :
    let content = action.payload.content
    return _.assign({}, state, {
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

  case 'add_device_ok' :
    alert('添加成功')
    return _.assign({}, state, {
      isSaved:true
    })

  case 'add_device_error' :
    if (action.payload.statusCode === 406) {
      alert('设备编号或者设备名称已存在，请重新输入')
    }

    if (action.payload.statusCode === 407) {
      alert('ip已被其它设备使用')
    }

    return _.assign({}, state, {
      isSaved:false
    })

  case 'update_device_ok' :
    alert('修改成功')
    return _.assign({}, state, {
      isSaved: true
    })

  case 'update_device_error' :
    if (action.payload.statusCode === 406) {
      alert('设备编号或者设备名称已存在，请重新输入')
    }

    if (action.payload.statusCode === 407) {
      alert('ip已被其它设备使用')
    }

    return _.assign({}, state, {
      isSaved:false
    })

  case 'delete_device' :
    return _.assign({}, state, {
      isDeleted:false
    })


  case 'delete_device_ok' :
    return _.assign({}, state, {
      isDeleted:true
    })

  case 'delete_device_error' :
    console.log(action.payload.content)
    if (action.payload.statusCode === 408) {
      alert('设备已被业务使用,不能删除')
    }
    return _.assign({}, state, {
      isDeleted:false
    })

  default:
    return state
  }
}

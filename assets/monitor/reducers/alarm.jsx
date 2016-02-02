export default function(state = {
  featureList:[],
  deviceList: [],
  businessList: [],
  moduleList:[]
}, action) {
  switch (action.type) {
  case 'alarm_get_feature_ok':
    return Object.assign({}, state, {
      featureList:[...action.payload.content]
    })

  case 'alarm_get_feature_error' :
    return state

  case 'alarm_get_server_ok':
    return Object.assign({}, state, {
      deviceList:[...action.payload.content]
    })

  case 'alarm_get_server_error' :
    return state

  case 'alarm_get_business_ok':
    return Object.assign({}, state, {
      businessList:[...action.payload.content]
    })

  case 'alarm_get_business_error' :
    return state

  case 'alarm_get_module_ok':
    return Object.assign({}, state, {
      moduleList:[...action.payload.content]
    })

  case 'alarm_get_module_error' :
    return state

  case 'save_alarm_rule_ok' :
    alert('告警设置成功')
    return state

  case 'save_alarm_rule_error' :
    return state

  default:
    return state
  }
}

export function getSelectFeatureData(payload) {
  return {
    payload,
    type: 'alarm_get_feature',
    meta: {
      ajax: true,
      url: '/getFeatureSelectData.do',
    }
  }
}

export function getSelectServerData(payload) {
  return {
    payload,
    type: 'alarm_get_server',
    meta: {
      ajax: true,
      url: '/getSelectDeviceList.do',
    }
  }
}

export function getSelectBusiData(payload) {
  return {
    payload,
    type: 'alarm_get_business',
    meta: {
      ajax: true,
      url: '/getBusinessSelectData.do',
    }
  }
}

export function getSelectModuleData(payload) {
  return {
    payload,
    type: 'alarm_get_module',
    meta: {
      ajax: true,
      url: '/getModuleSelectData.do',
    }
  }
}

export function saveAlarmRule(payload) {
  return {
    payload,
    type: 'save_alarm_rule',
    meta: {
      ajax: true,
      url: '/alarm/saveAlarmRule.do',
    }
  }
}

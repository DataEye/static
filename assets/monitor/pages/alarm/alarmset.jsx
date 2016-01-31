import React, {PropTypes} from 'react'
import Select from 'react-select'
import {Input, Button} from 'react-bootstrap'
import {ALARM_TYPE} from '../../helpers/constants.jsx'
import Calander from '../../widgets/calander.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object
  },

  getInitialState() {
    return {
      featureID:'',
      object:'',
      serverID:'',
      busiId:'',
      moduleId:'',
      maxThreshold:'',
      minThreshold:'',
      maxMoM:'',
      minMom:'',
      maxFrequency:'',
      alarmType:'',
      shieldStart:'',
      shieldEnd:'',
    }
  },

  componentWillMount: function() {
    this.props.actions.alarmGetSelectFeatureData()
    this.props.actions.alarmGetSelectServerData()
    this.props.actions.alarmGetSelectBusiData()
    this.props.actions.alarmGetSelectModuleData()
  },

  handleBusiChange(value) {
    this.setState({business: value})
    let data = []
    this.props.states.alarm.moduleList.map((item) => {
      if (item.itemId === value) {
        data.push(item)
      }
    })

    if (data.length > 0) {
      this.setState({module:data[0].value})
      this.setState({moduleList: data})
    } else {
      this.setState({moduleList: []})
    }
  },

  selectData(value) {
    let shieldStart = value.start
    let shieldEnd = value.end

    this.setState({
      shieldStart:shieldStart,
      shieldEnd:shieldEnd
    })
  },

  saveAlarmRule() {
    let featureID = this.state.feature
    let object = this.state.object
    let serverID = this.state.device
    let busiId = this.state.business
    let moduleId = this.state.module
    let maxThreshold = this.state.maxThreshold
    let minThreshold = this.state.minThreshold
    let maxMoM = this.state.maxMoM
    let MinMon = this.state.minMom
    let maxFrequency = this.state.maxFrequency
    let alarmType = this.state.alarmType
    let shieldStart = this.state.shieldStart
    let shieldEnd = this.state.shieldEnd

    if (featureID === '') {
      alert('请选择特性')
      return
    }

    if (object === '') {
      alert('请输入监控对象')
      return
    }

    if (maxFrequency === '') {
      alert('请输入最大屏蔽时间')
      return
    }

    if (alarmType === '') {
      alert('请选择告警类型')
      return
    }

    this.props.actions.alarmSaveAlarmRule({
      featureID:featureID,
      object:object,
      serverID:serverID,
      busiId:busiId,
      moduleId:moduleId,
      maxThreshold:maxThreshold,
      minThreshold:minThreshold,
      maxMoM:maxMoM,
      minMom:MinMon,
      maxFrequency:maxFrequency,
      alarmType:alarmType,
      shieldStart:shieldStart,
      shieldEnd:shieldEnd,
    })
  },

  render() {
    return (
      <div className="main">
        <form>
          <div className="form-horizontal">
            <div className="row ">
                <div className="col-md-6 ">
                  <label className="col-xs-3 text-right">特性：</label>
                  <Select name="feature" className="col-xs-7"
                          value={this.state.feature}
                          options={this.props.states.alarm.featureList}
                          onChange={(value)=>{this.setState({feature:value})}}/>
                </div>

                <div className="col-md-6">
                  <Input ref="object"
                         type="text"
                         label="监控对象："
                         labelClassName="col-xs-3 text-right"
                         wrapperClassName="col-xs-7"
                         value={this.state.object}
                         onChange={(e)=>{this.setState({object:e.target.value})}}/>
                  </div>
            </div>

            <div className="row ">
              <div className="col-md-6">
                <label className="col-xs-3 text-right">设备：</label>
                <Select name="device" className="col-xs-7"
                        value={this.state.device}
                        options={this.props.states.alarm.deviceList}
                        onChange={(value)=>{this.setState({device:value})}}/>
              </div>
           </div>

          <div className="row">
            <div className="col-md-6">
              <label className="col-xs-3 text-right">业务：</label>
              <Select name="business" className="col-xs-7"
                      value={this.state.business}
                      options={this.props.states.alarm.businessList}
                      onChange={this.handleBusiChange}/>
            </div>

            <div className="col-md-6">
              <label className="col-xs-3 text-right">模块：</label>
              <Select name="module" className="col-xs-7"
                      value={this.state.module}
                      options={this.state.moduleList}
                      onChange={(value)=>{this.setState({module:value})}}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Input ref="object"
                     type="number"
                     label="最大阀值："
                     labelClassName="col-xs-3"
                     wrapperClassName="col-xs-6"
                     value={this.state.maxThreshold}
                     onChange={(e)=>{this.setState({maxThreshold:e.target.value})}}/>
            </div>
            <div className="col-md-6">
              <Input ref="object"
                     type="number"
                     label="最小阈值："
                     labelClassName="col-xs-3"
                     wrapperClassName="col-xs-7"
                     value={this.state.minThreshold}
                     onChange={(e)=>{this.setState({minThreshold:e.target.value})}}/>
            </div>
          </div>

            <div className="row">
              <div className="col-md-6">
                <Input ref="object"
                       type="number"
                       label="最大环比："
                       labelClassName="col-xs-3"
                       wrapperClassName="col-xs-7"
                       value={this.state.maxMoM}
                       onChange={(e)=>{this.setState({maxMoM:e.target.value})}}/>
              </div>
               <div className="col-md-6">
                  <Input ref="object"
                         type="number"
                         label="最小环比："
                         labelClassName="col-xs-3"
                         wrapperClassName="col-xs-7"
                         value={this.state.minMom}
                         onChange={(e)=>{this.setState({minMom:e.target.value})}}/>
               </div>
            </div>

            <div className="form-group form-horizontal">
              <div className="col-md-6">
                <Input ref="object"
                       type="number"
                       label="最大次数："
                       labelClassName="col-xs-3"
                       wrapperClassName="col-xs-7"
                       value={this.state.maxFrequency}
                       onChange={(e)=>{this.setState({maxFrequency:e.target.value})}}/>
              </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="col-xs-3 text-right">屏蔽时间：</label>
              <Calander className="col-xs-7" onConfirm={this.selectData} name="shielddate"/>
            </div>
          </div>

         <div className="row">
           <div className="col-md-6">
             <label className="col-xs-3 text-right">告警类型：</label>
             <Select name="module" className="col-xs-7"
                     value={this.state.alarmType}
                     options={ALARM_TYPE}
                     onChange={(value)=>{this.setState({alarmType:value})}}/>
             </div>
         </div>

          <div className="row col-md-offset-4">
            <Button onClick={this.cancel} >取消</Button>
            <Button bsStyle="primary"
                    onClick={this.saveAlarmRule} >确定</Button>
          </div>
         </div>
        </form>

      </div>
    )
  }
})

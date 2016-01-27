import React, {PropTypes} from 'react'
import StepOne from './step_one.jsx'
import StepTwo from './step_two.jsx'
import ajax from 'dejs/lib/ajax'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object
  },

  getInitialState() {
    return {
      step: '1',
      appInfo: {},
      activatedAmount: 0
    }
  },

  getAppStatus() {
    ajax({
      method: 'POST',
      url: '/getAppStatus.do',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      data: {uid: App.uid, appid: this.state.appInfo.appid},
      success: (msg) => {
        if (this.isMounted()) {
          this.setState({activatedAmount: msg.content.activatedAmount})
        }
      }
    })
  },

  componentWillReceiveProps(nextProps) {
    let currentCreateState = nextProps.states.app.createState
    if (currentCreateState === 'success') {
      this.setState({step: '2'})
      if (this.props.states.app.importData) {
        this.setState({appInfo: Object.assign({appid: nextProps.states.app.importData.appid}, this.state.appInfo)})
      } else {
        this.setState({appInfo: Object.assign({appid: nextProps.states.app.created.content.appid}, this.state.appInfo)})
      }
    }
  },

  createApp(param, typeName) {
    if (this.props.states.app.importData) {
      this.props.actions.appImportApp(Object.assign({uid: App.uid, appid: this.props.states.app.importData.appid}, param))
    } else {
      this.props.actions.appCreate(Object.assign({uid: App.uid}, param))
    }
    this.setState({appInfo: Object.assign({typeName: typeName}, param)})
  },

  toStepTree() {
    this.setState({step: '3'})
    this.getAppStatus()
  },

  render() {
    return (
      <div className="wrapper-content">
        <ul className="nav nav-step nav-justified">
          <li className={this.state.step === '1' ? 'activeStepTitle' : 'stepTitle'}>
            <a href="javascript:;">
              <i className="fa fa-pencil-square-o"/>
              建立游戏
            </a>
          </li>
          <li className={this.state.step === '2' ? 'activeStepTitle' : 'stepTitle'}>
            <a href="javascript:;">
            <i className="fa fa-list-alt" />
              进行集成
            </a>
          </li>
        </ul>
        <div style={{display: this.state.step === '1' ? 'block' : 'none'}}>
          <StepOne createFn={this.createApp} importData={this.props.states.app.importData} />
        </div>
        <div style={{display: this.state.step === '2' ? 'block' : 'none'}}>
          <StepTwo toStepTreeFn={this.toStepTree} appInfo={this.state.appInfo} appid={this.state.appInfo.appid}/>
        </div>
        <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4006482833&amp;f=1&amp;ty=1&amp;aty=0&amp;a=&amp;from=6" className="qq-customer-service" title="qq" target="blank">
        </a>
      </div>
    )
  }
})
          // <li className={this.state.step === '3' ? 'active' : ''}>
          //   <a href="javascript:;"><span><span className="step-icon step-three-icon"></span><span className="step-title">接入测试</span></span></a>
          // </li>
        // <div style={{display: this.state.step === '3' ? 'block' : 'none'}}>
        //   <StepThree appInfo={this.state.appInfo} activatedAmount={this.state.activatedAmount} />
        // </div>

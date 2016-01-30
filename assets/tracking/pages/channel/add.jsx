import React, {PropTypes} from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'
import CustomRadio from './custom_radio.jsx'
import Radio from './radio.jsx'
import NewCustom from './new_custom.jsx'
import SearchBar from '../../widgets/search_bar.jsx'
import * as Consts from '../../helpers/constants.jsx'
import ContainerHeader from '../../widgets/container_header.jsx'
import _ from 'lodash'

export default React.createClass({
  propTypes: {
    params: PropTypes.object,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  componentDidMount: function() {
    this.props.actions.channelGetChannelNames({
      uid: window.App.uid,
      appid: this.props.params.appid
    })
  },

  selectChannel() {
    this.props.actions.channelSelectChannel({
      uid: window.App.uid,
      appid: this.props.params.appid,
      channelId: this.state.id,
      name: this.state.name
    })
  },

  clickChannel(id, name) {
    this.setState({
      id: id,
      name: name
    })
  },

  search(searchKey) {
    this.props.actions.channelGetChannelNames({
      uid: window.App.uid,
      appid: this.props.params.appid,
      searchKey: searchKey
    })
  },

  back() {
    history.back()
  },

  render() {
    const empty = (
      <div className="empty-search">
        <div>
          <img src={`${window.App.CONTEXT_PATH}/assets-build/img/tip-icon.png`} alt=""/>
          <p>结果为空</p>
        </div>
      </div>
    )

    const preset =
      _.chunk(this.props.states.channel.presetChannels, Number('3')).map((fourChannels, index) => {
        return (
          <Row key={index}>
            {fourChannels.map((channel) => {
              return (
                <Col md={Consts.NUMBER_4} key={channel.channelId}>
                  <Radio
                    channelId={channel.channelId}
                    name="channel"
                    label={channel.name}
                    onClick={this.clickChannel}
                  />
                </Col>
                )
            })}
          </Row>
        )
      })

    const custom =
      _.chunk(this.props.states.channel.customChannels, Number('3')).map((fourChannels, index) => {
        return (
          <Row key={index}>
            {fourChannels.map((channel) => {
              return (
                <Col md={Consts.NUMBER_4} key={channel.channelId}>
                  <CustomRadio
                    channelId={channel.channelId}
                    name="channel"
                    label={channel.name}
                    actions={this.props.actions}
                    onClick={this.clickChannel}
                  />
                </Col>
                )
            })}
          </Row>
        )
      })

    return (
      <div >
        <ContainerHeader>
          <Row>
            <Col md={Consts.NUMBER_8}>
              <div className="hierachy-nav">
                <span>层级结构：</span>
                <span>
                  <a href={`#/channels/${this.props.params.appid}`}>管理广告活动</a>
                </span>
                <span>></span>
                <span>添加广告网络</span>
              </div>
            </Col>
            <Col md={Consts.NUMBER_4} className="text-right">
              <SearchBar search={this.search}/>
            </Col>
          </Row>
        </ContainerHeader>
        <Row className="add-form row-no-margin">
          <Col md={Consts.NUMBER_6} >
            <Panel header="默认广告网络" className="panel-track">
              {!this.props.states.channel.presetChannels.length ? empty : preset}
            </Panel>
          </Col>
          <Col md={Consts.NUMBER_6} >
            <Panel header="自定义广告网络" className="panel-track">
              <NewCustom
                text="添加自定义广告网络"
                actions={this.props.actions}
              />
              {!this.props.states.channel.customChannels.length ? empty : custom}
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={Consts.NUMBER_4} mdOffset={Consts.NUMBER_8} className="add-form-footer">
              <Button className="btn-track pull-right" onClick={this.back}>取消</Button>
              <Button
                bsStyle="primary"
                onClick={this.selectChannel}
                className="btn-track pull-right btn-primary-track"
              >
              确定
              </Button>
          </Col>
        </Row>
      </div>
    )
  }
})

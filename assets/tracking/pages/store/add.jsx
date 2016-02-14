import React, {PropTypes} from 'react'
import {Row, Col, Button, Panel} from 'react-bootstrap'
import CustomRadio from './custom_radio.jsx'
import Radio from './radio.jsx'
import NewCustom from './new_custom.jsx'
import SearchBar from '../../widgets/search_bar.jsx'
import * as Consts from '../../helpers/constants.jsx'
import ContainerHeader from '../../widgets/container_header.jsx'
import _ from 'lodash'
import tipIcon from '../../../img/tip-icon.png'

export default React.createClass({
  propTypes: {
    params: PropTypes.object,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  componentWillMount: function() {
    this.props.actions.storeGetStoreNames({
      uid: window.App.uid,
      appid: this.props.params.appid
    })
  },

  selectStore() {
    this.props.actions.storeSelectStore({
      id: this.state.id,
      uid: window.App.uid,
      appid: this.props.params.appid
    })
  },

  clickStore(id) {
    this.setState({id: id})
  },

  search(searchKey) {
    this.props.actions.storeGetStoreNames({
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
          <img src={tipIcon} alt=""/>
          <p>结果为空</p>
        </div>
      </div>
    )

    const preset =
      _.chunk(this.props.states.store.presetStores, Number('3')).map((fourStores, index) => {
        return (
          <Row key={index}>
            {fourStores.map((store) => {
              return (
                <Col key={store.id} md={Number('4')}>
                  <Radio
                    id={store.id}
                    name="store"
                    label={store.name}
                    onClick={this.clickStore}
                  />
                </Col>
                )
            })}
          </Row>
        )
      })

    const custom =
      _.chunk(this.props.states.store.customStores, Number('3')).map((fourStores, index) => {
        return (
          <Row key={index}>
            {fourStores.map((store) => {
              return (
                <Col md={Number('4')} key={store.id}>
                  <CustomRadio
                    storeId={store.id}
                    name="store"
                    label={store.name}
                    actions={this.props.actions}
                    onClick={this.clickStore}
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
                  <a href={`#/stores/${this.props.params.appid}`}>管理下载商店</a>
                </span>
                <span>></span>
                <span>添加下载商店</span>
              </div>
            </Col>
            <Col md={Consts.NUMBER_4} className="text-right">
              <SearchBar search={this.search}/>
            </Col>
          </Row>
        </ContainerHeader>
        <Row className="add-form">
          <Col md={Consts.NUMBER_6}>
            <Panel header="默认下载商店" className="panel-track">
              {!this.props.states.store.presetStores.length ? empty : preset}
            </Panel>
          </Col>
          <Col md={Consts.NUMBER_6} >
            <Panel header="自定义商店" className="panel-track">
              <NewCustom
                text="添加自定义商店"
                states={this.props.states}
                actions={this.props.actions}
              />
              {!this.props.states.store.customStores.length ? empty : custom}
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col
            md={Consts.NUMBER_4}
            mdOffset={Consts.NUMBER_8}
            className="add-form-footer"
          >
            <Button className="btn-track pull-right" onClick={this.back}>取消</Button>
            <Button
              bsStyle="primary"
              className="btn-track pull-right btn-primary-track"
              onClick={this.selectStore}>
              确定
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
})

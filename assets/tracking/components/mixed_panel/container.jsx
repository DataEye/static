/**
 * 一个level下面配置多个tab
 * 第一级，配置格式如下:
 [
   {
      label: ''
      url: string,
      data: func,
      columns: array,
      rowKey: func,
      chart: object,
      avgFields: array,
      formatters: array
   },
   ...
 ]
 */

import React, {PropTypes} from 'react'
import * as utils from 'dejs/lib/utils'
import MixedPanel from './index.jsx'
import Reduxis from 'dejs/lib/reduxis'
import * as CONSTS from '../../helpers/constants.jsx'

export default React.createClass({
  mixins: [Reduxis.mixin],
  propTypes: {
    // 组件id，必须唯一。对应到action和reducer
    level0: PropTypes.array.isRequired,
    // 其他层级 level1 level2 level3 ...
    title: PropTypes.any.isRequired,
    layout: PropTypes.oneOf(CONSTS.DEFAULT_LAYOUT_OPTIONS),
    serverPagination: PropTypes.bool,
    style: PropTypes.object
  },

  getLevelConfig(level = this.getReduxStates().currentLevel) {
    return this.props[level]
  },

  getTabConfig(tabIndex = this.getReduxStates().currentTabIndex) {
    let config = this.getLevelConfig()
    return config[tabIndex]
  },

  // NOTE 需要额外注意何时调用getSubTabConfig
  getSubTabConfig(subTabIndex = this.getReduxStates().currentSubTabIndex, tabIndex = this.getReduxStates().currentTabIndex) {
    let config = this.getTabConfig(tabIndex)
    if (subTabIndex > 0) {
      if (!config.children || !config.children.length) {
        throw new Error(`tabs.${tabIndex}没有配置children属性`)
      }

      return config.children[subTabIndex - 1]
    }

    return config
  },

  getSubTabs() {
    let tabConfig = this.getTabConfig()
    if (!tabConfig.children) return null

    // 优先取subTabName
    let subTabs = [tabConfig.subTabName || tabConfig.tabName]
    tabConfig.children.forEach((item) => {
      // 子节点直接取tabName
      subTabs.push(item.tabName)
    })

    return subTabs
  },

  componentDidMount() {
    /**
     * 使用EventEmitter来绑定事件
     * 方便解耦以及对React组件优化（props传函数不利于shouldComponentUpdate优化）
     */
    let emitter = this.refs.panel.emitter
    emitter.on('tabclick', this.onTabClick, this)
    emitter.on('subtabclick', this.onSubTabClick, this)
    emitter.on('levelback', this.onLevelBack, this)
    emitter.on('layoutchange', this.onLayoutChange, this)

    this.onTabClick(0)
  },

  componentWillMount() {
    let props = this.props
    if (props.layout !== props.states.currentLayout) {
      this.onLayoutChange(this.props.layout)
    }
  },

  onTabClick(tabIndex) {
    let tabConfig = this.getTabConfig(tabIndex)
    this.dispatchAction('mixedPanelSwitchTab', {
      tabIndex,
      data: utils.tryExec(tabConfig.data),
      tabConfig,
      url: tabConfig.url
    })
  },

  onSubTabClick(subTabIndex) {
    let tabConfig = this.getSubTabConfig(subTabIndex)
    this.dispatchAction('mixedPanelSwitchSubTab', {
      subTabIndex,
      data: utils.tryExec(tabConfig.data),
      tabConfig,
      url: tabConfig.url
    })
  },

  onPageChange(num) {
    let tabConfig = this.getSubTabConfig()
    if (this.props.serverPagination) {
      this.dispatchAction('mixedPanelRequestServerPage', {
        pagerID: num,
        data: utils.tryExec(tabConfig.data),
        url: tabConfig.url
      })
    } else {
      this.dispatchAction('mixedPanelChangeClientPage', {
        pagerID: num
      })
    }
  },

  onLevelBack(levelNum) {
    let tabConfig = this.getTabConfig()
    const levelConfig = this.props[`level${levelNum}`]
    const url = levelConfig[0].url
    // 第一级为undefined
    let {breadCrumbRowList, currentTabIndex, currentSubTabIndex} = this.getReduxStates()
    this.dispatchAction('mixedPanelShowParentLevel', {
      level: levelNum,
      // 回退的时候，需要用到之前的数据
      data: utils.tryExec(tabConfig.data, null, breadCrumbRowList[levelNum - 1], currentTabIndex, currentSubTabIndex),
      url: url,
      tabConfig
    })
  },

  onLayoutChange(layout) {
    this.dispatchAction('mixedPanelChangeLayout', {
      layout
    })
  },

  reload() {
    const currentState = this.getReduxStates()
    this.onTabClick(currentState.currentTabIndex)
    this.onSubTabClick(currentState.currentSubTabIndex)
  },

  render() {
    let lvl = this.getLevelConfig()
    if (!lvl) {
      throw new Error(`MixedPanelContainer.${this.state.currentLevel}是不是还没有配置`)
    }
    let tabs = lvl.map((x) => x.tabName)
    let config = this.getSubTabConfig()
    let states = this.getReduxStates()
    let subTabs = this.getSubTabs()

    return (
      <MixedPanel
        ref="panel"
        done={states.done}
        error={states.error}
        isEmpty={states.isEmpty}
        title={this.props.title}
        layout={states.currentLayout}
        tabs={tabs}
        subTabs={subTabs}
        columns={config.columns}
        rowKey={config.rowKey}
        chart={config.chart}
        summaryData={states.summaryData}
        summaryFormatters={config.formatters}
        currentTabIndex={states.currentTabIndex}
        currentSubTabIndex={states.currentSubTabIndex}
        breadCrumbList={states.breadCrumbList}
        breadCrumbRowList={states.breadCrumbRowList}
        datalist={states.datalist}
        chartNames={states.chartNames}
        chartData={states.chartData}
        pagerTotal={states.pagerTotal}
        pagerSize={states.pagerSize}
        pagerID={states.pagerID}
        onPageChange={this.onPageChange}
        showSwitcher={config.showSwitcher}
        glance={config.glance}
        style={this.props.style}
      />
    )
  }
})

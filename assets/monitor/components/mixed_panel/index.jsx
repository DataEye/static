/**
 *
 * MixedPanel 用于表格和图形切换展示
 *
 */

import React, {PropTypes} from 'react'
import _ from 'lodash'
import * as utils from 'dejs/lib/utils'
import Table from 'rc-table'
import Pagination from 'rc-pagination'
import Chart from 'dejs/lib/chart'
import Loading from 'dejs/lib/loading'
import NoData from 'dejs/lib/no-data'
import ErrorTip from 'dejs/lib/error'

export default React.createClass({
  propTypes: {
    done: PropTypes.bool.isRequired,
    error: PropTypes.any,
    isEmpty: PropTypes.bool.isRequired,
    // 标题
    title: PropTypes.any.isRequired,
    // 展示布局类型
    layout: PropTypes.oneOf(['table', 'chart', 'both']).isRequired,
    // 不传表示没有tab
    tabs: PropTypes.array,
    // 不传表示不显示表格
    columns: PropTypes.array,
    // 不传表示不显示表格
    rowKey: PropTypes.func,
    // 不传则显示默认曲线
    chart: PropTypes.object,
    summaryData: PropTypes.object,
    // NOTE 只有配置了格式化函数才会进行汇总计算
    summaryFormatters: PropTypes.array,
    // 当前tab索引
    currentTabIndex: PropTypes.number.isRequired,
    // 子tab索引（汇总、渠道）
    currentSubTabIndex: PropTypes.number,
    // [string]
    breadCrumbList: PropTypes.array,
    // 上一级的行数据
    parentRowData: PropTypes.any,
    // 当前页数据
    datalist: PropTypes.array.isRequired,
    // 画图
    chartNames: PropTypes.object,
    // 如果是客户端分页需要传入全部图表所需数据
    chartData: PropTypes.array,
    // 分页相关
    pagerTotal: PropTypes.number.isRequired,
    pagerSize: PropTypes.number,
    pagerID: PropTypes.number,
    // 分页函数，必须传
    onPageChange: PropTypes.func,
    // tab切换时回调，可不传
    onTabClick: PropTypes.func,
    onSubTabClick: PropTypes.func,
    onLevelBack: PropTypes.func,
    onLayoutChange: PropTypes.func,
    // [汇总、分渠道]
    subTabs: PropTypes.array,
    //Show chart initially if false
    showSwitcher: PropTypes.bool
  },

  getDefaultProps() {
    return {
      showSwitcher: true
    }
  },

  getComponentByStatus(element, error, isEmpty, done) {
    if (error) return <ErrorTip error={error} />
    // 在加载的时候如果数据为空则不展示数据为空
    // 适合第一次加载数据的时候优化展示
    if (isEmpty) {
      return done ? <NoData /> : null
    }

    return element
  },

  // 获取当前层级的tab配置
  getTabs() {
    let tabs = this.props.tabs
    if (!tabs || tabs.length === 1) return null

    let tabList = tabs.map((name, i) => {
      let style = this.props.currentTabIndex === i ? 'active' : ''
      let onTabClick = () => {
        this.props.onTabClick(i)
      }
      return (
          <li key={name} className={style} onClick={onTabClick}>
            <a href="javascript:;">{name}</a>
          </li>
      )
    })

    return (
        <div className="nav-tabs-container">
          <ul className="nav nav-sm nav-tabs">{tabList}</ul>
        </div>
    )
  },

  getSwitcher() {
    let onLayoutChange = function(layout) {
      if (this.props.layout === layout) return

      this.props.onLayoutChange(layout)
    }
    return this.props.chartNames ? (
        <div className="btn-group">
          <button onClick={onLayoutChange.bind(this, 'table')}
                  className={this.props.layout === 'table' ? 'btn btn-default btn-xs active' : 'btn btn-default btn-xs'}
              >
            <i className="fa fa-table"></i>
          </button>
          <button onClick={onLayoutChange.bind(this, 'chart')}
                  className={this.props.layout === 'chart' ? 'btn btn-default btn-xs active' : 'btn btn-default btn-xs'}
              >
            <i className="fa fa-area-chart"></i>
          </button>
        </div>
    ) : ''
  },

  getBreadCrumb() {
    let crumbItems = this.props.breadCrumbList
    if (!Array.isArray(crumbItems)) return null

    let total = crumbItems.length
    let crumbList = crumbItems.map((label, i) => {
      // 最后一项返回普通文本，其余都是链接
      if (i === total - 1) {
        return (<span key={label}>{label}</span>)
      }

      let onLevelBack = () => {
        this.props.onLevelBack(i)
      }

      return (
          <span key={label}>
          <a href="javascript:;" onClick={onLevelBack}>
            {label}
          </a>
            &nbsp;&gt;&nbsp;
        </span>
      )
    })

    return (
        <div className="grid-panel-bread-nav">
          层级结构：
          {crumbList}
        </div>
    )
  },

  getSummary() {
    if (!this.props.summaryFormatters) return null

    let summary = this.props.summaryData
    let formatters = this.props.summaryFormatters
    let thList = _.map(this.props.columns, (col, i) => {
      // 如果返回格式化函数是字符串则直接使用该字符串
      let value = typeof formatters[i] === 'string' ? formatters[i] : summary[col.dataIndex]
      return (
          <th key={i} style={{width: col.width}}>
            {utils.tryTransform(formatters[i], null, value)}
          </th>
      )
    })
    return (
        <table className="table summary-table">
          <thead>
          <tr>
            {thList}
          </tr>
          </thead>
        </table>
    )
  },

  getTable() {
    if (!this.props.rowKey) {
      throw new Error(`rowKey应该配置一个函数`)
    }

    return (
        <Table className="table" columns={this.props.columns} data={this.props.datalist}
               rowKey={this.props.rowKey}
            />
    )
  },

  getPager() {
    return (
        <Pagination total={this.props.pagerTotal} current={this.props.pagerID}
                    pageSize={this.props.pagerSize} onChange={this.props.onPageChange}
            />
    )
  },

  getSubTabs() {
    if (!this.props.subTabs) return null

    let subTabs = this.props.subTabs.map((name, i) => {
      let onSubTabClick = () => {
        this.props.onSubTabClick(i)
      }
      let style = this.props.currentSubTabIndex === i ? 'active' : ''
      style += ' btn btn-xs btn-default '
      return (
          <button className={style} key={name} onClick={onSubTabClick} type="button">
            {name}
          </button>
      )
    })

    return (
        <div className="btn-group mixed-panel-sub-tabs" style={{marginBottom: '15px'}}>
          {subTabs}
        </div>
    )
  },

  getFooter() {
    return (
        <div className="text-center common-container">
          {this.getSubTabs()}
        </div>
    )
  },

  getChart() {
    let chart = (
        <div className="common-container">
          {this.props.showSwitcher && (
              <div className="pull-right">
                {this.getSwitcher()}
              </div>
          )}
          <Chart
              datalist={this.props.chartData}
              seriesNames={this.props.chartNames}
              config={this.props.chart}
              />
          {this.getFooter()}
        </div>
    )
    return (
        <div>
          {this.getTabs()}
          {this.getComponentByStatus(chart, this.props.error, this.props.isEmpty, this.props.done)}
        </div>
    )
  },

  getGrid() {
    let datagrid = (
        <div className="common-container">
          {this.props.showSwitcher && (
              <div className="pull-right">
                {this.getSwitcher()}
              </div>
          )}
          {this.getBreadCrumb()}
          {this.getSummary()}
          {this.getTable()}
          {this.getPager()}
        </div>
    )
    return (
        <div>
          {this.getTabs()}
          {this.getComponentByStatus(datagrid, this.props.error, this.props.isEmpty, this.props.done)}
        </div>
    )
  },

  render() {
    let props = this.props
    let child = props.layout === 'chart' ? this.getChart() : this.getGrid()
    return (
        <div className="panel panel-track">
          <div className="panel-heading">{props.title}</div>
          <div className="panel-body">
            <Loading done={props.done}>
              {child}
            </Loading>
          </div>
        </div>
    )
  }
})

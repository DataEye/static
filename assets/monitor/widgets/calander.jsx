import React, {PropTypes} from 'react'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN'
import store from 'store'
import moment from 'moment'

import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import GregorianCalendar from 'gregorian-calendar'

const today = new GregorianCalendar(zhCn)
today.setTime(Date.now())

const defaultSelectedValue = [today, today]

function disabledDate(current) {
  const date = new Date()
  return current.getTime() > date.getTime()
}

export default React.createClass({
  propTypes: {
    defaultSelectedValue: PropTypes.array,
    className: PropTypes.string,
    onConfirm: PropTypes.func,
    name: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      isOpen: false,
      selectedValue: this.props.defaultSelectedValue ? this.props.defaultSelectedValue : defaultSelectedValue
    }
  },

  componentWillMount() {
    let str = store.get(this.props.name)
    if (str) {
      let date = JSON.parse(str)
      let start = new GregorianCalendar(zhCn)
      let end = new GregorianCalendar(zhCn)
      start.setTime(date[0])
      end.setTime(date[1])
      this.setState({selectedValue: [start, end]})
      this.props.onConfirm({
        start: moment(date[0]).format('YYYY-MM-DD'),
        end: moment(date[1]).format('YYYY-MM-DD')
      })
    } else {
      this.props.onConfirm({
        start: moment((this.state.selectedValue)[0].getTime()).format('YYYY-MM-DD'),
        end: moment((this.state.selectedValue)[1].getTime()).format('YYYY-MM-DD')
      })
    }
  },

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  },

  onOk(value) {
    let date = {
      start: moment(value[0].getTime()).format('YYYY-MM-DD'),
      end: moment(value[1].getTime()).format('YYYY-MM-DD')
    }
    this.props.onConfirm(date)

    store.set(this.props.name, JSON.stringify([value[0].getTime(), value[1].getTime()]))

    this.setState({
      isOpen: false,
      selectedValue: value
    })
  },

  render() {
    return (
        <div className={(this.props.className ? this.props.className + ' ' : '') + 'com-calander'} >
          <div className={'clander-date-show' + ' ' + (this.state.isOpen ? 'on-open' : '')} onClick={this.toggle}><i className="fa fa-calendar"></i>
            <span className="date">{moment((this.state.selectedValue)[0].getTime()).format('YYYY-MM-DD')}</span>
            至
            <span className="date">{moment((this.state.selectedValue)[1].getTime()).format('YYYY-MM-DD')}</span>
          </div>
          {this.state.isOpen ? <RangeCalendar locale={CalendarLocale}
                                              disabledDate={disabledDate}
                                              defaultSelectedValue={this.state.selectedValue}
                                              dateInputPlaceholder={['请输入开始日期', '请输入结束日期']}
                                              onOk={this.onOk}/> : ''}

        </div>
    )
  }
})

import React, {PropTypes} from 'react'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN'
import store from 'store'
import moment from 'moment'
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import GregorianCalendar from 'gregorian-calendar'
import Picker from 'rc-calendar/lib/Picker'

const today = new GregorianCalendar(zhCn)
today.setTime(Date.now())

const defaultSelectedValue = [today, today]

function disabledDate(current) {
  const date = new Date()
  return current.getTime() > date.getTime()
}

function isValidRange(v) {
  return v && v[0] && v[1]
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

  onOk(value) {
    let date = {
      start: moment(value[0].getTime()).format('YYYY-MM-DD'),
      end: moment(value[1].getTime()).format('YYYY-MM-DD')
    }
    this.props.onConfirm(date)

    store.set(this.props.name, JSON.stringify([value[0].getTime(), value[1].getTime()]))

    this.setState({
      selectedValue: value
    })
  },

  onChange(value) {
    this.onOk(value)
  },

  render() {
    const calendar = (
      <RangeCalendar locale={CalendarLocale}
                     disabledDate={disabledDate}
                     defaultSelectedValue={this.state.selectedValue}
                     showDateInput={false}
                     onOk={this.onOk}
        />
    )
    return (
    <Picker animation="slide-up"
            value={this.state.selectedValue}
            onChange={this.onChange}
            calendar={calendar}
      >
      {
        (info) => {
          return (
            <div className={(this.props.className ? this.props.className + ' ' : '') + 'com-calander'} >
              <div className={'clander-date-show' + ' ' + (info.open ? 'on-open' : '')}><i className="fa fa-calendar"></i>
                <span className="date">{isValidRange(info.value) && moment(info.value[0].getTime()).format('YYYY-MM-DD')}</span>
                至
                <span className="date">{isValidRange(info.value) && moment(info.value[1].getTime()).format('YYYY-MM-DD')}</span>
              </div>
            </div>
            )
        }
      }
    </Picker>
    )
  }
})

import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import GregorianCalendarFormat from 'gregorian-calendar-format'
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import GregorianCalendar from 'gregorian-calendar'
import React, {PropTypes} from 'react'
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN'
import Picker from 'rc-calendar/lib/Picker'

const formatter1 = new GregorianCalendarFormat('yyyy-MM-dd')
const formatter2 = new GregorianCalendarFormat('yyyyMMdd')
const now = new GregorianCalendar(zhCn)
now.setTime(Date.now())

function disabledDate(current) {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return current.getTime() >= date.getTime()  // can not select days before today
}

function formatInput(v) {
  return v && formatter1.format(v)
}

function formatParam(v) {
  return v && formatter2.format(v)
}

export default React.createClass({
  propTypes: {
    setDateFilter: PropTypes.func.isRequired,
    intervals: PropTypes.array,
    showInterval: PropTypes.bool,
    start: PropTypes.object,
    end: PropTypes.object
  },

  getDefaultProps() {
    let start = now.clone()
    let end = now.clone()
    start.addDayOfMonth(Number('-7'))
    end.addDayOfMonth(Number('-1'))

    return ({
      showInterval: true,
      intervals: [
        {period: 7, label: '1周'},
        {period: 30, label: '1个月'},
        {period: 90, label: '3个月'}
      ],
      start: start,
      end: end
    })
  },

  getInitialState() {
    return {
      value: [this.props.start, this.props.end],
      interval: 7
    }
  },

  setIntervalClassNames(interval, stateInterval) {
    return `btn btn-default ${interval.toString() === stateInterval.toString() ? 'intervalChoosed' : ''}`
  },

  chooseInterval(e) {
    this.props.setDateFilter(
      formatParam(this.state.value[0]),
      formatParam(this.state.value[1]),
      e.target.value
    )
    this.setState({
      interval: e.target.value,
    })
    this.setIntervalClassNames(e.value, this.state.interval)
  },

  onChange(value) {
    this.props.setDateFilter(
      formatParam(value[0]),
      formatParam(value[1]),
      this.state.interval
    )
    this.setState({value})
  },

  render() {
    const state = this.state
    const calendar = (
      <RangeCalendar
        showWeekNumber={false}
        locale={CalendarLocale}
        defaultValue={now}
        dateInutPlaceholder={['请输入开始日期', '请输入结束日期']}
        disabledDate={disabledDate}
      />
    )

    return (
      <div className="dateFilter">
        <Picker
          value={state.value}
          onChange={this.onChange}
          animation="slide-up"
          calendar={calendar}
        >
          {
            ({value}) => {
              return (
                <div className="de-calendar">
                  <span className="btn-group">
                    <span className="form-control dropdown-toggle" style={{cursor: 'pointer'}}>
                      <i className="fa fa-calendar"></i>
                      <span className="de-calendar-text">
                        {value && (formatInput(value[0]) + ' ~ ' + formatInput(value[1]))}
                      </span>
                    </span>
                  </span>
                </div>
              )
            }
          }
        </Picker>

        <div className="pull-right" style={{display: this.props.showInterval ? 'inline-block' : 'none'}}>
          <span>后续：</span>
          <div className="btn-group">
            {this.props.intervals.map((interval) => {
              return (
                <button
                  key={interval.period}
                  className={this.setIntervalClassNames(interval.period, this.state.interval)}
                  onClick={this.chooseInterval}
                  value={interval.period}
                >
                  {interval.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  },
})

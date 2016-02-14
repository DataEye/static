import React, {PropTypes} from 'react'
import _ from 'lodash'
import Select from 'react-select'
import {Input} from 'react-bootstrap'
import {PLATFORM_TYPE, GAME_ENGINE, CURRENCY_OPTIONS} from '../../../helpers/constants.jsx'
import ajax from 'dejs/lib/ajax'

export default React.createClass({
  propTypes: {
    handleType: PropTypes.string.isRequired,
    handleFn: PropTypes.func.isRequired,
    appInfo: PropTypes.object,
    importData: PropTypes.object
  },

  getInitialState() {
    let appInfo = this.props.appInfo
    let states
    if (this.props.handleType === 'create') {
      states = {
        name: '',
        appCategory: 2,
        currencyType: 'CNY',
        platformArr: []
      }
      if (this.props.importData) {
        states.name = this.props.importData.name
        states.id = this.props.importData.appid
      }
    } else if (this.props.handleType === 'edit') {
      let platformArr = []
      _.map(PLATFORM_TYPE, (value, key) => {
        if ((appInfo.platform & value) === value) {
          platformArr.push(value)
        }
      })
      states = {
        name: appInfo.name,
        appCategory: appInfo.category,
        currencyType: appInfo.currency,
        platformArr: platformArr,
        gameEngine: appInfo.gameEngine
      }
    }
    _.assign(states, {
      appTypeLoading: true,
      showGameSubTypeOptions: true
    })
    return states
  },

  componentDidMount() {
    this.getOptions()
  },

  handleNameChange(event) {
    this.setState({name: event.target.value})
  },

  handleCategoryChange(event) {
    this.setState({appCategory: Number(event.target.value)})
  },

  getOptions() {
    ajax({
      method: 'POST',
      url: '/getCategoryAndType.do',
      data: {uid: window.App.uid},
      success: (msg) => {
        if (this.isMounted()) {
          //id为1是应用，id为2是游戏
          let appTypeOptions = _.pluck(msg.content.filter((item) => {return item.id === 1}), 'children')[0]
          let gameTypeOptions = _.pluck(msg.content.filter((item) => {return item.id === 2}), 'children')[0]
          let appType, gameType, gameSubTypeOptions, gameSubType
          if (this.props.handleType === 'create') {
            appType = appTypeOptions[0].id
            gameType = gameTypeOptions[0].id
            gameSubTypeOptions = _.pluck(msg.content.filter((item) => {return item.id === gameType}), 'children')[0]
            gameSubType = gameSubTypeOptions[0].id
          } else if (this.props.handleType === 'edit') {
            let appInfo = this.props.appInfo
            //category为1是app为2是game
            if (appInfo.category === 1) {
              appType = appInfo.type
              gameType = gameTypeOptions[0].id
              gameSubTypeOptions = _.pluck(msg.content.filter((item) => {return item.id === gameType}), 'children')[0]
              gameSubType = gameSubTypeOptions[0].id
            } else if (appInfo.category === 2) {
              appType = appTypeOptions[0].id
              msg.content.forEach((item) => {
                item.children.forEach((subItem) => {
                  if (subItem.id === appInfo.type) {
                    //no sub type when parent type id is 2
                    if (item.id === 2) {
                      this.setState({showGameSubTypeOptions: false})
                      gameSubTypeOptions = []
                      gameType = appInfo.type
                    } else {
                      gameSubTypeOptions = item.children
                      gameType = item.id
                    }
                  }
                })
              })
              gameSubType = appInfo.type
            }
          }
          this.setState({
            appTypeLoading: false,
            typeData: msg.content,
            appTypeOptions: appTypeOptions,
            gameTypeOptions: gameTypeOptions,
            appType: appType,
            gameType: gameType,
            gameSubTypeOptions: gameSubTypeOptions,
            gameSubType: gameSubType
          })
        }
      },
      fail: (err) => {
      }
    })
  },

  gameTypeChange(gameType) {
    let gameSubTypeOptions = _.pluck(this.state.typeData.filter((item) => {return item.id === gameType}), 'children')
    if (gameSubTypeOptions.length !== 0 && gameSubTypeOptions[0].length !== 0) {
      let gameSubType = gameSubTypeOptions[0][0].id
      this.setState({
        gameType: gameType,
        gameSubTypeOptions: gameSubTypeOptions[0],
        gameSubType: gameSubType,
        showGameSubTypeOptions: true
      })
    } else {
      this.setState({
        gameType: gameType,
        gameSubTypeOptions: [],
        gameSubType: null,
        showGameSubTypeOptions: false
      })
    }
  },

  gameSubTypeChange(gameSubType) {
    this.setState({gameSubType: gameSubType})
  },

  appTypeChange(value) {
    this.setState({appType: value})
  },

  platformCheckedChange(event) {
    let value = Number(event.target.value)
    let platformArr = _.clone(this.state.platformArr, true)
    if (event.target.checked === true) {
      platformArr.push(value)
      this.setState({platformArr: platformArr})
    } else if (event.target.checked === false) {
      let index = platformArr.indexOf(value)
      platformArr.splice(index, 1)
      this.setState({platformArr: platformArr})
    }
  },

  handleGameEngineChange(event) {
    this.setState({gameEngine: Number(event.target.value)})
  },

  currencyChange(value) {
    this.setState({currencyType: value})
  },

  commitSubmit() {
    let platform
    this.state.platformArr.forEach((num) => {
      platform |= num
    })
    let param = {
      name: this.state.name,
      category: this.state.appCategory,
      type: this.state.appCategory === 1 ? this.state.appType : (this.state.gameSubType || this.state.gameType),
      currency: this.state.currencyType,
      platform: platform
    }

    if (this.state.appCategory === 2) {
      param.gameEngine = this.state.gameEngine
    }

    if (!param.name) {
      alert('您没有填写名称')
      return
    } else if (param.name.length < 1 || param.name.length > 20) {
      alert('App名称需1~20个字符！')
      return
    }

    if (!param.platform) {
      alert('您没有选择平台')
      return
    }

    if (this.state.appCategory === 2 && !param.gameEngine) {
      alert('您没有选择开发引擎')
      return
    }

    let typeName

    if (param.category === 1) {
      typeName = _.pluck(this.state.appTypeOptions.filter((item) => {return item.id === this.state.appType}), 'name')
    } else if (param.category === 2) {
      typeName = _.pluck(this.state.gameTypeOptions.filter((item) => {return item.id === this.state.gameType}), 'name') + '/' +
      _.pluck(this.state.gameSubTypeOptions.filter((item) => {return item.id === this.state.gameSubType}), 'name')
    }
    this.props.handleFn(param, typeName)
  },

  render() {
    let platformChoice = _.map(PLATFORM_TYPE, (value, key) => {
      return (
        <Input
          key={key}
          type="checkbox"
          label={key}
          standalone
          wrapperClassName="col-xs-2"
          checked={this.state.platformArr.indexOf(value) >= 0}
          value={value}
          onChange={this.platformCheckedChange}
        />
      )
    })

    let gameEngineChioce = _.map(GAME_ENGINE, (value, key) => {
      return (
        <Input
          key={key}
          type="radio"
          label={key}
          name="gameEngine"
          standalone
          wrapperClassName="col-xs-3"
          checked={this.state.gameEngine === value}
          value={value}
          onChange={this.handleGameEngineChange}
        />
      )
    })

    return (
      <form className="form-horizontal de-narrow-form">
        <Input
          type="text"
          label="APP名称："
          labelClassName="col-xs-2"
          wrapperClassName="col-xs-10"
          value={this.state.name}
          onChange={this.handleNameChange}
          disabled={this.props.importData}
          required
        />
        <div className="form-group">
          <label className="control-label col-xs-2">app种类：</label>
          <Input type="radio" label="Game" name="appCategory" standalone wrapperClassName="col-xs-2"
                 value={2} checked={this.state.appCategory === 2} onChange={this.handleCategoryChange} />
          <Input type="radio" label="APP" name="appCategory" standalone wrapperClassName="col-xs-2"
                 value={1} checked={this.state.appCategory === 1} onChange={this.handleCategoryChange} />
        </div>
        <div className="form-group">
          <label className="control-label col-xs-2">{this.state.appCategory === 2 ? '游戏' : 'app'}类型：</label>
          <div style={{display: this.state.appCategory === 2 ? 'block' : 'none'}}>
            <div className="col-xs-5">
              <Select
                name="form-field-name"
                labelKey= "name"
                valueKey= "id"
                value={this.state.gameType}
                options={this.state.gameTypeOptions}
                onChange={this.gameTypeChange}
                clearable={false}
                searchable={false}
                isLoading={this.state.appTypeLoading}
                />
            </div>
            <div className="col-xs-5" style={{display: this.state.showGameSubTypeOptions ? 'block' : 'none'}}>
              <Select
                name="form-field-name"
                labelKey= "name"
                valueKey= "id"
                value={this.state.gameSubType}
                options={this.state.gameSubTypeOptions}
                onChange={this.gameSubTypeChange}
                clearable={false}
                searchable={false}
                isLoading={this.state.appTypeLoading}
              />
            </div>
          </div>
          <div className="col-xs-10" style={{display: this.state.appCategory === 1 ? 'block' : 'none'}}>
            <Select
              name="form-field-name"
              labelKey= "name"
              valueKey= "id"
              value={this.state.appType}
              options={this.state.appTypeOptions}
              onChange={this.appTypeChange}
              clearable={false}
              searchable={false}
              isLoading={this.state.appTypeLoading}
              />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-xs-2">{this.state.appCategory === 2 ? '游戏' : 'app'}平台：</label>
          <div>
            {platformChoice}
          </div>
        </div>
        <div className="form-group" style={{display: this.state.appCategory === 2 ? 'block' : 'none'}}>
          <label className="control-label col-xs-2">开发引擎：</label>
          <div className="col-xs-10" style={{paddingLeft: 0}}>
            {gameEngineChioce}
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-xs-2">货币类型：</label>
          <div className="col-xs-5">
            <Select
              name="form-field-name"
              value={this.state.currencyType}
              options={CURRENCY_OPTIONS}
              onChange={this.currencyChange}
              clearable={false}
              searchable={false}
              disabled={this.props.handleType === 'edit'}
              />
          </div>
          <div className="col-xs-5" style={{visibility : this.props.handleType === 'create' ? 'visible' : 'hidden'}}>
            <i className="fa fa-exclamation-circle color-warning"></i>&nbsp;
            <span className="attention">创建后货币类型无法修改</span>
          </div>
        </div>
      </form>
    )
  }
})

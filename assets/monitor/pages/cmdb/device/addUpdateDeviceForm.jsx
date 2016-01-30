import React from 'react'
import {Input, Button, Table} from 'react-bootstrap'
import Select from 'react-select'
import AddPublicIp from './publicIpLine.jsx'
import AddDisk from './diskDetailLine.jsx'
import AddBusinessModule from './businessLine.jsx'

export default React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    initData: React.PropTypes.object,
    actions: React.PropTypes.object,
    states: React.PropTypes.object
  },

  getInitialState() {
    return {
      devId: '',
      devType: 1,
      cabinat: 1,
      cpuNum: 0,
      cpuPhysicalCores: 0,
      os: 1,
      memory: 0,
      privateIp: '',
      publicIpList: [],
      isp: 1,
      deptId: 1,
      module: 1,
      backupAdmin: '',
      hostName: '',
      idcId: 1,
      netCardNum: 0,
      cpuType: 1,
      cpuLogicCores: 0,
      kernal: 1,
      diskNum: 0,
      diskSize: 0,
      diskDir: '',
      diskType: '',
      diskVolue: '',
      business: 1,
      admin: '',
      descs: '',
      diskDetails:[],
      busiModuleList:[]
    }
  },

  componentWillMount: function() {
    let id = Number(this.props.id)
    if (id > 0) {
      this.setDeviceState()
    }
  },

  setDeviceState() {
    let items = this.props.states.device.items
    const index = items.findIndex((element) => {
      return element.id === Number(this.props.id)
    })
    let editData = items[index]
    let ipList = editData.deviceIPList
    let privateIp = ''
    let publicIpList = []
    ipList.map((item) => {
      if (item.type === 0) {
        privateIp = item.ip
      } else {
        publicIpList.push(item)
      }
    })

    this.setState({
      id:editData.id,
      devId: editData.devId,
      devType: editData.devType,
      cabinat: editData.cabinat,
      cpuNum: editData.cpuNum,
      cpuPhysicalCores: editData.cpuPhysicalCores,
      os: editData.os,
      memory: editData.memory,
      isp: editData.isp,
      deptId: editData.deptId,
      module: editData.module,
      backupAdmin: editData.backupAdmin,
      hostName: editData.hostName,
      idcId: editData.idcId,
      netCardNum: editData.netCardNum,
      cpuType: editData.cpuType,
      cpuLogicCores: editData.cpuLogicCores,
      kernal: editData.kernal,
      diskNum: editData.diskNum,
      diskSize: editData.diskSize,
      diskDir: editData.diskDir,
      diskType: editData.diskType,
      diskVolue: editData.diskVolue,
      business: editData.business,
      admin: editData.admin,
      descs: editData.descs,
      privateIp:privateIp,
      publicIpList:publicIpList,
      cabinetList:[],
      moduleList:[],
      diskDetails: editData.deviceDetailList,
      busiModuleList: editData.busiModuleList
    })
  },

  getParams() {
    let devId = this.refs.devId.getValue()
    let devType = this.state.devType
    let cabinetId = this.state.cabinetId
    let cpuNum = this.refs.cpuNum.getValue()
    let cpuPhysicalCores = this.refs.cpuPhysicalCores.getValue()
    let os = this.state.os
    let memory = this.refs.memory.getValue()
    let privateIp = this.refs.privateIp.getValue()
    let publicIp = []

    this.state.publicIpList.map((item) => {
      let ipInfo = {}
      ipInfo.ip = item.ip
      ipInfo.ispId = item.ispId.toString()
      ipInfo.type = item.type.toString()
      publicIp.push(ipInfo)
    })

    let ipList = [{
      ip:privateIp,
      ispId:'0',
      type:'0'
    },
      ...publicIp
    ]

    console.log(ipList)
    let deviceIps = JSON.stringify(ipList)

    let deptId = this.state.deptId
    let backupAdmin = this.state.backupAdmin

    let hostName = this.refs.hostName.getValue()
    let idcId = this.state.idcId
    let netCardNum = this.refs.netCardNum.getValue()
    let cpuType = this.state.cpuType
    let cpuLogicCores = this.refs.cpuLogicCores.getValue()
    let kernal = this.state.kernal
    let diskNum = this.refs.diskNum.getValue()
    let diskSize = this.state.diskSize

    let diskDetail = JSON.stringify(this.state.diskDetails)

    let admin = this.state.admin
    let descs = this.refs.descs.getValue()

    let bmList = []
    this.state.busiModuleList.map((item) => {
      let busiModule = {}
      busiModule.busiId = item.busiId.toString()
      busiModule.moduleId = item.moduleId.toString()
      bmList.push(busiModule)
    })
    let busiModuleString = JSON.stringify(bmList)

    let param = {
      devId:devId, devType:devType, cabinetId:cabinetId, cpuNum:cpuNum,
      cpuPhysicalCores:cpuPhysicalCores, os:os, memory:memory,
      deptId:deptId, backupAdmin:backupAdmin,
      hostName:hostName, idcId:idcId, netCardNum:netCardNum, cpuType:cpuType,
      cpuLogicCores:cpuLogicCores, kernal:kernal, diskNum:diskNum,
      diskSize:diskSize, diskDetails:diskDetail, deviceIps:deviceIps,
      admin:admin, descs:descs, deviceId:this.state.id,
      busiModules:busiModuleString
    }
    return param
  },

  addPublicIp(ip, ispId, ispName) {
    let publicIpList = this.state.publicIpList
    publicIpList.push({
      ip:ip,
      ispId:ispId.toString(),
      type:'1',
      ispName:ispName
    })

    this.setState({
      publicIpList:publicIpList
    })
  },

  deletePublicIp(ip) {
    let publicIpList = this.state.publicIpList
    const index = publicIpList.findIndex((element) => {
      return element.ip === ip
    })

    publicIpList.splice(index, 1)

    this.setState({
      publicIpList:publicIpList
    })
  },

  addDisk(diskDir, diskType, diskVolue) {
    let diskDetails = this.state.diskDetails
    diskDetails.push({
      diskDir:diskDir,
      diskType:diskType,
      diskVolue:diskVolue
    })

    this.setState({
      diskDetails:diskDetails
    })
  },

  deleteDiskDetail(diskDir) {
    const index = this.state.diskDetails.findIndex((element) => {
      return element.diskDir === diskDir
    })
    let diskDetails = this.state.diskDetails

    diskDetails.splice(index, 1)

    this.setState({
      diskDetails:diskDetails
    })
  },


  addBusiModule(busiId, busiName, moduleId, moduleName) {
    let busiModuleList = this.state.busiModuleList
    busiModuleList.push({
      busiId:busiId,
      busiName:busiName,
      moduleId:moduleId,
      moduleName:moduleName
    })

    this.setState({
      busiModuleList:busiModuleList
    })
  },

  deleteBusiModule(busiId, moduleId) {
    const index = this.state.busiModuleList.findIndex((element) => {
      return element.busiId === busiId & element.moduleId === moduleId
    })

    let busiModuleList = this.state.busiModuleList

    busiModuleList.splice(index, 1)

    this.setState({
      busiModuleList:busiModuleList
    })
  },

  checkParams() {

  },

  saveDevice() {
    let param = this.getParams()
    console.log(param)
    this.checkParams(param)

    let id = Number(this.props.id)
    if (id >= 0) {
      this.props.actions.deviceUpdate(param)
    } else {
      this.props.actions.deviceAdd(param)
    }
    //TODO 保存失败提示
    window.location.hash = '/configuration/devices'
  },

  cancel() {
    window.location.hash = '/configuration/devices'
  },

  handleIdcChange(value) {
    this.setState({idcId: value})
    let data = []
    let initData = this.props.initData
    initData.cabinetList.map((item) => {
      if (item.itemId === value) {
        data.push(item)
      }
    })
    this.setState({cabinetId:data[0].value})
    this.setState({cabinetList: data})
  },

  render() {
    return (
        <form>
          <div id="input-left"
               className="form-horizontal col-md-6" >
            <Input
              ref="devId"
              type="text"
              label="设备编号："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.devId}
              onChange={(e)=>{this.setState({devId:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">设备型号：</label>
              <Select className="col-xs-7"
                      labelKey="label"
                      valueKey="value"
                      value={this.state.devType}
                      options={this.props.initData.deviceTypeList}
                      onChange={(value)=>{this.setState({devType:value})}}
                      clearable={false}
                      searchable={false}
                     />
            </div>

            <div className="form-group">
              <label className="col-xs-3 text-right">机柜：</label>
              <Select ref="cabinetId"
                      name="cabinetId" className="col-xs-7"
                      value={this.state.cabinetId}
                      options={this.state.cabinetList}
                      onChange={(value)=>{this.setState({cabinetId:value})}}
                      clearable={false}
                      searchable={false}/>
            </div>

            <Input ref="cpuNum"
              type="text"
              label="CPU个数："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.cpuNum}
              onChange={(e)=>{this.setState({cpuNum:e.target.value})}}
            />

            <Input ref="cpuPhysicalCores"
              type="text"
              label="CPU总物理核数："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.cpuPhysicalCores}
              onChange={(e)=>{this.setState({cpuPhysicalCores:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">操作系统：</label>
              <Select name="os" className="col-xs-7"
                      value={this.state.os}
                      options={this.props.initData.osTypeList}
                      onChange={(value)=>{this.setState({os:value})}}
                      clearable={false}
                      searchable={false}
              />
            </div>

            <Input ref="memory"
              type="text"
              label="总内存："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.memory}
              onChange={(e)=>{this.setState({memory:e.target.value})}}
            />

            <Input ref="privateIp"
              type="text"
              label="内网Ip："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.privateIp}
              onChange={(e)=>{this.setState({privateIp:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">外网Ip：</label>
              <div className="col-xs-7">
                <Table hover className="text_center">
                  <thead>
                  <tr>
                    <th>IP</th>
                    <th>运营商</th>
                    <th>
                      <AddPublicIp ispList={this.props.initData.ispList}
                                   addPublicIp={this.addPublicIp} />
                    </th>
                  </tr>
                  </thead>
                  <tbody ref="publicIpTable">
                  {
                    this.state.publicIpList.map((publicIp)=>{
                      return (
                        <tr>
                          <td>
                            {publicIp.ip}
                          </td>
                          <td>
                            {publicIp.ispName}
                          </td>
                          <td>
                            <a onClick={this.deletePublicIp}>
                              删除
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </div>
            </div>


            <div className="form-group">
              <label className="col-xs-3 text-right">部门：</label>
              <Select name="deptId" className="col-xs-7"
                      value={this.state.deptId}
                      options={this.props.initData.deptLit}
                      onChange={(value)=>{this.setState({deptId:value})}}
                      clearable={false}
                      searchable={false}/>
            </div>

            <div className="form-group">
              <label className="col-xs-3 text-right">负责人：</label>
              <Select name="admin" className="col-xs-7"
                      value={this.state.admin}
                      options={this.props.initData.employeeList}
                      onChange={(value)=>{this.setState({admin:value})}}/>
            </div>

            <div className="form-group">
              <label className="col-xs-3 text-right">备份负责人：</label>
              <Select name="backupAdmin" className="col-xs-7"
                      value={this.state.backupAdmin}
                      options={this.props.initData.employeeList}
                      onChange={(value)=>{this.setState({backupAdmin:value})}}/>
            </div>
          </div>

          <div id="input-right"
               className="form-horizontal col-md-6">
            <Input
              ref="hostName"
              type="text"
              label="主机名称："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.hostName}
              onChange={(e)=>{this.setState({hostName:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">机房：</label>
              <Select name="idcId" className="col-xs-7"
                      value={this.state.idcId}
                      options={this.props.initData.idcList}
                      onChange={this.handleIdcChange}
                      clearable={false}
                      searchable={false}/>
            </div>

            <Input
              ref="netCardNum"
              type="text"
              label="网卡个数："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.netCardNum}
              onChange={(e)=>{this.setState({netCardNum:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">cpu型号：</label>
              <Select name="cpuType" className="col-xs-7"
                      value={this.state.cpuType}
                      options={this.props.initData.cpuTypeList}
                      onChange={(value)=>{this.setState({cpuType:value})}}
                      clearable={false}
                      searchable={false}/>
            </div>

            <Input
              ref="cpuLogicCores"
              type="text"
              label="CPU总逻辑核数："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.cpuLogicCores}
              onChange={(e)=>{this.setState({cpuLogicCores:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">内核版本：</label>
              <Select name="kernal" className="col-xs-7"
                      value={this.state.kernal}
                      options={this.props.initData.kernalList}
                      onChange={(value)=>{this.setState({kernal:value})}}
                      clearable={false}
                      searchable={false}/>
            </div>

            <Input
              ref="diskNum"
              type="text"
              label="磁盘个数："
              labelClassName="col-xs-3"
              wrapperClassName="col-xs-7 text-right"
              value={this.state.diskNum}
              onChange={(e)=>{this.setState({diskNum:e.target.value})}}
            />

            <Input
              ref="diskSize"
              type="text"
              label="磁盘总容量："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.diskSize}
              onChange={(e)=>{this.setState({diskSize:e.target.value})}}
            />

            <div className="form-group">
              <label className="col-xs-3 text-right">磁盘详情：</label>
              <div className="col-xs-7">
                <Table hover className="text_center">
                  <thead>
                  <tr>
                    <th>盘符</th>
                    <th>类型</th>
                    <th>容量</th>
                    <th>
                      <AddDisk addDisk={this.addDisk} />
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.diskDetails.map((diskDetail)=>{
                      return (
                        <tr>
                          <td>
                            {diskDetail.diskDir}
                          </td>
                          <td>
                            {diskDetail.diskType}
                          </td>
                          <td>
                            {diskDetail.diskVolue}
                          </td>
                          <td>
                            <a onClick={this.deleteDiskDetail}>
                              删除
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-3 text-right">业务/模块：</label>
              <div className="col-xs-7">
                <Table hover className="text_center">
                  <thead>
                  <tr>
                    <th>业务</th>
                    <th>模块</th>
                    <th>
                      <AddBusinessModule busiList={this.props.initData.busiList}
                                         moduleList={this.props.initData.moduleList}
                                         addBusiModule={this.addBusiModule} />
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.busiModuleList.map((item)=>{
                      return (
                        <tr>
                          <td>
                            {item.busiName}
                          </td>
                          <td>
                            {item.moduleName}
                          </td>
                          <td>
                            <a onClick={this.deleteBusiModule}>
                              删除
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </div>
            </div>

            <Input
              ref="descs"
              type="text"
              label="描述："
              labelClassName="col-xs-3 text-right"
              wrapperClassName="col-xs-7"
              value={this.state.descs}
              onChange={(e)=>{this.setState({descs:e.target.value})}}
            />
          </div>

          <div className="">
            <Button onClick={this.cancel} >取消</Button>
            <Button bsStyle="primary"
                    onClick={this.saveDevice} >确定</Button>
          </div>
        </form>
    )
  }
})

import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";
import ModalExample from './Modal';
class Tasks extends Component {

  constructor(props){
    super(props);
    this.showModal = this.showModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      isModalOpen: false,
      user: '',
      data: [],
      history: [],
    }
  }

  callAPI() {
    fetch("http://localhost:8080/api/measurements")
        .then(res => res.json())
        .then(res => { if(res[0]){
          this.setState({history: res, data: [{
            jobId: '1',
            deviceID: res[res.length-1].deviceID,
            location: 'K17',
            status: res[res.length-1].status === 1 ? 'ON' : 'OFF',
            brightness: res[res.length-1].brightness,
            vdd: res[res.length-1].vdd,
            timestamp: res[res.length-1].timestamp
          }]});
        }else{
            this.setState({data: [{
              jobId: 'test',
              deviceID: 'test',
              location: 'test',
              status: 'test',
              brightness: 'test',
              vdd: 'test',
              timestamp: 'test'
          }]})}
      });
  }

  componentWillMount(){
    this.callAPI();
  }

  compoentDidUpdate(){
    this.callAPI()
  }

  update(){
    const {user} = this.state;
    let newData = this.state.data.slice();
    newData.forEach(row => {
      const index = newData.indexOf(row);

      if(row.jobId === user.jobId){
        if(index !== -1){
          newData.splice(index, 1);
        }
      }
    })
    this.setState({data: newData, isModalOpen: false})
  }

  showModal(object){
    this.setState({isModalOpen: true, user: object.original});
  }

  toggle() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  render(){
    const {isModalOpen, user} = this.state;
    const columns = [
          {
            Header: 'Job Id',
            columns:[
              {
                accessor: 'jobId',
              }
            ]
          },

          {
            Header: 'Emergency Light ID',
            columns:[
              {
                Header: 'ID',
                accessor: 'deviceID',
                // Cell: row =>( <span className='text-center'>{this.renderItem(row.value)}</span> ),
              },
              {
                Header: 'Location',
                accessor: 'location',
              },
            ]
          },
          {Header: 'Main Power',
          columns:[
            {
              accessor: 'status',
            }
          ]}

      ]

    return (
        <div className="container">
          <ModalExample isOpen={isModalOpen} toggle={this.toggle} onConfirm={this.update} user={user} history={this.state.history}/>
            <ReactTable
            className="-highlight"
            data={this.state.data}
            columns={columns}
            noDataText="No Data Available"
            filterable={false}
            sortable={false}
            defaultPageSize={5}
            showPaginationBottom={true}
            showPageSizeOptions={false}
            pageText=""
            previousText=""
            nextText=""
            manual
            getTdProps={(state, rowInfo, column, instance) => ({
                onClick: () => this.showModal(rowInfo)
              })}
           />
        </div>
    )
  }
}

export default Tasks;

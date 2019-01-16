import React, { Component } from 'react';
import { Icon, Button, Select } from 'antd';

// import AddPlanModal from './AddPlanModal';
// import PlanTable from './PlanTable';
// import ChartPanal from '../charts/ChartPanal'
// import FilterPanal from '../FilterPanal';
// import PlanImportModal from '../PlanImportModal'
// import DepartmentSelect from '../DepartmentSelect'

// import { _SYS } from '../api';

// import './plan.less'

const ButtonGroup = Button.Group;
// const Option = Select.Option;

class PlanPage extends Component {
	state = {
		isFilterDisplay:false,
		isNeedRefresh:false,
		currentFilter:{
			audit_status:'全部',
			current_point:'全部',
			execute_status:'全部',
		},
		filterList:[
			{name:'current_point',value:'进展',list:['全部','策划期','准备期','执行期','已完成','已撤销']},
			{name:'audit_status',value:'审批状态',list:['全部','未提交','审核中','审核通过','驳回']},
			{name:'execute_status',value:'执行状态',list:['全部','待启动','进行中','已完成']},
		],
		allDepartMent:[],
		selectedDepartment:''
	}

	// componentWillReceiveProps(nextProps){
	// 	if (nextProps.currentUser !== this.props.currentUser) {
	// 		_SYS.getDepartMent()
	// 		.then(response => {
	// 			this.setState({
	// 				allDepartMent:response.data
	// 			})
	// 		})
	// 	}
	// }

	// toggleFilterPanal(){
	// 	let isFilterDisplay = !this.state.isFilterDisplay;
	// 	this.setState({isFilterDisplay});
	// }

	// setIsNeed(bool){this.setState({isNeedRefresh:bool});}

	// changeFilter(newFilter){this.setState({currentFilter:newFilter});}

	// handleDepartmentChange(value){
	// 	this.setState({selectedDepartment:value})
	// }

	render(){
		// let { allDepartMent } = this.state;
		return (
			<div className = 'appContent'>
				<h2 className = 'appContent_title'>
					19-20三年规划行动计划/项目进度跟进表
				</h2>
			{/*
				<ChartPanal 
					currentUser = {this.props.currentUser}
					isNeedRefresh = {this.state.isNeedRefresh}
					setIsNeed = {(b) => this.setIsNeed(b)}
					page = 'planPage' 
					bodyHeight = {bodyHeight}/>

				<h2 className = 'appContent_title'>
					19-20三年规划行动计划/项目进度跟进表

					<DepartmentSelect 
						style = {{width:'300px',marginLeft:'10px'}} 
						// className = 'appContent_titleSelect'
						placeholder = '选择部门'
						handleDepartmentChange = {(value) => this.handleDepartmentChange(value)}/>
					<ButtonGroup size = 'small' className = 'floatRight'>
						<PlanImportModal setIsNeed = {(b) => this.setIsNeed(b)}/>			
						<AddPlanModal
							setIsNeed = {(b) => this.setIsNeed(b)}
							currentUser = {this.props.currentUser}/>
						<Button onClick = {() => this.toggleFilterPanal()}>
							<Icon type = 'filter' theme = 'outlined' /> 筛选
						</Button>
					</ButtonGroup>
				</h2>

				<FilterPanal 
					filterList = {this.state.filterList} 
					currentFilter = {this.state.currentFilter} 
					isFilterDisplay = {this.state.isFilterDisplay}
					changeFilter = {(f) => this.changeFilter(f)}/>

				<PlanTable 
					selectedDepartment = { this.state.selectedDepartment }
					isNeedRefresh = {this.state.isNeedRefresh}
					setIsNeed = {(b) => this.setIsNeed(b)}
					currentFilter = {this.state.currentFilter}
					currentUser = {this.props.currentUser}/>
*/}					
			</div>
		)
	}
}

export default PlanPage;
import ChartPanal from '../../components/charts/ChartPanal'

export default () => {
  return (
			<div className = 'appContent'>
				<ChartPanal 
					// currentUser = {this.props.currentUser}
					// isNeedRefresh = {this.state.isNeedRefresh}
					// setIsNeed = {(b) => this.setIsNeed(b)}
					page = 'planPage' />
				<h2 className = 'appContent_title'>
					19-20三年规划行动计划/项目进度跟进表
				</h2>
			{/*


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
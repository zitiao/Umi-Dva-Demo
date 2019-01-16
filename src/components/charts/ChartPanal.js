import React , { Component } from 'react';

import { _CHART } from './service/chart';
import ChartsCardList from './ChartsCardList'

import './charts.less'

class ChartPanal extends Component {

	state = {
		chartsData:{}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.isNeedRefresh || nextProps.currentUser !== this.props.currentUser){
			this.getChartsData(this.props.page)
			this.props.setIsNeed(false);
		}
	}

	getTop(e){
	   var offset=e.offsetTop;
	   if(e.offsetParent!=null) offset+=this.getTop(e.offsetParent);
	   return offset;
	}

	getChartsData(page){
		if (page === 'planPage') {
			_CHART.planJson()
			.then(response => {
				if (response.code === 1) {
					this.setState({
						chartsData:response.data
					})				
				}
			})
		}else if(page === 'todoListPage'){
			_CHART.todoJson()
			.then(response => {
				if (response.code === 1) {
					this.setState({
						chartsData:response.data
					})				
				}
			})
		}
	}

   	render(){

   		let { bodyHeight } = this.props;
   		let { chartsData } = this.state;

		return (
			<div className = 'chartsList' ref = 'test'>
				<div className = {bodyHeight + 280 < window.innerHeight?'chartsList_panal':''} >
					<ChartsCardList {...this.props} chartsData = {chartsData}/>
				</div>
			</div>
	    );
   }
}

export default ChartPanal;
import React from 'react';
import { Icon, Row, Col, Tooltip } from 'antd';

const chartsConfig = {
	planPage:{
		fields:[
			{name:'total',desc:'总数',help:'与当前用户相关的全部计划'},
			{name:'normal',desc:'正常',help:'正常数量'},
			{name:'warning',desc:'预警',help:'当前日期在应行动日期的前一天12点 ~ 后一天8点'},
			{name:'overdue',desc:'逾期',help:'当前日期在应行动日期的后一天8点后'},
			{name:'auditing',desc:'待处理',help:'待用户审批'},
		],
		gutter:12,
		span:4,
	},
	todoListPage:{
		fields:[
			{name:'planCount',desc:'总数',help:'与当前用户相关的全部计划'},
			{name:'progressCount',desc:'正常',help:'正常数量'},
			{name:'overdueCount',desc:'逾期',help:'当前日期在应行动日期的第二天后'},
			{name:'completeCount',desc:'完成',help:'已完成的个人计划'},
		],
		gutter:12,
		span:6,
	},
}

function ChartsCardList(props){

	let { page, chartsData } = props;
	let config = chartsConfig[page];

    return (
		<Row gutter = {config.gutter}>
		{
			config.fields.map(f => (
				<Col key = {f.name} span = {config.span} style = {{width:`${100/config.fields.length}%`}}>
					<div className = 'chartsCard'>			
						<h4 className = 'chartsCard_title'>
							<Tooltip title={f.help} placement = 'bottom'>
								<Icon type="question-circle" className = 'chartsCard_icon'/>
							</Tooltip>    							
							{f.desc}
							<span className = 'chartsCard_mainNum'>{chartsData[f.name]}</span>
						</h4>
					</div>																	
				</Col>
			))
		}
		</Row>
    );
}

export default ChartsCardList;
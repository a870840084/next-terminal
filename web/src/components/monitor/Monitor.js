import React, { Component } from 'react';
import './Monitor.css';
import axios from 'axios'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'


// Demo
class StatusMonitor extends Component {

    state = {
        option: {}
    }

    handleTest = () => {
        const depthSeq: any = []
        const timeSeq: any = []
        const option = {
            grid: {
                bottom: 80,
                top: 40,
                left: 140
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: true },
                    axisLabel: {
                        align: 'left'
                    },
                    data: [1,2,3,5,6,7,8,9]
                }
            ],
            yAxis: [
                {
                    name: '淹没水深(m)',
                    type: 'value',
                    scale: 0.1,
                }
            ],
            series: [
                {
                    name: '淹没水深',
                    type: 'line',
                    animation: false,
                    areaStyle: {
                        color: '#fff'
                    },
                    lineStyle: {
                        width: 1
                    },
                    markPoint: {
                        symbol: 'pin',
                        data: [
                            {
                                name: '最大值',
                                type: 'max'
                            },
                            {
                                name: '初始值',
                                valueIndex: 0,
                                type: 'min'
                            }
                        ]
                    },
                    data: [1,23,6,7,8,9]
                }
            ]
        }
        this.setState({
            'option': option
        })
    }
    render() {
        return (
            <div className="Status">
                <button onClick={this.handleTest}>
                    测试
                </button>
                <ReactEcharts
                    style={{ height: 350, width: 350 }}
                    notMerge={true}
                    lazyUpdate={true}
                    option={this.state.option} />

                <ReactEcharts
                    style={{ height: 350, width: 350 }}
                    notMerge={true}
                    lazyUpdate={true}
                    option={this.state.option} />
            </div>
        );
    }
}

export default StatusMonitor;

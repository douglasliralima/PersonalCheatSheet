import React from "react"
import ReactEcharts from 'echarts-for-react';

export default function LineGraphic({ListOfDays, CountryADataList, CountryBDataList}){
    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
            type: 'line',
            data: [320, 450, 600, 934, 1290, 1330, 1320],
        }, {
          type: 'line',
          data: [1290, 1330, 1320, 820, 932, 901, 934]
        }]
      };

    return <ReactEcharts
    option={option}
    />
}
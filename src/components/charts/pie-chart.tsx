import React from 'react';

import { ResponsivePie } from '@nivo/pie'

export interface IPieProps {
    id: string;
    label: string;
    value: number | string;
}

const PieChart = (props: any) => {
    return (
        <ResponsivePie
            data={props.pieData}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            radialLabelsSkipAngle={5}
            sliceLabelsSkipAngle={5}
            radialLabelsLinkColor={{from: 'color'}}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 0,
                    symbolSize: 20,
                    itemDirection: 'left-to-right'
                }
            ]}
        />
    )
}

export default PieChart;

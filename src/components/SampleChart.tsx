import { TSample } from '@/types/TSample'
import { useEffect, useState } from 'react'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import UtilDate from '@/libs/utils/UtilDate'

export default function SampleChart(props: { data: TSample[] }) {
  const graphData: {
    dateStr: string
    suggest: number
    delivery: number
    sale: number
    disposal: number
  }[] = []

  for (const row of props.data) {
    graphData.push({
      dateStr: UtilDate.format(row.date, 'n/j'),
      suggest: row.suggest1 + row.suggest2 + row.suggest3,
      delivery: row.delivery1 + row.delivery2 + row.delivery3,
      sale: row.sale1 + row.sale2 + row.sale3,
      disposal: row.disposal1 + row.disposal2 + row.disposal3,
    })
  }

  return (
    <div>
      <ComposedChart
        width={500}
        height={400}
        data={graphData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='dateStr' scale='band' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='suggest' name='提案数' barSize={20} fill='#413ea0' />
        <Bar dataKey='delivery' name='納品数' barSize={20} fill='#f24ef0' />
        <Line dataKey='sale' name='販売数' type='monotone' stroke='#ff7300' />
        <Line dataKey='disposal' name='廃棄数' type='monotone' stroke='#ff7300' />
      </ComposedChart>
    </div>
  )
}

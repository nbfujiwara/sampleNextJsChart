import { TSample } from '@/types/TSample'
import UtilDate from '@/libs/utils/UtilDate'
import basicStyles from '@/styles/Basic.module.scss'

export default function DataView(props: { data: TSample[] }) {
  return (
    <div>
      <table className={basicStyles.basicTable}>
        <thead>
          <tr>
            <th>納品日</th>
            {props.data.map((row, idx) => {
              return (
                <th key={`day${idx}`} colSpan={3}>
                  {UtilDate.format(row.date, 'n/j')}
                </th>
              )
            })}
          </tr>
          <tr>
            <th>曜日</th>
            {props.data.map((row, idx) => {
              return (
                <th key={`week${idx}`} colSpan={3}>
                  {UtilDate.format(row.date, 'week')}
                </th>
              )
            })}
          </tr>
          <tr>
            <th>便</th>
            {props.data.map((row, idx) => {
              return (
                <>
                  <th key={`bin1_${idx}`}>1</th>
                  <th key={`bin2_${idx}`}>2</th>
                  <th key={`bin3_${idx}`}>3</th>
                </>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>AI提案数</th>
            {props.data.map((row, idx) => {
              return (
                <>
                  <td key={`suggest1_${idx}`}>{row.suggest1}</td>
                  <td key={`suggest2_${idx}`}>{row.suggest2}</td>
                  <td key={`suggest3_${idx}`}>{row.suggest3}</td>
                </>
              )
            })}
          </tr>
          <tr>
            <th>納品数</th>
            {props.data.map((row, idx) => {
              return (
                <>
                  <td key={`delivery1_${idx}`}>{row.delivery1}</td>
                  <td key={`delivery2_${idx}`}>{row.delivery2}</td>
                  <td key={`delivery3_${idx}`}>{row.delivery3}</td>
                </>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

import { format } from 'date-fns'

export default function LibTest() {
  return <p>{format(new Date(2014, 1, 11), 'yyyy-MM-dd')}</p>
}

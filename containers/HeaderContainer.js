import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from '../components/Clock.js'
import AddCount from '../components/AddCount'

export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <h1>Header</h1>
      Light: {light.toString()}
    </div>
  )
})

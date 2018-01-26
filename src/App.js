import React, {Component} from 'react'
import CuteNotification from './components/CuteNotification'
import moment from 'moment'

type Props = {}
type State = {
  notifications: Object[]
}

export default class App extends Component<Props, State> {
  state = {notifications: []}

  componentWillMount () {
    // setInterval(this.getNotifications, 1000)
    this.getNotifications()
  }

  render() {
    var {notifications} = this.state
    return (
      <div style={styles.container} className="App">
        <h1>Gimi cute</h1>
        {notifications.length > 0 ? notifications.map(this.renderNotifications) : <div />}
      </div>
    )
  }

  renderNotifications = (notif: Object, index: number) => {
    return <CuteNotification text={notif.text} date={notif.date} key={index} />
  }

  getNotifications = () => {
    var {notifications} = this.state
    var notification = {text: 'Hello im testin', date: moment()}
    notifications.unshift(notification)
    this.setState({notifications})
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  }
}

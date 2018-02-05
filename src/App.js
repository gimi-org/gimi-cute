import React, {Component} from 'react'
import CuteNotification from './components/CuteNotification'
import moment from 'moment'
var Stomp = require('@stomp/stompjs')

type Props = {}
type State = {
  client: *,
  notifications: Object[]
}

export default class App extends Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      client: Stomp.client('wss://spirited-lizard.rmq.cloudamqp.com'),
      notifications: []
    }
  }

  componentDidMount () {
    this.connectStomp()
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

  connectStomp = () => {
    var {client} = this.state
    var headers = {
      login: 'stomp',
      passcode: 'd5wjJX2TBJ1nC0nFyyKj'
    }
    client.connect(headers, this.onConnect)
  }

  onConnect = () => {
    alert('connected')
    var {client} = this.state
    client.subscribe("/topic/cute-feed", this.onMessage);
  }

  onMessage = (message: *) => {
    alert('message')
    console.log(message)
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

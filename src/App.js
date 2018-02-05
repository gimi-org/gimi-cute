import React, {Component} from 'react'
import CuteNotification from './components/CuteNotification'
import moment from 'moment'
import SockJsClient from 'react-stomp'

type Props = {}
type State = {
  notifications: Object[]
}

const webhookUrl = 'https://spirited-lizard.rmq.cloudamqp.com'

export default class App extends Component<Props, State> {
  state = {notifications: []}

  render() {
    var {notifications} = this.state
    return (
      <div style={styles.container} className="App">
      <SockJsClient url={webhookUrl} headers={this.getHeaders()} topics={['/topic/cute-feed']} onMessage={this.onNotification} onConnect={(res) => console.log(res)} />
        <h1>Gimi cute</h1>
        {notifications.length > 0 ? notifications.map(this.renderNotifications) : <div />}
      </div>
    )
  }

  renderNotifications = (notif: Object, index: number) => {
    return <CuteNotification text={notif.text} date={notif.date} key={index} />
  }

  getHeaders = () => {
    return {
      port: 61613,
      login: 'stomp',
      passcode: 'd5wjJX2TBJ1nC0nFyyKj',
    }
  }

  onNotification = (notification: Object) => {
    alert('notif')
    console.log(notification)
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

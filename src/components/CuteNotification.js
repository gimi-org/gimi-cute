import React, {Component} from 'react'
import logo from '../assets/snout_logo.png'
import moment from 'moment'

type Props = {
  text: string,
  date: string
}

export default class CuteNotification extends Component<Props> {
  state = {}

  render() {
    var {text, date} = this.props
    return (
      <div style={styles.container}>
        <div style={styles.infoContent}>
          <img src={logo} width='50' style={styles.logo} alt='pig snout' />
          <h3>{text}</h3>
        </div>
        <p style={styles.date}>{moment(date).format('llll')}</p>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '50%',
    flex: 1,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    marginRight: 10
  },
  date: {
    textAlign: 'right'
  }
}

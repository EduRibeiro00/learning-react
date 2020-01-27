import React, {Component} from 'react'

class GreetingsLine extends Component {
    getGreettingString() {
        const date = new Date()
        let greetingString = "Good "
        if(date.getHours() < 12) {
          greetingString += "morning!"
        }
        else if (date.getHours() < 19) {
          greetingString += "afternoon!"
        }
        else {
          greetingString += "night!"
        }
  
        return greetingString
    }

    render() {
        const greetingString = this.getGreettingString()

        return (
            <p>{greetingString}</p>
        )
    }
}

export default GreetingsLine
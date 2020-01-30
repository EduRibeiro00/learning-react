import React from 'react'

export default function GreetingsLine() {
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

    return (
        <p>{greetingString}</p>
    )
}
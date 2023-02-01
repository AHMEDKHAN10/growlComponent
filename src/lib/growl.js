import React from 'react'

import './growl.css'

export const Growl = ({ active, message, onDismissed }) => {
  console.log(active)
  
  return(

    <div className={`growl${active ? " active" : ""}`}>
      {message}
      <div onClick={onDismissed} className="growl-close" />
    </div>
  )
  }

export function useGrowl() {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState({state: false, timer: 0})

    const handleClick = (newValue) => {
      if(newValue.state ){
        setGrowlActive(newValue)
        setTimeout(() => {
          console.log('in function')
          setGrowlActive({state: false, timer: 0});
        }, newValue.timer)
      } else {
        setGrowlActive(newValue)
      }
    }
    
    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        handleClick,
    ]
}
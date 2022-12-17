import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: "70px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
        {props.alert.type === "danger" ? "Error" : props.alert.type[0].toUpperCase() + props.alert.type.slice(1)} : {props.alert.message}
      </div>}
    </div>
  ) 
}

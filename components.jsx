import React from "react"
import ReactDOM from "react-dom"

function User (props){
    return <div className="header">
        <header>{props.name}</header>
        </div>}

function Pass(){
    return <div><User name = "Sibusiso Matebese"/></div>}

 function User1 (props){
     return <div className = "chatbox1">
         <main>{props.message}</main></div>}

 function User2(props){
    return <div className = "chatbox1"><main>{props.message}</main></div>}

function Combine(){
    return <div><User1 message = "Are you a programmer?"/><br/><User2 message = "No, i aint a prgrammer."/></div>}

function Footer(){
    return <div><textarea id = "textarea" placeholder = "type a message..."></textarea>
    <button>Send</button></div>}

 ReactDOM.render(<div><User/><User1/><User2/><Pass/><Combine/><Footer/></div>, document.getElementById("root"))
export default User

import React from 'react'
import './style.css'

export default class Header extends React.Component {
    render(){
        return(
            <div className="Header d-flex justify-content-center align-items-center">
                <header>
                    <h1 onClick={() => window.location.reload()}>Marvel <span style={{marginLeft: '-20px'}}>Card</span></h1>
                </header>
            </div>
        )
    }
}
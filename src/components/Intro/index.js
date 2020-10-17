import React from 'react'
import './style.css'
import MarvelBookAnimationGif from '../../assets/marvel-book-animation.gif'

export default class Intro extends React.Component {
    render(){
        return(
            <div className="Intro Fadeout">
               <img 
               alt="Marvel Intro Animação"
               src={MarvelBookAnimationGif}
               />
            </div>
        )
    }
}
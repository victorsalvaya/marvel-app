import React from 'react'
import './style.css'
import Intro from '../Intro/index'
import Service from '../../services/index'


export default class Card extends React.Component {

    state = {
        teste: [],
        Intro: true,
    }




    getCharacterApi() {
        Service.getPlanet().then(res => {
            const results = res.data.data.results
            const teste = this.state.teste
            teste.push(results)



            this.setState({
                teste: teste,
                Intro: false,
            })



        })

    }

    componentDidMount() {
        this.getCharacterApi()

    }


    render() {

        if (this.state.Intro) {
            return <Intro />
        }
        const datas = this.state.teste
        const id = Math.floor(Math.random() * (100 - 0) + 0);

        console.log()
        return (
            <>
                {datas.map((res, index) => (

                    <div key={index}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-3">
                                <div className="Card" style={{
                                    backgroundImage: ('url("' + res[id].thumbnail.path + '.jpg' + '")')
                                }}>
                                    <span className="id">{res[id].id}</span>
                                    <h2>{res[id].name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

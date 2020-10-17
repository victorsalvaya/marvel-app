import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Intro from '../Intro/index'
import Service from '../../services/index'


export default class Card extends React.Component {

    state = {
        name: '',
        id: '',
        thumbnail: '',
        Intro: true,
        datas: [],
    }



    // getCharacterApi() {
    //     Service.getPlanet().then(res => {
    //         const random = this.getRandomNumber(0, 50)
    //         const results = res.data.data.results[random]

    //         const name = results.name
    //         const id = results.id
    //         const thumbnail = results.thumbnail.path + '.jpg'

    //         this.setState({
    //             name: name,
    //             id: id,
    //             thumbnail: thumbnail,
    //             Intro: false,
    //         })


    //     })



    getCharacterApi() {
        Service.getPlanet().then(res => {
            const results = res.data.data.results

            results.map((data) => {
                let name = data.name
                let id = data.id
                let thumbnail = data.thumbnail.path + '.jpg'
                let datas = this.state.datas
                

            })

        })



        // const timeStamp = '1601423262';
        // const apiKey = '52a7e43ef1006aa8ecbcc6cb7f113022';
        // const md5 = '1f546908cfa2617f9001e37e0ca88a68'

        // axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`, { params: { limit: 50, offset: 10 } })

        // .then(res => {
        //     const results = res.data.data.results
        //     results.map((data) => {
        //         let name = data.name
        //         let id = data.id
        //         let thumbnail = data.thumbnail.path + '.jpg'
        //         let newArray = {
        //             name,
        //             id,
        //             thumbnail,
        //         }
        //         let datas = this.state.datas
        //         datas.push(newArray)
        //         this.setState({
        //             datas: datas,
        //         })
        //     })

        // })

    }

    componentDidMount() {
        this.getCharacterApi()

    }


    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }


    createsCharacter = () => {
        const img = this.state.thumbnail
        const id = this.state.id
        const name = this.state.name

        return (
            <div className="Card" style={{
                backgroundImage: ('url("' + img + '")')
            }}>
                <span className="id">{id}</span>
                <h2>{name}</h2>
            </div>
        )
    }


    render() {

        if (this.state.Intro) {
            return <Intro />
        }
        const img = this.state.thumbnail
        const id = this.state.id
        const name = this.state.name


        return (

            <Container fluid>

                <div className="d-flex justify-content-center align-items-center">
                    <Row>
                        <div className="col-12 col-lg-3">
                            <div className="Card" style={{
                                backgroundImage: ('url("' + img + '")')
                            }}>
                                <span className="id">{id}</span>
                                <h2>{name}</h2>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="Card" style={{
                                backgroundImage: ('url("' + img + '")')
                            }}>
                                <span className="id">{id}</span>
                                <h2>{name}</h2>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="Card" style={{
                                backgroundImage: ('url("' + img + '")')
                            }}>
                                <span className="id">{id}</span>
                                <h2>{name}</h2>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="Card" style={{
                                backgroundImage: ('url("' + img + '")')
                            }}>
                                <span className="id">{id}</span>
                                <h2>{console.log(this.state.datas)}</h2>
                            </div>
                        </div>
                    </Row>
                </div>

            </Container>
        )
    }
}

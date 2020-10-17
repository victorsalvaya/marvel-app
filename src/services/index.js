import axios from 'axios'

const timeStamp = '1601423262';
const apiKey = '52a7e43ef1006aa8ecbcc6cb7f113022';
const md5 = '1f546908cfa2617f9001e37e0ca88a68'



const serviceMarvel = {
    getPlanet() {
       return axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`, { params: { limit: 50, offset: 10 } })
         
    }
}

export default serviceMarvel
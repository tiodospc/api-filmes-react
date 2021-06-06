const axios =  require("axios")
const e = require("express")
const https  = require("./https")


class dataApi {    
    getMovies(title, page) {
        return axios
            .get(`${https.BASE_URL}/search/?Title=${title}&page=${page}`)
            .then(res => {
                const data = res.data.data

                let quantMovies = []
                let moviesByYear = []
                let arrayYears = []                

                data.map((element) => { 
                    arrayYears.push(element.Year)
                })
                
            
                for(let i = 0; i < data.length; i++){

                    /*
                        Adicionando um filter que vai comparar os filmes que tenho no array 
                        separado e comparando quantas vezes os anos são repetidos para pegarmos
                        a quantidade de filmes naquele ano.
                    */
                    
                    quantMovies.push(data.filter(film => film.Year == arrayYears[i]).length)             
                   
                    /*
                        Remove os anos repitidos
                    */
                    arrayYears.filter((element, i) => {
                        return arrayYears.indexOf(element) === i
                    })
                  
                    /*
                        Adicionando as ocorrencias e os anos em suas respectivoas posições
                     */
                    moviesByYear.push({
                        year: arrayYears[i],
                        movies: quantMovies[i]
                    })
                }

                moviesByYear = moviesByYear.filter(a => {
                    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);                    console.log('dasdasdasdas', a)
                }, Object.create(null))

                let total = moviesByYear.reduce((total, valor) => total + valor.movies, 0)
               
                moviesByYear.push({
                    total: total, 
                    currentPage: res.data.page, 
                    totalPages: res.data.total_pages
                })
                return Promise.resolve(moviesByYear)
            })
            .catch(err => {
                return Promise.reject(err)
            })
    }
};
module.exports = new dataApi
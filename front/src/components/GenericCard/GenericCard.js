import React, { useState } from 'react'
import { Card, Input, Collapse, Pagination } from 'element-react'
import api from '../../service/config'
import './styles.css'


export default function GenericCard() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [title, setTitle] = useState([])
    

    async function handleInput(e) {
        setTitle(e) 
   
        api.get(`/api/movies/count?title=${title}`)
        .then(res => {
            setMovies(res.data)
            
            res.data.map(el => {
                setCurrentPage(el.currentPage)
                setTotalPage(el.totalPages)
            })

            return Promise.resolve(res.data)
        })
        .catch(err => {
            alert('Não foi possível obter lista de filmes')
            return Promise.reject(err)
        }) 
    } 
    
    async function handlerPagination(e){
        let numPage = e
        api.get(`/api/movies/count?title=${title}&page=${numPage}`)
        .then(res => {
            setMovies(res.data)
            return Promise.resolve(res.data)
        })
        .catch(err => {
            alert('Não foi possível trocar a pagína')
            return Promise.reject(err)
        }) 
    }

    return (    
        <div className='container-box'>
            <Card className='card-box'>
                <Input
                    icon="search"
                    placeholder="Digite o nome do filme"
                    onChange={handleInput}
                />

                <Collapse accordion className='collapse'>
                    {
                        movies.map(el => {
                            return( 
                                <Collapse.Item 
                                    title={el.year || 'Total de filmes'}
                                >
                                    {el.movies || el.total}
                                </Collapse.Item>
                            );
                        })
                    }
                </Collapse>
                
                <Pagination
                    layout="prev, pager, next" 
                    total={totalPage}
                    currentPage={currentPage} 
                    onCurrentChange={handlerPagination}
                    className='pagination'
                />                   
            </Card>
        </div>
    )
}


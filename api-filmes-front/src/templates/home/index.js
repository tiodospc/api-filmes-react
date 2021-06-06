import React from 'react'
import GenericCard from '../../components/GenericCard/GenericCard'
import './styles.css'

class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <h2>Encontre informações sobre filmes</h2>
                <GenericCard />               
            </div>
        )
    }
}

export default Home;
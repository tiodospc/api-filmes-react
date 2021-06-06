const dataApi = require('../services/apiServices')

exports.filterMovies = async function (req, res) {

    try {
        const title = req.query.title
        const page = req.query.page
        
        if(page !== undefined) {
            const response = await dataApi.getMovies(title, page);
            return res.status(200).json(response)   
        } else {
            const response = await dataApi.getMovies(title, 1);
            return res.status(200).json(response) 
        }

      
    } catch (err) {
        return res.status(400).send('err');
    }
}



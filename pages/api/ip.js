import countries from '../lib/countries.json'

export default function handler(req, res) {

  console.log('query: ',req.query)



  let payload = req.query

  res.status(200).json(payload)
}

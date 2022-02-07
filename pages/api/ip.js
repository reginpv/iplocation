import countries from '../lib/countries.json'

export default function handler(req, res) {

  console.log(req.qeo)

  const { url, geo } = req
  const country = geo?.country || 'na'
  const city = geo?.city || 'na'
  const region = geo?.region || 'na'

  let payload = {
    country,
    city,
    region,
    geo: req?.geo
  }

  res.status(200).json(payload)
}

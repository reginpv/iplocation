import countries from '../lib/countries.json'

export default function handler(req, res) {

  const { url, geo } = req
  const country = geo?.country || 'na'
  const city = geo?.city || 'na'
  const region = geo?.region || 'na'

  let payload = {
    country,
    city,
    region
  }

  res.status(200).json(payload)
}

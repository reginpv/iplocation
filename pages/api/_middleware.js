import { NextRequest, NextResponse } from 'next/server'
import countries from '../lib/countries.json'

export async function middleware(NextRequest) {

  console.log(NextRequest)

  const { nextUrl, geo } = NextRequest
  const country = geo.country || 'na'
  const city = geo.city || 'na'
  const region = geo.region || 'na'

  console.log('geo: ', geo)

  const countryInfo = countries.find((x) => x.cca2 === country)

  nextUrl.searchParams.set('country', country)
  nextUrl.searchParams.set('city', city)
  nextUrl.searchParams.set('region', region)

  return NextResponse.rewrite(nextUrl)
}
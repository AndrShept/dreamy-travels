import React from 'react'
import { InfoCard } from './InfoCard'

export const ResultList = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {data.map(listing => <InfoCard listing={listing} key={listing.id}/>)}
    </div>
  )
}

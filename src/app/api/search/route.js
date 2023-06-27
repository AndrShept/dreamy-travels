import { NextResponse } from 'next/server'
import listingsData from '../../../lib/listingsData.json'


export const GET = async ( req)=>{

    return new NextResponse(JSON.stringify(listingsData), {status: 200} )
}
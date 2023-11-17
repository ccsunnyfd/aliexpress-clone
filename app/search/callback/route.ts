import { NextResponse } from 'next/server'
import searchByName from '@/app/third-party-requests/prisma/search-by-name'

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url)
    const searchText = searchParams.get('search')
    if (searchText) {
        try {
            const searchResList = await searchByName(searchText)
            return NextResponse.json({ data: searchResList })
        } catch (e) {
            return NextResponse.json({ data: [] })
        }
    } else {
        return NextResponse.json({ data: [] })
    }
}

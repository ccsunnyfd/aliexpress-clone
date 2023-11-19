
import prisma from '@/prisma/db'

export default async function searchByName(text: string) {
  let searchResults: Product[] | null = null
  try {
    searchResults = await prisma.products.findMany({
      take: 5, // Max rows
      where: {
        title: {
          contains: text,
          mode: 'insensitive'
        },
      },
    })
  } catch (e) {
    console.log(e)
  }

  return searchResults
}
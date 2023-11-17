
import prisma from '@/prisma/db'

export default async function searchByName(text: string) {
  const searchResults = await prisma.products.findMany({
    take: 5, // Max rows
    where: {
      title: {
        contains: text,
        mode: 'insensitive'
      },
    },
  })

  return searchResults
}
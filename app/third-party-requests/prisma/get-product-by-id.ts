
import prisma from '@/prisma/db'

export default async function getProductById(id: number) {
  const product = await prisma.products.findFirst({
    where: { id: id }
  })

  return product
}
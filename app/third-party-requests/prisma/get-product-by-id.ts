
import prisma from '@/prisma/db'

export default async function getProductById(id: number) {
  let product: Product | null = null
  try {
    product = await prisma.products.findFirst({
      where: { id: id }
    })
  } catch (e) {
    console.log(e)
  }

  return product
}
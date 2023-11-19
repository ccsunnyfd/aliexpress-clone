
import prisma from '@/prisma/db'

export default async function getAllProducts() {
  let products: Product[] | null = null
  try {
    products = await prisma.products.findMany()
  } catch (e) {
    console.log(e)
  }

  return products
}
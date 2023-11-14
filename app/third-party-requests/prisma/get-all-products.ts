
import prisma from '@/prisma/db'

export default async function getAllProducts() {
  const products = await prisma.products.findMany()

  return products
}
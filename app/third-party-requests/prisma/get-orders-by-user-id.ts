import prisma from '@/prisma/db'

export default async function getOrdersByUserId(id: string) {
  let orders: Order[] | null = null
  try {
    orders = await prisma.orders.findMany({
      where: { userId: id, paid: true },
      orderBy: { id: 'desc' },
      include: {
        orderItem: {
          include: {
            product: true
          }
        }
      }
    })
  } catch (e) {
    console.log(e)
  }

  return orders
}
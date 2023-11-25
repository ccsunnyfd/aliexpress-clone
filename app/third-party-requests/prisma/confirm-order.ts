import prisma from '@/prisma/db'

export default async function confirmOrder(stripeId: string) {
  try {
    await prisma.orders.update({
      where: { stripeId: stripeId },
      data: {
        paid: true
      }
    })
  } catch (e) {
    console.log(e)
  }
}
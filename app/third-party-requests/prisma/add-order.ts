import prisma from '@/prisma/db'

export default async function createOrder(userId: string, stripeId: string, currentAddress: Address, items: Product[]) {
    let order: Order | null = null
    try {
        order = await prisma.orders.create({
            data: {
                userId,
                stripeId: stripeId,
                name: currentAddress.name,
                address: currentAddress.address,
                zipcode: currentAddress.zipcode,
                city: currentAddress.city,
                country: currentAddress.country,
                paid: false, // not paid yet
            }
        })
        items.forEach(async prod => {
            await prisma.orderItem.create({
                data: {
                    orderId: order!.id,
                    productId: Number(prod.id),
                }
            })
        })
    } catch (e) {
        console.log(e)
    }

    return order
}
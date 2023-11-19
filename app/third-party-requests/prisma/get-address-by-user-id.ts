
import prisma from '@/prisma/db'

export default async function getAddressByUserId(id: string) {
  let address: Address | null = null
  try {
    address = await prisma.addresses.findFirst({
      where: { userId: id }
    })
  } catch (e) {
    console.log(e)
  }

  return address
}
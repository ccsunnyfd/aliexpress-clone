
import prisma from '@/prisma/db'

export default async function getAddressByUserId(id: string) {
  const address = await prisma.addresses.findFirst({
    where: { userId: id }
  })

  return address
}
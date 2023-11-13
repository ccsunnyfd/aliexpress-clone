
import prisma from '@/prisma/db'

type AddressData = {
  userId: string
  name: string
  address: string
  zipcode: string
  city: string
  country: string
}

export default async function addAddress(addressData: AddressData) {
  const res = await prisma.addresses.create({
    data: {
      userId: addressData.userId,
      name: addressData.name,
      address: addressData.address,
      zipcode: addressData.zipcode,
      city: addressData.city,
      country: addressData.country,
    }
  })

  return res
}
import prisma from '@/prisma/db'

type AddressData = {
  userId: string
  name: string
  address: string
  zipcode: string
  city: string
  country: string
}

export default async function updateAddress(id: number, addressData: AddressData) {
  let res: Address | null = null
  try {
    res = await prisma.addresses.update({
      where: { id: id },
      data: {
        name: addressData.name,
        address: addressData.address,
        zipcode: addressData.zipcode,
        city: addressData.city,
        country: addressData.country,
      }
    })
  } catch (e) {
    console.log(e)
  }

  return res
}
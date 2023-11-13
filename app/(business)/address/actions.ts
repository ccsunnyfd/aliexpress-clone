'use server'

import addAddress from '@/app/third-party-requests/prisma/add-address'
import updateAddress from '@/app/third-party-requests/prisma/update-address'
import { revalidatePath } from 'next/cache'
import { ZodError, z } from 'zod'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'


export async function submitAddress(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number().nullable(),
        name: z.string().min(1).max(50),
        address: z.string().min(1).max(80),
        zipcode: z.string().min(1).max(10),
        city: z.string().min(1).max(20),
        country: z.string().min(1).max(20),
    })
    try {
        const hiddenId = formData.get('id')
        const data = schema.parse({
            id: hiddenId && parseInt(hiddenId as string || '', 10) || null,
            userId: formData.get('userId'),
            name: formData.get('name'),
            address: formData.get('address'),
            zipcode: formData.get('zipcode'),
            city: formData.get('city'),
            country: formData.get('country'),
        })

        const supabase = createClient(cookies())
        const { data: userData, error } = await supabase.auth.getUser()

        if (error || !userData?.user) {
            return { message: 'Cannot get user session info' }
        }

        if (!data.id) {
            // Create New Address
            await addAddress({
                userId: userData.user.id,
                name: data.name,
                address: data.address,
                zipcode: data.zipcode,
                city: data.city,
                country: data.country
            })
        } else {
            // Update Address
            await updateAddress(data.id, {
                userId: userData.user.id,
                name: data.name,
                address: data.address,
                zipcode: data.zipcode,
                city: data.city,
                country: data.country
            })
        }
        revalidatePath('/address')
        return { message: 'Updated address successfully' }
    } catch (e: unknown) {
        if (e instanceof ZodError) {
            return { message: `Validation errors:${e.errors[0].path}-${e.errors[0].message}` }
        } else {
            return { message: 'Unexpected error' }
        }
    }

}

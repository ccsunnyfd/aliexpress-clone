import Link from 'next/link'
import Image from 'next/image'
import { TbTruckDelivery } from 'react-icons/tb'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import getOrdersByUserId from '@/app/third-party-requests/prisma/get-orders-by-user-id'

const page = async () => {
  const supabase = createClient(cookies())
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return <>cannot get session info!</>
  }

  const orders = await getOrdersByUserId(data.user.id)

  return (
    <div
      id="OrdersPage"
      className="mx-auto mt-4 min-h-[50vh] max-w-[1200px] px-2"
    >
      <div className="min-h-[150px] w-full bg-white p-6">
        <div className="flex items-center text-xl">
          <TbTruckDelivery className="text-[35px] text-[#5FCB04]" />
          <span className="pl-4">Orders</span>
        </div>
        {orders ? (
          orders.map((order) => (
            <div key={order.id} className="pl-[50px] text-sm">
              <div className="border-b py-1">
                <p>Stripe ID: {order.stripeId}</p>

                <div className="pt-2"></div>

                {order.orderItem?.map((item) => (
                  <div key={item.productId}>
                    <Link
                      className="flex items-center gap-3 p-1 hover:text-blue-500 hover:underline"
                      href="`/item/${item.productId}`"
                    >
                      <div className="relative h-[40px] w-[40px]">
                        <Image
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          referrerPolicy="no-referrer"
                          src={item.product.url}
                          alt="product image"
                        />
                      </div>

                      {item.product.title}
                    </Link>
                  </div>
                ))}

                <div className="pb-5 pt-2">
                  Delivery Address: {order.name}, {order.address},{' '}
                  {order.zipcode}, {order.city}, {order.country}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
            You have no order history
          </div>
        )}
      </div>
    </div>
  )
}

export default page

import { CiCircleCheck } from 'react-icons/ci'

const page = () => {
  return (
    <div
      id="SuccessPage"
      className="mx-auto mt-4 min-h-[50vh] max-w-[1200px] px-2"
    >
      <div className="min-h-[150px] w-full bg-white p-6">
        <div className="flex items-center text-xl">
          <CiCircleCheck className="#5FCB04 text-[35px]" />
          <span className="pl-4">Payment Successful</span>
        </div>
        <p className="pl-[50px] text-sm">
          Thank you! We&apos;ve received your payment.
        </p>
      </div>
    </div>
  )
}

export default page

import { VscError } from 'react-icons/vsc'

const page = ({ searchParams }: { searchParams: { error: string } }) => {
  return (
    <div
      id="FailurePage"
      className="mx-auto mt-4 min-h-[50vh] max-w-[1200px] px-2"
    >
      <div className="min-h-[150px] w-full bg-white p-6">
        <div className="flex items-center text-xl">
          <VscError className="text-[35px] text-[#cb3904]" />
          <span className="pl-4">{searchParams.error} Failure</span>
        </div>
        <p className="pl-[50px] text-sm">
          Sorry! We&apos;ve encountered some error with your{' '}
          {searchParams.error}.
        </p>
      </div>
    </div>
  )
}

export default page

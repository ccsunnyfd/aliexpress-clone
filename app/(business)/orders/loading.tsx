import { AiOutlineLoading } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-200">
      <AiOutlineLoading className="animate-spin text-6xl text-red-400" />
    </div>
  )
}

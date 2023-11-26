'use client'

import Link from 'next/link'
import Image from 'next/image'
import { type Provider } from '@supabase/supabase-js'
import { useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'

const Page = ({
  searchParams,
}: {
  searchParams: { error: string; next: string }
}) => {
  const login = useCallback(
    async (provider: Provider) => {
      const supabase = createClient()
      const { protocol, host } = window.location

      await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${protocol}//${host}/auth/callback?next=${searchParams.next}`,
        },
      })
    },
    [searchParams.next]
  )

  return (
    <>
      <div id="AuthPage" className="h-[100vh] w-full bg-white">
        <div className="flex w-full items-center justify-center border-b border-b-gray-300 p-5">
          <Link href="/" className="min-w-[170px]">
            <div className="relative h-[90px] w-[170px]">
              <Image
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                src="/AliExpress-logo.png"
                alt="AliExpress-logo"
              />
            </div>
          </Link>
        </div>

        <div className="mx-auto max-w-[400px] px-2">
          <div className="my-6 text-center">Login / Register</div>

          {searchParams?.error && (
            <p className="mt-4 bg-slate-200 p-4 text-center text-red-500">
              {searchParams.error}
            </p>
          )}

          <button
            onClick={() => login('google')}
            className="
          flex 
          w-full 
          items-center 
          justify-center
          gap-3
          rounded-full 
          border 
          p-1.5
          text-lg
          font-semibold
          hover:bg-gray-100
      "
          >
            <div className="relative h-[30px] w-full max-w-[30px]">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                src="/google-logo.png"
                alt="google-logo"
              />
            </div>
            <div>Google</div>
          </button>

          <button
            onClick={() => login('github')}
            className="
          flex 
          w-full 
          items-center 
          justify-center
          gap-3
          rounded-full 
          border 
          p-1.5
          text-lg
          font-semibold
          hover:bg-gray-100
      "
          >
            <div className="relative h-[30px] w-full max-w-[30px]">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                src="/github-logo.png"
                alt="github-logo"
              />
            </div>
            <div>Github</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Page

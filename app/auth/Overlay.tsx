import { SlClose } from 'react-icons/sl'
import Login from './Login'
import Register from './Register'

const Overlay = () => {
  const isLoginOpen = false
  const isRegister = false

  return (
    <>
      {isLoginOpen ? (
        <div
          id="AuthOverlay"
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative h-[70%] w-full max-w-[470px] rounded-lg bg-white p-4">
            <div className="flex w-full justify-end">
              <button
                // onClick={() => ($generalStore.isLoginOpen = false)}
                className="rounded-full bg-gray-100 p-1.5"
              >
                <SlClose className="text-[26px]" />
              </button>
            </div>

            {isRegister ? <Login /> : <Register />}

            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center border-t py-5">
              <span className="text-[14px] text-gray-600">
                Don’t have an account?
              </span>
              <button
                // onClick={() => (isRegister = !isRegister)}
                className="pl-1 text-[14px] font-semibold text-[#F02C56]"
              >
                <span v-if="isRegister">Sign up</span>
                <span v-else>Log in</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Overlay

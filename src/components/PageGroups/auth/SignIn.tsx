const SignIn = () => {
  return (
    <div className="bg-white min-h-screen ">
      <div className="flex justify-center items-center pt-5">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/581fca3a.png"
          className="w-[160px] h-[34px]"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center py-16">
        <div className="mt-3 w-[400px] shadow-lg">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">Login Sekarang</span>
              <span className="text-gray-500 text-sm">
                Sudah punya akun Tokopedia? <strong className="text-success">Masuk</strong>
              </span>
            </div>
            <div>
              <div className="relative mt-5">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-normal leading-6">
                  <span className="bg-white px-6 text-gray-500">atau daftar dengan</span>
                </div>
              </div>
            </div>

            <form className="space-y-2" action="#" method="POST">
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium leading-5 text-gray-600">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Masukan Email"
                    required
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium leading-5 text-gray-600">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    placeholder="Masukan Password"
                    required
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="flex mt-10 w-full justify-center rounded-md bg-success px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm ">
                  Daftar
                </button>
              </div>
              <div className="text-center text-xs text-gray-300">
                Dengan mendaftar, saya menyetujui <br />
                <strong className="text-success">Syarat dan Ketentuan</strong> serta Kebijakan{' '}
                <strong className="text-success">Privasi</strong>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative bottom-2 text-gray-500 text-center text-sm">
        © 2009-2023, PT Tokopedia <strong className="text-success">Tokopedia Wildan</strong>
      </div>
    </div>
  );
};

export default SignIn;

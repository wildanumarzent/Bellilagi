import Textfield from '@/components/atoms/input/Textfield';
import Button from '@/components/atoms/button/button';
import useAuth from '@/store/auth';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const SignIn = () => {
  const { Login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      setTimeout(async () => {
        await Login(values);
        formik.setSubmitting(false);
        formik.resetForm();
      }, 2000);
    },
  });
  return (
    <div className="relative bg-white min-h-screen ">
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
                Belum punya akun Tokopedia? <strong className="text-success">Daftar</strong>
              </span>
            </div>
            <div>
              <div className="relative mt-5">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-normal leading-6">
                  <span className="bg-white px-6 text-gray-500">Login dengan</span>
                </div>
              </div>
            </div>

            <form className="space-y-2" onSubmit={formik.handleSubmit}>
              <Textfield
                value={formik.values.email}
                onChange={formik.handleChange}
                error={!!formik.touched.email && !!formik.errors.email}
                errorText={formik.errors.email}
                type="text"
                label="Email"
                name="email"
                placeholder="Masukan Email"
              />
              <Textfield
                value={formik.values.password}
                onChange={formik.handleChange}
                error={!!formik.touched.password && !!formik.errors.password}
                errorText={formik.errors.password}
                type="password"
                label="Password"
                name="password"
                placeholder="Masukan Password"
              />
              <div>
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  color="success"
                  className="flex mt-10 w-full justify-center rounded-md px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm">
                  Login
                </Button>
              </div>
              <div className="text-center text-xs text-gray-300">
                Butuh bantuan?
                <strong className="text-success">Hubungi Tokopedia Care</strong>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-center text-sm">
        © 2009-2023, PT Tokopedia <strong className="text-success">Tokopedia Care</strong>
      </div>
    </div>
  );
};

export default SignIn;

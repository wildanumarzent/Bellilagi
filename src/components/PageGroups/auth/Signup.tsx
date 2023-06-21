import Textfield from '@/components/atoms/input/Textfield';
import Button from '@/components/atoms/button/button';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

interface SignUpFormInterface {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values: SignUpFormInterface) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        formik.setSubmitting(false);
        formik.resetForm();
        console.log(values);
      }, 2000);
    },
  });
  console.log(formik);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center items-center pt-5">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/581fca3a.png"
          className="w-[160px] h-[34px]"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center py-16 gap-40">
        <div className="w-[360px] h-[330px]">
          <img src="https://ecs7.tokopedia.net/img/content/register_new.png" alt="" />
        </div>
        <div className="mt-3 w-[400px] shadow-lg">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">Daftar Sekarang</span>
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

            <form className="space-y-2" onSubmit={formik.handleSubmit} method="POST">
              <Textfield
                value={formik.values.name}
                onChange={formik.handleChange}
                error={!!formik.touched.name && !!formik.errors.name}
                errorText={formik.errors.name}
                type="text"
                label="Name"
                name="name"
                placeholder="Masukan Email"
              />
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
                  color="success"
                  className="flex mt-10 w-full justify-center rounded-md px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm">
                  Register
                </Button>
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
        © 2009-2023, PT Tokopedia <strong className="text-success">Tokopedia Care</strong>
      </div>
    </div>
  );
};

export default Signup;

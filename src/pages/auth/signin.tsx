import SignIn from '@/components/PageGroups/auth/SignIn';
import { getLayout } from '@/layouts';

const Signinpage = () => {
  return <SignIn />;
};

Signinpage.getLayout = getLayout;

export default Signinpage;

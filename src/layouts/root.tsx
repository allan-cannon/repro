import { useNavigate } from 'react-router-dom';
import {
  ClerkProvider,
  OrganizationList,
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <div style={{ height: '100px' }}>
        <OrganizationSwitcher hidePersonal />
        <UserButton />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <OrganizationList hidePersonal />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}

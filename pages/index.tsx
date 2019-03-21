import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const res = await mutate({
                variables: { email: 'test4@mail.com', password: 'hihihi' },
              });
              console.log(res);
            }}
          >
            Login
          </button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;

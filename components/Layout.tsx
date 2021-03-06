import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { MeComponent } from '../generated/apolloComponents';

interface IProps {
  title?: string;
}

const Layout: React.FC<IProps> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <MeComponent>
          {({ data, loading }) => {
            if (loading) {
              return null;
            }
            if (!data || !data.me) {
              return (
                <>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>{' '}
                  |{' '}
                  <Link href="/register">
                    <a>Register</a>
                  </Link>{' '}
                  |{' '}
                </>
              );
            }
            return (
              <>
                <Link href="/logout">
                  <a>Logout</a>
                </Link>{' '}
                |{' '}
              </>
            );
          }}
        </MeComponent>
      </nav>
      <hr />
    </header>
    <main>{children}</main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;

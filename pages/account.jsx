import React from 'react';
import Layout from '../components/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import { withRouter } from 'next/router';
import Image from 'next/image';
const css = { maxWidth: '100%', height: 'auto' };
function Account({ router }) {
  const { data: session } = useSession({ required: true });
  console.log(router.pathname);
  return (
    <Layout title={session ? session.user.name : 'Account Page'}>
      {session ? (
        <>
          <h1 className="text-center text-3xl">
            Welcome, {session.user.name} !
          </h1>
          {/* <p className="text-center text-amber-400">Carousel WIP</p> */}
          <section className="m-2">
            <h2 className="my-2">Pause on hover</h2>

            <div className="marquee marquee--hover-pause">
              <ul className="marquee__content">
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\391Monferno.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\458Mantyke.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\495Snivy.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\608Lampent.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\632Durant.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\674Pancham.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\809Melmetal.webp"
                    alt=""
                  />
                </li>
              </ul>

              <ul aria-hidden="true" className="marquee__content">
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\391Monferno.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\458Mantyke.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\495Snivy.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\608Lampent.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\632Durant.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\674Pancham.webp"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    layout="fill"
                    src="C:\Users\13295\Desktop\pkm\public\809Melmetal.webp"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </section>
        </>
      ) : (
        <p>
          <button
            className="col-start-3 bg-cyan-600 w-24 h-12 m-2 hover:bg-cyan-700"
            onClick={() => signIn()}
          >
            Log in
          </button>{' '}
          to see carousel
        </p>
      )}
    </Layout>
  );
}
export default withRouter(Account);

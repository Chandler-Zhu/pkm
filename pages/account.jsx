import React from 'react';
import Layout from '../components/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import { withRouter } from 'next/router';
import Image from 'next/image';
import Monf from '../public/391Monferno.webp';
import Mant from '../public/458Mantyke.webp';
import Sniv from '../public/495Snivy.webp';
import Lamp from '../public/608Lampent.webp';
import Dura from '../public/632Durant.webp';
import Panc from '../public/674Pancham.webp';
import Mel from '../public/809Melmetal.webp';
const css = { maxWidth: '100%', height: 'auto' };
function Account({ router }) {
  const { data: session } = useSession({ required: true });
  console.log(router.pathname);
  return (
    <>
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
                    <Image layout="fill" src={Monf} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Mant} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Sniv} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Lamp} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Dura} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Panc} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Mel} alt="" />
                  </li>
                </ul>

                <ul aria-hidden="true" className="marquee__content">
                  <li>
                    <Image layout="fill" src={Monf} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Mant} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Sniv} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Lamp} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Dura} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Panc} alt="" />
                  </li>
                  <li>
                    <Image layout="fill" src={Mel} alt="" />
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

      <style jsx>{`
        :root {
          --gap: 1rem;
        }
        .marquee__content {
          animation: scroll 10s linear infinite;
        }
        .marquee {
          position: relative;
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: var(--gap);
        }
        .marquee__content {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%;
        }
        .marquee--hover-pause:hover .marquee__content {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
      `}</style>
    </>
  );
}
export default withRouter(Account);

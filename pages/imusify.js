import React from 'react';
import AOS from 'aos';
import GaWrapper from '../components/GaWrapper';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import FeaturedCard from '../components/FeaturedCard';

import ImusifyIllustrations from '../static/images/case-studies/imusify/imusify-illustrations.svg';

class Gamedex extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h4>Responsive Website</h4>
          <h1>Cut the middleman</h1>
          <p className="small">
            imusify wanted a new website to hype about their ICO. Brand
            materials needed a refresh, and after a couple of revisions, we
            agreed on the general aesthetics for the brand.
          </p>
          <figure
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/imusify/imusify-bigscreen.png"
              alt=""
            />
          </figure>

          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            On most blockchain related startups, the solution behind the product
            is usually a little complex for simple peasants, We usually draw
            some sketches to translate those concepts into simple to understand
            illustrations. Concepts as distributed ledger, or the current stages
            to publish a record, for example, can be easily recognized at a
            glance. We merge the concepts with the brand system to create
            engaging illustrations.
          </p>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <ImusifyIllustrations />
          </figure>
          <h4
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            imusify illustrations
          </h4>
          <figure
            className="smallfigure"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <img
              src="/static/images/case-studies/imusify/imusify-devices.svg"
              alt=""
            />
          </figure>
          <p
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            After just a couple of wireframes, the layout was agreed and we move
            onto designing the UI blocks to create a design system. Components
            can now be shared between their app and the website, allowing to
            display information in real time on the web.
          </p>
          <div
            className="full-width"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <figure className="partyoverhere">
              <img
                src="/static/images/case-studies/imusify/imusify-ipad.png"
                alt=""
              />
            </figure>
          </div>
          <p
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            The waves pattern resemble audio waves, it's a simple concept that
            unifies the brand guidelines on top of which we built their image.
          </p>
          <figure>
            <img
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              src="/static/images/case-studies/imusify/imusify-website.png"
              alt=""
            />
          </figure>
          <h2
            className="small"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Keep browsing
          </h2>
        </div>
        <FeaturedCard
          backgroundimg="/static/images/device1.png"
          foregroundimg="/static/images/device2.png"
          foreMaxWidth="30%"
          paddingTop="12em"
          callToAction="READ MORE"
          link="/gamedex"
          subhead="NEXTjs WEBSITE"
          title="They were cool, we made them mean"
          description="Blockchain revolutionizes collectibles by making counterfeits impossible, transfers instant and limited edition cards provably rare. The next generation of fantasy creatures, digital pets, and sports cards is coming soon."
        />
        <Contact />
        <style jsx>{`
          .wrapper {
            max-width: 900px;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 5em auto;
          }
          h1 {
            margin-top: 0.2em;
            margin-bottom: 0;
          }
          h2.small {
            margin-top: 2em;
          }

          p {
            margin: 0;
            margin-bottom: 7em;
            margin-top: 7em;
          }

          p.small {
            margin: 0;
            margin-bottom: 5em;
            margin-top: 2em;
          }

          h4 {
            margin-bottom: 0;
          }

          h4.small {
            margin-bottom: 8em;
          }
          img {
            max-width: 100%;
            margin: 0 auto;
          }
          figure {
            margin: 0;
          }
          figure.smallfigure {
            margin-bottom: 4em;
          }

          .partyoverhere {
            width: 80%;
            transform: translateY(-10%);
            margin: 0 auto;
          }

          .full-width {
            margin: 1.5em 0;
            background-color: #ea3f4f;
            max-height: 500px;
          }

          @media (min-width: 900px) {
            .full-width {
              margin: 3.5em 0;
              margin-left: calc(((100vw - 920px) / 2) * -1);
              margin-right: calc(((100vw - 920px) / 2) * -1);
            }
            .partyoverhere {
              width: 60%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default GaWrapper(Gamedex);

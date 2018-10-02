import React from 'react';
import FeaturedImage from '../components/FeaturedImage';
import FeaturedDescription from '../components/FeaturedDescription';
import Link from 'next/link';

const FeaturedCard = props => (
  <div
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="200"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    className={
      props.inverted ? 'featured__wrapper inverted' : 'featured__wrapper'
    }
  >
    <div className="image">
      <FeaturedImage
        linkTo="#"
        backgroundimg={props.backgroundimg}
        foregroundimg={props.foregroundimg}
        foreMaxWidth={props.foreMaxWidth}
        backMaxWidth={props.backMaxWidth}
        alt={props.alt}
      />
    </div>
    <div className="description">
      <FeaturedDescription
        subhead={props.subhead}
        title={props.title}
        description={props.description}
      />
      <Link href={props.link}>
        <a className="button">
          {props.callToAction}{' '}
          <svg width="20" height="16" version="1">
            <path
              fill="#FFF"
              fillRule="nonzero"
              stroke="#000"
              d="M16 7l-5-5 1-1 8 7-8 7-1-1 5-5H1V7h15z"
            />
          </svg>
        </a>
      </Link>
    </div>
    <style jsx>{`
      section {
        margin-bottom: 4.38em;
      }

      .featured__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 'image' 'description';
        align-items: center;
        grid-column-gap: 8em;
        width: 100%;
        margin-bottom: 4em;
      }

      .image {
        grid-area: image;
      }

      .description {
        grid-area: description;
      }

      @media (min-width: 600px) {
        .featured__wrapper {
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 'image description';
          margin-bottom: 4rem;
        }

        .featured__wrapper:first-of-type {
          padding-top: ${props.paddingTop ? props.paddingTop : 0};
        }
        .featured__wrapper.inverted {
          grid-template-areas: 'description image';
        }

        .button {
          width: auto;
        }
      }
    `}</style>
  </div>
);

export default FeaturedCard;
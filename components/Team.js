import React from "react";
import Link from "next/link";

const TeamMember = props => (
  <div
    className="wrapper"
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay={`${props.order}00`}
    data-aos-duration="1000"
    data-aos-easing="ease-out-quad"
    data-aos-once="true"
  >
    <figure>
      <img
        src={`/static/images/people/${props.thumbnail}`}
        alt={`${props.name} profile picture`}
      />
      <div className="social-overlay">
        <ul>
          <li>
            <a href={props.instagram}>
              <svg width="29" height="29">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M19.333333 14.5c0-1.3342-.472005-2.47331-1.416015-3.41732-.944011-.94401-2.083116-1.41601-3.417318-1.41601-1.3342 0-2.473307.472-3.417318 1.41601-.94401.94401-1.416015 2.08312-1.416015 3.41732s.472005 2.47331 1.416015 3.41732c.944011.94401 2.083118 1.41601 3.417318 1.41601 1.334202 0 2.473307-.472 3.417318-1.41601.94401-.94401 1.416015-2.08312 1.416015-3.41732zm2.605469 0c0 2.06424-.723735 3.8201-2.171224 5.26758C18.320089 21.21506 16.56423 21.9388 14.5 21.9388c-2.064235 0-3.820095-.72374-5.267578-2.17122C7.78494 18.3201 7.061198 16.56424 7.061198 14.5c0-2.06423.723742-3.82009 2.171224-5.26758C10.679905 7.78493 12.435765 7.0612 14.5 7.0612c2.06423 0 3.820089.72373 5.267578 2.17122 1.447489 1.44749 2.171224 3.20335 2.171224 5.26758zm2.039063-7.74089c0 .4783-.169922.88737-.509766 1.22722-.339844.33984-.748921.50976-1.227214.50976-.478292 0-.887369-.16992-1.227213-.50976-.339844-.33985-.509766-.74892-.509766-1.22722 0-.47829.169922-.88737.509766-1.22721.339844-.33984.748921-.50976 1.227213-.50976.478293 0 .88737.16992 1.227214.50976.339844.33984.509766.74892.509766 1.22721zM14.5 2.60547c-.088106 0-.569552-.00315-1.444336-.00944-.874782-.00629-1.538737-.00629-1.991862 0s-1.060437.02517-1.82194.05664c-.761501.03147-1.409721.0944-1.944661.1888-.534939.0944-.984919.21084-1.349935.34929-.62934.25173-1.183161.61675-1.661459 1.09505-.478298.47829-.843316 1.03212-1.095052 1.66146-.138454.36501-.254883.815-.349284 1.34993-.094401.53493-.157334 1.18317-.188802 1.94466-.031467.7615-.050348 1.36882-.05664 1.82194-.006293.45313-.006293 1.11709 0 1.99186.006292.87479.00944 1.35623.00944 1.44434 0 .08811-.003148.56955-.00944 1.44434-.006293.87478-.006293 1.53873 0 1.99186.006292.45312.025173 1.06044.05664 1.82194.031468.7615.094401 1.40972.188802 1.94466s.21083.98492.349284 1.34993c.251736.62935.616754 1.18316 1.095052 1.66146.478298.4783 1.032119.84332 1.661459 1.09505.365016.13846.814996.25489 1.349935.34929.53494.0944 1.18316.15733 1.944661.1888.761503.03147 1.368815.05035 1.82194.05664.453125.0063 1.11708.0063 1.991862 0 .874784-.00629 1.35623-.00944 1.444336-.00944.088108 0 .569554.00315 1.444336.00944.874777.0063 1.538737.0063 1.991862 0 .453125-.00629 1.060445-.02517 1.82194-.05664.761495-.03147 1.409729-.0944 1.944661-.1888.534933-.0944.984924-.21083 1.349935-.34929.629334-.25173 1.183166-.61675 1.661459-1.09505.478292-.4783.843322-1.03211 1.095052-1.66146.138448-.36501.254883-.81499.349284-1.34993.094401-.53494.157328-1.18316.188802-1.94466.031473-.7615.050353-1.36882.05664-1.82194.006287-.45313.006287-1.11708 0-1.99186-.006287-.87479-.00944-1.35623-.00944-1.44434 0-.08811.003153-.56955.00944-1.44434.006287-.87477.006287-1.53873 0-1.99186-.006287-.45312-.025167-1.06044-.05664-1.82194-.031474-.76149-.094401-1.40973-.188802-1.94466-.094401-.53493-.210836-.98492-.349284-1.34993-.25173-.62934-.61676-1.18317-1.095052-1.66146-.478293-.4783-1.032125-.84332-1.661459-1.09505-.365011-.13845-.815002-.25489-1.349935-.34929-.534932-.0944-1.183166-.15733-1.944661-.1888s-1.368815-.05035-1.82194-.05664c-.453125-.00629-1.117085-.00629-1.991862 0-.874782.00629-1.356228.00944-1.444336.00944zM29 14.5c0 2.88238-.031473 4.87739-.094401 5.98503-.125874 2.61805-.90625 4.64453-2.341146 6.07942-1.434896 1.4349-3.461365 2.21528-6.079427 2.34115C19.377381 28.96853 17.382385 29 14.5 29c-2.882377 0-4.877387-.03147-5.985026-.0944-2.618056-.12587-4.644531-.90625-6.079427-2.34115C1.000651 25.12956.22027 23.10308.094401 20.48503.031468 19.37739 0 17.38238 0 14.5s.031468-4.87738.094401-5.98503c.125869-2.61806.90625-4.64453 2.341146-6.07942C3.870443 1.00065 5.896918.22028 8.514974.0944 9.622613.03147 11.617623 0 14.5 0c2.882385 0 4.877381.03147 5.985026.0944 2.618062.12588 4.644531.90625 6.079427 2.34115 1.434896 1.43489 2.215272 3.46136 2.341146 6.07942C28.968527 9.62262 29 11.61762 29 14.5z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={props.linkedin}>
              <svg width="29" height="28">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M6.589193 9.09809V28H.358724V9.09809h6.230469zm.396484-5.83651c.012588.92825-.305231 1.7039-.95345 2.32698-.64822.62307-1.500977.9346-2.558269.9346h-.03776c-1.032119 0-1.862848-.31153-2.492188-.9346C.314671 4.96548 0 4.18983 0 3.26158 0 2.32062.324111 1.54177.972331.92507 1.620551.30836 2.467015 0 3.511719 0c1.044704 0 1.881728.30836 2.511067.92507.62934.6167.950304 1.39555.962891 2.33651zM29 17.16621V28h-6.211589V17.89101c0-1.33515-.254882-2.38102-.764648-3.1376-.509766-.75659-1.305887-1.13488-2.388346-1.13488-.792969 0-1.456929.21934-1.991862.65804-.534933.43869-.934571.98229-1.198894 1.63079-.138454.38147-.207682.89645-.207682 1.54496V28h-6.211588c.025174-5.07357.03776-9.1871.03776-12.3406 0-3.1535-.006293-5.03542-.01888-5.64578l-.01888-.91553h6.211588v2.7466h-.03776c.251737-.4069.509765-.76295.774088-1.06812.264323-.30518.619894-.63578 1.066732-.99183.446838-.35605.994364-.63261 1.642578-.8297.648214-.19709 1.368815-.29564 2.161784-.29564 2.152344 0 3.883036.72161 5.192057 2.16485C28.34548 12.26749 29 14.38147 29 17.16621z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={props.twitter}>
              <svg width="29" height="23">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M29 2.73125c-.821918 1.17395-1.815573 2.17422-2.980964 3.00078.012273.1677.018401.41927.018401.75469 0 1.5573-.233086 3.11159-.699239 4.66289-.466153 1.5513-1.174592 3.03971-2.125317 4.46523-.950726 1.42553-2.082388 2.68633-3.394988 3.78243-1.312599 1.09609-2.895087 1.97057-4.747462 2.62343-1.852367.65287-3.833544.9793-5.943527.9793C5.802453 23 2.760152 22.13151 0 20.39453c.429356.04792.907783.07188 1.435279.07188 2.760152 0 5.219755-.82657 7.378807-2.47969-1.288071-.02396-2.441202-.41029-3.459391-1.15899-1.018188-.74869-1.717427-1.70403-2.097715-2.86601.404822.0599.778975.08984 1.122462.08984.527496 0 1.048857-.06588 1.564086-.19765-1.373943-.27552-2.511739-.94336-3.413388-2.00352-.90165-1.06016-1.352475-2.29102-1.352475-3.69258v-.07187c.834179.4552 1.729695.70078 2.686548.73672-.809644-.52708-1.45368-1.2159-1.932106-2.06641-.478427-.85051-.71764-1.77292-.71764-2.76719 0-1.05417.269882-2.03047.809645-2.9289 1.484349 1.78489 3.290714 3.2134 5.419099 4.28554 2.128384 1.07214 4.407043 1.6681 6.835977 1.78789-.098138-.4552-.147208-.89843-.147208-1.32968 0-1.60521.579632-2.97383 1.738896-4.10586C17.03014.56602 18.43169 0 20.075508 0c1.717422 0 3.164974.61094 4.342639 1.83281 1.337147-.25156 2.594543-.71875 3.772208-1.40156-.453898 1.37761-1.324873 2.44375-2.612944 3.19844 1.140863-.1198 2.281726-.41927 3.422589-.89844z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </figure>

    <h3>{props.name}</h3>
    <h4>{props.position}</h4>
    <p>{props.description}</p>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
      }
      figure {
        position: relative;
        margin: 0;
        margin-bottom: 0.8em;
      }
      img {
        width: 100%;
        opacity: 1;
        transition: transform 200ms ease-in;
        border: 1px solid var(--color-secondary);
      }
      h4 {
        margin: 0;
        margin-bottom: 0.8em;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      ul li {
        display: inline-block;
        padding: 0 1em;
      }
      ul li:first-of-type {
        padding-left: 0;
      }
      .social-overlay {
        opacity: 1;
        transition: opacity 200ms ease;
        position: relative;
        display: flex;
        justify-content: left;
        align-items: center;
      }
      @media (min-width: 800px) {
        figure:hover .social-overlay {
          opacity: 1;
        }
        ul li:first-of-type {
          padding-left: 1em;
        }
        .social-overlay {
          opacity: 0;
          transition: opacity 200ms ease;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.6);
        }
        svg {
          opacity: 0.7;
          transition: opacity 200ms ease;
        }
        a:hover svg {
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

const JoinUs = props => (
  <React.Fragment>
    <Link href="/contact">
      <a
        className="wrapper"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay={`${props.order}00`}
        data-aos-duration="1000"
        data-aos-easing="ease-out-quad"
        data-aos-once="true"
      >
        <figure>
          <img
            src={`/static/images/people/${props.thumbnail}`}
            alt={`${props.name} profile picture`}
          />
        </figure>
      </a>
    </Link>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
      }
      figure {
        position: relative;
        margin: 0;
        margin-bottom: 0.8em;
      }
      img {
        width: 100%;
        opacity: 1;
        transition: transform 200ms ease-in;
      }
      h4 {
        margin: 0;
        margin-bottom: 0.8em;
      }
    `}</style>
  </React.Fragment>
);

const Team = () => (
  <section>
    <TeamMember
      order={0}
      thumbnail="Jose.jpg"
      name="Jose Rago"
      instagram="http://instagram.com/ragojose"
      linkedin="www.linkedin.com/in/jose-francisco-rago"
      twitter="http://twitter.com/ragojose"
      position="Co-Founder & Product Designer"
      description="As a passionate designer and pixel-perfect enthusiast, I'm always focused on solving user experience problems and improving design processes for clients and internal teams. I'm constantly with my finger on the pulse of the latest technology to create innovative products"
    />
    <TeamMember
      order={5}
      thumbnail="Fran.jpg"
      name="Franco Arza"
      instagram="https://www.instagram.com/francoarz/"
      linkedin="https://www.linkedin.com/in/francoarza/"
      twitter="http://twitter.com/arzafran"
      position="Co-Founder & Fullstack Developer"
      description="Former philosophy student, Full time programmer for five years (and counting) and web leader at basement.studio. Likes to gaze into the abyss, and into the horizon, because that's a cool thing to do on a profile picture. Always trying new stuff someone mentioned on reddit"
    />
    <JoinUs order={10} thumbnail="join-us.svg" />
    <style jsx>{`
      section {
        margin-bottom: 0;
      }
      @media (min-width: 800px) {
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 60px;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </section>
);

export default Team;

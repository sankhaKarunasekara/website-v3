import React from 'react';

import { css, cx } from 'emotion';
import styled from 'react-emotion';
import { rem } from 'polished';
import Lottie from 'react-lottie';
import { mqMin, mqMax } from '../../styles/breackpoint';
import Wrapper from '../layout/Wrapper';
import Title from '../atoms/Title';
import DownloadApp from '../organims/DownloadApp';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import blueGradient from '../../images/hero-home-gradient.png';
import blueGradientS from '../../images/hero-home-gradient-s.png';
import blueGradientM from '../../images/hero-home-gradient-m.png';
import heroHomeImg from '../../images/hero-home-illustration.svg';
import video from '../../images/station-video-LP.mp4';

const Background = styled('div')`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${blueGradientS}) right bottom no-repeat;
  background-size: 100%;
  ${[mqMin[1]]} {
    background-image: url(${blueGradientM});
    background-size: 80%;
  }
  ${[mqMin[2]]} {
    background-image: url(${blueGradient});
    background-size: 70%;
  }
  ${[mqMin[3]]} {
    background-size: 60%;
  }
  ${[mqMin[4]]} {
    background-size: 50%;
  }
`;

const Illustration = styled('div')`
  position: relative;
  > div {
    position: absolute;
    top: 0;
    width: 100% !important;
    height: auto !important;
  }
  video {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 28%;
    top: 1.5vw;
    ${[mqMin[2]]} {
      width: 35%;
      top: 12px;
    }
  }
`;

const HeroHome = ({ title, content, download, legend, className, ...rest }) => {
  return (
    <div
      className={cx(
        css({
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: 'linear-gradient(to top, #f5f7ff, #ffffff)',
        }),
        className,
      )}
      {...rest}
    >
      <Wrapper
        className={css({
          zIndex: 1,
          position: 'relative',
          padding: `${rem(160 + 88)} 0 ${rem(160)}`,
          [[mqMax[2]]]: {
            padding: `${rem(188)} 0`,
          },
          [[mqMin[2]]]: {
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
          },
        })}
      >
        <div
          className={css({
            [[mqMin[2]]]: {
              width: '40%',
              flexShrink: 0,
            },
            [[mqMax[2]]]: {
              padding: `0 ${rem(20)}`,
              textAlign: 'center',
            },
          })}
        >
          {title && (
            <Title
              element="h2"
              className={css({
                fontSize: font.XXL,
                '&:not(:last-child)': {
                  marginBottom: rem(20),
                },
                [[mqMin[2]]]: {
                  fontSize: font.XXXL,
                },
              })}
            >
              {title}
            </Title>
          )}
          {content && (
            <p
              className={css({
                '&:not(:last-child)': {
                  lineHeight: font.lineHeightXL,
                  marginBottom: rem(40),
                  maxWidth: rem(440),
                  [[mqMin[2]]]: {
                    maxWidth: rem(440),
                    fontSize: font.M,
                  },
                  [[mqMax[2]]]: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                },
              })}
            >
              {content}
            </p>
          )}
          <DownloadApp
            data={download}
            className={css({ [[mqMin[2]]]: { display: 'inline-block' } })}
          />
        </div>
        <Illustration>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: require('../../animations/coffee.json'),
            }}
            height={357}
            width={920}
          />
          <video autoPlay="autoplay" loop="loop">
            <source src={video} type="video/mp4" />
          </video>
          <img
            src={heroHomeImg}
            alt=""
            className={css({
              [[mqMax[2]]]: {
                maxWidth: '80%',
                display: 'block',
                margin: `${rem(40)} auto 0`,
              },
            })}
            width="794px"
            height="357"
          />
          {legend && (
            <p
              className={css({
                textAlign: 'center',
                color: color.light,
                fontWeight: font.weightBold,
                opacity: 0.6,
                marginTop: rem(20),
                [[mqMin[2]]]: {
                  fontSize: font.M,
                },
              })}
            >
              {legend}
            </p>
          )}
        </Illustration>
      </Wrapper>
      <Background />
    </div>
  );
};

export default HeroHome;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { useSettings } from '../../context/ConfigurationContext';
import { URL } from '../../utils/config';

const Wrapper = styled.div`
  .Video {
    width: 100%;
    height: 100vh;
  }

  img {
    display: block;
    margin-bottom: 20px;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 600;
    font-size: 42px;
    white-space: nowrap;
  }
`;

export default function Infos() {
    const { config } = useSettings();

    const videoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            height:   570,
            width:    1024,
            rel:      0,
            showinfo: 0,
            mute:     1,
            loop:     1,
        },
    };
    return (
    // TODO: Rendre toute cette partie dynamique
        <section
            className="pt-[46px] pb-[52px] lg:pt-[135px] lg:pb-[93px] bg-cover bg-bottom"
            style={{ backgroundImage: `url(${URL + config.youtube_image})` }}
        >
            <div
                className="flex flex-wrap lg:flex-nowrap justify-center items-center mx-auto max-w-[1200px] w-[calc(100%-30px)] relative"
            >
                <div className="text-zinc-900 mr-0 lg:mr-[-200px] relative z-10">
                    <h1 className="text-6xl font-heading_bold leading-[1.20] uppercase text-[#E97665] -mt-24">
                        {config.title_discover}
                    </h1>
                    {/* <hr className="relative -left-10 w-[calc(100% + 130px)] mb-2 w-96 border-black" /> */}
                    <p className="discoverText font-bold pt-4">
                        {config.content_discover}
                    </p>
                </div>
                <div className="discoverWrapper z-0">
                    <div className="discoverImageWrapper">
                        <div className="discoverImageContain">
                            <Wrapper>
                                <YouTube
                                    videoId={config.youtube_discover}
                                    opts={videoOptions}
                                />
                            </Wrapper>
                        </div>
                    </div>
                    {' '}
                    <Slide direction="right" triggerOnce>
                        <div className="discoverWrapButton">
                            <a href="https://www.youtube.com/@ParisMangaSciFiShow" target="_blank" className="wrapButton bg-white hover:bg-blue-400  text-[#E97665]  hover:text-white " rel="noreferrer">
                                <span className="font-bold uppercase">Découvrir</span>
                                {' '}
                            </a>
                        </div>
                    </Slide>
                </div>
            </div>

        </section>
    );
}

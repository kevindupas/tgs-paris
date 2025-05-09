/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import { SALON_ID, URL } from "../utils/config";

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

export default function ArticlesDetails() {
  const { postId } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [details, setDetails] = useState([]);
  const [detailCategory, setDetailCategory] = useState([]);
  const [detailAvailability, setDetailAvailability] = useState([]);
  const [detailTag, setDetailTag] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(`${URL}/api/post/${postId}`, options)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setDetails(data.data);
          setDetailCategory(data.data.category);
          setDetailAvailability(data.data.availability);
          setDetailTag(data.data.tag);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      height: 570,
      width: 1024,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 0,
    },
  };

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <Loader />;
  }

  if (details) {
    return (
      <div className="bg-[#f3f3f3]">
        <section className="overflow-hidden pb-0 lg:pb-6">
          <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
            <div className="relative mt-[76px]">
              <div className="ml-[-20px] lg:ml-auto w-[calc(100%+40px)] lg:w-[75%] mr-[-118px] overflow-hidden">
                <div className="relative overflow-hidden pb-[56%]">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={
                      details.image_details !== null
                        ? URL + details.image_details
                        : "/dist/images/test.png"
                    }
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-12 m-auto flex items-end">
                <h1 className="text-black text-[28px] mb-[-46px] lg:mb-[21px] lg:text-[50px] font-microgramma uppercase bg-white px-4 py-1">
                  {details.name}
                </h1>
              </div>
            </div>
            <div className="my-12 border-2 border-black h-1" />
            <div>
              <div className="flex justify-between lg:justify-start w-full text-[25px] lg:text-[40px] font-tungsten font-semibold tracking-[0.566667px] leading-[.95] uppercase">
                <p className="relative lg:pr-4 lg:mr-3">
                  {detailAvailability.name}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center my-3">
                <ul className="flex list-none m-0 p-0 space-x-4">
                  <li className="border border-white py-3 px-3 lg:py-3 lg:px-7 bg-white text-black mt-5 font-bold uppercase">
                    {detailCategory.name}
                  </li>
                  <li className="border border-white py-3 px-3 lg:py-3 lg:px-7 bg-white text-black mt-5 font-bold uppercase">
                    {detailTag.name}
                  </li>
                </ul>
                <ul className="flex justify-center items-center list-none space-x-6 lg:space-x-10  ml-auto w-full lg:w-auto my-8 lg:my-auto">
                  {details.facebook !== null && (
                    <li>
                      <a
                        href={details.facebook}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500"
                        rel="noreferrer"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <img
                          className="w-7 h-auto"
                          src="../dist/icons/facebook_article.png"
                          alt=""
                        />
                      </a>
                    </li>
                  )}

                  {details.twitter !== null && (
                    <li className="">
                      <a
                        href={details.twitter}
                        target="_blank"
                        className="w-7 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-full h-auto">
                          <img
                            className="w-10 h-auto"
                            src="../dist/icons/twitter_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}

                  {details.youtube !== null && (
                    <li className="">
                      <a
                        href={details.youtube}
                        target="_blank"
                        className="w-8 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-full h-auto">
                          <img
                            className="w-9 h-auto"
                            src="../dist/icons/youtube_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}

                  {details.instagram !== null && (
                    <li className="">
                      <a
                        href={details.instagram}
                        target="_blank"
                        className="w-7 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-full h-auto">
                          <img
                            className="w-7 h-auto"
                            src="../dist/icons/instagram_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}

                  {details.twitch !== null && (
                    <li className="">
                      <a
                        href={details.twitch}
                        target="_blank"
                        className="w-7 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-10 h-auto">
                          <img
                            className="w-7 h-auto"
                            src="../dist/icons/twitch_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}

                  {details.wikipedia !== null && (
                    <li className="">
                      <a
                        href={details.wikipedia}
                        target="_blank"
                        className="w-8 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-8 mt-1 h-auto">
                          <img
                            className="w-8 h-auto"
                            src="../dist/icons/wikipedia_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}

                  {details.website !== null && (
                    <li>
                      <a
                        href={details.website}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Website</span>
                        <img
                          className="w-7 h-auto"
                          src="../dist/icons/web_black.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  )}

                  {details.tiktok !== null && (
                    <li className="">
                      <a
                        href={details.tiktok}
                        target="_blank"
                        className="w-7 block"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-7 h-auto">
                          <img
                            className="w-6 h-auto"
                            src="../dist/icons/tiktok_article.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-2 bg-white">
          <div className="flex-none lg:flex w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] lg:mx-auto">
            {details.plannings.map((planning) =>
              planning.salon_id === SALON_ID ? (
                <div
                  key={planning + SALON_ID}
                  className="w-full lg:w-96 h-full bg-white mt-9 border border-gray-400 shadow-lg rounded-lg"
                >
                  <div className="relative p-6 space-y-6 lg:p-8">
                    <h3 className="text-3xl text-center text-blue-400 uppercase font-bold underline">
                      Infos planning
                    </h3>
                    <div />
                    <ul className="w-max space-y-4 py-6 m-auto text-gray-600">
                      <li className="space-x-2">
                        {/* <span className="text-black font-semibold">{ planning.name}</span> */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: planning.information,
                          }}
                        />
                      </li>
                    </ul>

                    <Link
                      to="/billetterie"
                      className="block w-full py-3 px-6 text-center rounded-xl transition bg-orange-500 hover:bg-[#ec6f15]"
                    >
                      <span className="text-white font-semibold">
                        Acheter vos billets
                      </span>
                    </Link>
                  </div>
                </div>
              ) : null
            )}
            <div className="flex w-full px-5 lg:px-20 pb-[40px] mt-9">
              <div dangerouslySetInnerHTML={{ __html: details.content }} />
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mt-10" />
          </div>
          <div className="flex justify-center items-center w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto my-12">
            <Carousel>
              {details.images.map((data) => {
                if (data.image !== null) {
                  return (
                    <div
                      key={data + postId}
                      className="flex justify-center items-center mb-6 mx-6"
                    >
                      <img
                        className="shadow-xl"
                        src={URL + data.image}
                        alt=""
                      />
                    </div>
                  );
                }

                return null;
              })}
            </Carousel>
          </div>
          <div className="flex justify-center items-center w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto my-12">
            {details.video !== null && (
              <Wrapper>
                <YouTube videoId={details.video} opts={videoOptions} />
              </Wrapper>
            )}
          </div>
          <div className="block my-10">
            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
              <hr className="relative lg:left-0 w-[calc(100% + 130px)]" />
              <div className="my-8">
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500"
                  onClick={() => navigate(-1)}
                >
                  <img
                    className="-ml-1 mr-3 h-5 w-5"
                    src="../dist/images/arrow-left-long-solid.svg"
                    alt=""
                  />
                  Revenir en arrière
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// noinspection JSValidateTypes

import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { URL } from "../../utils/config";

export default function InviteTest({ category, salon }) {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const options = { method: "GET" };
      fetch(`${URL}/api/posts/categories/${category}/salon/${salon}`, options)
        .then((response) => response.json())
        .then((json) => setInvites(json.data))
        .catch((err) => console.error(err));
    }

    fetchData().then((r) => r);
  }, []);

  return (
    // TODO: Modifier les nombres dans l'admin salon
    <section className="relative w-full py-16 bg-[#f3f3f3] z-50">
      <div className="lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto flex justify-start items-start flex-wrap">
        <div className="mx-auto max-w-2xl mb-10">
          <h1 className="mb-2 text-center font-oswald text-[40px] lg:text-[48px] tracking-[0.566667px] leading-[.95] uppercase text-black">
            Invités
          </h1>
          <hr className="relative lg:left-0 w-[calc(100% + 130px)]" />
        </div>
        <div className="w-full lg:w-full h-full flex justify-center items-center relative">
          {invites && invites.some((data) => data.forward?.length !== 0) ? (
            <Carousel>
              {invites.map((data) => {
                if (
                  data.forward === true &&
                  data.published_at !== null &&
                  dayjs.utc(data.published_at).local().isBefore(dayjs())
                ) {
                  return (
                    <Link
                      className="mx-4"
                      key={data.id}
                      to={`/post/${data.id}`}
                    >
                      <div className="news-card">
                        <img
                          src={URL + data.image}
                          alt={data.name}
                          className="news-card__image"
                        />
                        <div className="news-card__text-wrapper w-full">
                          <h2 className="news-card__title">{data.name}</h2>
                          <div className="news-card__post-date">
                            {data.tag.name}
                          </div>
                          <div className="news-card__details-wrapper">
                            <div className="news-card__excerpt">
                              <ul className="flex space-x-4 mt-4">
                                {data.facebook !== null && (
                                  <li>
                                    <a
                                      href={data.facebook}
                                      className="text-gray-400 hover:text-gray-500"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <span className="sr-only">LinkedIn</span>
                                      <img
                                        className="w-5 h-auto"
                                        src="../dist/icons/facebook.svg"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                )}
                                {data.twitter !== null && (
                                  <li className="">
                                    <a
                                      href={data.twitter}
                                      onClick={(e) => e.stopPropagation()}
                                      target="_blank"
                                      className="w-7 block"
                                      rel="noreferrer"
                                    >
                                      <div className="flex items-center w-full h-auto">
                                        <img
                                          className="w-6 h-auto"
                                          src="../dist/icons/twitter.svg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </li>
                                )}

                                {data.youtube !== null && (
                                  <li className="">
                                    <a
                                      href={data.youtube}
                                      onClick={(e) => e.stopPropagation()}
                                      target="_blank"
                                      className="w-8 block"
                                      rel="noreferrer"
                                    >
                                      <div className="flex items-center w-full h-auto">
                                        <img
                                          className="w-7 h-auto"
                                          src="../dist/icons/youtube.svg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </li>
                                )}

                                {data.instagram !== null && (
                                  <li className="">
                                    <a
                                      href={data.instagram}
                                      onClick={(e) => e.stopPropagation()}
                                      target="_blank"
                                      className="w-7 block"
                                      rel="noreferrer"
                                    >
                                      <div className="flex items-center w-full h-auto">
                                        <img
                                          className="w-6 h-auto"
                                          src="../dist/icons/instagram.svg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </li>
                                )}

                                {data.twitch !== null && (
                                  <li className="">
                                    <a
                                      href={data.twitch}
                                      onClick={(e) => e.stopPropagation()}
                                      target="_blank"
                                      className="w-7 block"
                                      rel="noreferrer"
                                    >
                                      <div className="flex items-center w-10 h-auto">
                                        <img
                                          className="w-6 h-auto"
                                          src="../dist/icons/twitch.svg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </li>
                                )}

                                {data.website !== null && (
                                  <li>
                                    <a
                                      href={data.website}
                                      className="text-gray-400 hover:text-gray-500"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <span className="sr-only">LinkedIn</span>
                                      <img
                                        className="w-6 h-auto"
                                        src="../dist/icons/web.svg"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                )}

                                {data.tiktok !== null && (
                                  <li className="">
                                    <a
                                      href={data.tiktok}
                                      target="_blank"
                                      onClick={(e) => e.stopPropagation()}
                                      className="w-7 block"
                                      rel="noreferrer"
                                    >
                                      <div className="flex items-center w-7 h-auto">
                                        <img
                                          className="w-5 h-auto"
                                          src="../dist/icons/tiktok.svg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </li>
                                )}
                              </ul>
                            </div>
                            <Link
                              className="news-card__read-more bg-black hover:bg-blue-500 text-[#E97665] hover:text-black"
                              to={`/post/${data.id}`}
                            >
                              En savoir plus
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }

                return null;
              })}
              <Link className="mx-4" to="invites">
                <div className="news-card">
                  <img
                    src="/dist/images/more.png"
                    alt="invités"
                    className="news-card__image"
                  />
                  <div className="news-card__text-wrapper w-full">
                    <h2 className="news-card__title">Voir plus d'invités</h2>
                  </div>
                </div>
              </Link>
            </Carousel>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center bg-gray-200 p-6 rounded shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <FontAwesomeIcon
                  icon={faFaceSmileWink}
                  className="text-6xl text-yellow-500"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mt-5">
                Nous arrivons avec plein de surprises
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

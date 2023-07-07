/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { URL } from '../utils/config';

dayjs.extend(utc);

export default function Card({ menuPosts }) {
    return (
        <>
            {menuPosts.map((value) => {
                if (value.published_at !== null) {
                    // console.log(value.name);
                    // console.log('Date de publication (UTC) :', dayjs.utc(value.published_at).format());
                    // console.log('Date de publication (Locale) :', dayjs.utc(value.published_at).local().format());
                    // console.log('Date actuelle (UTC) :', dayjs.utc().format());
                    // console.log('Date actuelle (Locale) :', dayjs().format());
                    // console.log('Comparaison :', dayjs.utc(value.published_at).local().isBefore(dayjs()));

                    if (value.published_at !== null && dayjs.utc(value.published_at).local().subtract(2, 'hour').isBefore(dayjs())) {
                        return (

                            <NavLink className="mx-4 z-0" key={value.id} to={`/post/${value.id}`}>
                                <div className="news-card">
                                    <img src={URL + value.image} alt={value.name} className="news-card__image" loading="lazy" />
                                    <div className="news-card__text-wrapper w-full">
                                        <h2 className="news-card__title">{value.name}</h2>
                                        <div className="news-card__post-date">{value.tag.name}</div>
                                        <div className="news-card__details-wrapper z-50">
                                            <div className="news-card__excerpt">
                                                <div className="flex space-x-4 mt-4">
                                                    {
                                                        value.facebook !== null && (
                                                            <a
                                                                href={value.facebook}
                                                                onClick={(e) => e.stopPropagation()}
                                                                target="_blank"
                                                                className="w-7 block z-50"
                                                                rel="noreferrer"
                                                            >
                                                                <div className="flex items-center w-full h-auto z-50">
                                                                    <img className="w-6 h-auto" src="../dist/icons/facebook.svg" alt="" />
                                                                </div>
                                                            </a>
                                                        )
                                                    }

                                                    {
                                                        value.twitter !== null && (

                                                            <a
                                                                href={value.twitter}
                                                                target="_blank"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="w-7 block z-50"
                                                                rel="noreferrer"
                                                            >
                                                                <div className="flex items-center w-full h-auto z-50">
                                                                    <img className="w-6 h-auto" src="../dist/icons/twitter.svg" alt="" />
                                                                </div>
                                                            </a>

                                                        )
                                                    }

                                                    {
                                                        value.youtube !== null && (

                                                            <a
                                                                href={value.youtube}
                                                                target="_blank"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="w-8 block z-50"
                                                                rel="noreferrer"
                                                            >
                                                                <div className="flex items-center w-full h-auto z-50">
                                                                    <img className="w-7 h-auto" src="../dist/icons/youtube.svg" alt="" />
                                                                </div>
                                                            </a>

                                                        )
                                                    }

                                                    {
                                                        value.instagram !== null && (

                                                            <a
                                                                href={value.instagram}
                                                                target="_blank"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="w-7 block"
                                                                rel="noreferrer"
                                                            >
                                                                <div className="flex items-center w-full h-auto">
                                                                    <img className="w-6 h-auto" src="../dist/icons/instagram.svg" alt="" />
                                                                </div>
                                                            </a>

                                                        )
                                                    }

                                                    { value.twitch !== null && (

                                                        <a
                                                            href={value.twitch}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-10 h-auto">
                                                                <img className="w-6 h-auto" src="../dist/icons/twitch.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )}

                                                    { value.wikipedia !== null && (

                                                        <a
                                                            href={value.wikipedia}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-7 mt-1 h-auto">
                                                                <img className="w-7 h-auto" src="../dist/icons/wikipedia.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )}

                                                    { value.website !== null && (

                                                        <a
                                                            href={value.website}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-10 h-auto">
                                                                <img className="w-6 h-auto" src="../dist/icons/web.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )}

                                                    { value.tiktok !== null && (

                                                        <a
                                                            href={value.tiktok}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-7 h-auto">
                                                                <img className="w-5 h-auto" src="../dist/icons/tiktok.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )}
                                                </div>
                                            </div>
                                            <Link className="news-card__read-more bg-black hover:bg-blue-400 text-[#E97665] hover:text-black" to={`/post/${value.id}`}>
                                                En savoir plus
                                                {/* <FontAwesomeIcon icon={faLongArrowAltRight} className="text-white" /> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        );
                    }
                }
                return null;
            })}
        </>

    );
}

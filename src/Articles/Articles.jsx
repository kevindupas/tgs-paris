/* eslint-disable no-shadow */
import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import CategoryImage from "../components/CategoryImage";
import Loader from "../components/Loader";
import { SALON_ID, URL } from "../utils/config";
import useMedia from "../utils/useMedia";
import Card from "./Card";

dayjs.extend(utc);

export default function Articles({ categoryName, categories, namePath }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // Déclarer tous les hooks au début
  const isDesktop = useMedia("(min-width: 900px)");
  const [activeTab, setActiveTab] = useState("Tous");
  const { data, error, isLoading } = useSWR(
    `${URL}/api/posts/categories/${categories}/salon/${SALON_ID}`,
    fetcher
  );

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: namePath?.toString(),
      title: categoryName?.toString(),
    });
  }, [namePath, categoryName]);

  useEffect(() => {
    setActiveTab("Tous");
  }, [categories]);

  // Déplacer la logique des fonctions en dehors des hooks
  const getPostsToDisplay = () => {
    if (!data || !data.data) return [];
    return data.data.filter((currentElem) => {
      if (!currentElem.tag || !currentElem.tag.name) return false;

      return activeTab === "Tous" || currentElem.tag.name === activeTab;
    });
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loader />;
  const tagList = [
    "Tous",
    ...new Set(
      (data?.data || [])
        .filter(
          (currElem) =>
            currElem.tag &&
            currElem.tag.name &&
            currElem.published_at && // Vérifie que l'article a une date de publication
            dayjs.utc(currElem.published_at).local().isBefore(dayjs()) // Et que l'article est publié
        )
        .map((currElem) => currElem.tag.name)
    ),
  ];

  return (
    <>
      <CategoryImage categoryId={categories} categoryName={categoryName} />
      <div className="bg-[#f3f3f3]">
        <section className="pt-[61px] pb-[53px]">
          <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto justify-start items-center flex-wrap flex">
            <h1
              className={clsx(
                "mr-9 w-auto flex-none font-tungsten font-semibold text-[35px] tracking-[0.566667px] leading-[.95] uppercase text-black",
                isDesktop ? "text-[56px]" : "text-[35px]"
              )}
            >
              Filtres :
            </h1>
            <div
              className={clsx(
                isDesktop
                  ? "space-x-3 flex justify-center items-center font-tungstenb_semibold font-medium uppercase overflow-y-hidden"
                  : "mx-auto flex space-x-3 whitespace-nowrap py-3 lg:space-x-24 lg:px-8 overflow-x-scroll"
              )}
            >
              {tagList.map((tag) => (
                <button
                  key={`Tag-${tag}`}
                  type="button"
                  onClick={() => setActiveTab(tag)}
                  className={clsx(
                    "inline-flex items-center px-3 py-2 border hover:bg-blue-400 hover:text-white border-transparent leading-4 font-medium rounded-md shadow-sm",
                    activeTab === tag
                      ? "bg-[#E97665] text-white"
                      : "bg-white text-black"
                  )}
                >
                  <span
                    className={clsx(
                      "relative z-10 font-bold uppercase inline-block",
                      isDesktop ? "text-xl" : "text-sm"
                    )}
                  >
                    {tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-36">
          <div className="max-w-[1200px] m-auto">
            <ul className="grid grid-cols-1 gap-6 mx-3 lg:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {getPostsToDisplay().map((value) => {
                if (value.published_at !== null) {
                  if (
                    value.published_at !== null &&
                    dayjs
                      .utc(value.published_at)
                      .local()
                      // .subtract(1, "hour")
                      .isBefore(dayjs())
                  ) {
                    return <Card value={value} key={`post-${uuidv4()}`} />;
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

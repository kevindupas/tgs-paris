import React from "react";
import Card from "./Card";

export default function JuryCosplay(jury) {
  console.log("Jury data:", jury);

  if (!jury) {
    return null;
  }
  return (
    <div className="p-5 flex flex-col">
      <h2 className="bg-[#2C509E] text-white text-2xl font-semibold w-[150px] text-center p-1 uppercase">
        Le Jury
      </h2>

      <div className="flex md:flex-row flex-col items-center">
        {jury.jury.map((data) => (
          <Card key={data.id} data={data} title={data.title} slug={data.slug} featured_image={data.featured_image} content={data.content} instagram={data.instagram} photographer={data.photographer} photographer_link={data.photographer_link} twitch={data.twitch} twitter={data.twitter} youtube={data.youtube} website={data.website} facebook={data.facebook}/>
        ))}
      </div>
    </div>
  );
}

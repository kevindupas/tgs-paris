import React from "react";
import Card from "./Card";

export default function ParticipantsCosplay(participants) {
  console.log("Participants data:", participants);

  if (!participants) {
    return null;
  }
  return (
    <div className="p-5 bg-[#e7e2d8]">
      <h2 className="bg-[#2C509E] text-white text-2xl font-semibold w-[250px] text-center p-1 uppercase">
        Les Participants
      </h2>

      <div className="flex md:flex-row flex-col items-center">
        {participants !== null &&
          participants.participants.map((data) => (
            <Card key={data.id} info={data} title={data.title} slug={data.slug} featured_image={data.featured_image} content={data.content} instagram={data.instagram} photographer={data.photographer} photographer_link={data.photographer_link} twitch={data.twitch} twitter={data.twitter} youtube={data.youtube} website={data.website} facebook={data.facebook}/>
          ))}
      </div>
    </div>
  );
}

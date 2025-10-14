import React from "react";
import Card from "./Card";

export default function ParticipantsCosplay(participants) {
  console.log("Participants data:", participants);
  return (
    <div className="p-5 bg-[#e7e2d8]">
      <h2 className="bg-[#2C509E] text-white text-2xl font-semibold w-[250px] text-center p-1 uppercase">
        Les Participants
      </h2>
      {participants !== null &&
        participants.participants.map((data) => (
          <Card key={data.id} info={data} />
        ))}
    </div>
  );
}

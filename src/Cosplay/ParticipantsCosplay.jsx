import React from 'react'
import CardCosplayer from './CardCosplayer';

export default function ParticipantsCosplay() {
  return (
    <div className='p-5 bg-[#e7e2d8]'>
        <h2 className="bg-[#2C509E] text-white text-2xl font-semibold w-[250px] text-center p-1 uppercase">Les Participants</h2>
        <CardCosplayer />
    </div>
  );
}

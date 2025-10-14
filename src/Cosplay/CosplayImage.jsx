import React from 'react'
import CosplayMascu from "../../public/dist/images/cosplay-mascu.png";
import Cosplayfeminin from "../../public/dist/images/cosplay-feminin.png";

export default function CosplayImage() {
  return (
    <div className='flex flex-row justify-around relative top-12'>
        <img src={CosplayMascu}
            alt='image cosplay masculin'
            className='sm:w-[400px] w-[170px]'
        />

        <img src={Cosplayfeminin}
            alt='image cosplay masculin'
            className='sm:w-[400px] w-[170px]'
        />
    </div>
  );
}

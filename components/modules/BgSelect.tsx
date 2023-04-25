import React from 'react';
import { ColorPicker } from 'react-color-palette';

import 'react-color-palette/lib/css/styles.css';

export default function GradientSlider() {
  const handleGradientClick = (index:any) => {
    console.log(`Selected Gradient: ${index}`);
  };

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold sm:text-3xl uppercase tracking-widest mb-4">Select Gradient Style</h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 lg:mt-12 lg:grid-cols-4 xl:mt-16 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <>
              <div className='grid grid-col-2 md:grid-col-4 lg:grid-5' >
                  <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png" alt="img" className='rounded-lg' />
              </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

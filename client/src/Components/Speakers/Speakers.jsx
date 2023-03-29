import React from "react";
import Speaker from "./Card-speaker";

const Speakers = () => {
  return (
    <div className="bg-slate-900 text-white px-10 md:px-20 lg:px-40 py-8">
      <div className="flex flex-row justify-center md:justify-between items-center pb-4">
        <div className="text-2xl font-bold text-center">SPEAKERS</div>
        <div className="hidden md:block border-yellow-600 border-2 rounded-sm px-2 py-1 hover:bg-yellow-600 text-yellow-600 hover:text-slate-900">
          VIEW ALL SPEAKERS
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 lg:space-x-12 space-y-8 md:space-y-0 my-8">
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 lg:space-x-12 space-y-8 md:space-y-0 my-8">
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
        <Speaker
          name="Jonathon P. Deo"
          pic="/Images/speaker1.jpeg"
          role="UX Specialist"
          fb="https://developer.mozilla.org/en-US/"
          twitter="https://developer.mozilla.org/en-US/"
          linkedIn="https://developer.mozilla.org/en-US/"
          pinterest="https://developer.mozilla.org/en-US/"
        />
      </div>

      <div className="block md:hidden w-64 mx-auto border-yellow-600 text-center border-2 rounded-sm px-2 py-1 hover:bg-yellow-600 text-yellow-600 hover:text-slate-900">
        VIEW ALL SPEAKERS
      </div>
    </div>
  );
};

export default Speakers;

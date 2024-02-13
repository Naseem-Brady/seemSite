"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you positive?",
      "What if I gave you head?",
      "BRO PLEASE",
      "I'll give you reese pieces? :O",
      "What about a nice portion of twix bars? :)",
      "PLEASE SWEETNESS",
      "damn that's actually crazy :(",
      "Im gonna become unalive :*(",
      "Yuh... just died. Your fault... (X o X)",
      "still no? :(",
      "youre brutal asf >:(",
      ":(((( hatin' ass",
      "BABY PLEASE",
      "that hurted :((((",
      "oh... :'(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl6cW45ajYwNWxlaTVoYmducjV3bGM4aDh6OW5mM2N5MXltaDlneSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i1ifSvtaxp4YSWX4o4/giphy.gif" />
          <div className="my-4 text-4xl font-bold">AHHHHHH I LOVE YOU !!! :DDD ;)) </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWw4bnFucTZwNzZ6NGw4cnVhN2ZwdTV0bXg0bnRycWtrbHU0b3A2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DiplElzCac5f9ERHen/giphy.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

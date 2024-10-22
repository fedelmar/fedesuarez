import React, { FC, Fragment } from "react";

interface SongProps {
  videoUrl: string;
  title: string;
  lyrics: string[][];
}

const Song: FC<SongProps> = ({ videoUrl, title, lyrics }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[85%] h-full p-2 md:p-4 my-6 md:my-12 rounded-lg border border-white border-solid border-0 md:border-2 shadow-lg">
      <div className="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0 order-2 md:order-1">
        <div className="bg-white p-4 rounded-lg shadow-lg h-full overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            {title}
          </h2>
          <div className="text-sm md:text-base text-start">
            {lyrics.map((stanza, stanzaIndex) => (
              <Fragment key={stanzaIndex}>
                {stanza.map((verse, verseIndex) => (
                  <p key={verseIndex} className="mb-2">
                    {verse}
                  </p>
                ))}
                {stanzaIndex < lyrics.length - 1 && <br />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 md:pl-4 order-1 md:order-2 mb-4 md:mb-0">
        <div className="relative w-full h-0 pb-[56.25%] shadow-xl">
          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            title={title}
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Song;

"use client";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const onDevelopment = process.env.NEXT_PUBLIC_ON_DEVELOPMENT;

  return (
    <div className="flex flex-col min-h-screen text-black bg-[#FDE74C] font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-xl">
        <div className="flex items-center justify-start h-16 px-8">
          <p className="text-2xl font-bold text-[#0c1821] shadow-md px-2 py-1 rounded-lg bg-[#FDE74C]">Federico Suarez</p>
        </div>
      </header>

      <main className="flex-grow flex-col mt-16 mb-16 flex items-center justify-center">
        {onDevelopment !== "true" ? (
          <img
            src="https://www.clipartmax.com/png/small/265-2655834_work-in-progress-icon.png"
            alt="Work In Progress Icon @clipartmax.com"
          />
        ) : (
          <>
            <div className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 my-12">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/44398899?badge=0&autopause=0&player_id=0&app_id=58479"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  title="Magia en Junio de 2012"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="w-[100%] sm:w-[60%] md:w-[50%] lg:w-[40%] px-4">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Contáctame
                </h2>
                <ContactForm />
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-xl mt-2">
        <div className="mr-2 px-6 py-2 flex justify-end space-x-6">
          <a
            href="https://t.me/fedelmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <img src="/telegram.svg" alt="Telegram" className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/fe.delmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </footer>
    </div>
  );
}

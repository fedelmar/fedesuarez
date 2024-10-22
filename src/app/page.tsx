"use client";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import Song from "./components/Song";

export default function Home() {
  const onDevelopment = process.env.NEXT_PUBLIC_ON_DEVELOPMENT;

  const songData = [
    {
      videoUrl:
        "https://player.vimeo.com/video/1022087429?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Sembrando en el viento",
      lyrics: [
        [
          "Hoy una estrella, yo vi pasar traía brillo de carnaval",
          "y aprovechando la inspiración cante bajito una canción",
          "canción de sueños que van al mar que van regando la realidad",
          "y abrirse entero al cielo vi, reflejo mío yo descubrí",
        ],
        [
          "Hay un destello en mi alma, que me trae calma y aclara mi andar",
          "alimentando este fuego que vive en mi pecho y no quiere apagar",
          "iré sembrando en el viento una melodía que viene del mar",
          "avivando este fuego que vive en mi pecho y no se apagara",
        ],
        [
          "luces y sombras, buscando voy para orientarme en el mundo hoy",
          "de uno en uno mi pueblo va, va despertando, creando azar",
          "Voy discurriendo, llegando al mar camino lento y de buen andar",
          "y cosechando una oración de esas que nacen mirando al sol",
        ],
        [
          "Hay un destello en mi alma, que me trae calma y aclara mi andar",
          "alimentando este fuego que vive en mi pecho y no quiere apagar",
          "iré sembrando en el viento una melodía que viene del mar",
          "avivando este fuego que vive en mi pecho y no se apagara",
          "avivando este fuego que vive en mi pecho y crece mas y mas…",
        ],
      ],
    },
    {
      videoUrl:
        "https://player.vimeo.com/video/1022107961?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Encuentro",
      lyrics: [
        [
          "Deja que sane el viento",
          "deja que se abra el mar",
          "que entren a tu pensamiento",
          "versos de luz y de sal",
          "que entren a tu pensamiento",
          "versos de luz sideral",
        ],
        [
          "Déjalo correr al tiempo",
          "deja el pasado atrás",
          "para que llegue lo nuevo",
          "caminando al crear",
          "para que llegue lo nuevo",
          "creando al caminar",
        ],
        [
          "deja que entre en tu vida",
          "eso que pediste ayer",
          "sueltale una melodía",
          "pronto sabras que hacer",
          "suelta una melodía",
          "pronto lo verás nacer",
        ],
        [
          "si el pasado te atrapa",
          "si vuelves a caer",
          "dale gracias a la vida",
          "y vuelve a florecer",
          "dale gracias a tu vida",
          "por enseñarte a crecer",
        ],
      ],
    },
    {
      videoUrl:
        "https://player.vimeo.com/video/1022124893?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Es el amor",
      lyrics: [
        ["Vida ilumina", "trae vientos", "de esplendor"],
        ["Brillo que se enciende", "lentamente", "hay amor"],
        [
          "Comienzo a volar",
          "y miro hacia el sol",
          "reflejo de mi alma",
          "cristal que devuelve",
          "lo que doy, es el amor",
          "y en el desplegar",
          "de mis alas brilla",
          "tu mirada",
          "te encuentro en el cielo",
          "somos dos, es el amor",
        ],
        ["Aire en tu aliento", "vence al tiempo", "danza hoy"],
        ["Sueña el momento", "crea el cuento", "del amor"],
        [
          "Vuelvo a despertar",
          "y miro hacia el sol",
          "reflejo de mi alma",
          "cristal que devuelve",
          "lo que doy, es el amor",
          "y en el desplegar",
          "de mis alas brilla",
          "tu mirada",
          "te encuentro en el cielo",
          "somos dos, es el amor",
        ],
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-black bg-[#FDE74C] font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-xl">
        <div className="flex items-center justify-start h-16 px-8">
          <p className="text-2xl font-bold text-[#0c1821] shadow-md px-2 py-1 rounded-lg bg-[#FDE74C]">
            Galería de Canciones
          </p>
        </div>
      </header>

      <main className="flex-grow flex-col mt-16 mb-16 flex items-center justify-center">
        {onDevelopment === "true" ? (
          <img
            src="https://www.clipartmax.com/png/small/265-2655834_work-in-progress-icon.png"
            alt="Work In Progress Icon @clipartmax.com"
          />
        ) : (
          <>
            <div className="flex flex-col w-full h-full items-center justify-center">
              {songData.map((song, index) => (
                <Song key={index} {...song} />
              ))}
            </div>
            <div className="w-[100%] sm:w-[60%] md:w-[40%] lg:w-[30%] px-1">
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
        <div className="px-6 py-2 flex justify-end space-x-6">
          <a
            href="https://t.me/fedelmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <Image src="/telegram.svg" alt="Telegram" width={28} height={28} />
          </a>
          <a
            href="https://www.instagram.com/fe.delmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

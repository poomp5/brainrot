'use client';
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { RotateCcw, Volume2, VolumeOff } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface ResultData {
  title: string;
  image: string;
  audio: string;
  description: string;
  strong: string;
  weak: string;
  friend: {
    name: string;
    image: string;
  };
}

const resultMap: Record<string, ResultData> = {
  tralalero_tralala: {
    title: "Tralalero Tralala",
    image: "/images/tralalero_tralala.jpeg",
    audio: "/audio/tralalero_tralala.mp3",
    description: "คุณเป็นฉลามใส่รองเท้า Nike เดินบนหาดทรายร้องเพลงปัญญาอ่อน",
    strong: "เดินเสียงตึบตึบอย่างมั่นใจ",
    weak: "ทะเลลื่นล้มง่าย",
    friend: {
      name: "Lirili Larila",
      image: "/images/lirili-larila.jpeg",
    },
  },
  tung_tung_tung_sahur: {
    title: "Tung Tung Tung Sahur",
    image: "/images/tung_tung_tung_sahur.jpg",
    audio: "/audio/tung_tung_tung_sahur.mp3",
    description: "คุณถือไม้แล้วตีกระป๋องทุกตีสามเพื่อปลุกโลก",
    strong: "ปลุกคนทั้งหมู่บ้านได้",
    weak: "ทุกคนรำคาญเสียงคุณ",
    friend: {
      name: "Tralalero Tralala",
      image: "/images/tralalero_tralala.jpeg",
    },
  },
  chimpanzini_bananini: {
    title: "Chimpanzini Bananini",
    image: "/images/chimpanzini_bananini.jpeg",
    audio: "/audio/chimpanzini_bananini.mp3",
    description: "คุณเป็นลิงที่พูด “BANANINI!” ทุกครั้งที่หายใจ",
    strong: "พูดไปเรื่อย ไม่รู้จักเหนื่อย",
    weak: "คนอื่นไม่เข้าใจสิ่งที่คุณพูด",
    friend: {
      name: "Brr Brr Patrapim",
      image: "/images/brr_brr_patrapim.png",
    },
  },
  brr_brr_patrapim: {
    title: "Brr Brr Patrapim",
    image: "/images/brr_brr_patrapim.png",
    audio: "/audio/brr_brr_patrapim.mp3",
    description: "คุณมีเส้นเลือดสุดเซ็กซี่และจมูกยาวๆ",
    strong: "ตัวใหญ่น่าเกรงขาม",
    weak: "เพราะตีพ่อตีแม่",
    friend: {
      name: "Chimpanzini Bananini",
      image: "/images/chimpanzini_bananini.jpeg",
    },
  },
  bombardiro_crocodilo: {
    title: "Bombardiro Crocodilo",
    image: "/images/bombardiro_crocodilo.jpeg",
    audio: "/audio/bombardiro_crocodilo.mp3",
    description: "คุณคือจระเข้ติดเจ็ททิ้งระเบิดตู้มๆ",
    strong: "บินไปไหนก็ได้",
    weak: "ใบพัดไม่หมุน",
    friend: {
      name: "Tung Tung Tung Sahur",
      image: "/images/tung_tung_tung_sahur.jpg",
    },
  },
  lirili_larila: {
    title: "Lirili Larila",
    image: "/images/lirili-larila.jpeg",
    audio: "/audio/lirili-larila.mp3",
    description: "คุณคือช้างที่มีสองขา ล่องลอยไปพร้อมเสียง lirili~",
    strong: "คุณตัวใหญ่และหล่อเท่",
    weak: "มองทางไม่เห็น สะดุดล้ม",
    friend: {
      name: "Bombardiro Crocodilo",
      image: "/images/bombardiro_crocodilo.jpeg",
    },
  },
};

function BrainrotResultContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "tralalero_tralala";
  const resultData = resultMap[type] || resultMap["tralalero_tralala"];
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [type]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-[#282828] text-white flex justify-center p-4">
      <div className="max-w-md w-full space-y-3 mt-3">
        <h1 className="text-center text-lg mb-0">คุณคือ</h1>
        <h2 className="text-center text-2xl font-bold text-blue-400 mb-4">
          {resultData.title}
        </h2>

        <Image
          src={resultData.image}
          alt={resultData.title}
          width={300}
          height={300}
          className="w-2/3 mx-auto rounded-3xl"
        />

        <p className="text-center text-sm text-white/90">
          {resultData.description}
        </p>

        <div className="flex flex-row items-stretch gap-4">
          <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-lg text-center text-sm sm:text-xs">
            <div>
              <span className="font-bold bg-[#0A77B6] text-white px-4 py-1.5 rounded-full">
                จุดแข็ง
              </span>
              <p className="mt-4 break-words text-center">
                {resultData.strong}
              </p>
            </div>
            <div>
              <span className="font-bold bg-[#A8345B] text-white px-4 py-1.5 rounded-full">
                จุดอ่อน
              </span>
              <p className="mt-4 break-words text-center">{resultData.weak}</p>
            </div>
          </div>

          <div className="w-px bg-white/30" />

          <div className="flex-1 flex flex-col items-center text-center text-sm sm:text-xs">
            <Image
              src={resultData.friend.image}
              alt={resultData.friend.name}
              width={500}
              height={500}
              className="w-24 sm:w-16 rounded-lg object-cover"
            />
            <div className="mt-2">
              <p className="text-xs text-white">เพื่อนสนิทของคุณ</p>
              <p className="font-semibold text-orange-400 break-words">
                {resultData.friend.name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center mt-2">
          <button
            onClick={toggleMute}
            className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
          >
            {isMuted ? <VolumeOff /> : <Volume2 />}
          </button>

          <Link href={'/'}>
            <button className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-3 transition">
              <RotateCcw />
            </button>
          </Link>
          <Link
            className="mt-1.5"
            href="https://www.tiktok.com/@bluecat_dev"
            target="_blank"
          >
            <button>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 fill-white rounded-full p-3"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </button>
          </Link>
        </div>

        <p className="text-center text-xs text-white/50">©bluecat.dev</p>
        <audio ref={audioRef} src={resultData.audio} />
      </div>
    </div>
  );
}

export default function BrainrotResultPage() {
  return (
    <Suspense
      fallback={<div className="text-white text-center mt-10">Loading...</div>}
    >
      <BrainrotResultContent />
    </Suspense>
  );
}

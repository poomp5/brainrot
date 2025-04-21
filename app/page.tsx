"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "ตื่นมาสิ่งแรกที่คุณทำคือ",
  "สมองคุณตอนเที่ยงคืนเป็นยังไง?",
  "ถ้าเลือกสัตว์เลี้ยง 1 ตัว คุณจะเลือก...",
  "เพลงไหนที่ควรเป็นเพลงชาติ?",
  "ถ้าคุณถูกแปลงร่างเป็นอาหาร 1 อย่าง",
  "คุณคิดยังไงกับรองเท้า Nike?",
  "คำพูดติดปากคุณคือ…",
  "ตอนเปิดกล้องคอลใน Discord...",
  'สีที่คุณรู้สึกว่า "นี่แหละ… ฉัน"',
  "ถ้าคุณโด่งดังบน Tiktok ได้เพราะ...",
];

const choices = [
  [
    "ร้อง “BANANINI” ใส่พัดลม",
    "หยิบไม้กวาดมาเคาะโต๊ะ: “TUNG TUNG TUNG SAHUR!”",
    "พูดอิตาลีปลอมใส่แมว",
    'พูด "Tralalero Tralala" เบาๆ',
  ],
  [
    "เต็มไปด้วยเสียงดนตรี tralalero~",
    "คิดว่าแตงโมคือรถยนต์",
    "อยากถือไม้ไปเคาะหัวเพื่อน",
    "อยู่ดีดีก็หัวเราะคนเดียว",
  ],
  [
    "จระเข้บินได้",
    "เสือที่อยู่ในแตงโม",
    "ลิงตัวเขียวตั้งแต่หัวยันตูด",
    "เพนกวินใส่แว่นกันแดด",
  ],
  [
    "Fluri flura loop 10 ชั่วโมง",
    "Bombardiro Crocodilo remix",
    "Tigrillini Trap version",
    "ไม้เคาะถัง SAHUR",
  ],
  ["ส้มตำ TUNG TUNG TUNG", "กระบองเพชรแซ่บ ๆ", "เนื้อฉลาม Nike", "เนื้อจระเข้บินได้"],
  [
    "ใส่กับฉลาม คือ Soft Power ของประเทศ",
    "ต้องมีเสียงตึบตึบ",
    "ต้องเรืองแสงได้",
    "จิตวิญญาณแห่งการสมองเหลว",
  ],
  ["BANANINI", "BRRRR PATRA PIM", "MACARRONI", "TUNG TUNG TUNG SAHUR"],  
  [
    "ใส่หมวกแตงโม",
    "ยกแมวขึ้นพูดอิตาลี",
    "พูด TUNG ใส่เพื่อน",
    "เปิด meme วนลูป",
  ],
  ["พาสเทลแตงโม", "เขียวกล้วยบด", "เหลืองมะนาว", "น้ำตาลไม้เคาะถัง"],
  [
    "เต้นฉลามจนเป็นเทรนด์",
    "BANANINI จนคนพูดตาม",
    "Sahur remix + เด็กหัวเราะ",
    "วิดีโอ Top 10 brainrot animals",
  ],
];

const typeMap = [
  "bombardiro_crocodilo",
  "brr_brr_patrapim",
  "tung_tung_tung_sahur",
  "chimpanzini_bananini",
  "lirili_larila",
  "tralalero_tralala",
];

export default function BrainrotQuestion() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const router = useRouter();

  const handleAnswer = (choiceIndex: number) => {
    const newScores = [...scores];
    newScores[choiceIndex] += 1;
    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const maxIndex = newScores.indexOf(Math.max(...newScores));
      const resultType = typeMap[maxIndex] || "tralalero";
      router.push(`/result?type=${resultType}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex justify-center px-4">
      <div className="w-full max-w-md mt-8">
        <h1 className="text-center text-lg text-gray-200">คุณคือ</h1>
        <h1 className="text-center text-3xl text-white font-semibold mb-4">
          Italian Brainrot
        </h1>

        <div className="w-full h-2 bg-gray-500 rounded-full overflow-hidden mb-4">
          <div
            className="bg-pink-300 h-full transition-all duration-300"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="text-base font-medium mb-4">
          {current + 1}. {questions[current]}
        </div>

        <div className="space-y-3">
          {choices[current].map((text, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full bg-white hover:bg-white/90 text-black py-2 px-4 rounded-md shadow hover:scale-[1.02] transition-all"
            >
              {text}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">©bluecat.dev</p>
      </div>
    </div>
  );
}

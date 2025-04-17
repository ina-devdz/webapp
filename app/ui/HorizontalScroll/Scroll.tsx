import React, { useState } from "react";

import Card from "./Card";
import Row from "./Row";

const Scroll = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="container mx-auto min-h-fit flex flex-col gap-8 py-10">
      <h2 className="text-3xl font-normal mb-3">دليل الناخب والمرشح</h2>
      <Row speed={100} playing={playing}>
        {cardDetails.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </Row>
    </div>
  );
};

export default Scroll;

export const cardDetails = [
  {
    id: 0,
    name: "Manu Arora",
    avatar: "https://manuarora.in/avatar-new.png",
    content: "كيفية التسجيل",
    href: "https://twitter.com/mannupaaji/status/1542486005403746305",
  },
  {
    id: 1,
    name: "Elon Musk",
    avatar:
      "https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg",
    content: "كيفية الإنتخاب",
    href: "https://twitter.com/mannupaaji",
  },
  {
    id: 2,
    name: "Salman Bhai",
    avatar:
      "https://pbs.twimg.com/profile_images/1268824832424022017/vUx5TGw7_400x400.jpg",
    content: "كيفية الترشح",
    href: "https://twitter.com/mannupaaji",
  },
  {
    id: 3,
    name: "Vercel",
    avatar:
      "https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg",
    content: "مراكز التصويت",
    href: "https://twitter.com/mannupaaji",
  },
  {
    id: 4,
    name: "GitHub",
    avatar:
      "https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg",
    content: "إحصائيات",
    href: "https://twitter.com/mannupaaji",
  },
];

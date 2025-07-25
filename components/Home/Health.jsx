"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    title: "Electric Toothbrush",
    price: "$29.00",
    img: "/image/health (1).webp",
  },
  {
    title: "Digital Thermometer",
    price: "$15.00",
    img: "/image/health (2).webp",
  },
  {
    title: "Hair Dryer Ionic",
    price: "$49.00",
    img: "/image/health (3).webp",
  },
  {
    title: "Massager Gun Pro",
    price: "$59.00",
    img: "/image/health (4).webp",
  },
  {
    title: "Hair Straightener",
    price: "$25.00",
    img: "/image/health (5).webp",
  },
  {
    title: "Skin Moisturizer",
    price: "$19.00",
    img: "/image/health (6).webp",
  },
];


const Health = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="bg-white px-4 py-5 rounded shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold uppercase">Health & Beauty</h2>
          <a href="#" className="text-blue-600 text-sm">View All</a>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 gap-6">
          {products.map((item, i) => (
            <div key={i} className="relative">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={300}
                className="rounded mb-2"
              />
              <p className="text-sm font-medium truncate">{item.title}</p>
              <div className="text-sm mt-1">
                <span className="font-bold text-gray-800 text-[1rem] md:text-[1.1rem]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Health;

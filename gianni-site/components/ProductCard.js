import Link from "next/link";
import React from "react";
import Image from "next/image";
import space from '../assets/space.gif'

export default function ProductCard({ product }) {
  const { handle, title } = product.node;

  const { url } = product.node.images.edges[0].node;

  return (
    <Link href={`/shoes/${handle}`}>
      <a className="">
        <div className="relative h-80 w-full border-4 border-dashed border-black rounded">
          <Image src={url} alt={title} layout="fill" objectFit="cover"  />
        </div>
        <h2 className="text-gray-900 hover:text-slate-500 text-center">{title}</h2>
      </a>
    </Link>
  );
}

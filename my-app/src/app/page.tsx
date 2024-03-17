import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return ( 
    <Image 
      src="/Lichau_Simon.jpg"
      width={200}
      height={800} 
      alt={"Simon Lichau"}    />
  );
}

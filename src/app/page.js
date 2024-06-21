import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center mb-5'>Bhagvad Gita</h1>
      <Image src={'/gita.jpg'} alt='Image not found'
      width={650} height={400} 
      className='mx-auto rounded-full shadow-md shadow-blue-400 '/>
    <ul className='flex flex-col mt-5 ml-60 w-8/12 mx-auto'>
      <li>
      Click on any chapter in the menu to read.
      </li>
      <li>
    Inside every chapter there are some verses. Click on any verse to read in detail with explanation by various 
    authors (Hindi, English, Sanskrit).
      </li>
      </ul>
    </div>
         
  );
}

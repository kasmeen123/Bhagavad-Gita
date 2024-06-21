// import Link from "next/link"

// const Sidebar = async () => {
// const chapters = await fetch(" https://bhagavadgitaapi.in/chapters")
// const chaptersData = await chapters.json()
// console.log(chaptersData)
//   return (
//     <div className='flex flex-col gap-3 p-5'>
//       <h2>Chapters</h2>
//       {
//       chaptersData.map((chapter,index) => (
//         <div key={index}>
//             <Link href={`/${index+1}`}>{index+1}. {chapter.translation}</Link>
//              </div>
//       ))
// }
//     </div>
//   )
// }

// export default Sidebar

import Link from "next/link";

const Sidebar = async () => {
  const chapters = await fetch("https://bhagavadgitaapi.in/chapters");
  const chaptersData = await chapters.json();
  
  return (
    <div className="flex flex-col gap-3 p-5">
      {chaptersData.map((chapter, index) => (
        <div key={index}>
          <Link href={`/${index + 1}`}>
            {index + 1}. {chapter.translation}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

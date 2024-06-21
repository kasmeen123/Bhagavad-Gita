import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const DetailPage = async ({params}) => {
    const {chapter} = params
    const data = await fetch(`https://bhagavadgitaapi.in/chapter/${chapter}`)
    const chapterDetail = await data.json()
    const listofLinks = []
    for(let i = 0; i < chapterDetail.verses_count; i++){
        listofLinks.push(
            <PaginationItem>
      <PaginationLink href={`/${chapter}/${i+1}`}>{i+1}</PaginationLink>
    </PaginationItem>
        )
    }
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-3'>
        <div className='text-3xl text-center'>
            Chapter Number - {chapterDetail.chapter_number}
            </div>
            <div>
                Total verses - {chapterDetail.verses_count}
            </div>
            
            Name - {chapterDetail.name}
        <div>
            Translation = {chapterDetail.translation}
      </div>
    <div>
        Transliteration - {chapterDetail.transliteration}
    </div>
    <div>
        Meaning:
        <div>
            English: {chapterDetail.meaning.en}
        </div>
        <div>
            Hindi: {chapterDetail.meaning.hi}
        </div>
    </div>
    <div>
        Summary:
        <div>
            English: {chapterDetail.summary.en}
        </div>
        <br/>
        <div>
            Hindi: {chapterDetail.summary.hi}
        </div>
    </div>
        <h2 className='text-3xl text-center'>
            List of verses
            </h2>
            <Pagination>
  <PaginationContent>
    <div className='flex flex-wrap gap-1'>
    {...listofLinks}
    </div>

  </PaginationContent>
</Pagination>

    </div>
    </div>
  )
}

export default DetailPage

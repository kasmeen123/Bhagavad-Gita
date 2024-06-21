import BackBtn from '@/components/custom/BackBtn'
import React from 'react'

const SloksPage = async ({params}) => {
    const {chapter:ch , sloks} = params
    
    const data = await fetch(`https://bhagavadgitaapi.in/slok/${ch}/${sloks}`)
    const sloksDetail = await data.json()
    const {_id, chapter, verse, slok, transliteration, ...authors} = sloksDetail
    const listofAuthors = Object.values(authors)
    const modifiedData = {_id, chapter, verse, slok, transliteration, listofAuthors}
    
    console.log(sloksDetail)
    return (
        
    <div className='flex flex-col gap-6'>
        <div className='self-end'>
        <BackBtn/>
        </div>
        
      <div>
        <p className='text-lg font-semibold'>id:{modifiedData._id}</p>
      </div>
      <div>
        <p className='text-lg font-semibold'>chapter:{modifiedData.chapter}</p>
      </div>
      <div>
        <p className='text-lg font-semibold'>verse:{modifiedData.verse}</p>
      </div>
      <div>
        <p className='text-lg font-semibold'>slok:{modifiedData.slok}</p>
      </div>
      <div>
        <p className='text-lg font-semibold'>transliteration:</p>
        <p>id:{modifiedData.transliteration}</p>
      </div>
      
        <p className='text-3xl text-center'>Authors</p>
        <div className='flex flex-col gap-5'>
            {
                modifiedData.listofAuthors.map((author, index) => (
                <div key={index} className='flex flex-col gap-5 border-2 p-3 rounded-xl'>
                    <h2 className='text-lg font-semibold'>{author.author}</h2>
                    {
                        author?.sc && <div>
                            Sanskrit Commentary: {author.sc}
                            </div>
                    }
                     {
                        author?.et && <div>
                            Sanskrit Commentary: {author.et}
                            </div>
                    }
                     {
                        author?.ec && <div>
                            Sanskrit Commentary: {author.ec}
                            </div>
                    }
                     {
                        author?.ht && <div>
                            Sanskrit Commentary: {author.ht}
                            </div>
                    }
                     {
                        author?.hc && <div>
                            Sanskrit Commentary: {author.hc}
                            </div>
                    }
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default SloksPage

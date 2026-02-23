import React, { useState } from 'react'

export default function GridLayout() {
    const [value, setValue] = useState(null)

    const ceels = Array.from({ length: 100 })

    return (
        <section className='bg-blue-700 p-6 text-center'>
            <h1>Find the Secret Color!🟥</h1>
            <div className='grid grid-cols-10  p-4  max-w-3xl mx-auto   '>
                {ceels.map((_, index) => (
                    <div key={index} className='w-full aspect-square border-2 border-white bg-black hover:bg-gray-500 cursor-pointer' 
                    />

                ))}
            </div>
            <h2>Clicks:12</h2>
            <h3 className='text-yellow-500'>Keep Searching!</h3>
        </section>
    )
}


























// import React, { useState } from 'react'

// export default function GridLayout() {
//     const [secretIndex] = useState(Math.floor(Math.random() * 100))
//     const [clicks, setClicks] = useState(0)
//     const [found, setFound] = useState(false)

//     function handleClick(index) {
//         if (found) return

//         setClicks(prev => prev + 1)

//         if (index === secretIndex) {
//             setFound(true)
//         }
//     }

//     return (
//         <section className='bg-blue-700 p-6 text-center'>
//             <h1 className='text-white text-2xl mb-4'>
//                 Find the Secret Color! 🟥
//             </h1>

//             <div className='grid grid-cols-10 gap-1 max-w-md mx-auto'>
//                 {Array.from({ length: 100 }).map((_, index) => (
//                     <div
//                         key={index}
//                         onClick={() => handleClick(index)}
//                         className='w-8 h-8 bg-gray-400 cursor-pointer hover:bg-gray-300'
//                     />
//                 ))}
//             </div>

//             <h2 className='text-white mt-4'>Clicks: {clicks}</h2>

//             {!found && (
//                 <h3 className='text-yellow-500'>Keep Searching!</h3>
//             )}

//             {found && (
//                 <h3 className='text-green-400'>You Found It! 🎉</h3>
//             )}
//         </section>
//     )
// }
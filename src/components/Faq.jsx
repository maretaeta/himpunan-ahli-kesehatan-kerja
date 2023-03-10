import React, {useState} from 'react'

// const toggleFAQ = index => {
//   setFaqs(
//     faqs.map((faq, i) => {
//       if (i === index) {
//         faq.open = !faq.open;
//       } else {
//         faq.open = false;
//       }
// }))
// }

const faq = () => {
    const cardIsi = [
        {
        question :'Apa itu Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagamana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagamana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
            },
        {
        question :'Bagamana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagamana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        }
    ]
  return (
    <div id='faq' className='max-w-[1240px] px-5 mx-auto items-center'>
        <h1 className='pb-5 pt-28 text-4xl font-bold text-center'>Frequently Asked Question</h1>
        
        {cardIsi.map((faq_info, i) => (
        <div className='mx-auto flex justify-center items-center' key={i}> 
           <div className='relative w[-400] border rounded m-[15px]' >
                <p className='text-sm mx-7 h-14 flex flex-row items-center'>{faq_info.question} 
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-between pl- ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>  */}

                </p>
                
                <div>
                    <i></i>
                </div>
                <div class="max-h-0 overflow-hidden">
                <p class="p-4 pl-7 text-sm">{faq_info.answer}</p>
              </div>
            </div>  
        </div>

        ))
    }
    </div>
  )
};

export default faq;
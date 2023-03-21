import React, {useState} from 'react'


function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const cardIsi = [
        {
        question :'Apa itu Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagaimana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagaimana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
            },
        {
        question :'Bagaimana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        },
        {
        question :'Bagaimana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.',
        }
    ];


  return (    
    <div className='mx-7 py-20'>
      <div className=" mx-auto gap-10">
          <div className='text-center md:text-center'>
          <h1 className='pb-5 pt-28 text-4xl font-bold text-center'>Frequently Asked Question</h1>
          <p className='text-sm md:mr-16 pb-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit explicabo quibusdam, et aspernatur similique, voluptas nobis, incidunt dignissimos accusamus distinctio repudiandae fugit aliquam nulla totam. Debitis error assumenda mollitia dolorum!</p>
          </div>
      </div>
      <div>
      {cardIsi.map((faq_info, i) => (
        <div className='border rounded m-[15px] overflow-hidden mx-auto mb-4' key={i}> 
           <div className='flex items-center justify-between p-4 cursor-pointer ' onClick={() => toggleAccordion(i)}>
                <p className='font-xs mx-7 font-semibold'>{faq_info.question} </p>
                <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === i ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
              />
            </svg> 
           </div>
            {activeIndex === i && (
            <div className="px-10 pb-4">{faq_info.answer}</div>
            )}
            </div>
          ))}
            </div>
          
        </div>
      
      );
    }

export default Faq;
import React, { memo } from 'react'
import OptimizedImage from '../ui/OptimizedImage';

interface Image {
    title: string;
    images: string;
}

const coreImages: Image[] = [
    {
        title: "Sporting Activities",
        images: "/images/student/1.jpg"
    },
        {
        title: "Co-curricular Activities",
        images: "/images/student/2.jpg"
    },
        {
        title: "Community Services",
        images: "/images/student/3.jpg"
    },
        {
        title: "Student Council",
        images: "/images/student/4.jpg"
    },
        {
        title: "Field Trips",
        images: "/images/student/5.jpg"
    },
        {
        title: "Project Day & Sessions",
        images: "/images/student/6.jpg"
    },
]
export const StudentLifeContent = memo(function StudentLifeContent() {
  return (
    <section className='min-h-screen'>
      {coreImages.map((img, idx) => (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

<div key={idx} className=' shadow-sm bg-white '>
      <OptimizedImage
src={img.images}
alt='student images'
fill 
priority
className='object-contain w-40 h-40'
          objectFit="cover"
      />
      <div className='bg-gray-600 w-10 h-2'></div>
      <h1 className='text-blue-700 '>{img.title}</h1>
</div>
        </div>

      ))}
    </section>
  );
  });

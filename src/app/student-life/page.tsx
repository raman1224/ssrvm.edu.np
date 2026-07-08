import { StudentLifeContent } from '@/components/studentlife/StudentLife';
import { PageHeader } from '@/components/ui/PageHeader';
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: '',
    description: '',
    keywords: '',
    openGraph: {
        title: '',
        description: '',
        url: '',
        images: [
            {
                url: '',
                width: '',
                height: 630,
                alt: 'ssrvm',

            },
        ],
    },    
};

export default function StudentLife() {
  return (
    <>
     <PageHeader 
     title='ssrvm studnet life'
     breadcrumbs={[
        {label: 'Home', href: '/'},
        { label: 'Student Life', active: true },
     ]} 
             backgroundImage="/images/bg3.webp"
     />
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StudentLifeContent />
        </div>
     </section>
    </>
  )
}

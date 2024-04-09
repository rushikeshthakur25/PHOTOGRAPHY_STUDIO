'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function Upcomingwebinar() {
    const featuredWebinars = [
        {
          title: 'Unlocking Photographic Vision',
          description:
            'Join us as we unlock the secrets of photographic vision, exploring how to see the world through the lens with creativity and clarity. Learn techniques to discover unique perspectives, capture compelling compositions, and infuse your images with emotion and meaning.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'Mastering Light and Shadow',
          description:
            'Delve into the art of light and shadow in photography, mastering techniques to harness natural and artificial light to enhance your images. From creating dramatic contrasts to shaping mood and atmosphere, discover how light can elevate your photography to new levels of visual storytelling.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Creative Composition Secrets',
          description:
            'Explore the principles of creative composition and learn how to compose visually striking images that captivate viewers attention. Discover the rule of thirds, leading lines, symmetry, and other composition techniques to create dynamic and engaging photographs that leave a lasting impression.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Exploring the Art of Portrait Photography',
          description:
            'Dive into the art of portrait photography and uncover the techniques for capturing the essence and personality of your subjects. From understanding lighting and posing to connecting with your subjects on a deeper level, learn how to create compelling portraits that resonate with emotion and authenticity.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Mastering the Digital Darkroom',
          description:
            'Step into the digital darkroom and master the art of post-processing to enhance and refine your photographs. Explore essential editing tools and techniques in software such as Adobe Lightroom and Photoshop, and discover how to transform your raw images into stunning works of art.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Exploring Creative Photography Projects',
          description:
            'Embark on a journey of creative exploration as we delve into photography projects that challenge and inspire. From conceptualizing and planning to executing and showcasing your work, learn how to embark on personal projects that push your boundaries and expand your photographic horizons.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
  return (
    <div className="p-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your PHOTOGRAPHY Journey</p>
            </div>
            <div className="mt-10">
            <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
            </div>
            <div className="mt-10 text-center">
            <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
            </div>
      </div>
    </div>
  )
}

export default Upcomingwebinar

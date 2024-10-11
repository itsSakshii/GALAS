import React from 'react';
import BlogContent from '../ui/BlogContent';
import img1 from '../../assets/image/section-image/Blog-1.webp';
import img2 from '../../assets/image/section-image/Blog-2.webp';


export default function Blog() {

  const blogPosts = [
    {
      imageSrc: img1, 
      altText: "Event image showing business professionals",
      heading: "Title Heading 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cupiditate illum perferendis. Rerum vero eius distinctio voluptatem quas magni dolorum iusto maxime vel facilis sapiente odit laborum error, laudantium quod."
    },
    {
      imageSrc: img2, 
      altText: "Event image showing business professionals",
      heading: "Title Heading 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cupiditate illum perferendis. Rerum vero eius distinctio voluptatem quas magni dolorum iusto maxime vel facilis sapiente odit laborum error, laudantium quod."
    },
   
   

  ];

  return (
    <>
      <section className="event antialiased">
        <div className="event-inner container mx-auto">
          <div className="heading">
            <h2 className="content-heading text-center">
              Our <span className="text-teal-200">Blogs</span>
            </h2>
          </div>
          <div className="section-space"></div>

          {blogPosts.map((post, index) => (
            <BlogContent
              key={index}
              imageSrc={post.imageSrc}
              altText={post.altText}
              heading={post.heading}
              content={post.content}
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>
      <div className="section-space"></div>
    </>
  );
}

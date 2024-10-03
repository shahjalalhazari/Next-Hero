import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      slug: "sustainable-living-tips",
      title: "10 Simple Tips for Sustainable Living",
      description:
        "Discover easy and practical ways to reduce your environmental impact and live a more sustainable lifestyle. From eco-friendly products to energy-saving habits, these tips will help you make a positive change for the planet.",
    },
    {
      slug: "quick-healthy-recipes",
      title: "Quick and Healthy Recipes for Busy Weeknights",
      description:
        "No time to cook? No problem! Explore a collection of quick and nutritious recipes that are perfect for busy weeknights. These meals are not only easy to prepare but also packed with flavor and essential nutrients.",
    },
    {
      slug: "budgeting-for-beginners",
      title: "Budgeting for Beginners: A Step-by-Step Guide",
      description:
        "Take control of your finances with this comprehensive guide to budgeting. Learn how to create a budget, track your expenses, and save for your goals, whether it’s a vacation, a new car, or retirement.",
    },
    {
      slug: "travel-solo-safely",
      title: "How to Travel Solo Safely: Tips for the Adventurous",
      description:
        "Solo travel can be incredibly rewarding, but it comes with its own set of challenges. This blog offers practical safety tips, packing advice, and destination recommendations to help you make the most of your solo adventures.",
    },
    {
      slug: "must-have-tech-gadgets",
      title: "10 Must-Have Tech Gadgets for 2024",
      description:
        "Stay ahead of the tech curve with our roundup of the must-have gadgets for 2024. From smart home devices to the latest wearables, discover innovative technology that enhances your daily life.",
    },
    {
      slug: "self-care-strategies",
      title: "Effective Self-Care Strategies for Mental Wellness",
      description:
        "Prioritizing mental health is essential for overall well-being. Explore a variety of self-care strategies that can help you manage stress, improve your mood, and cultivate a more balanced life.",
    },
    {
      slug: "home-workout-routines",
      title: "The Best Home Workout Routines for All Fitness Levels",
      description:
        "No gym? No problem! Check out our favorite home workout routines suitable for all fitness levels. These exercises can be done in the comfort of your home, helping you stay fit and motivated.",
    },
    {
      slug: "positive-discipline-techniques",
      title: "Positive Discipline Techniques Every Parent Should Know",
      description:
        "Parenting can be challenging, but positive discipline techniques can help. Learn about effective strategies to encourage good behavior and foster a loving, respectful relationship with your child.",
    },
    {
      slug: "urban-gardening-tips",
      title: "Urban Gardening Tips for Small Spaces",
      description:
        "Think you don’t have enough space for a garden? Think again! Discover tips and tricks for successful urban gardening, including container gardening, vertical gardens, and choosing the right plants for your small space.",
    },
    {
      slug: "must-read-books-2024",
      title: "Must-Read Books for 2024: A Curated List",
      description:
        "Get ready for your next reading adventure! We’ve compiled a list of must-read books for 2024, featuring a diverse selection of genres and authors that will keep you engaged and inspired throughout the year.",
    },
  ];
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.slug} className="mx-40 p-4 border-2 mb-2">
          <h1 className="text-lg font-bold">{blog.title}</h1>
          <p>{blog.description}</p>
          <button className="bg-red-300 px-3 py-2 mt-2 rounded-md hover:font-bold">
            <Link href={`/blogs/${blog.slug}`}>Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;

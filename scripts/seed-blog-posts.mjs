#!/usr/bin/env node
import {Client} from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const writeToken = process.env.SANITY_WRITE_TOKEN
const apiVersion = '2026-05-19'

if (!projectId || !dataset || !writeToken) {
  console.error(
    'Missing required environment variables: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN'
  )
  process.exit(1)
}

const client = new Client({
  projectId,
  dataset,
  token: writeToken,
  apiVersion,
  useCdn: false,
})

const posts = [
  {
    _id: 'post-getting-started',
    _type: 'post',
    title: 'Getting Started with Our Blog',
    slug: {
      _type: 'slug',
      current: 'getting-started-with-our-blog',
    },
    excerpt: 'Welcome to our new blog! Here we share insights, stories, and learnings from our creative process.',
    publishedAt: '2026-05-29T08:00:00Z',
    author: 'Sandikala Studio',
    categories: ['News', 'Updates'],
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Welcome',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We\'re excited to launch our new blog as a space to share our thoughts, experiences, and expertise in design and web development.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'What to Expect',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'On this blog, you\'ll find in-depth articles about design trends, web development best practices, case studies from our projects, and stories from our team.',
          },
        ],
      },
    ],
  },
  {
    _id: 'post-behind-scenes',
    _type: 'post',
    title: 'Behind the Scenes of Our Creative Process',
    slug: {
      _type: 'slug',
      current: 'behind-the-scenes-creative-process',
    },
    excerpt: 'Discover how we approach design and development projects, from initial concepts to final delivery.',
    publishedAt: '2026-05-28T10:30:00Z',
    author: 'Sandikala Studio',
    categories: ['Process', 'Stories'],
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Our Creative Journey',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Every project starts with a conversation. We listen carefully to understand your goals, audience, and unique challenges.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Discovery Phase',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In the discovery phase, we research your industry, analyze your competitors, and identify opportunities for your brand to stand out.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Design & Development',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We create beautiful, functional designs that align with your brand and serve your users\' needs. Our development process ensures high performance and maintainability.',
          },
        ],
      },
    ],
  },
  {
    _id: 'post-learning-this-month',
    _type: 'post',
    title: 'What We\'re Learning This Month',
    slug: {
      _type: 'slug',
      current: 'what-were-learning-this-month',
    },
    excerpt: 'Insights and discoveries from our ongoing learning and experimentation.',
    publishedAt: '2026-05-27T14:00:00Z',
    author: 'Sandikala Studio',
    categories: ['Insights', 'Learning'],
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'May Learnings',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This month we\'ve been focusing on performance optimization and exploring new frameworks that could enhance our development workflow.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Performance First',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We discovered that even small improvements in performance can significantly impact user experience and search engine rankings.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'New Technologies',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We\'re experimenting with emerging technologies to find the best tools for our projects. Staying updated helps us deliver cutting-edge solutions.',
          },
        ],
      },
    ],
  },
  {
    _id: 'post-practical-guide',
    _type: 'post',
    title: 'A Practical Guide for New Visitors',
    slug: {
      _type: 'slug',
      current: 'practical-guide-for-new-visitors',
    },
    excerpt: 'Everything you need to know about working with us and understanding our approach to design and development.',
    publishedAt: '2026-05-26T09:15:00Z',
    author: 'Sandikala Studio',
    categories: ['Guide', 'Resources'],
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Getting Started With Us',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'If you\'re new to working with design agencies, we want to make the process as smooth and transparent as possible.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'First Steps',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Start by reaching out to us with your project brief. We\'ll schedule a call to understand your needs, timeline, and budget.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Our Promise',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'We promise clear communication, exceptional results, and a partnership approach to your project. Your success is our success.',
          },
        ],
      },
    ],
  },
]

async function seedBlogPosts() {
  try {
    console.log('🌱 Seeding blog posts...')

    for (const post of posts) {
      const query = `*[_id == "${post._id}"][0]`
      const existing = await client.fetch(query)

      if (existing) {
        console.log(`📝 Post "${post.title}" already exists, skipping...`)
      } else {
        await client.createIfNotExists(post)
        console.log(`✅ Created post: "${post.title}"`)
      }
    }

    console.log('🎉 Blog posts seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error)
    process.exit(1)
  }
}

seedBlogPosts()

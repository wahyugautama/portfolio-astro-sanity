# Blog Feature Setup

This document explains how to set up and use the blog feature in this Astro + Sanity project.

## Overview

The blog feature includes:
- **Blog listing page** at `/blog` - displays all published posts
- **Dynamic blog post pages** at `/blog/[slug]` - individual post pages
- **Sanity schema** for blog posts in `website-portfolio/schemaTypes/post.ts`
- **Seed script** to populate dummy blog posts

## Environment Setup

### Required Environment Variables

The following variables should be set in your `.env` file:

```env
SANITY_PROJECT_ID=afu5jgjq
SANITY_DATASET=portfolio
SANITY_WRITE_TOKEN=your_write_token_here
```

To get your `SANITY_WRITE_TOKEN`:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API > Tokens**
4. Create a new token with "Editor" permissions
5. Copy the token and add it to `.env`

**Important:** Never commit `.env` files with real tokens. Add `.env` to `.gitignore`.

## Seeding Blog Posts

To create sample blog posts in Sanity:

```bash
npm run seed:blog
```

This command:
- Creates 4 sample blog posts with realistic content
- Uses deterministic IDs to prevent duplicates if run multiple times
- Includes posts with titles, excerpts, dates, authors, categories, and Portable Text content

### What Gets Created

1. **Getting Started with Our Blog** - Introduction to the blog
2. **Behind the Scenes of Our Creative Process** - About your workflow
3. **What We're Learning This Month** - Monthly insights
4. **A Practical Guide for New Visitors** - Onboarding guide

Each post includes:
- Title and slug (auto-generated from title)
- Excerpt (short summary)
- Published date
- Author name
- Categories/tags
- Rich text body content

## Schema Details

The blog post schema (`post`) supports:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | ✓ | Post title |
| `slug` | slug | ✓ | URL-friendly identifier, auto-generated from title |
| `excerpt` | text | | Short summary for listings |
| `publishedAt` | datetime | ✓ | Publication date and time |
| `mainImage` | image | | Featured image with hotspot support |
| `author` | string | | Author name |
| `categories` | array | | Tags/categories (strings) |
| `body` | array | | Rich text content (blocks and images) |
| `seoTitle` | string | | Custom title for SEO (optional) |
| `seoDescription` | text | | Custom description for SEO (optional) |

## Using the Blog Feature

### Astro Pages

The blog feature creates two pages:

#### `/blog` - Blog Listing
- Displays all published posts ordered by date (newest first)
- Shows post image, title, date, excerpt, and categories
- Responsive grid layout
- Empty state message if no posts exist

#### `/blog/[slug]` - Individual Post
- Displays full post content
- Shows title, date, author, image, categories, and rich text body
- Back link to blog listing
- Metadata for SEO using `seoTitle` and `seoDescription`

### Navigation

The blog is linked in the main navigation header. Users can access it from any page.

## Creating Blog Posts in Sanity Studio

1. Open your Sanity Studio (usually at `http://localhost:3333`)
2. Look for "Blog Post" in the sidebar
3. Click "Create" to add a new post
4. Fill in the fields:
   - **Title**: Your post title
   - **Slug**: Auto-generates from title (you can edit)
   - **Excerpt**: Short summary (appears in listings)
   - **Published At**: Click to set the date and time
   - **Main Image**: Upload a featured image
   - **Author**: Your name or pseudonym
   - **Categories**: Add one or more categories
   - **Body**: Write your post content using rich text
   - **SEO Title/Description**: Custom metadata (optional)
5. Click "Publish" to make it live

## Development

### Dev Server

Run the Astro dev server:

```bash
npm run dev
```

The project will be available at `http://localhost:3000`

### Sanity Studio

To work on the schema or manage content in Sanity Studio:

```bash
cd website-portfolio
npm run dev
# Studio will be at http://localhost:3333
```

### Build

To build for production:

```bash
npm run build
```

Note: Requires Node.js >= 22.12.0

## GROQ Queries

The blog feature uses these GROQ queries (found in Astro pages):

### Get all posts
```groq
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories
}
```

### Get all post slugs (for static generation)
```groq
*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}
```

### Get single post by slug
```groq
*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  body,
  author,
  categories,
  seoTitle,
  seoDescription
}
```

## Styling

Blog pages use scoped CSS with responsive design:
- Mobile-first approach
- Flexible layouts that adapt to screen size
- Typography optimized for reading
- Consistent styling with existing site

## Portable Text Rendering

The blog post page uses a custom Portable Text renderer (`src/lib/portableText.ts`) that handles:
- Text formatting (bold, italic, code)
- Headings (h1, h2, h3)
- Paragraphs and blockquotes
- Basic HTML rendering for Astro

For more advanced Portable Text features, consider using a dedicated library like `@portabletext/react` or `@portabletext/svelte`.

## Troubleshooting

### Posts not appearing
1. Check that posts have `publishedAt` set
2. Verify the post is published (not in draft)
3. Check slug is valid and unique
4. Check the Sanity dataset is correct in `.env`

### Images not loading
1. Ensure `mainImage` is set on the post
2. Check that the Sanity image URL builder is working
3. Verify CORS is configured in Sanity project

### Seed script fails
1. Check that `.env` has valid `SANITY_WRITE_TOKEN`
2. Verify the token has Editor permissions
3. Check that project ID and dataset match your Sanity project
4. Run with `SANITY_WRITE_TOKEN=your_token npm run seed:blog`

## Next Steps

- Add more blog posts through Sanity Studio
- Customize the blog styling to match your brand
- Add featured posts or filtering by category
- Set up RSS feed for blog
- Add search functionality
- Enable comments or discussions

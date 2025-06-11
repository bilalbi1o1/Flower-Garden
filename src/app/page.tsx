import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    id: 1,
    title: "Spring Blooms: A Guide to Early Season Flowers",
    excerpt: "Discover the most beautiful flowers that bloom in early spring and how to care for them.",
    image: "/images/spring-flowers.jpg",
    category: "Gardening Tips",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Language of Roses: Understanding Their Meanings",
    excerpt: "Learn about the fascinating symbolism behind different rose colors and varieties.",
    image: "/images/roses.jpg",
    category: "Flower Meanings",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Creating Your Dream Garden: A Step-by-Step Guide",
    excerpt: "Transform your outdoor space into a blooming paradise with our expert tips.",
    image: "/images/garden.jpg",
    category: "Garden Design",
    readTime: "8 min read"
  }
];

const categories = [
  { name: "Gardening Tips", count: 24 },
  { name: "Flower Meanings", count: 18 },
  { name: "Garden Design", count: 15 },
  { name: "Seasonal Flowers", count: 32 },
  { name: "Plant Care", count: 27 }
];

const popularTags = [
  "Roses", "Tulips", "Spring", "Summer", "Indoor Plants",
  "Garden Design", "Flower Care", "Bouquets", "Wildflowers"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-flowers.jpg"
            alt="Beautiful flower arrangement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading mb-6">Blooming Garden</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Discover the beauty of flowers through our enchanting blog posts and gardening tips
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/blog"
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Explore Blog
            </Link>
            <Link 
              href="/categories"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading">Featured Posts</h2>
          <Link href="/blog" className="text-primary hover:underline">
            View All Posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group animate-fade-in">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4 text-sm mb-2">
                <span className="text-primary font-medium">{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-heading mt-2 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link 
                href={`/posts/${post.id}`}
                className="inline-block text-primary hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.count} posts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Popular Tags</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase()}`}
              className="px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading mb-6">Join Our Garden Community</h2>
          <p className="text-lg mb-8">
            Subscribe to receive weekly flower care tips, gardening inspiration, and exclusive content
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-primary/20 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-heading mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We're passionate about sharing the beauty and joy of flowers with everyone.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-primary hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-heading mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <Link href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Pinterest</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

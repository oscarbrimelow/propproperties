import React, { useState, useMemo } from 'react';
import { blogPosts } from '../data/blogs';
import { useRouter } from '../router';
import { Search, Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export const Blog: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Parse current route to see if we are reading a specific post
  const isDetailView = currentPath.startsWith('/blog/');
  const currentSlug = isDetailView ? currentPath.replace('/blog/', '') : '';

  const activePost = useMemo(() => {
    if (!currentSlug) return null;
    return blogPosts.find(
      (p) => p.slug.toLowerCase() === currentSlug.toLowerCase() || p.id.toLowerCase() === currentSlug.toLowerCase()
    );
  }, [currentSlug]);

  const categories = useMemo(() => {
    const list = new Set(blogPosts.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // 1. Detail BlogPost Page
  if (isDetailView) {
    if (!activePost) {
      return (
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Blog post not found</h2>
          <p className="text-neutral-500 mb-8">The article you are looking for does not exist or has been relocated.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blogs</span>
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back navigation */}
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#a2533e] transition-colors mb-6 text-sm font-semibold group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Blogs</span>
        </button>

        {/* Article header */}
        <article className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 tracking-wider">
              {activePost.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-CormorantGaramond-700">
              {activePost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500 pb-6 border-b border-neutral-850">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#a2533e]" />
                <span>{activePost.date}</span>
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#a2533e]" />
                <span>Kathryn Schenk</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#a2533e]" />
                <span>3 min read</span>
              </span>
            </div>
          </div>

          {/* Article Banner image */}
          <div className="aspect-21/9 w-full rounded-2xl overflow-hidden border border-neutral-850 shadow-lg bg-neutral-950">
            <img
              src={activePost.images ? activePost.images[0] : activePost.imgContent || activePost.imgBox || 'https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/2026131_159781b348a04292-jpeg.webp'}
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article body */}
          <div className="prose prose-invert max-w-none text-neutral-300 py-6 leading-relaxed space-y-6 text-sm sm:text-base">
            {activePost.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-4 font-CormorantGaramond-700">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('1.') || paragraph.startsWith('*')) {
                return (
                  <div key={idx} className="pl-6 py-2 border-l-2 border-[#a2533e]/30 bg-neutral-950/20 rounded-r-lg space-y-2">
                    {paragraph.split('\n').map((line, lIdx) => (
                      <p key={lIdx} className="text-neutral-400 font-medium text-sm leading-relaxed">{line.trim()}</p>
                    ))}
                  </div>
                );
              }
              return (
                <p key={idx} className="text-neutral-300 text-sm sm:text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share/Action Bottom Banner */}
          <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 my-12">
            <div>
              <h4 className="text-lg font-bold font-CormorantGaramond-700 text-white">Want to discuss these concepts in person?</h4>
              <p className="text-xs text-neutral-500 mt-1">Kathryn is always happy to offer expert strategy sessions for Northeast Ohio properties.</p>
            </div>
            <a
              href="#/contact"
              className="w-full sm:w-auto text-center bg-[#a2533e] hover:bg-[#b86149] transition-colors text-white text-xs font-bold tracking-wider py-3 px-6 rounded-lg uppercase shadow-lg cursor-pointer"
            >
              Connect with Katie
            </a>
          </div>
        </article>
      </div>
    );
  }

  // 2. Listing Blog page
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Blog Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs uppercase font-extrabold tracking-widest text-[#a2533e]">Northeast Ohio Real Estate Blog</h1>
        <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-CormorantGaramond-700">
          Insights For Smart Buyers & Sellers
        </p>
        <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
          Find hyper-local real estate advice, legal interpretations, and practical guides prepared directly by Kathryn Schenk to help you navigate your next move.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Blog Feed */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handlePostClick(post.slug)}
                className="group bg-[#191919] border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full cursor-pointer"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-900/90 text-[#a2533e] border border-neutral-800 backdrop-blur-sm shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#a2533e] transition-colors leading-snug font-CormorantGaramond-700">
                      {post.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#a2533e] group-hover:text-[#b86149] inline-flex items-center gap-1 transition-all">
                    <span>Read More</span>
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-neutral-950/40 rounded-xl border border-neutral-850">
              <p className="text-neutral-500 text-sm">No articles match your search parameters.</p>
            </div>
          )}
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Search */}
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 shadow-md">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Search Articles</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-4 w-4" />
              <input
                type="text"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-9 pr-4 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 shadow-md">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Categories</h4>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#a2533e] text-white font-bold'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  {cat === 'All' ? (
                    <span className="text-[10px] opacity-60">({blogPosts.length})</span>
                  ) : (
                    <span className="text-[10px] opacity-60">
                      ({blogPosts.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts List */}
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 shadow-md">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Recent Posts</h4>
            <div className="space-y-4">
              {blogPosts.slice(0, 4).map((post) => (
                <button
                  key={post.id}
                  onClick={() => handlePostClick(post.slug)}
                  className="flex gap-3 text-left group w-full focus:outline-none"
                >
                  <div className="h-12 w-16 bg-neutral-950 rounded overflow-hidden flex-shrink-0 border border-neutral-800">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover group-hover:scale-103 transition-transform" />
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-xs font-bold text-white group-hover:text-[#a2533e] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h5>
                    <p className="text-[10px] text-neutral-500 mt-1">{post.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

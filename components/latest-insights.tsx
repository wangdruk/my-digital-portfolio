"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  author: string | null
  readTime: string | null
  createdAt: Date
  category?: string
}

interface LatestInsightsProps {
  posts: BlogPost[]
  error?: boolean
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const categoryColors: Record<string, string> = {
  "Security": "bg-red-500/20 text-red-400 border-red-500/30",
  "Networking": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Cloud": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "AI/ML": "bg-green-500/20 text-green-400 border-green-500/30",
  "Tutorial": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "News": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
}

export function LatestInsights({ posts, error }: LatestInsightsProps) {
  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-gray-400">Unable to load blog posts at this time.</p>
          </div>
        </div>
      </section>
    )
  }

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 text-sm text-primary border border-primary/20 mb-4"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Blog & Insights</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay ahead with cybersecurity trends, expert tips, and industry best practices
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <Image
                          src={featuredPost.coverImage || "/digital-shield.png"}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 md:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent md:hidden" />
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white border-0 px-3 py-1">
                            Featured
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(featuredPost.createdAt)}
                          </span>
                          {featuredPost.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {featuredPost.readTime}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {featuredPost.title}
                        </h3>

                        <p className="text-gray-400 mb-6 line-clamp-3 text-lg">
                          {featuredPost.excerpt}
                        </p>

                        {featuredPost.author && (
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-gray-300">{featuredPost.author}</span>
                          </div>
                        )}

                        <motion.div
                          className="flex items-center text-primary font-medium group/link"
                          whileHover={{ x: 5 }}
                        >
                          Read Full Article
                          <ArrowRight className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <div className="h-full rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.coverImage || "/network-security-dashboard.png"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(post.createdAt)}
                            </span>
                            {post.readTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <motion.div
                            className="flex items-center text-primary text-sm font-medium"
                            whileHover={{ x: 5 }}
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-primary hover:border-primary group"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

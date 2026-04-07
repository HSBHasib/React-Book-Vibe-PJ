import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative text-center">

        {/* Glitch 404 */}
        <motion.h1
          className="text-8xl font-extrabold tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Something went wrong. Page not found.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="px-8 py-3 bg-green-500 rounded-2xl font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Go Back Home
          </Link>
        </motion.div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-20 h-20 bg-green-500/30 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute -bottom-20 -right-20 w-24 h-24 bg-green-400/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

      </div>
    </div>
  )
}

export default ErrorPage







import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Download, Eye } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Portfolio Generator
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/templates" className="text-white/80 hover:text-white transition-colors">
                Templates
              </Link>
              <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link 
                href="/auth/signin" 
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-purple-200 bg-purple-500/10 border border-purple-500/20 mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              30+ Premium Templates Available
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Stunning
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Portfolios
              </span>
              <br />
              In Minutes
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Choose from our collection of premium templates, customize with your content, 
              and download production-ready code. No design skills required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/templates"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Browse Templates
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/dashboard"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all"
              >
                <Eye className="mr-2 h-5 w-5" />
                See Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">⚡</div>
                <div className="text-gray-400">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Templates?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium quality templates with modern designs and cutting-edge features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Animations</h3>
              <p className="text-gray-300">
                Smooth Framer Motion animations and scroll effects that bring your portfolio to life
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Ready-to-Use Code</h3>
              <p className="text-gray-300">
                Download production-ready Next.js and React code with TypeScript support
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fully Customizable</h3>
              <p className="text-gray-300">
                Every template is fully customizable with colors, content, and styling options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of developers who have already built stunning portfolios with our templates
          </p>
          <Link 
            href="/templates"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            Start Building Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-semibold text-lg mb-4 md:mb-0">
              Portfolio Generator
            </div>
            <div className="flex space-x-8 text-gray-400">
              <Link href="/templates" className="hover:text-white transition-colors">
                Templates
              </Link>
              <Link href="/dashboard" className="hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/docs" className="hover:text-white transition-colors">
                Docs
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/10 text-gray-400">
            <p>&copy; 2025 Portfolio Generator. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
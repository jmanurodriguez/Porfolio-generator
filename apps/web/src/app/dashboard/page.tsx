import Link from 'next/link';
// import { auth } from '../../lib/auth';

export default async function Dashboard() {
  // TODO: Re-enable authentication when database is properly configured
  // const session = await auth();
  // if (!session) {
  //   return <p className="p-4">Debes iniciar sesión para acceder al panel.</p>;
  // }
  const session = { user: { name: 'Demo User', email: 'demo@example.com' } };
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Panel de control</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-medium">
          ✨ Premium Templates Available
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/templates" 
          className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Browse Templates</h3>
              <p className="text-sm text-gray-600">Explore our premium collection</p>
            </div>
          </div>
        </Link>

        <Link 
          href="/dashboard/portfolios" 
          className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border border-purple-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">My Portfolios</h3>
              <p className="text-sm text-gray-600">Manage your projects</p>
            </div>
          </div>
        </Link>

        <Link 
          href="/dashboard/templates" 
          className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border border-green-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Template Manager</h3>
              <p className="text-sm text-gray-600">Admin panel & settings</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">30+</div>
            <div className="text-gray-600">Templates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">6</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">2</div>
            <div className="text-gray-600">Premium</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">∞</div>
            <div className="text-gray-600">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function TestDashboard() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Panel de control (Test)</h1>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm px-4 py-2 rounded-full font-medium">
          ✅ Sin Autenticación Requerida
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/dashboard/portfolios"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              📁
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Mis Portfolios</h3>
              <p className="text-sm text-gray-600">Gestiona tus portfolios existentes</p>
            </div>
          </div>
        </Link>
        
        <Link 
          href="/templates"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              🎨
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Templates</h3>
              <p className="text-sm text-gray-600">Explora templates disponibles</p>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="text-center py-8">
        <p className="text-green-600 font-medium">✅ Dashboard funcionando sin autenticación</p>
        <p className="text-sm text-gray-500 mt-2">
          Este es un dashboard de prueba para verificar que funciona sin login
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Layout */}
      <div className="flex h-[calc(100vh-6rem)]">
        {/* Sidebar */}
        <div className="w-64 bg-black p-5 border-r border-gray-800">
          <div className="mb-8">
            <Image
              src="/PULSE LOGO.png"
              alt="Logo"
              width={170}
              height={80}
              className="dark:invert w-auto h-auto"
            />


          </div>
          
<div className="flex flex-col space-y-4">
  {/* Perfil de Usuario */}
  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors">
    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
    <div>
      <p className="text-sm font-medium"></p>Usuario Prueba
      <p className="text-xs text-gray-400">Ver Perfil</p>
    </div>
  </div>

  {/* Navegación */}
  <nav className="space-y-1">
    {[
      { name: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { name: 'Buscar', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
      { name: 'Playlists', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' }
    ].map((item, index) => (
      <a key={index} href="#" className="flex items-center space-x-3 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
        </svg>
        <span className="text-sm font-medium">{item.name}</span>
      </a>
    ))}
  </nav>
</div>

        </div>

        {/* Contenido Principal */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-8">!Bienvenido de nuevo! </h1>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Tarjeta de Canciones */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="bg-gray-600 h-40 rounded mb-4"></div>
                <h3 className="font-semibold">Canción {i + 1}</h3>
                <p className="text-sm text-gray-400">Artista</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Barra de Reproducción */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-900 border-t border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 w-12 h-12 rounded"></div>
            <div>
              <h4 className="font-semibold">Título de Canción</h4>
              <p className="text-sm text-gray-400">Artista</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0016 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Layout({ sidebar, children }) {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white dark:bg-gray-800 p-4 rounded shadow-md">
          {sidebar}
        </aside>

        {/* Contenido principal */}
        <main className="md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
}

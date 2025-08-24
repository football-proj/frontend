// 먼저 이 간단한 Layout으로 테스트해보세요
interface SimpleLayoutProps {
  children: React.ReactNode
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 간단한 사이드바 */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-bold">Football App</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            <li><a href="/" className="block p-2 hover:bg-gray-100 rounded">홈</a></li>
            <li><a href="/teams" className="block p-2 hover:bg-gray-100 rounded">팀</a></li>
            <li><a href="/matches" className="block p-2 hover:bg-gray-100 rounded">경기</a></li>
            <li><a href="/stats" className="block p-2 hover:bg-gray-100 rounded">통계</a></li>
          </ul>
        </nav>
      </div>
      
      {/* 메인 컨텐츠 */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b p-4">
          <h1 className="text-xl font-semibold">메인 페이지</h1>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
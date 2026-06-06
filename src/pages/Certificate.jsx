import { useState, useMemo } from 'react'

import CERTIFICATES from '../CertificateData/certificates.json'
const BASE_URL = 'https://jharkhandchess.in'
const TOURNAMENT_PATH = 'Certificates/State-School-Rapid-Chess-Championship-2025'

const CATEGORY_ORDER = [
  'Under 7 boys', 'Under 7 girls',
  'Under 9 boys', 'Under 9 girls',
  'Under 11 boys', 'Under 11 girls',
  'Under 13 boys', 'Under 13 girls',
  'Under 15 boys', 'Under 15 girls',
  'Under 17 boys', 'Under 17 girls',
]

function parseFile(filename) {
  const base = filename.replace('.pdf', '')
  const parts = base.split('_')
  const rank = parts[parts.length - 1]
  const name = parts.slice(0, -1).join(' ')
  return { name, rank, filename }
}

function buildUrl(category, filename) {
  return `${BASE_URL}/${TOURNAMENT_PATH}/${encodeURIComponent(category)}/${encodeURIComponent(filename)}`
}

function RankBadge({ rank }) {
  const isGold = rank === '1st'
  const isSilver = rank === '2nd'
  const isBronze = rank === '3rd'
  const bg = isGold
    ? 'bg-yellow-400 text-yellow-900'
    : isSilver
    ? 'bg-gray-300 text-gray-800'
    : isBronze
    ? 'bg-amber-600 text-amber-100'
    : 'bg-[#3d2412] text-[#d4a853]'

  return (
    <div className={`flex flex-col items-center justify-center w-14 h-14 rounded shrink-0 font-bold font-serif ${bg}`}>
      <span className="text-[10px] opacity-70 uppercase tracking-wide leading-none">Rank</span>
      <span className="text-base leading-tight">{rank}</span>
    </div>
  )
}

export default function Certificate() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)

  const results = useMemo(() => {
    if (!selectedCategory || !searched) return []
    const files = CERTIFICATES[selectedCategory] || []
    const q = searchQuery.trim().toLowerCase()
    return files
      .map(parseFile)
      .filter(({ name }) => !q || name.toLowerCase().includes(q))
  }, [selectedCategory, searched, searchQuery])

  const handleSearch = () => {
    if (selectedCategory) setSearched(true)
  }

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    setSearched(false)
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] font-serif mt-24">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-[#2c1a0e] overflow-hidden py-12 px-4 text-center">
        {/* Chess board texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Decorative pieces */}
        <span className="absolute left-[6%] top-1/2 -translate-y-1/2 text-[80px] text-[#d4a853] opacity-10 select-none">♟</span>
        <span className="absolute right-[6%] top-1/2 -translate-y-1/2 text-[80px] text-[#d4a853] opacity-10 select-none">♛</span>

        <div className="relative ">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3">
            Jharkhand Chess Association
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-1">
            1<sup className="text-lg">st</sup> Jharkhand State Schools
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4">
            Rapid Chess Championship 2025
          </h2>
          <div className="w-16 h-0.5 bg-[#d4a853] mx-auto mb-4" />
          <p className="text-[#c4a882] text-sm">
            Select your category · Search by name · Download your certificate
          </p>
        </div>
      </div>

      {/* ── Main ─────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">

        {/* Step 1 – Category */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-[#3d2412] text-[#d4a853] flex items-center justify-center text-sm font-bold shrink-0">
              1
            </div>
            <h3 className="text-[#2c1a0e] text-sm font-bold uppercase tracking-widest">
              Select Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORY_ORDER.map((cat) => {
              const isBoys = cat.includes('boys')
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={[
                    'flex items-center gap-1.5 px-4 py-2 rounded text-sm font-serif border-2 transition-all duration-150',
                    active
                      ? 'bg-[#3d2412] border-[#d4a853] text-[#d4a853] font-bold shadow-md'
                      : 'bg-white border-[#c4a882] text-[#5a3a1a] hover:border-[#3d2412] hover:bg-[#fdf0e0]',
                  ].join(' ')}
                >
                  <span className="text-base leading-none">{isBoys ? '♟' : '♛'}</span>
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2 – Search */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={[
              'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 text-[#d4a853] transition-colors duration-200',
              selectedCategory ? 'bg-[#3d2412]' : 'bg-[#a89070]',
            ].join(' ')}>
              2
            </div>
            <h3 className={[
              'text-sm font-bold uppercase tracking-widest transition-colors duration-200',
              selectedCategory ? 'text-[#2c1a0e]' : 'text-[#a89070]',
            ].join(' ')}>
              Search by Name
            </h3>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a89070] text-lg pointer-events-none select-none">♜</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setSearched(false) }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={selectedCategory ? `Enter player name in ${selectedCategory}…` : 'Select a category first…'}
                disabled={!selectedCategory}
                className={[
                  'w-full pl-9 pr-4 py-2.5 border-2 rounded font-serif text-[#2c1a0e] text-sm outline-none transition-colors duration-150',
                  'focus:border-[#d4a853]',
                  selectedCategory
                    ? 'bg-white border-[#c4a882] placeholder-[#a89070]'
                    : 'bg-[#f0e8dc] border-[#ddd0bf] text-[#a89070] cursor-not-allowed',
                ].join(' ')}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={!selectedCategory}
              className={[
                'px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider font-serif transition-all duration-150',
                selectedCategory
                  ? 'bg-[#3d2412] text-[#d4a853] hover:bg-[#5a3a1a] cursor-pointer'
                  : 'bg-[#a89070] text-[#d4c4a8] cursor-not-allowed',
              ].join(' ')}
            >
              Search
            </button>
          </div>
          {selectedCategory && !searchQuery && !searched && (
            <p className="mt-2 text-[#a89070] text-xs italic">
              Leave blank and click Search to view all {CERTIFICATES[selectedCategory]?.length} certificates in this category
            </p>
          )}
        </div>

        {/* Step 3 – Results */}
        {searched && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#3d2412] text-[#d4a853] flex items-center justify-center text-sm font-bold shrink-0">
                3
              </div>
              <h3 className="text-[#2c1a0e] text-sm font-bold uppercase tracking-widest">
                Results
                <span className="ml-2 font-normal normal-case tracking-normal text-[#a89070]">
                  {results.length} certificate{results.length !== 1 ? 's' : ''} found
                  {searchQuery && <> for &ldquo;{searchQuery}&rdquo;</>}
                  {' '}in <em>{selectedCategory}</em>
                </span>
              </h3>
            </div>

            {results.length === 0 ? (
              <div className="py-12 text-center bg-white border-2 border-dashed border-[#c4a882] rounded-lg">
                <div className="text-5xl mb-3 text-[#c4a882]">♞</div>
                <p className="text-[#a89070] text-base italic">
                  No certificates found for &ldquo;{searchQuery}&rdquo; in {selectedCategory}
                </p>
                <p className="text-[#c4a882] text-sm mt-1">Try a partial name or check spelling</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map(({ name, rank, filename }) => (
                  <div
                    key={filename}
                    className="flex items-center justify-between gap-4 flex-wrap px-5 py-4 bg-white border border-[#ddd0bf] border-l-4 border-l-[#d4a853] rounded shadow-sm hover:shadow-md transition-shadow duration-150"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-[180px]">
                      <RankBadge rank={rank} />
                      <div>
                        <p className="font-bold text-[#2c1a0e] text-base font-serif">{name}</p>
                        <p className="text-[#a89070] text-xs mt-0.5">
                          {selectedCategory} &middot; 1st Jharkhand State Schools Rapid Chess Championship 2025
                        </p>
                      </div>
                    </div>
                    <a
                      href={buildUrl(selectedCategory, filename)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#3d2412] text-[#d4a853] rounded text-sm font-bold uppercase tracking-wide font-serif border-2 border-transparent hover:bg-[#5a3a1a] hover:border-[#d4a853] transition-all duration-150 no-underline shrink-0"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V3a1 1 0 011-1z"/>
                        <path d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                      </svg>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

     
    </div>
  )
}

import { useState, useMemo, useEffect, useCallback } from 'react'
import CERTIFICATES from '../../CertificateData/certificates.json'

const BASE_URL = 'https://jharkhandchess.in'

function parseFile(filename) {
  const base = filename.replace('.pdf', '')
  const parts = base.split('_')
  const rank = parts[parts.length - 1]
  const name = parts.slice(0, -1).join(' ')
  return { name, rank, filename }
}

// Helper function to sort ranks numerically
function getRankOrder(rank) {
  const rankMap = {
    '1st': 1,
    '2nd': 2,
    '3rd': 3,
    '4th': 4,
    '5th': 5,
    '6th': 6,
    '7th': 7,
    '8th': 8,
    '9th': 9,
    '10th': 10,
    '11th': 11,
    '12th': 12,
    '13th': 13,
    '14th': 14,
    '15th': 15,
    '16th': 16,
    '17th': 17,
    '18th': 18,
    '19th': 19,
    '20th': 20,
    '21st': 21,
    '22nd': 22,
    '23rd': 23,
    '24th': 24,
    '25th': 25,
    '26th': 26,
    '27th': 27,
    '28th': 28,
    '29th': 29,
    '30th': 30,
    '31st': 31,
    '32nd': 32,
    '33rd': 33,
    '34th': 34,
    '35th': 35,
    '36th': 36,
    '37th': 37,
    '38th': 38,
    '39th': 39,
    '40th': 40,
    '41st': 41,
    '42nd': 42,
    '43rd': 43,
    '44th': 44,
    '45th': 45,
    '46th': 46,
    '47th': 47,
    '48th': 48,
    '49th': 49,
    '50th': 50,
    '51st': 51,
    '52nd': 52,
    '53rd': 53,
    '54th': 54,
    '55th': 55,
    '56th': 56,
    '57th': 57,
    '58th': 58,
    '59th': 59,
    '60th': 60,
    '61st': 61,
    '62nd': 62,
    '63rd': 63,
    '64th': 64,
    '65th': 65,
    '66th': 66,
    '67th': 67,
    '68th': 68,
    '69th': 69,
    '70th': 70,
    '71st': 71,
    '72nd': 72,
    '73rd': 73,
    '74th': 74,
    '75th': 75,
    '76th': 76,
    '77th': 77,
    '78th': 78,
    '79th': 79,
    '80th': 80,
    '81st': 81,
    '82nd': 82,
    '83rd': 83,
    '84th': 84,
    '85th': 85,
    '86th': 86,
    '87th': 87,
    '88th': 88,
    '89th': 89,
    '90th': 90,
    '91st': 91,
    '92nd': 92,
  }
  return rankMap[rank] || 999
}

function buildUrl(basePath, category, filename) {
  if (category === 'Open') {
    return `${BASE_URL}/${basePath}/${encodeURIComponent(filename)}`;
  }
  return `${BASE_URL}/${basePath}/${encodeURIComponent(category)}/${encodeURIComponent(filename)}`;
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

export default function CertificateViewer({ eventId }) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const eventData = CERTIFICATES.events[eventId]
  const categories = eventData?.categories || {}
  const categoryKeys = Object.keys(categories)

  // Auto-select first category when event changes
  useEffect(() => {
    if (categoryKeys.length > 0 && isInitialLoad) {
      setSelectedCategory(categoryKeys[0])
      setIsInitialLoad(false)
    }
  }, [eventId, categoryKeys, isInitialLoad])

  // Reset state when event changes
  useEffect(() => {
    if (eventId) {
      setSearchQuery('')
      setSearched(false)
      setIsInitialLoad(true)
    }
  }, [eventId])

  const results = useMemo(() => {
    if (!selectedCategory || !searched) return []
    const files = categories[selectedCategory] || []
    const q = searchQuery.trim().toLowerCase()
    
    // Parse and filter files
    let parsedFiles = files
      .map(parseFile)
      .filter(({ name }) => !q || name.toLowerCase().includes(q))
    
    // Sort by rank order (1st, 2nd, 3rd, etc.)
    return parsedFiles.sort((a, b) => {
      const orderA = getRankOrder(a.rank)
      const orderB = getRankOrder(b.rank)
      return orderA - orderB
    })
  }, [selectedCategory, searched, searchQuery, categories])

  const handleSearch = useCallback(() => {
    if (selectedCategory) {
      setSearched(true)
    }
  }, [selectedCategory])

  const handleCategoryChange = useCallback((cat) => {
    setSelectedCategory(cat)
    setSearched(false)
    setSearchQuery('')
  }, [])

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value)
    setSearched(false)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }, [handleSearch])

  if (!eventData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4 text-[#c4a882]">♟</div>
        <p className="text-[#a89070] text-lg">Event data not found</p>
      </div>
    )
  }

  return (
    <div className="bg-[#faf6f0] font-serif">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* Step 2 – Category */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-[#3d2412] text-[#d4a853] flex items-center justify-center text-sm font-bold shrink-0">
              2
            </div>
            <h3 className="text-[#2c1a0e] text-sm font-bold uppercase tracking-widest">
              Select Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryKeys.map((cat) => {
              const isBoys = cat.toLowerCase().includes('boys')
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
                  {cat !== 'Open' && (
                    <span className="text-base leading-none">{isBoys ? '♟' : '♛'}</span>
                  )}
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 3 – Search */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={[
              'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 text-[#d4a853] transition-colors duration-200',
              selectedCategory ? 'bg-[#3d2412]' : 'bg-[#a89070]',
            ].join(' ')}>
              3
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
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
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
              Leave blank and click Search to view all {categories[selectedCategory]?.length} certificates in this category
            </p>
          )}
        </div>

        {/* Step 4 – Results */}
        {searched && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#3d2412] text-[#d4a853] flex items-center justify-center text-sm font-bold shrink-0">
                4
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
                          {selectedCategory} &middot; {eventData.name}
                        </p>
                      </div>
                    </div>
                    <a
                      href={buildUrl(eventData.basePath, selectedCategory, filename)}
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
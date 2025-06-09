const ChartsSection = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Insurance Claims */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Claims</h3>
            <div className="h-48 flex items-end justify-center space-x-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <div key={month} className="flex flex-col items-center">
                  <div className="w-6 bg-teal-600 rounded-t" style={{height: `${Math.random() * 120 + 20}px`}}></div>
                  <span className="text-xs text-gray-500 mt-2">{month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Expenses */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Expenses</h3>
            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <path
                  d="M 0 150 Q 100 100 200 120 T 400 80"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 0 150 Q 100 100 200 120 T 400 80 L 400 200 L 0 200 Z"
                  fill="url(#gradient)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}
export default ChartsSection;
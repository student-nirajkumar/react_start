export default function Card({ title, description, tag }) {
  return (
    <div className="group relative w-80 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* gradient top bar */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* tag */}
      {tag && (
        <span className="inline-block mb-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          {tag}
        </span>
      )}

      {/* title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h2>

      {/* description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      {/* button */}
      <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-purple-600 transition">
        Learn more →
      </button>
    </div>
  )
}

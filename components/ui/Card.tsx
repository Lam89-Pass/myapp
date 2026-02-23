interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  category?: string;
}

export default function Card({ title, description, tags, link, category }: CardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {category && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags?.map((tag) => (
          <span key={tag} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} className="text-sm font-semibold text-blue-600 flex items-center gap-2 hover:underline">
          Lihat Detail <span>→</span>
        </a>
      )}
    </div>
  );
}
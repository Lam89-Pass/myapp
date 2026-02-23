interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  category?: string;
}

export default function Card({ title, description, tags, category }: any) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left">
      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
        {category === 'Game' ? '🎮' : '💻'}
      </div>
      <h3 className="text-2xl font-bold text-[#202124] mb-3">{title}</h3>
      <p className="text-[#5f6368] text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags?.map((tag: string) => (
          <span key={tag} className="text-[11px] font-bold uppercase tracking-wider text-google-blue bg-blue-50 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
interface ButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'outline';
}

export default function Button({ text, link, variant = 'primary' }: ButtonProps) {
  const styles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "border border-slate-300 text-slate-700 hover:bg-slate-50";

  return (
    <a href={link} className={`${styles} px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm inline-block`}>
      {text}
    </a>
  );
}
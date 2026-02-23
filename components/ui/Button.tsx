interface ButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'outline';
}

export default function Button({ text, link, variant = 'primary' }: ButtonProps) {
  const styles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50";

  return (
    <a href={link} className={`${styles} px-8 py-3 rounded-full font-bold transition-all duration-300 inline-block`}>
      {text}
    </a>
  );
}
"use client";

interface ScrollToWaitlistProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollToWaitlist({ children, className }: ScrollToWaitlistProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('input[placeholder="Your full name"]')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    setTimeout(() => {
      const input = document.querySelector('input[placeholder="Your full name"]') as HTMLInputElement;
      input?.focus();
    }, 500);
  };

  return (
    <a href="#waitlist" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

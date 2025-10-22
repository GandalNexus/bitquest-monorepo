import bitquestLogo from 'figma:asset/2925f680e8a03a27be201df8e058cd5e900deee4.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
    '2xl': 'h-36',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={bitquestLogo} 
        alt="BitQuest - Learn Bitcoin through Quests" 
        className={`${sizeClasses[size]} w-auto object-contain brightness-110`}
        style={{
          filter: 'brightness(1.1) drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))',
        }}
      />
    </div>
  );
}
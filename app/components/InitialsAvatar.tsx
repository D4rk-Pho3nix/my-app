import React from 'react';

interface InitialsAvatarProps {
  name: string;
  size?: number;
  className?: string;
}

const getInitials = (name: string): string => {
  if (!name) return '?';
  
  // For "Dr. Name Surname" format, skip the "Dr." part
  let processedName = name;
  if (name.toLowerCase().startsWith('dr.')) {
    processedName = name.substring(3).trim();
  }
  
  // Split the name into words and get the first letter of each word
  const words = processedName.split(' ').filter(w => w.length > 0);
  
  if (words.length === 1) {
    // If there's only one word, return the first two letters
    return processedName.substring(0, 2).toUpperCase();
  }
  
  // Return the first letter of the first word and the first letter of the last word
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

// Generate a consistent color based on the name
const getColorFromName = (name: string): string => {
  if (!name) return '#3b82f6'; // Default blue
  
  // Simple hash function to generate a number from a string
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // List of professional, saturated colors
  const colors = [
    '#4f46e5', // indigo-600
    '#2563eb', // blue-600
    '#0891b2', // cyan-600
    '#0d9488', // teal-600
    '#16a34a', // green-600
    '#ca8a04', // yellow-600
    '#ea580c', // orange-600
    '#dc2626', // red-600
    '#c026d3', // fuchsia-600
    '#9333ea', // purple-600
  ];
  
  // Use the hash to pick a color
  return colors[Math.abs(hash) % colors.length];
};

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ name, size = 48, className = '' }) => {
  const initials = getInitials(name);
  const backgroundColor = getColorFromName(name);
  
  return (
    <div 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        fontSize: `${size * 0.4}px`,
        lineHeight: 1,
      }}
      className={`flex items-center justify-center rounded-full text-white font-semibold ${className}`}
      aria-label={`${name}'s avatar`}
    >
      {initials}
    </div>
  );
};

export default InitialsAvatar; 
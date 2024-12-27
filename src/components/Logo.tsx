import React from 'react';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-white dark:bg-gray-900 rounded-lg p-1">
          <Code2 className="h-6 w-6 text-gradient bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        SH
      </span>
    </div>
  );
};

export default Logo;
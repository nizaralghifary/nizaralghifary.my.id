"use client";

import React from "react";

export const GradientText = ({ children, className = '' }) => {
  return (
    <span 
      className={`bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold inline-block ${className}`}
      style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </span>
  );
};
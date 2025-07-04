// src/components/ui/Button.js
export function Button({ children, className = "", ...props }) {
    return (
      <button
        {...props}
        className={`px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
      >
        {children}
      </button>
    );
  }
  
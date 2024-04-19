import React from 'react'; // Import React

function Error({ alerter, isError }) {
  const textClass = isError ? 'text-red-600' : 'text-blue-800'; // Use a variable for the class
  return (
    <div
      class={`flex items-center p-4 mb-4 text-sm ${textClass} rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`}
      role='alert'
    >
      <svg
        class='flex-shrink-0 inline w-4 h-4 me-3'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path
          fill-rule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-7.1 περ-1.41-1.41a1 1 0 00-1.41 1.41L9.6 13.69l-1.41-1.41A1 1 0 007.19 12.29L8.6 13.7a1 1 0 001.41-1.41z'
          clip-rule='evenodd'
        />
      </svg>
      <span class='sr-only'>Error</span>
      <div>
        <span class='font-medium'>Error alert!</span>{' '}
        {/* Update message based on error */}
      </div>
    </div>
  );
}

export default Error; // Export the component

import React from "react";

const StaticRating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 !== 0; // Check for half star
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center space-x-[2px]">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#e8ae00]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.007 6.162h6.462c.969 0 1.371 1.24.588 1.81l-5.231 3.806 2.007 6.162c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.231 3.806c-.785.57-1.84-.197-1.54-1.118l2.007-6.162-5.231-3.806c-.784-.57-.38-1.81.588-1.81h6.462l2.007-6.162z"
          />
        </svg>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <div className="relative h-4 w-4">
          {/* Left half (gold) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute left-0 top-0 h-4 w-4 text-[#e8ae00]"
          >
            <defs>
              <clipPath id="left-half">
                <rect x="0" y="0" width="12" height="24" />
              </clipPath>
            </defs>
            <path
              fill="currentColor"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.007 6.162h6.462c.969 0 1.371 1.24.588 1.81l-5.231 3.806 2.007 6.162c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.231 3.806c-.785.57-1.84-.197-1.54-1.118l2.007-6.162-5.231-3.806c-.784-.57-.38-1.81.588-1.81h6.462l2.007-6.162z"
              clipPath="url(#left-half)"
            />
          </svg>
          {/* Right half (gray) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute left-0 top-0 h-4 w-4 text-gray-400"
          >
            <defs>
              <clipPath id="right-half">
                <rect x="12" y="0" width="12" height="24" />
              </clipPath>
            </defs>
            <path
              fill="currentColor"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.007 6.162h6.462c.969 0 1.371 1.24.588 1.81l-5.231 3.806 2.007 6.162c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.231 3.806c-.785.57-1.84-.197-1.54-1.118l2.007-6.162-5.231-3.806c-.784-.57-.38-1.81.588-1.81h6.462l2.007-6.162z"
              clipPath="url(#right-half)"
            />
          </svg>
        </div>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="0"
          stroke="currentColor"
          className="h-4 w-4 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.007 6.162h6.462c.969 0 1.371 1.24.588 1.81l-5.231 3.806 2.007 6.162c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.231 3.806c-.785.57-1.84-.197-1.54-1.118l2.007-6.162-5.231-3.806c-.784-.57-.38-1.81.588-1.81h6.462l2.007-6.162z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StaticRating;

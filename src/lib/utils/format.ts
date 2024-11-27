/**
 * Formats a date string into a human-readable format
 * Returns relative time for recent dates (e.g., "2h ago", "3d ago")
 * Returns formatted date for older dates (e.g., "Mar 15")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than 60 seconds ago
  if (diffInSeconds < 60) {
    return 'just now';
  }

  // Less than 60 minutes ago
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  }

  // Less than 24 hours ago
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  }

  // Less than 7 days ago
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }

  // Format as "Mar 15" for older dates
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('en-US', options);
} 
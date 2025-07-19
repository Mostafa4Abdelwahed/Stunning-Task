import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const useIdeaSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitIdea = useCallback(async (idea) => {
    if (!idea.trim() || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea: idea.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to create idea');
      }

      const data = await response.json();
      router.push(`/chat?id=${data.id}`);
    } catch (error) {
      console.error('Error creating idea:', error);
      // You can add error handling here (show toast, alert, etc.)
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, router]);

  return {
    isLoading,
    submitIdea
  };
}; 
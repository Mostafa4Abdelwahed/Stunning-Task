import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const useChat = (id) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textIdea, setTextIdea] = useState('');
  const router = useRouter();

  const fetchSections = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/ideas/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch sections');
      }

      const data = await res.json();
      setTextIdea(data.textIdea);

      setMessages([
        { role: 'user', content: data.textIdea },
        {
          role: 'bot',
          content: `index.html`,
          isFile: true,
          sections: data.sections,
        },
      ]);
    } catch (err) {
      console.error('Error fetching sections:', err);
      setMessages([
        { role: 'user', content: 'Your idea' },
        { role: 'bot', content: '❌ Failed to fetch sections.' },
      ]);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  return {
    messages,
    loading,
    textIdea,
    refetch: fetchSections
  };
}; 
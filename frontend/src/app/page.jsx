'use client';
import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { 
  Background, 
  Card, 
  Header, 
  Input, 
  Button 
} from '../components';
import { useIdeaSubmission } from '../hooks/useIdeaSubmission';

export default function Home() {
  const [idea, setIdea] = useState('');
  const { isLoading, submitIdea } = useIdeaSubmission();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitIdea(idea);
  };

  const handleInputChange = (e) => {
    setIdea(e.target.value);
  };

  return (
    <Background>
      <Card>
        <Header />

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            value={idea}
            onChange={handleInputChange}
            placeholder="What's your next big idea?"
            disabled={isLoading}
          />

          <Button
            type="submit"
            disabled={!idea.trim() || isLoading}
            loading={isLoading}
            className="w-full"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Launch Idea
            </span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Button>
        </form>
      </Card>
    </Background>
  );
}
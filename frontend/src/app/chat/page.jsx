'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Lightbulb, Globe, Code, File } from 'lucide-react';
import { 
  Background, 
  Card, 
  Header, 
  Button, 
  Modal, 
  Tabs, 
  Message, 
  LoadingMessage,
  CodeViewer,
  PreviewViewer
} from '../../components';
import { useChat } from '../../hooks/useChat';

export default function ChatPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [showModal, setShowModal] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);
  const [activeTab, setActiveTab] = useState('preview');
  const chatRef = useRef(null);
  const router = useRouter();

  const { messages, loading } = useChat(id);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const handleFileClick = (sections) => {
    setSelectedSections(sections);
    setActiveTab('preview');
    setShowModal(true);
  };

  const tabs = [
    { id: 'preview', label: 'Preview', icon: <Globe className='w-5 h-5' /> },
    { id: 'code', label: 'Source Code', icon: <Code className='w-5 h-5' /> }
  ];

  const getCodeContent = () => {
    return selectedSections?.map(s => s.content.trim()).join('\n\n') || '';
  };

  return (
    <Background className="p-6">
      <div className="relative w-full max-w-2xl">
        <Card maxWidth="max-w-2xl" padding="p-8">
          <Header />

          {/* Chat Messages */}
          <div
            ref={chatRef}
            className="py-14 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent space-y-6 px-2"
          >
            {messages.map((msg, index) => (
              <Message
                key={index}
                message={msg}
                index={index}
                onFileClick={handleFileClick}
              />
            ))}

            {loading && <LoadingMessage />}
          </div>

          {/* New Idea Button */}
          <div className="my-4">
            <Button
              onClick={() => router.push("/")}
              className="w-full"
            >
              <span><Lightbulb className='w-5 h-5' /></span>
              <span>New Idea</span>
            </Button>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="index.html"
        size="xl"
      >

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="p-6 overflow-y-auto max-h-[calc(70vh-140px)]">
          {activeTab === 'preview' && (
            <PreviewViewer sections={selectedSections} />
          )}

          {activeTab === 'code' && (
            <CodeViewer code={getCodeContent()} />
          )}
        </div>
      </Modal>
    </Background>
  );
}
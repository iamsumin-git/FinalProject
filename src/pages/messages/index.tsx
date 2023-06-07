import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import ChatSidebar from '@/features/chat/ChatSidebar';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function MessagesPage() {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [inputText, setInputText] = React.useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <div className='flex h-full'>
      <ChatSidebar />
      <div className='relative flex w-full flex-col'>
        <div className='flex flex-1 flex-col space-y-4 overflow-y-auto px-4'>
          <div className='m-auto text-2xl font-medium'>
            Find Your Perfect Home, Chat with Confidence
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MessagesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};

import { useState } from 'react';
import { I18nProvider } from './i18n/context';
import { Home } from './screens/Home';
import { GuideMe } from './screens/GuideMe';
import { Result } from './screens/Result';
import { TestMe } from './screens/TestMe';
import './styles/pixel.css';

type Screen = 'home' | 'guide' | 'result' | 'test';

function AppContent() {
  const [screen, setScreen] = useState<Screen>('home');
  const [resultNodeId, setResultNodeId] = useState<string>('');

  const handleResult = (nodeId: string) => {
    setResultNodeId(nodeId);
    setScreen('result');
  };

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {screen === 'home' && (
        <Home
          onGuideMe={() => setScreen('guide')}
          onTestMe={() => setScreen('test')}
        />
      )}
      {screen === 'guide' && (
        <GuideMe
          onResult={handleResult}
          onBack={() => setScreen('home')}
        />
      )}
      {screen === 'result' && (
        <Result
          nodeId={resultNodeId}
          onStartOver={() => setScreen('home')}
        />
      )}
      {screen === 'test' && (
        <TestMe
          onBack={() => setScreen('home')}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;

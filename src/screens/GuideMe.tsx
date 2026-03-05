import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { TreeSign } from '../components/TreeSign';
import { ProgressDots } from '../components/ProgressDots';
import { LanguageToggle } from '../components/LanguageToggle';
import { TREE_NODES, TREE_START } from '../data/decision-tree';
import type { QuestionNode, TreeNode } from '../data/decision-tree';

interface GuideMeProps {
  onResult: (nodeId: string) => void;
  onBack: () => void;
}

const NODE_DEPTH: Record<string, number> = {
  q1: 0,
  q2: 1,
  q3: 2,
  q3b: 3,
};

export function GuideMe({ onResult, onBack }: GuideMeProps) {
  const { t, isArabic } = useI18n();
  const [currentNodeId, setCurrentNodeId] = useState<string>(TREE_START);
  const [history, setHistory] = useState<string[]>([]);

  const currentNode: TreeNode = TREE_NODES[currentNodeId];

  if (currentNode.type === 'result') {
    onResult(currentNodeId);
    return null;
  }

  const node = currentNode as QuestionNode;
  const depth = NODE_DEPTH[currentNodeId] ?? 0;

  function handleYes() {
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(node.yes);
  }

  function handleNo() {
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(node.no);
  }

  function handleBack() {
    if (history.length === 0) {
      onBack();
    } else {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setCurrentNodeId(prev);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        backgroundColor: '#faf3e0',
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          flexShrink: 0,
        }}
      >
        <button
          onClick={handleBack}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.65rem',
            color: '#faf3e0',
            backgroundColor: '#8B4513',
            border: 'none',
            boxShadow: '4px 4px 0 0 #5c2d0a',
            padding: '10px 16px',
            cursor: 'pointer',
            minHeight: 40,
          }}
          onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
        >
          {t('back' as any)}
        </button>
        <LanguageToggle />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          gap: '24px',
          overflow: 'auto',
          minHeight: 0,
        }}
      >
        {/* TreeSign */}
        <TreeSign
          question={t(node.questionKey as any)}
          questionAr={t(node.questionArKey as any)}
          subtext={node.subtextKey ? t(node.subtextKey as any) : undefined}
          isArabic={isArabic}
        />

        {/* YES / NO buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={handleYes}
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.3rem' : '0.7rem',
              color: '#faf3e0',
              backgroundColor: '#4a7c23',
              border: 'none',
              boxShadow: '4px 4px 0 0 #2d5016',
              minHeight: 52,
              minWidth: 110,
              cursor: 'pointer',
              padding: '12px 18px',
            }}
            onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
            onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
            onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
            onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          >
            {t(`${currentNodeId}Yes` as any)}
          </button>

          <button
            onClick={handleNo}
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.3rem' : '0.7rem',
              color: '#faf3e0',
              backgroundColor: '#d97706',
              border: 'none',
              boxShadow: '4px 4px 0 0 #92400e',
              minHeight: 52,
              minWidth: 110,
              cursor: 'pointer',
              padding: '12px 18px',
            }}
            onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
            onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
            onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
            onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          >
            {t(`${currentNodeId}No` as any)}
          </button>
        </div>
      </div>

      {/* Bottom: ProgressDots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          flexShrink: 0,
        }}
      >
        <ProgressDots total={4} current={depth} />
      </div>
    </div>
  );
}

export type NodeType = 'question' | 'result';

export interface QuestionNode {
  id: string;
  type: 'question';
  questionKey: string;
  questionArKey: string;
  subtextKey?: string;
  subtextArKey?: string;
  yes: string; // next node id
  no: string;  // next node id
}

export interface ResultNode {
  id: string;
  type: 'result';
  timing: 'before' | 'after' | 'none';
  titleKey: string;
  rulingKey: string;
  detailKey: string;
}

export type TreeNode = QuestionNode | ResultNode;

export const TREE_NODES: Record<string, TreeNode> = {
  q1: {
    id: 'q1',
    type: 'question',
    questionKey: 'q1',
    questionArKey: 'q1',
    subtextKey: 'q1Sub',
    subtextArKey: 'q1Sub',
    yes: 'result_added',
    no: 'q2',
  },
  q2: {
    id: 'q2',
    type: 'question',
    questionKey: 'q2',
    questionArKey: 'q2',
    subtextKey: 'q2Sub',
    subtextArKey: 'q2Sub',
    yes: 'result_forgot',
    no: 'q3',
  },
  q3: {
    id: 'q3',
    type: 'question',
    questionKey: 'q3',
    questionArKey: 'q3',
    subtextKey: 'q3Sub',
    subtextArKey: 'q3Sub',
    yes: 'q3b',
    no: 'result_none',
  },
  q3b: {
    id: 'q3b',
    type: 'question',
    questionKey: 'q3b',
    questionArKey: 'q3b',
    subtextKey: 'q3bSub',
    subtextArKey: 'q3bSub',
    yes: 'result_unsure_likely',
    no: 'result_unsure_equal',
  },
  result_added: {
    id: 'result_added',
    type: 'result',
    timing: 'after',
    titleKey: 'result1Title',
    rulingKey: 'result1Ruling',
    detailKey: 'result1Detail',
  },
  result_forgot: {
    id: 'result_forgot',
    type: 'result',
    timing: 'before',
    titleKey: 'result2Title',
    rulingKey: 'result2Ruling',
    detailKey: 'result2Detail',
  },
  result_unsure_likely: {
    id: 'result_unsure_likely',
    type: 'result',
    timing: 'after',
    titleKey: 'result3aTitle',
    rulingKey: 'result3aRuling',
    detailKey: 'result3aDetail',
  },
  result_unsure_equal: {
    id: 'result_unsure_equal',
    type: 'result',
    timing: 'before',
    titleKey: 'result3bTitle',
    rulingKey: 'result3bRuling',
    detailKey: 'result3bDetail',
  },
  result_none: {
    id: 'result_none',
    type: 'result',
    timing: 'none',
    titleKey: 'resultNoIssue',
    rulingKey: 'resultNoIssueDetail',
    detailKey: 'resultNoIssueDetail',
  },
};

export const TREE_START = 'q1';
export const QUESTION_SEQUENCE = ['q1', 'q2', 'q3', 'q3b'];

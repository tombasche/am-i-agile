import React from 'react';
import { QuestionsAsked } from './Answer';
import { AnswersGiven } from './AnswersGiven';

export const Verdict = ({
  verdict,
  questions,
}: {
  verdict: boolean;
  questions: QuestionsAsked;
}) => {
  return (
    <div>
      <h1>{verdict ? 'Yes! 😀' : 'No 😔'}</h1>
      {!verdict && (
        <div>
          <p style={{ fontSize: '24px' }}>
            Guess it's time to reread the{' '}
            <a
              style={{ color: 'white' }}
              href="https://agilemanifesto.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agile Manifesto!
            </a>
          </p>
          <AnswersGiven questions={questions} />
        </div>
      )}
    </div>
  );
};

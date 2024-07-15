import React from 'react';

const TextGenerationPromptResponse = ({ prompt, response }) => {
  console.log(`Rendered prompt: ${prompt}`);
  return (
    <div>
      <p><strong>Prompt:</strong> {prompt}</p>
      <p><strong>Response:</strong> {response}</p>
      <hr />
    </div>
  );
};

export default React.memo(TextGenerationPromptResponse);
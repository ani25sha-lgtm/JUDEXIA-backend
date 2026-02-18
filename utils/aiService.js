const analyzeCaseWithAI = async (title, description) => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey || apiKey === 'your_huggingface_api_key_here') {
    console.log('Hugging Face API key not configured. Returning dummy data.');
    return null;
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `Legal Case Analysis: ${title}\n\nDescription: ${description}\n\nProvide legal analysis including applicable laws, case type, and recommended actions.`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('AI Analysis Error:', error.message);
    return null;
  }
};

const getLegalAnswerFromAI = async (question) => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey || apiKey === 'your_huggingface_api_key_here') {
    console.log('Hugging Face API key not configured. Returning dummy data.');
    return null;
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-large', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `As a legal expert in Indian law, answer this question: ${question}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('AI Mentor Error:', error.message);
    return null;
  }
};

const simplifyTextWithAI = async (text) => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey || apiKey === 'your_huggingface_api_key_here') {
    console.log('Hugging Face API key not configured. Returning dummy data.');
    return null;
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `Simplify this legal document in plain English: ${text}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Document Simplification Error:', error.message);
    return null;
  }
};

const generateNoticeWithAI = async (noticeType, details) => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey || apiKey === 'your_huggingface_api_key_here') {
    console.log('Hugging Face API key not configured. Returning dummy data.');
    return null;
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `Generate a ${noticeType} with these details: ${details}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Notice Generation Error:', error.message);
    return null;
  }
};

module.exports = {
  analyzeCaseWithAI,
  getLegalAnswerFromAI,
  simplifyTextWithAI,
  generateNoticeWithAI
};

exports.askMentor = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: 'Question is required'
      });
    }

    const dummyAnswer = {
      question: question,
      answer: `Based on Indian law, here's a comprehensive answer to your question:\n\nThe legal framework governing this matter involves several key aspects. Under Indian jurisprudence, the principles established by the Supreme Court in various landmark cases provide clear guidance.\n\nKey Points:\n1. The Constitution of India guarantees fundamental rights that are relevant to this situation.\n2. Specific statutes like the Indian Penal Code (IPC), Criminal Procedure Code (CrPC), or relevant civil laws apply.\n3. Recent amendments and judicial interpretations have clarified the position further.\n\nPractical Implications:\n- You should consider consulting with a qualified lawyer for your specific situation\n- Documentation and evidence are crucial in legal matters\n- Time limitations (statute of limitations) may apply\n\nRelevant Case Law:\n- Landmark judgments have established precedents in similar situations\n- Courts have consistently held that certain principles must be followed\n\nThis is general legal information and should not be construed as legal advice for your specific situation.`,
      relatedTopics: [
        'Constitutional Law',
        'Criminal Procedure',
        'Civil Rights',
        'Contract Law'
      ],
      confidence: 0.85,
      sources: [
        'Constitution of India',
        'Indian Penal Code, 1860',
        'Supreme Court Judgments Database'
      ],
      followUpQuestions: [
        'What are the time limits for filing such cases?',
        'What documents are typically required?',
        'Can this matter be resolved through alternative dispute resolution?'
      ],
      xpEarned: 15
    };

    res.status(200).json({
      success: true,
      data: dummyAnswer
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing question',
      error: error.message
    });
  }
};

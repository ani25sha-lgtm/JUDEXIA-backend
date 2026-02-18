exports.getQuiz = async (req, res) => {
  try {
    const dummyQuestions = [
      {
        id: 1,
        question: 'What is the maximum period of imprisonment under Section 302 IPC?',
        options: [
          'Life imprisonment',
          'Death penalty or life imprisonment',
          '14 years',
          '20 years'
        ],
        correctAnswer: 1,
        category: 'Criminal Law',
        difficulty: 'Medium',
        xpReward: 20
      },
      {
        id: 2,
        question: 'Which Article of the Indian Constitution deals with Right to Equality?',
        options: [
          'Article 19',
          'Article 21',
          'Article 14',
          'Article 32'
        ],
        correctAnswer: 2,
        category: 'Constitutional Law',
        difficulty: 'Easy',
        xpReward: 10
      },
      {
        id: 3,
        question: 'What is the limitation period for filing a civil suit for recovery of money?',
        options: [
          '1 year',
          '2 years',
          '3 years',
          '5 years'
        ],
        correctAnswer: 2,
        category: 'Civil Law',
        difficulty: 'Medium',
        xpReward: 15
      },
      {
        id: 4,
        question: 'Under which Section of IPC is defamation defined?',
        options: [
          'Section 499',
          'Section 500',
          'Section 504',
          'Section 509'
        ],
        correctAnswer: 0,
        category: 'Criminal Law',
        difficulty: 'Hard',
        xpReward: 25
      },
      {
        id: 5,
        question: 'What is the minimum age for marriage for women in India?',
        options: [
          '16 years',
          '18 years',
          '21 years',
          '25 years'
        ],
        correctAnswer: 1,
        category: 'Family Law',
        difficulty: 'Easy',
        xpReward: 10
      }
    ];

    res.status(200).json({
      success: true,
      message: 'Quiz questions fetched successfully',
      totalQuestions: dummyQuestions.length,
      totalXP: dummyQuestions.reduce((sum, q) => sum + q.xpReward, 0),
      questions: dummyQuestions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options,
        category: q.category,
        difficulty: q.difficulty,
        xpReward: q.xpReward
      }))
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz',
      error: error.message
    });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: 'Answers array is required'
      });
    }

    const correctAnswers = [1, 2, 2, 0, 1];
    const xpPerQuestion = [20, 10, 15, 25, 10];

    let score = 0;
    let totalXP = 0;
    const results = answers.map((answer, index) => {
      const isCorrect = answer === correctAnswers[index];
      if (isCorrect) {
        score++;
        totalXP += xpPerQuestion[index];
      }
      return {
        questionId: index + 1,
        yourAnswer: answer,
        correctAnswer: correctAnswers[index],
        isCorrect: isCorrect,
        xpEarned: isCorrect ? xpPerQuestion[index] : 0
      };
    });

    const percentage = (score / correctAnswers.length) * 100;
    let newRank = 'Beginner';

    if (percentage >= 80) newRank = 'Expert';
    else if (percentage >= 60) newRank = 'Advanced';
    else if (percentage >= 40) newRank = 'Intermediate';

    res.status(200).json({
      success: true,
      message: 'Quiz submitted successfully',
      results: {
        score: score,
        totalQuestions: correctAnswers.length,
        percentage: percentage.toFixed(2),
        xpEarned: totalXP,
        newXP: 250 + totalXP,
        newRank: newRank,
        detailedResults: results
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting quiz',
      error: error.message
    });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const dummyDashboard = {
      user: {
        id: 'dummy-user-id',
        email: 'user@example.com',
        xp: 250,
        rank: 'Intermediate',
        level: 5
      },
      stats: {
        casesResolved: 12,
        quizzesTaken: 8,
        documentsSimplified: 5,
        mentorQuestionsAsked: 15
      },
      availableFeatures: [
        'AI Case Studio',
        'AI Legal Mentor',
        'Quiz Platform',
        'Case Library',
        'Document Simplifier',
        'Draft Notice Generator'
      ],
      recentActivity: [
        {
          type: 'quiz',
          description: 'Completed Constitutional Law Quiz',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          xpEarned: 50
        },
        {
          type: 'case',
          description: 'Analyzed property dispute case',
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
          xpEarned: 30
        },
        {
          type: 'mentor',
          description: 'Asked about contract law',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
          xpEarned: 10
        }
      ],
      nextLevelXP: 300
    };

    res.status(200).json({
      success: true,
      data: dummyDashboard
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data',
      error: error.message
    });
  }
};

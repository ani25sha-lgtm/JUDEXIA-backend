exports.analyzeComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title and description are required'
      });
    }

    const dummyAnalysis = {
      caseId: Math.random().toString(36).substr(2, 9),
      title: title,
      legalAnalysis: {
        applicableLaws: [
          'Indian Penal Code Section 420 - Cheating',
          'Consumer Protection Act, 2019',
          'Contract Act, 1872 - Section 73'
        ],
        caseType: 'Civil/Consumer',
        jurisdiction: 'District Court',
        estimatedTimeline: '6-12 months',
        strengthOfCase: 'Medium to High'
      },
      recommendedActions: [
        'File a consumer complaint with the District Consumer Forum',
        'Gather documentary evidence (receipts, contracts, communications)',
        'Send a legal notice to the opposite party',
        'Consider mediation before proceeding to trial'
      ],
      precedentCases: [
        {
          title: 'Consumer Forum vs XYZ Corp',
          citation: '2021 SCC 123',
          relevance: 'High'
        },
        {
          title: 'ABC Ltd vs Consumer Protection Council',
          citation: '2020 DHC 456',
          relevance: 'Medium'
        }
      ],
      nextSteps: [
        'Draft a formal complaint',
        'Collect supporting documents',
        'Consult with a lawyer for case filing',
        'File the case within limitation period'
      ],
      estimatedCosts: {
        courtFees: 'Rs. 5,000 - 10,000',
        lawyerFees: 'Rs. 20,000 - 50,000',
        miscellaneous: 'Rs. 5,000'
      }
    };

    res.status(200).json({
      success: true,
      message: 'AI analysis completed',
      data: dummyAnalysis
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error analyzing complaint',
      error: error.message
    });
  }
};

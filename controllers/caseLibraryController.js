exports.getCases = async (req, res) => {
  try {
    const dummyCases = [
      {
        id: 1,
        title: 'Kesavananda Bharati vs State of Kerala',
        summary: 'This landmark case established the basic structure doctrine, which holds that certain fundamental features of the Constitution cannot be altered or destroyed through amendments by Parliament.',
        law: 'Constitutional Law - Article 368',
        category: 'Constitutional',
        year: 1973,
        citation: 'AIR 1973 SC 1461',
        importance: 'Landmark',
        keywords: ['basic structure', 'constitutional amendments', 'fundamental rights']
      },
      {
        id: 2,
        title: 'Vishaka vs State of Rajasthan',
        summary: 'This case laid down guidelines for prevention of sexual harassment of women at workplace, which later became the basis for the Sexual Harassment of Women at Workplace Act, 2013.',
        law: 'Constitutional Law - Article 14, 19, 21',
        category: 'Constitutional',
        year: 1997,
        citation: 'AIR 1997 SC 3011',
        importance: 'Landmark',
        keywords: ['sexual harassment', 'workplace', 'women rights']
      },
      {
        id: 3,
        title: 'Mohd. Ahmed Khan vs Shah Bano Begum',
        summary: 'This case addressed the rights of Muslim women to alimony under Section 125 of CrPC and sparked a national debate on uniform civil code.',
        law: 'Criminal Procedure Code - Section 125',
        category: 'Family',
        year: 1985,
        citation: 'AIR 1985 SC 945',
        importance: 'Important',
        keywords: ['maintenance', 'divorce', 'muslim law']
      },
      {
        id: 4,
        title: 'State of Maharashtra vs Madhukar Narayan',
        summary: 'This case clarified the scope of Section 304B IPC dealing with dowry death and established important precedents for burden of proof.',
        law: 'Indian Penal Code - Section 304B',
        category: 'Criminal',
        year: 1991,
        citation: 'AIR 1991 SC 207',
        importance: 'Important',
        keywords: ['dowry death', 'burden of proof', 'criminal law']
      },
      {
        id: 5,
        title: 'Carlill vs Carbolic Smoke Ball Company',
        summary: 'A famous English contract law case that established principles of unilateral contracts and consideration, widely followed in Indian courts.',
        law: 'Contract Act - Offer and Acceptance',
        category: 'Contract',
        year: 1893,
        citation: '[1893] 1 QB 256',
        importance: 'Reference',
        keywords: ['unilateral contract', 'offer', 'acceptance']
      },
      {
        id: 6,
        title: 'M.C. Mehta vs Union of India',
        summary: 'Series of cases dealing with environmental protection, establishing the polluter pays principle and expanding the scope of Article 21 to include right to clean environment.',
        law: 'Constitutional Law - Article 21, 32',
        category: 'Environmental',
        year: 1987,
        citation: 'AIR 1987 SC 1086',
        importance: 'Landmark',
        keywords: ['environment', 'pollution', 'public interest litigation']
      },
      {
        id: 7,
        title: 'K.M. Nanavati vs State of Maharashtra',
        summary: 'The last jury trial in India, this famous case dealt with murder and grave provocation, ultimately leading to abolition of jury trials.',
        law: 'Indian Penal Code - Section 302, 300',
        category: 'Criminal',
        year: 1962,
        citation: 'AIR 1962 SC 605',
        importance: 'Historic',
        keywords: ['murder', 'jury trial', 'provocation']
      },
      {
        id: 8,
        title: 'Salomon vs Salomon & Co Ltd',
        summary: 'Landmark company law case establishing the principle of separate legal entity and limited liability of companies.',
        law: 'Company Law - Separate Legal Entity',
        category: 'Corporate',
        year: 1897,
        citation: '[1897] AC 22',
        importance: 'Landmark',
        keywords: ['corporate personality', 'limited liability', 'company law']
      }
    ];

    const { category, search } = req.query;

    let filteredCases = dummyCases;

    if (category) {
      filteredCases = filteredCases.filter(c =>
        c.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredCases = filteredCases.filter(c =>
        c.title.toLowerCase().includes(searchLower) ||
        c.summary.toLowerCase().includes(searchLower) ||
        c.keywords.some(k => k.toLowerCase().includes(searchLower))
      );
    }

    res.status(200).json({
      success: true,
      total: filteredCases.length,
      data: filteredCases
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching case library',
      error: error.message
    });
  }
};

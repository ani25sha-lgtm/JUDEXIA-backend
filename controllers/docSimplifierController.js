exports.simplifyDocument = async (req, res) => {
  try {
    if (!req.file && !req.body.text) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a document or provide text to simplify'
      });
    }

    const fileName = req.file ? req.file.originalname : 'Direct Text Input';
    const fileSize = req.file ? req.file.size : req.body.text.length;

    const dummySimplification = {
      original: {
        fileName: fileName,
        fileSize: fileSize,
        uploadedAt: new Date()
      },
      simplified: {
        title: 'Simplified Legal Document',
        summary: 'This document is a legal agreement between two parties regarding property transfer.',
        simplifiedText: `
**Plain English Summary:**

This is an agreement for transferring property ownership from one person to another.

**Main Points:**
1. **Who is involved:** The seller (Person A) and the buyer (Person B)
2. **What is being sold:** A residential property located at [address]
3. **Price:** The agreed price is [amount]
4. **Payment terms:** Payment will be made in [installments/lump sum]
5. **Timeline:** The transfer will be completed within [time period]

**Your Rights:**
- You have the right to inspect the property before finalizing
- You can withdraw within the cooling-off period (if applicable)
- You are entitled to receive all relevant property documents

**Your Obligations:**
- Pay the agreed amount on time
- Complete all necessary paperwork
- Pay applicable taxes and registration fees

**Important Terms Explained:**
- **Consideration:** This means the price or payment for the property
- **Conveyance:** This is the legal process of transferring property ownership
- **Encumbrance:** Any claims or debts attached to the property

**What Happens Next:**
1. Review this agreement carefully
2. Sign the document if you agree to all terms
3. Make the payment as per agreed schedule
4. Complete the registration process
5. Receive the property documents

**Warning:** This is a legally binding document. Once signed, both parties must fulfill their obligations. If you have any doubts, consult a lawyer before signing.
        `,
        keyTerms: [
          { term: 'Consideration', meaning: 'The price or value exchanged in a contract' },
          { term: 'Party of First Part', meaning: 'The seller or first person in the agreement' },
          { term: 'Executed', meaning: 'Signed and made legally valid' },
          { term: 'Force Majeure', meaning: 'Unforeseeable circumstances preventing contract fulfillment' }
        ],
        complexity: 'High',
        readabilityScore: 85,
        estimatedReadingTime: '5 minutes'
      },
      aiInsights: [
        'This document contains standard property transfer clauses',
        'No unusual or concerning terms detected',
        'All essential elements of a valid contract are present',
        'Consider getting legal advice if property value is significant'
      ]
    };

    res.status(200).json({
      success: true,
      message: 'Document simplified successfully',
      data: dummySimplification
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error simplifying document',
      error: error.message
    });
  }
};

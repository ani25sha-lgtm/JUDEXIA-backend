exports.generateNotice = async (req, res) => {
  try {
    const { noticeType, recipientName, senderName, details } = req.body;

    if (!noticeType) {
      return res.status(400).json({
        success: false,
        message: 'Notice type is required'
      });
    }

    const noticeTemplates = {
      'legal-notice': `
LEGAL NOTICE

To,
${recipientName || '[Recipient Name]'}
[Recipient Address]

Date: ${new Date().toLocaleDateString('en-IN')}

Subject: Legal Notice for [Specify Cause of Action]

Dear Sir/Madam,

NOTICE UNDER [Specify Section of Law]

1. I/We, ${senderName || '[Sender Name]'}, residing at [Sender Address], through this legal notice, hereby inform you that:

2. FACTS OF THE CASE:
   ${details || 'You have committed [specify the wrongful act/breach/default] which has caused loss and damage to my/our client.'}

3. LEGAL POSITION:
   Your above-mentioned acts/omissions constitute a breach of [specify contract/statute/duty] and are legally actionable under [relevant provisions of law].

4. DEMAND:
   You are hereby called upon to [specify the relief sought - pay amount/stop action/perform obligation] within 15 days from the receipt of this notice.

5. CONSEQUENCES:
   Please note that if you fail to comply with this notice within the stipulated time, my/our client shall be constrained to initiate appropriate legal proceedings against you without any further notice, at your sole risk as to costs and consequences.

This notice is issued without prejudice to all rights, remedies, and contentions of my/our client, all of which are expressly reserved.

Yours faithfully,

[Signature]
${senderName || '[Sender Name/Advocate Name]'}
[Address and Contact Details]
      `,
      'demand-notice': `
DEMAND NOTICE

To,
${recipientName || '[Recipient Name]'}
[Recipient Address]

Date: ${new Date().toLocaleDateString('en-IN')}

Subject: Demand for Payment of Outstanding Dues

Dear Sir/Madam,

1. This is with reference to the outstanding payment of Rs. [Amount] (Rupees [Amount in Words]) which was due on [Due Date].

2. DETAILS OF TRANSACTION:
   ${details || 'As per our agreement/invoice/contract dated [Date], you were required to make payment of the above-mentioned amount.'}

3. PAYMENT DEMAND:
   Despite repeated requests and reminders, you have failed to make the payment. You are hereby demanded to pay the outstanding amount of Rs. [Amount] within 7 days from the receipt of this notice.

4. MODE OF PAYMENT:
   The payment should be made through [specify mode - cheque/bank transfer/demand draft] in favor of ${senderName || '[Payee Name]'}.

5. LEGAL ACTION:
   In case of non-compliance, we shall be compelled to initiate legal proceedings for recovery of the said amount along with interest at [Rate]% per annum and costs, without any further notice to you.

Please treat this matter with utmost urgency.

Yours faithfully,

[Signature]
${senderName || '[Sender Name]'}
[Contact Details]
      `,
      'eviction-notice': `
EVICTION NOTICE

To,
${recipientName || '[Tenant Name]'}
[Property Address]

Date: ${new Date().toLocaleDateString('en-IN')}

Subject: Notice to Vacate the Premises

Dear Sir/Madam,

1. You are hereby notified that you are required to vacate and deliver vacant possession of the premises situated at [Property Address] which you are currently occupying as a tenant.

2. GROUNDS FOR EVICTION:
   ${details || 'The grounds for eviction are as follows: [Specify grounds - non-payment of rent/unauthorized subletting/requirement of premises for personal use/breach of tenancy terms]'}

3. NOTICE PERIOD:
   You are hereby given [30/60/90] days' notice from the date of receipt of this notice to vacate the said premises and hand over peaceful and vacant possession to the undersigned.

4. RENT AND DUES:
   All outstanding rent and other charges, if any, should be paid before vacating the premises. An account statement is enclosed for your reference.

5. CONDITION OF PREMISES:
   The premises should be handed over in the same condition as it was given to you, subject to normal wear and tear.

6. LEGAL PROCEEDINGS:
   Failure to comply with this notice shall compel me/us to initiate eviction proceedings under the applicable Rent Control Act without any further notice, at your cost and consequences.

Kindly acknowledge receipt of this notice and confirm your compliance.

Yours faithfully,

[Signature]
${senderName || '[Landlord Name]'}
[Contact Details]
      `,
      'cease-and-desist': `
CEASE AND DESIST NOTICE

To,
${recipientName || '[Recipient Name]'}
[Recipient Address]

Date: ${new Date().toLocaleDateString('en-IN')}

Subject: Notice to Cease and Desist from [Specify Wrongful Act]

Dear Sir/Madam,

1. I/We, ${senderName || '[Sender Name]'}, hereby demand that you immediately CEASE AND DESIST from [specify the wrongful activity - copyright infringement/trademark violation/defamation/harassment/unauthorized use].

2. DETAILS OF INFRINGEMENT:
   ${details || 'It has come to our notice that you are engaged in [describe the specific wrongful acts] which constitutes a violation of [specify rights - intellectual property rights/privacy rights/contractual obligations].'}

3. LEGAL RIGHTS:
   Please be informed that [specify the protected right - copyright/trademark/patent/trade secret] belongs exclusively to my/our client and any unauthorized use amounts to infringement under [relevant law].

4. IMMEDIATE ACTION REQUIRED:
   You are hereby directed to:
   a) Immediately cease all activities relating to [specify]
   b) Remove/destroy all materials containing [specify]
   c) Provide written confirmation of compliance within 7 days

5. DAMAGES AND RELIEF:
   You are liable to pay damages for the losses suffered by my/our client due to your wrongful acts. The quantum of damages is being separately assessed.

6. LEGAL CONSEQUENCES:
   This notice is issued without prejudice to our right to seek injunction and/or damages through appropriate legal proceedings if you fail to comply immediately.

Take notice that any further violation shall result in immediate legal action.

Yours faithfully,

[Signature]
${senderName || '[Sender Name/Advocate Name]'}
[Contact Details]
      `
    };

    const noticeContent = noticeTemplates[noticeType] || noticeTemplates['legal-notice'];

    res.status(200).json({
      success: true,
      message: 'Notice draft generated successfully',
      data: {
        noticeType: noticeType,
        generatedAt: new Date(),
        content: noticeContent,
        instructions: [
          'Review the draft carefully and fill in all placeholder fields marked with [ ]',
          'Customize the content according to your specific situation',
          'Ensure all factual details are accurate',
          'Consider consulting a lawyer before sending',
          'Send the notice through registered post with acknowledgment due',
          'Keep copies of the notice and proof of delivery for records'
        ],
        legalTips: [
          'Legal notices should be clear, concise, and factual',
          'Avoid using emotional or threatening language',
          'Specify exact dates, amounts, and details',
          'Give reasonable time for compliance',
          'Maintain a copy for future legal proceedings',
          'Consider sending through a lawyer for better legal impact'
        ]
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error generating notice',
      error: error.message
    });
  }
};

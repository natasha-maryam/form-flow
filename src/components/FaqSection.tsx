import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does FormFlow work?',
      answer: 'FormFlow is a visual form builder that lets you create responsive forms using drag-and-drop. Simply choose a template or start from scratch, customize your fields, and embed the form anywhere with our simple code snippet.',
    },
    {
      question: 'Do I need coding skills to use FormFlow?',
      answer: 'Not at all! FormFlow is designed for everyone. Our visual builder requires no coding knowledge. However, developers can access the clean HTML/CSS output and use our API for advanced customizations.',
    },
    {
      question: 'How do I collect form submissions?',
      answer: 'Form submissions are automatically stored in your FormFlow dashboard. You can view them online, export to CSV, or set up webhook integrations to send data to your preferred tools like email, CRM, or database.',
    },
    {
      question: 'Can I customize the form styling?',
      answer: 'Yes! FormFlow provides extensive customization options. You can modify colors, fonts, spacing, and layout. Pro users can add custom CSS and remove FormFlow branding for a fully branded experience.',
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Absolutely! Our free plan includes 3 forms and 100 submissions per month, perfect for personal projects and small businesses. You can upgrade anytime as your needs grow.',
    },
    {
      question: 'What integrations are available?',
      answer: 'FormFlow integrates with popular tools like Mailchimp, Slack, Google Sheets, Zapier, and many more. Our webhook system allows you to connect to virtually any service that accepts HTTP requests.',
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. All data is encrypted in transit and at rest. We\'re GDPR compliant and offer features like spam protection, SSL certificates, and regular security audits.',
    },
    {
      question: 'Can I export my forms?',
      answer: 'Yes! You can export your form data as CSV, and with our Pro plan, you can also export the complete HTML/CSS code to host the forms on your own servers if needed.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently asked{' '}
            <span className="logo-gradient">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FormFlow
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-medium"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
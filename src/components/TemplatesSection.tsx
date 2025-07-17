import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const TemplatesSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Contact', 'Signup', 'Survey'];
  
  const templates = [
    {
      id: 1,
      title: 'Contact Form',
      category: 'Contact',
      description: 'Simple contact form with name, email, and message fields',
      fields: ['Name', 'Email', 'Message'],
      color: 'bg-blue-500/10 border-blue-200',
    },
    {
      id: 2,
      title: 'Newsletter Signup',
      category: 'Signup',
      description: 'Collect email subscribers with optional name field',
      fields: ['Email', 'First Name', 'Subscribe'],
      color: 'bg-purple-500/10 border-purple-200',
    },
    {
      id: 3,
      title: 'Job Application',
      category: 'Contact',
      description: 'Comprehensive job application with file upload',
      fields: ['Personal Info', 'Resume', 'Cover Letter'],
      color: 'bg-green-500/10 border-green-200',
    },
    {
      id: 4,
      title: 'Feedback Survey',
      category: 'Survey',
      description: 'Customer feedback with rating and comments',
      fields: ['Rating', 'Comments', 'Recommendation'],
      color: 'bg-orange-500/10 border-orange-200',
    },
    {
      id: 5,
      title: 'Event Registration',
      category: 'Signup',
      description: 'Event signup with attendee details',
      fields: ['Name', 'Email', 'Tickets', 'Dietary'],
      color: 'bg-pink-500/10 border-pink-200',
    },
    {
      id: 6,
      title: 'Product Survey',
      category: 'Survey',
      description: 'Product feedback and feature requests',
      fields: ['Usage', 'Features', 'Suggestions'],
      color: 'bg-indigo-500/10 border-indigo-200',
    },
  ];

  const filteredTemplates = activeTab === 'All' 
    ? templates 
    : templates.filter(template => template.category === activeTab);

  return (
    <section id="templates" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready-to-use{' '}
            <span className="logo-gradient">Templates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jump-start your forms with our professionally designed templates
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-secondary p-1 rounded-lg">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "btn-gradient" : ""}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <Card
              key={template.id}
              className={`hover-lift group cursor-pointer ${template.color} transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {template.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {template.fields.map((field) => (
                      <div
                        key={field}
                        className="h-8 bg-background rounded border border-border flex items-center px-3"
                      >
                        <span className="text-xs text-muted-foreground">{field}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
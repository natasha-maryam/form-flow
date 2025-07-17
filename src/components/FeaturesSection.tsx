import { Card, CardContent } from './ui/card';
import { MousePointer, Zap, Smartphone, Code } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointer,
      title: 'Drag. Drop. Done.',
      description: 'Build forms visually with our intuitive drag-and-drop interface. No coding required.',
    },
    {
      icon: Zap,
      title: 'Instant Embeds',
      description: 'Copy a simple code snippet and embed your forms anywhere on the web instantly.',
    },
    {
      icon: Smartphone,
      title: 'Responsive by Default',
      description: 'Every form looks perfect on desktop, tablet, and mobile devices automatically.',
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Clean HTML, CSS customization, and webhook integrations for seamless workflows.',
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need to create{' '}
            <span className="logo-gradient">amazing forms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features that make form building simple, fast, and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover-lift group cursor-pointer border-border hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
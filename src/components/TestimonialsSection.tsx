import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amina Chen',
      role: 'Frontend Developer',
      company: 'TechFlow',
      avatar: '👩‍💻',
      content: 'FormFlow helped me launch a polished MVP in hours. The templates are beautiful and the code output is clean.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'StartupCo',
      avatar: '👨‍💼',
      content: 'Our conversion rates improved by 40% after switching to FormFlow. The forms just work better.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Kim',
      role: 'Marketing Director',
      company: 'GrowthLab',
      avatar: '👩‍🎨',
      content: 'The drag-and-drop builder is incredibly intuitive. I can create professional forms without bothering our developers.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Freelance Designer',
      company: 'Independent',
      avatar: '👨‍🎨',
      content: 'FormFlow integrates seamlessly with all my client projects. The white-label option is a game-changer.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: '👩‍🚀',
      content: 'From prototype to production, FormFlow scaled with us. The analytics help us optimize our funnels.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Alex Johnson',
      role: 'Full-stack Developer',
      company: 'WebCraft',
      avatar: '👨‍💻',
      content: 'The webhook integrations are powerful. FormFlow saves me hours of backend development time.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by{' '}
            <span className="logo-gradient">developers</span>
            {' '}and{' '}
            <span className="logo-gradient">teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who build better forms with FormFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover-lift transition-all duration-300 border-border hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
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

export default TestimonialsSection;
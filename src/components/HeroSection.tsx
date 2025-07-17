import { Button } from './ui/button';
import { Card } from './ui/card';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Forms That{' '}
                <span className="logo-gradient">Flow</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Create beautiful, responsive forms — no backend required.
                Get started in minutes with our intuitive drag-and-drop builder.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient hover-glow">
                Start for Free
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                View Templates
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Free forever plan</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form Preview */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent opacity-20 rounded-full blur-3xl"></div>
              
              {/* Form Card */}
              <Card className="p-6 hover-lift relative bg-card shadow-large">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Contact Us</h3>
                    <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Name</label>
                      <div className="w-full h-10 bg-secondary rounded-md border border-border"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Email</label>
                      <div className="w-full h-10 bg-secondary rounded-md border border-border"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Message</label>
                      <div className="w-full h-20 bg-secondary rounded-md border border-border"></div>
                    </div>
                    
                    <Button className="w-full btn-gradient">
                      Send Message
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
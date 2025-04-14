
import React from 'react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Let's Connect
              </span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8">
              Have a project in mind or just want to say hello? We'd love to hear from you. 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-2">Our Studio</h3>
                <p className="text-foreground/70 mb-1">123 Creative Avenue</p>
                <p className="text-foreground/70 mb-1">Digital District, DD 12345</p>
                <p className="text-foreground/70 mb-4">United States</p>
                <p className="text-foreground/70">hello@dimensionfactory.com</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <form 
              onSubmit={handleSubmit}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="rounded-lg border-purple-100 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="rounded-lg border-purple-100 focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  placeholder="How can we help?" 
                  className="rounded-lg border-purple-100 focus:border-purple-500"
                  required
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Your message" 
                  className="min-h-[120px] rounded-lg border-purple-100 focus:border-purple-500"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full gap-2 bg-purple-500 hover:bg-purple-600 text-white"
              >
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;

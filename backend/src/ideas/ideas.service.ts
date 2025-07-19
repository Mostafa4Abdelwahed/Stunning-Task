import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IdeasService {
  constructor(
    @InjectModel('Chat') private chatModel: Model<any>,
  ) {}

  async storeSectionsWithTextIdea(textIdea: string) {
    const sections = [
      {
        title: 'Hero',
        content: `
          <section style="
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
            padding: 80px 48px;
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
            margin-bottom: 32px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          ">
            <!-- Animated background elements -->
            <div style="
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%);
            "></div>
            <div style="
              position: absolute;
              top: 0;
              right: 0;
              width: 288px;
              height: 288px;
              background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
              border-radius: 50%;
              filter: blur(48px);
            "></div>
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              width: 384px;
              height: 384px;
              background: linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
              border-radius: 50%;
              filter: blur(48px);
            "></div>
            
            <div style="position: relative; z-index: 10; text-align: center;">
              <div style="
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 80px;
                padding: 20px;
                background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
                border-radius: 16px;
                margin-bottom: 24px;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
              ">
                <svg style="width: 40px; height: 40px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h1 style="
                font-size: 48px;
                font-weight: 700;
                color: white;
                margin-bottom: 16px;
                background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #fce7f3 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              ">
                Welcome to Site
              </h1>
              <p style="
                font-size: 20px;
                color: #cbd5e1;
                margin-bottom: 32px;
                max-width: 512px;
                margin-left: auto;
                margin-right: auto;
                line-height: 1.6;
              ">
                Experience the future of site with cutting-edge design, seamless functionality, and unparalleled user experience.
              </p>
              <div style="
                display: flex;
                justify-content: center;
                gap: 16px;
              ">
                <button style="
                  padding: 16px 32px;
                  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
                  color: white;
                  font-weight: 600;
                  border-radius: 12px;
                  border: none;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                  transform: scale(1);
                " onmouseover="this.style.transform='scale(1.05)'; this.style.background='linear-gradient(135deg, #7c3aed 0%, #db2777 100%)'; this.style.boxShadow='0 20px 40px -10px rgba(0, 0, 0, 0.4)'" onmouseout="this.style.transform='scale(1)'; this.style.background='linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'; this.style.boxShadow='0 10px 25px -5px rgba(0, 0, 0, 0.3)'">
                  Get Started
                </button>
                <button style="
                  padding: 16px 32px;
                  background: rgba(255, 255, 255, 0.1);
                  color: white;
                  font-weight: 600;
                  border-radius: 12px;
                  border: none;
                  backdrop-filter: blur(8px);
                  cursor: pointer;
                  transition: all 0.3s ease;
                  // box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  transform: scale(1);
                " onmouseover="this.style.transform='scale(1.05)'; this.style.background='linear-gradient(135deg, #7c3aed 0%, #db2777 100%)'; this.style.boxShadow='0 20px 40px -10px rgba(0, 0, 0, 0.4)'" onmouseout="this.style.transform='scale(1)'; this.style.background='linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'; this.style.boxShadow='0 10px 25px -5px rgba(0, 0, 0, 0.3)'">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        `
      },
      {
        title: 'About',
        content: `
          <section style="
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
            padding: 48px;
            border-radius: 24px;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
            margin-bottom: 32px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
          ">
            <!-- Subtle grid pattern -->
            <div style="
              position: absolute;
              inset: 0;
              opacity: 0.05;
              background-image: 
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
              background-size: 50px 50px;
            "></div>
            
            <div style="position: relative; z-index: 10;">
              <div style="
                display: flex;
                align-items: center;
                margin-bottom: 32px;
              ">
                <div style="
                  width: 48px;
                  height: 48px;
                  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 16px;
                  box-shadow: 0 8px 20px -5px rgba(59, 130, 246, 0.3);
                ">
                  <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h2 style="
                  font-size: 32px;
                  font-weight: 700;
                  color: white;
                  margin: 0;
                ">About Site</h2>
              </div>
              
              <div style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 32px;
              ">
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <p style="
                    font-size: 18px;
                    color: #cbd5e1;
                    line-height: 1.7;
                    margin: 0;
                  ">
                    At site, we believe in pushing the boundaries of what's possible. Our platform combines cutting-edge technology with intuitive design to deliver experiences that inspire and empower.
                  </p>
                  <p style="
                    font-size: 16px;
                    color: #94a3b8;
                    line-height: 1.6;
                    margin: 0;
                  ">
                    We're committed to innovation, quality, and user satisfaction. Every feature is crafted with precision and every interaction is designed to delight.
                  </p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(34, 197, 94, 0.1);
                    border-radius: 12px;
                    border: 1px solid rgba(34, 197, 94, 0.2);
                  ">
                    <div style="
                      width: 12px;
                      height: 12px;
                      background: #22c55e;
                      border-radius: 50%;
                      box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                    "></div>
                    <span style="color: #cbd5e1; font-weight: 500;">Lightning-fast performance</span>
                  </div>
                  <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 12px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                  ">
                    <div style="
                      width: 12px;
                      height: 12px;
                      background: #3b82f6;
                      border-radius: 50%;
                      box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
                    "></div>
                    <span style="color: #cbd5e1; font-weight: 500;">Modern, responsive design</span>
                  </div>
                  <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(168, 85, 247, 0.1);
                    border-radius: 12px;
                    border: 1px solid rgba(168, 85, 247, 0.2);
                  ">
                    <div style="
                      width: 12px;
                      height: 12px;
                      background: #a855f7;
                      border-radius: 50%;
                      box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
                    "></div>
                    <span style="color: #cbd5e1; font-weight: 500;">24/7 expert support</span>
                  </div>
                  <div style="
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(236, 72, 153, 0.1);
                    border-radius: 12px;
                    border: 1px solid rgba(236, 72, 153, 0.2);
                  ">
                    <div style="
                      width: 12px;
                      height: 12px;
                      background: #ec4899;
                      border-radius: 50%;
                      box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
                    "></div>
                    <span style="color: #cbd5e1; font-weight: 500;">Secure & reliable infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `
      },
      {
        title: 'Contact',
        content: `
          <section style="
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            padding: 48px;
            border-radius: 24px;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
          ">
            <!-- Animated gradient background -->
            <div style="
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%);
            "></div>
            
            <div style="position: relative; z-index: 10;">
              <div style="text-align: center; margin-bottom: 32px;">
                <div style="
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  width: 64px;
                  height: 64px;
                  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                  border-radius: 16px;
                  margin-bottom: 16px;
                  box-shadow: 0 8px 20px -5px rgba(16, 185, 129, 0.3);
                ">
                  <svg style="width: 32px; height: 32px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 style="
                  font-size: 32px;
                  font-weight: 700;
                  color: white;
                  margin-bottom: 16px;
                ">Get In Touch</h2>
                <p style="
                  font-size: 18px;
                  color: #cbd5e1;
                  line-height: 1.6;
                  margin: 0;
                ">Ready to transform your vision into reality? Let's start the conversation.</p>
              </div>
              
              <div style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
              ">
                <div style="
                  text-align: center;
                  padding: 24px;
                  background: rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(8px);
                  border-radius: 16px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.transform='translateY(0)'">
                  <div style="
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    box-shadow: 0 8px 20px -5px rgba(59, 130, 246, 0.3);
                  ">
                    <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 style="
                    color: white;
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 8px;
                  ">Email Us</h3>
                  <p style="
                    color: #94a3b8;
                    font-size: 14px;
                    margin: 0;
                  ">support@site.com</p>
                </div>
                
                <div style="
                  text-align: center;
                  padding: 24px;
                  background: rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(8px);
                  border-radius: 16px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.transform='translateY(0)'">
                  <div style="
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    box-shadow: 0 8px 20px -5px rgba(16, 185, 129, 0.3);
                  ">
                    <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 style="
                    color: white;
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 8px;
                  ">Call Us</h3>
                  <p style="
                    color: #94a3b8;
                    font-size: 14px;
                    margin: 0;
                  ">+1 (555) 123-4567</p>
                </div>
                
                <div style="
                  text-align: center;
                  padding: 24px;
                  background: rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(8px);
                  border-radius: 16px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.transform='translateY(0)'">
                  <div style="
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    box-shadow: 0 8px 20px -5px rgba(236, 72, 153, 0.3);
                  ">
                    <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 style="
                    color: white;
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 8px;
                  ">Visit Us</h3>
                  <p style="
                    color: #94a3b8;
                    font-size: 14px;
                    margin: 0;
                  ">123 Innovation St, Tech City</p>
                </div>
              </div>
              
              <div style="text-align: center;">
                <button style="
                  padding: 16px 32px;
                  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
                  color: white;
                  font-weight: 600;
                  font-size: 16px;
                  border-radius: 12px;
                  border: none;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                  transform: scale(1);
                " onmouseover="this.style.transform='scale(1.05)'; this.style.background='linear-gradient(135deg, #7c3aed 0%, #db2777 100%)'; this.style.boxShadow='0 20px 40px -10px rgba(0, 0, 0, 0.4)'" onmouseout="this.style.transform='scale(1)'; this.style.background='linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'; this.style.boxShadow='0 10px 25px -5px rgba(0, 0, 0, 0.3)'">
                  Start Your Project
                </button>
              </div>
            </div>
          </section>
        `
      }
    ];

    const chat = new this.chatModel({
      message: textIdea,
      sections: sections
    });

    const savedChat = await chat.save();
    return savedChat.chatId;
  }

  async getSectionsById(chatId: string) {
    const chat = await this.chatModel.findOne({ chatId: chatId });
    if (!chat) {
      throw new Error('Chat not found');
    }
    return {
      textIdea: chat.message,
      sections: chat.sections
    };
  }
}

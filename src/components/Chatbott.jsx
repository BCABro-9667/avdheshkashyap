// import React, { useState, useEffect } from 'react';
// import '../styles/chatbot.css';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   // Portfolio data
//   const portfolioData = {
//     skills: ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'UI/UX Design', 'Python', 'MongoDB'],
//     services: ['Web Development', 'Chatbot Development', 'UI Design', 'API Integration', 'Technical Consulting'],
//     personalDetails: {
//       name: 'Avdhesh Kumar',
//       location: 'Your Location',
//       email: 'your.email@example.com',
//       bio: 'Passionate web developer with expertise in creating interactive web applications.'
//     },
//     experience: [
//       { role: 'Web Developer', company: 'Tech Corp', duration: '2022-Present' }
//     ],
//     education: [
//       { degree: 'B.Sc Computer Science', institution: 'University Name', year: '2020' }
//     ]
//   };

//   // Initial messages
//   useEffect(() => {
//     const initialMessages = [
//       {
//         sender: 'bot',
//         text: 'Hi there! I\'m your portfolio assistant. How can I help you today?',
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       },
//       {
//         sender: 'bot',
//         text: 'You can ask about my skills, services, experience, or use the buttons below:',
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       }
//     ];
//     setMessages(initialMessages);
//   }, []);

//   const handleSendMessage = () => {
//     if (!input.trim()) return;

//     // Add user message
//     const userMessage = {
//       sender: 'user',
//       text: input,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsTyping(true);

//     // Simulate bot response after delay
//     setTimeout(() => {
//       let response;
//       const lowerInput = input.toLowerCase();

//       if (lowerInput.includes('skill') || lowerInput.includes('what can you do')) {
//         response = {
//           text: `Here are my skills:\n${portfolioData.skills.join(', ')}`,
//           isList: true,
//           items: portfolioData.skills
//         };
//       } else if (lowerInput.includes('service') || lowerInput.includes('what do you offer')) {
//         response = {
//           text: `I offer these services:\n${portfolioData.services.join(', ')}`,
//           isList: true,
//           items: portfolioData.services
//         };
//       } else if (lowerInput.includes('personal') || lowerInput.includes('about you')) {
//         response = {
//           text: `Personal Details:\nName: ${portfolioData.personalDetails.name}\nLocation: ${portfolioData.personalDetails.location}\nEmail: ${portfolioData.personalDetails.email}\nBio: ${portfolioData.personalDetails.bio}`,
//           isList: false
//         };
//       } else if (lowerInput.includes('experience') || lowerInput.includes('work history')) {
//         response = {
//           text: 'My Work Experience:',
//           isList: true,
//           items: portfolioData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration})`)
//         };
//       } else if (lowerInput.includes('education') || lowerInput.includes('qualification')) {
//         response = {
//           text: 'My Education:',
//           isList: true,
//           items: portfolioData.education.map(edu => `${edu.degree} from ${edu.institution} (${edu.year})`)
//         };
//       } else if (lowerInput.includes('contact') || lowerInput.includes('reach out')) {
//         response = {
//           text: 'You can contact me through the form below:',
//           isForm: true
//         };
//       } else {
//         response = {
//           text: "I'm not sure I understand. You can ask about my skills, services, experience, education, or contact information.",
//           isList: false
//         };
//       }

//       const botMessage = {
//         sender: 'bot',
//         text: response.text,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         isList: response.isList,
//         items: response.items,
//         isForm: response.isForm
//       };

//       setMessages(prev => [...prev, botMessage]);
//       setIsTyping(false);
//     }, 1000);
//   };

//   const handleCommandClick = (command) => {
//     setInput(command);
//     setTimeout(() => {
//       handleSendMessage();
//     }, 100);
//   };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const contactData = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       message: formData.get('message')
//     };
    
//     const userMessage = {
//       sender: 'user',
//       text: 'Submitted contact form',
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };
//     setMessages(prev => [...prev, userMessage]);
//     setIsTyping(true);

//     setTimeout(() => {
//       const botMessage = {
//         sender: 'bot',
//         text: `Thank you for your message, ${contactData.name}! I'll get back to you at ${contactData.email} soon.`,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setMessages(prev => [...prev, botMessage]);
//       setIsTyping(false);
//     }, 1000);
//   };

//   return (
//     <>
//       <button 
//         className="chatbot-toggle-button"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//         </svg>
//       </button>

//       <div className={`chatbot-container ${isOpen ? 'show' : ''}`}>
//         <div className="chatbot-header">
//           <div className="chatbot-title">
//             <h3>Portfolio Assistant</h3>
//             <span className="chatbot-time">Today</span>
//           </div>
//           <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
//         </div>

//         <div className="chatbot-messages">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender}`}>
//               {msg.sender === 'bot' && (
//                 <div className="message-sender">Portfolio Assistant</div>
//               )}
//               <div className="message-content">
//                 <p>{msg.text}</p>
//                 {msg.isList && (
//                   <ul>
//                     {msg.items.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//                 {msg.isForm && (
//                   <form className="contact-form" onSubmit={handleContactSubmit}>
//                     <input type="text" name="name" placeholder="Your Name" required />
//                     <input type="email" name="email" placeholder="Your Email" required />
//                     <textarea name="message" placeholder="Your Message" required></textarea>
//                     <button type="submit">Send Message</button>
//                   </form>
//                 )}
//               </div>
//               <div className="message-time">{msg.time}</div>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="message bot">
//               <div className="message-sender">Portfolio Assistant</div>
//               <div className="message-content typing">
//                 <div className="typing-indicator">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="quick-commands">
//           <button onClick={() => handleCommandClick('Show my skills')}>Skills</button>
//           <button onClick={() => handleCommandClick('What services do you offer?')}>Services</button>
//           <button onClick={() => handleCommandClick('Tell me about yourself')}>About Me</button>
//           <button onClick={() => handleCommandClick('What is your experience?')}>Experience</button>
//           <button onClick={() => handleCommandClick('How can I contact you?')}>Contact</button>
//         </div>

//         <div className="chatbot-input">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>

//         <div className="chatbot-footer">
//           <span>Powered by <strong>Avdhesh's Portfolio</strong></span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatbot;
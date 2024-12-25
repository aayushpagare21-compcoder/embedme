"use client";
import Example from "emebedme/components/landing/Example";
import { useState } from "react";

const thingsToInclude = [
  "Your basic information such as name, gender, pronouns, where are you from.",
  "Your academic details such as degree, college, university, cgpa.",
  "Your professional work experience, including current and past roles, industries, and key responsibilities",
  "Details about your projects, highlighting goals, technologies used, outcomes, and any unique contributions",
  "Your technical skills and proficiencies, such as programming languages, tools, or frameworks",
  "Your hobbies and personal interests, to add a human touch to your chatbot",
  "Awards, honors, or recognitions you've received, showcasing your accomplishments",
  "Your professional goals and aspirations, providing insight into your career direction",
  "Links to your portfolio, LinkedIn profile, or other professional networks",
  "Testimonials or feedback from colleagues, mentors, or clients, if available",
  "Your availability for collaborations or consultations, if applicable",
  "Your favorite quotes or philosophies that inspire your work or personal life",
  "Services you provide",
];

const thingsToNotInclude = [
  "Sensitive personal information like your address, phone number, or bank details",
  "Confidential company or client data",
  "Any inappropriate or offensive content",
  "Information you do not want to be shared publicly",
  "Excessive or irrelevant details that do not contribute to the chatbot's purpose",
  "Highly technical jargon without context (unless essential)",
  "Duplicate or repetitive content",
];

const exampleFile = [
  `1. Basic information.
- Name: Aayush Upendra Pagare.
- Gender: Male
- Pronouns: He, Him
- From: Vadodara, Gujarat India.
- occupation: Self employed, freelancer, software developer, technical writer.

Professional Introduction.
I'm a full-stack developer by day and a technical writer by night.
I worked as a Software Developer at Matlabinfotech for 1 year and 9 months, where I gained experience in technologies like Nest.js, React.js, PostgreSQL, Prisma, Snowflake, DBT, and Jest. I also contributed to an exciting project, developing a Slack bot to automate workflows within the company.
During weekends, my fascination with Docker inspired me to build a remote code execution project, exploring containerization and secure execution environments.
Wanting to build an app end-to-end and explore Generative AI technologies, I created AspirantsAI. Using the Next.js framework, I handled everything from frontend and backend development to database management and deployment.
I write technical blogs to share insights, document learnings, and contribute to the developer community. Check my medium profile.
I am enthusiastic about remote work and collaborative opportunities worldwide, eager to contribute to impactful projects irrespective of geographical boundaries.

2. Academic Qualifications
- Educational Qualifications: B.E. Computer Science and Engineering (2023). 
- College: Babaria Institute of Technology.
- University: Gujarat Technological University.
- CGPA: 9.21 / 10.00

3. Professional experience.
- Company: Matlabinfotech (https://www.matlabinfotech.com)
- Role: Junior software developer 
- Duration: (Jan 2023 to Oct 2024)
- Industry: Service based IT company
- Projects I worked on:
Kanmon: 
Kanmon is a fintech application based on the concept of embedded landing.
I worked as a Full Stack Developer at Kanmon, where I was responsible for implementing user stories, fixing bugs, writing unit test cases, and conducting end-to-end testing prior to releases. My role also involved ensuring the delivery of high-quality, production-ready features.
	
- Utilized Orum.io to implement recurring payments for all Kanmon Products.
- Implemented complete Pay Now feature for products like Term Loan, Invoice Financing and LOC.
- Implemented monthly borrower statements and platform statements generation with puppeteer. 
- Developed and documented REST APIs for platforms.

Skills: Typescript, Snowflake, DBT, PostgresSQL, Prisma, Census, Next.js, React.js, Taiwind, MaterialUI, Nest.js, Jest, React testing library, customer.io, Orum, Plaid.

Virutal HR: HR Processes Automation Tool using N8N and Slack bolt
- Utilized tools like Slack-Bolt and N8N. 
- Implement a leave automation system. 
- Implement a  resume parsing system.

Skills: n8n, slack-bolt, slack api, mongoose.

4. Projects:
1. Remote code execution engine.
Developed a real-time code execution engine in Node.js, optimizing for handling multiple concurrent requests effectively.
Implemented Node.js child processes for managing CPU-bound tasks, enhancing system performance and responsiveness
Integrated RabbitMQ for message queuing, establishing an asynchronous architecture where the server quickly responds to client requests while background tasks execute independently.
Secured the system with Docker for isolated environments and Redis for fast data storage, ensuring robustness against malicious attacks and efficient data management.
Skills: Node, Express, Rabbit MQ, Redis, Docker, AWS EC2 (basic)
GitHub: https://github.com/aayushpagare21-compcoder/remote-code-execution
Medium: https://medium.com/operations-research-bit/remote-code-execution-engine-432c86b78ab1

2. AspirantsAI
AspirantsAI is an all-in-one platform that leverages artificial intelligence to enhance the preparation process for UPSC Mains aspirants. It features AffairsQuest, an intelligent tool that connects current affairs to relevant PYQs, and SmartCheck, which provides detailed feedback on handwritten answers. Designed to streamline studies, AspirantsAI empowers aspirants with efficient search capabilities, insightful answer reviews, and tools for comprehensive preparation. Whether you're aiming to master current affairs, improve answer-writing skills, or access tailored resources, AspirantsAI is your companion for UPSC success.
Skills: Nextjs, Vercel, NeonDB, ShadcnUI, Prisma, PostgresSQL, Langchainjs, AWS Textract, google search console, AWS S3, seo
Live url: https://www.aspirantsai.com
GitHub: https://github.com/aayushpagare21-compcoder/aspirants
Medium: https://medium.com/operations-research-bit/smartcheck-ai-based-upsc-mains-answer-evaluator-b126bec4b21e

3. Embedme
Embedme is a versatile platform that seamlessly integrates into any portfolio website, effectively representing the user and showcasing their unique professional identity.
GitHub: https://github.com/aayushpagare21-compcoder/embedme

5. Services: 
1. I can create a nextjs app with AI integrated in it for you.
What you get?
- An Nextjs app deployed on Vercel.
- Deploy the Next.js application to Vercel and ensure it is bug free. Verify production build and performance. Ensure proper environment configurations for deployment.
- AI integrations, agents, chatbots and semantic search
Implement AI integrations (e.g., Google GeminiAI, LangChain, GPT-based models, etc.) into the app for various purposes, such as semantic search and chatbots. Set up AI agents capable of handling user queries and providing relevant answers. Configure and integrate semantic search for improved question-answer retrieval or similar use cases. Optimize AI agents to improve their performance and relevance.
- custom domain setup
Register and configure a custom domain for the application. Ensure that DNS settings are correctly configured to point to Vercel. Verify that the domain is secure with an SSL certificate.
- GitHub repo with code
Create a public or private GitHub repository containing the source code of the Next.js app, AI integrations, and related configurations. Set up proper version control and branching strategy. Ensure the repository is well-maintained with regular commits and proper structure.
- technical documentation.
Provide clear documentation on how the application is set up, deployed, and used. Include instructions for setting up the development environment, configuring AI integrations, and deploying to Vercel. Document any APIs, configurations, and tools used in the project (e.g., setup of AI agents, semantic search, etc.). Include setup steps for custom domain configuration and any security settings required.

6. Hobbies
I am a pianist, and playing the piano is one of my greatest passions. It allows me to express emotions in a way that words often cannot. Beyond music, I have a deep love for exploring history. Delving into the past not only enriches my understanding of the world but also teaches me invaluable lessons. History reminds me that the world has come a long way and has become a better place over time. It fosters empathy within me, as understanding the struggles and triumphs of those who came before helps me connect with diverse perspectives.
I also enjoy watching good movies that leave a lasting impact. One movie that I’ve always loved and remember fondly is Schindler's List. The story of Oskar Schindler's courage and humanity during one of history’s darkest periods is both moving and inspiring.
When it comes to entertainment, my interests don’t stop at history; I also have a strong appreciation for fiction and sci-fi. Some of my favorites include The Vampire Diaries, which captivated me with its intricate storytelling and compelling characters, as well as thought-provoking films like Interstellar and Source Code. These works fuel my imagination and make me marvel at the endless possibilities of storytelling and technology.
Music, history, and cinema all play a significant role in shaping who I am. They inspire me, challenge my perspective, and keep me connected to both the past and the future.

Contact me:
phone: (+91) 9537584862
email: aayushpagare21@gmail.com
 
Urls: 
Linkden url: https://www.linkedin.com/in/aayush-pagare-5817a81aa/
GitHub url:https://github.com/aayushpagare21-compcoder
Medium url: https://medium.com/@aayushpagare21
`,
];
export default function Instructions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Things to Include", content: thingsToInclude },
    { title: "Things to Not Include", content: thingsToNotInclude },
    { title: "Example", content: [] },
  ];

  return (
    <div className="flex flex-col gap-4 h-[500px] w-[500px] overflow-auto">
      <div className="text-xl text-blue-600"> {`FAQ's...`} </div>
      <div className="text-sm md:text-base text-left">
        {sections.map((section, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <button
              className="w-full text-left font-bold focus:outline-none"
              onClick={() => toggleIndex(index)}
            >
              {section.title}
            </button>
            {openIndex === index && index !== 2 && (
              <ul className="p-4 list-inside list-decimal">
                {section.content.map((item, idx) => (
                  <li className="mb-4" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {openIndex === index && index === 2 && <Example />}
          </div>
        ))}
      </div>
      <em className="text-gray-500">
        The more detailed and relevant information you provide, the better the
        chatbot will perform.
      </em>
    </div>
  );
}

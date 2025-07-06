const mongoose = require('mongoose');
require('dotenv').config();

const Company = require('../models/Company');
const Job = require('../models/Job');
const Skill = require('../models/Skill');
const User = require('../models/User');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/careerconnect');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Company.deleteMany({});
    await Job.deleteMany({});
    await Skill.deleteMany({});
    console.log('Cleared existing data');

    // Create sample companies
    const companies = await Company.insertMany([
      {
        name: 'Tech Innovators Inc.',
        description: 'Leading software development company focusing on innovative solutions for modern businesses. We specialize in web applications, mobile development, and cloud infrastructure.',
        industry: 'Technology',
        sizeRange: '501-1000',
        location: 'San Francisco, CA',
        logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://techinnovators.com',
        isActive: true
      },
      {
        name: 'Data Insights Co.',
        description: 'Data analytics and business intelligence solutions provider helping companies make data-driven decisions.',
        industry: 'Analytics',
        sizeRange: '201-500',
        location: 'New York, NY',
        logoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://datainsights.com',
        isActive: true
      },
      {
        name: 'Design Dynamics Group',
        description: 'Creative design agency specializing in digital experiences and user interface design.',
        industry: 'Design',
        sizeRange: '51-200',
        location: 'Los Angeles, CA',
        logoUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://designdynamics.com',
        isActive: true
      },
      {
        name: 'Global Marketing Solutions',
        description: 'Full-service marketing agency with global reach, specializing in digital marketing and brand strategy.',
        industry: 'Marketing',
        sizeRange: '201-500',
        location: 'Chicago, IL',
        logoUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://globalmarketing.com',
        isActive: true
      },
      {
        name: 'Future Systems',
        description: 'AI and machine learning solutions for enterprises, building the future of intelligent automation.',
        industry: 'Technology',
        sizeRange: '51-200',
        location: 'Seattle, WA',
        logoUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://futuresystems.com',
        isActive: true
      },
      {
        name: 'Creative Studio',
        description: 'Boutique creative agency for digital transformation and innovative design solutions.',
        industry: 'Design',
        sizeRange: '11-50',
        location: 'Austin, TX',
        logoUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://creativestudio.com',
        isActive: true
      },
      {
        name: 'FinTech Solutions',
        description: 'Financial technology company revolutionizing digital payments and banking solutions.',
        industry: 'Finance',
        sizeRange: '201-500',
        location: 'Boston, MA',
        logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://fintechsolutions.com',
        isActive: true
      },
      {
        name: 'HealthTech Innovations',
        description: 'Healthcare technology company developing cutting-edge medical software and devices.',
        industry: 'Healthcare',
        sizeRange: '51-200',
        location: 'Denver, CO',
        logoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://healthtechinnovations.com',
        isActive: true
      },
      {
        name: 'EcoTech Solutions',
        description: 'Sustainable technology company focused on green energy and environmental solutions.',
        industry: 'Technology',
        sizeRange: '51-200',
        location: 'Portland, OR',
        logoUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://ecotechsolutions.com',
        isActive: true
      },
      {
        name: 'Digital Nomad Co.',
        description: 'Remote-first company building tools for distributed teams and digital nomads.',
        industry: 'Technology',
        sizeRange: '11-50',
        location: 'Remote',
        logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://digitalnomadco.com',
        isActive: true
      },
      {
        name: 'Innovation Labs',
        description: 'Research and development company pushing the boundaries of technology and science.',
        industry: 'Technology',
        sizeRange: '51-200',
        location: 'Cambridge, MA',
        logoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://innovationlabs.com',
        isActive: true
      },
      {
        name: 'Startup Ventures',
        description: 'Venture capital firm supporting innovative startups and entrepreneurs.',
        industry: 'Finance',
        sizeRange: '11-50',
        location: 'Miami, FL',
        logoUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        websiteUrl: 'https://startupventures.com',
        isActive: true
      }
    ]);

    console.log('Created sample companies');

    // Create sample skills
    const skills = await Skill.insertMany([
      { name: 'JavaScript', category: 'Programming' },
      { name: 'Python', category: 'Programming' },
      { name: 'Java', category: 'Programming' },
      { name: 'C++', category: 'Programming' },
      { name: 'TypeScript', category: 'Programming' },
      { name: 'React', category: 'Frontend' },
      { name: 'Vue.js', category: 'Frontend' },
      { name: 'Angular', category: 'Frontend' },
      { name: 'HTML/CSS', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'Django', category: 'Backend' },
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'SQL', category: 'Database' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis', category: 'Database' },
      { name: 'AWS', category: 'Cloud' },
      { name: 'Azure', category: 'Cloud' },
      { name: 'Google Cloud', category: 'Cloud' },
      { name: 'Docker', category: 'DevOps' },
      { name: 'Kubernetes', category: 'DevOps' },
      { name: 'Jenkins', category: 'DevOps' },
      { name: 'Git', category: 'Version Control' },
      { name: 'GitHub', category: 'Version Control' },
      { name: 'Project Management', category: 'Management' },
      { name: 'Agile/Scrum', category: 'Management' },
      { name: 'Communication', category: 'Soft Skills' },
      { name: 'Leadership', category: 'Soft Skills' },
      { name: 'Problem Solving', category: 'Soft Skills' },
      { name: 'Figma', category: 'Design' },
      { name: 'Adobe Creative Suite', category: 'Design' },
      { name: 'UI/UX Design', category: 'Design' },
      { name: 'Machine Learning', category: 'Other' },
      { name: 'Data Analysis', category: 'Other' },
      { name: 'Cybersecurity', category: 'Other' }
    ]);

    console.log('Created sample skills');

    // Create a sample user for posting jobs
    const sampleUser = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@careerconnect.com',
      password: 'password123',
      bio: 'System administrator and job poster',
      skills: ['Project Management', 'Leadership', 'Communication'],
      experienceLevel: 'senior'
    });
    await sampleUser.save();

    // Create sample jobs with more featured jobs
    const jobs = await Job.insertMany([
      {
        title: 'Senior Software Engineer',
        description: 'We are seeking a talented and motivated Senior Software Engineer to join our growing team. You will be responsible for designing, developing, and maintaining high-quality software solutions that serve millions of users worldwide. This role offers the opportunity to work with cutting-edge technologies and contribute to innovative projects.',
        requirements: 'Bachelor\'s degree in Computer Science or related field, 5+ years of experience in software development, Proficiency in JavaScript, Python, or Java, Strong problem-solving and analytical skills, Experience with cloud platforms (AWS, Azure, or GCP), Knowledge of microservices architecture',
        responsibilities: 'Design and develop scalable software solutions, Write clean, well-documented, and efficient code, Collaborate with cross-functional teams including product managers and designers, Participate in code reviews and mentor junior developers, Contribute to technical architecture decisions, Ensure high code quality and best practices',
        salaryMin: 120000,
        salaryMax: 180000,
        experienceLevel: 'senior',
        jobType: 'full-time',
        location: 'San Francisco, CA',
        remote: true,
        company: companies[0]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Data Analyst',
        description: 'Join our data team to help drive business decisions through comprehensive data analysis and visualization. You will work with large datasets to uncover insights that directly impact our product strategy and business growth.',
        requirements: '2-4 years of experience in data analysis, Proficiency in SQL and Python, Experience with data visualization tools (Tableau, Power BI), Strong analytical and statistical thinking, Bachelor\'s degree in Statistics, Mathematics, or related field',
        responsibilities: 'Analyze large datasets to identify trends and patterns, Create compelling data visualizations and reports, Collaborate with stakeholders to understand business requirements, Develop and maintain data pipelines, Present findings to executive leadership',
        salaryMin: 70000,
        salaryMax: 110000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'New York, NY',
        remote: false,
        company: companies[1]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['SQL', 'Python', 'Data Analysis'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Product Designer',
        description: 'We\'re looking for a creative and strategic Product Designer to help shape our digital products and enhance user experiences. You will work closely with product managers and engineers to create intuitive and beautiful interfaces.',
        requirements: '3-5 years of product design experience, Proficiency in Figma and Adobe Creative Suite, Strong portfolio showcasing UX/UI work, Understanding of design systems and user-centered design principles, Experience with user research and usability testing',
        responsibilities: 'Design user interfaces for web and mobile applications, Conduct user research and usability testing, Create wireframes, prototypes, and design systems, Collaborate with product and engineering teams, Iterate on designs based on user feedback and data',
        salaryMin: 80000,
        salaryMax: 130000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Los Angeles, CA',
        remote: true,
        company: companies[2]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Figma', 'UI/UX Design', 'Adobe Creative Suite'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Marketing Manager',
        description: 'Lead marketing initiatives and campaigns to drive brand awareness and customer acquisition. You will develop comprehensive marketing strategies across multiple channels and analyze campaign performance.',
        requirements: '5+ years of marketing experience, Strong understanding of digital marketing channels, Experience with marketing automation tools, Excellent communication and project management skills, Bachelor\'s degree in Marketing or related field',
        responsibilities: 'Develop and execute comprehensive marketing strategies, Manage marketing campaigns across multiple channels, Analyze marketing performance and ROI, Lead a team of marketing specialists, Collaborate with sales and product teams',
        salaryMin: 90000,
        salaryMax: 140000,
        experienceLevel: 'senior',
        jobType: 'full-time',
        location: 'Chicago, IL',
        remote: false,
        company: companies[3]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Project Management', 'Communication', 'Leadership'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'AI/ML Engineer',
        description: 'Build and deploy machine learning models to solve complex business problems. You will work on cutting-edge AI projects and contribute to our machine learning infrastructure.',
        requirements: 'PhD or Masters in Computer Science, Machine Learning, or related field, 4+ years of experience in ML/AI, Proficiency in Python, TensorFlow, PyTorch, Experience with cloud ML platforms, Strong mathematical and statistical background',
        responsibilities: 'Design and implement machine learning algorithms, Deploy models to production environments, Collaborate with product teams on AI features, Research and evaluate new ML techniques, Optimize model performance and scalability',
        salaryMin: 150000,
        salaryMax: 220000,
        experienceLevel: 'senior',
        jobType: 'full-time',
        location: 'Seattle, WA',
        remote: true,
        company: companies[4]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Python', 'Machine Learning', 'AWS'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Frontend Developer',
        description: 'Create beautiful and responsive user interfaces using modern frontend technologies. You will work closely with designers to bring mockups to life and ensure excellent user experiences.',
        requirements: '2-4 years of frontend development experience, Proficiency in React, HTML, CSS, JavaScript, Experience with responsive design, Knowledge of modern build tools and workflows',
        responsibilities: 'Develop responsive and accessible user interfaces, Collaborate with designers and backend developers, Optimize applications for maximum speed and scalability, Write clean, maintainable code, Participate in code reviews',
        salaryMin: 75000,
        salaryMax: 120000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Austin, TX',
        remote: true,
        company: companies[5]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Financial Analyst',
        description: 'Join our finance team to provide critical financial insights and support strategic decision-making. You will analyze financial data, create reports, and help drive business growth.',
        requirements: 'Bachelor\'s degree in Finance, Accounting, or related field, 2-4 years of financial analysis experience, Proficiency in Excel and financial modeling, Strong analytical and problem-solving skills',
        responsibilities: 'Analyze financial data and create reports, Develop financial models and forecasts, Support budgeting and planning processes, Collaborate with cross-functional teams, Present findings to senior management',
        salaryMin: 65000,
        salaryMax: 95000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Boston, MA',
        remote: false,
        company: companies[6]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Excel', 'Financial Modeling', 'Data Analysis'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Healthcare Software Engineer',
        description: 'Develop innovative software solutions for the healthcare industry. You will work on applications that improve patient care and healthcare delivery.',
        requirements: '3+ years of software development experience, Knowledge of healthcare regulations (HIPAA), Experience with healthcare systems and workflows, Proficiency in Python, Java, or C#, Strong attention to detail',
        responsibilities: 'Develop healthcare software applications, Ensure compliance with healthcare regulations, Collaborate with healthcare professionals, Test and validate software functionality, Maintain and update existing systems',
        salaryMin: 90000,
        salaryMax: 140000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Denver, CO',
        remote: false,
        company: companies[7]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Python', 'Java', 'SQL', 'Healthcare Systems'],
        isFeatured: true,
        status: 'active'
      },
      {
        title: 'Environmental Data Scientist',
        description: 'Use data science to solve environmental challenges and promote sustainability. You will analyze environmental data to support green technology initiatives.',
        requirements: 'Master\'s degree in Environmental Science, Data Science, or related field, 2+ years of experience in data analysis, Proficiency in Python and R, Knowledge of environmental regulations and sustainability',
        responsibilities: 'Analyze environmental data and trends, Develop predictive models for environmental impact, Create visualizations and reports, Collaborate with environmental scientists, Support sustainability initiatives',
        salaryMin: 80000,
        salaryMax: 120000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Portland, OR',
        remote: true,
        company: companies[8]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Python', 'R', 'Data Analysis', 'Machine Learning'],
        isFeatured: false,
        status: 'active'
      },
      {
        title: 'Remote DevOps Engineer',
        description: 'Build and maintain cloud infrastructure for distributed teams. You will work remotely to ensure our systems are scalable, secure, and reliable.',
        requirements: '3+ years of DevOps experience, Proficiency in AWS, Docker, and Kubernetes, Experience with CI/CD pipelines, Strong knowledge of Linux systems, Excellent communication skills for remote work',
        responsibilities: 'Design and implement cloud infrastructure, Automate deployment and scaling processes, Monitor system performance and security, Collaborate with development teams, Maintain documentation and best practices',
        salaryMin: 100000,
        salaryMax: 150000,
        experienceLevel: 'senior',
        jobType: 'full-time',
        location: 'Remote',
        remote: true,
        company: companies[9]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
        isFeatured: false,
        status: 'active'
      },
      {
        title: 'Research Scientist',
        description: 'Conduct cutting-edge research in emerging technologies. You will work on innovative projects that push the boundaries of science and technology.',
        requirements: 'PhD in Computer Science, Physics, or related field, 2+ years of research experience, Strong publication record, Experience with experimental design, Excellent analytical and problem-solving skills',
        responsibilities: 'Design and conduct research experiments, Publish findings in peer-reviewed journals, Collaborate with academic and industry partners, Develop new technologies and methodologies, Present research at conferences',
        salaryMin: 120000,
        salaryMax: 180000,
        experienceLevel: 'senior',
        jobType: 'full-time',
        location: 'Cambridge, MA',
        remote: false,
        company: companies[10]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Research Methods', 'Data Analysis', 'Machine Learning', 'Python'],
        isFeatured: false,
        status: 'active'
      },
      {
        title: 'Startup Business Analyst',
        description: 'Help early-stage startups make data-driven decisions and scale their operations. You will work closely with founders to analyze business metrics and identify growth opportunities.',
        requirements: '2+ years of business analysis experience, Experience working with startups, Proficiency in Excel and data visualization tools, Strong analytical and communication skills, Bachelor\'s degree in Business or related field',
        responsibilities: 'Analyze business metrics and KPIs, Create dashboards and reports, Support fundraising and investor relations, Identify growth opportunities, Collaborate with cross-functional teams',
        salaryMin: 60000,
        salaryMax: 90000,
        experienceLevel: 'mid',
        jobType: 'full-time',
        location: 'Miami, FL',
        remote: true,
        company: companies[11]._id,
        postedBy: sampleUser._id,
        requiredSkills: ['Excel', 'Data Analysis', 'Business Strategy', 'Communication'],
        isFeatured: false,
        status: 'active'
      }
    ]);

    console.log('Created sample jobs');

    console.log('Seed data created successfully!');
    console.log(`Created ${companies.length} companies`);
    console.log(`Created ${jobs.length} jobs`);
    console.log(`Created ${skills.length} skills`);
    console.log('Sample user created: admin@careerconnect.com / password123');

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

seedData();
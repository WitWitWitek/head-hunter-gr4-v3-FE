#  Head Hunter

This application is a capstone project for the Mega K course, 3rd edition, designed to evaluate group performance in a Scrum framework. It facilitates connections between HR professionals and IT job seekers, with a focus on showcasing the skills and competencies of the course's participants.

## Live 

[HEAD HUNTER LIVE](https://head-hunter-ynt4.onrender.com/)

 ## 🖥️ Technology Stack

![React Logo](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![React router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![ESLint Logo](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white) ![VITE](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)  ![SCSS](https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white)

##  Business Objective

### Purpose
This application simplifies connecting HR departments, including headhunters, with individuals seeking IT jobs. It serves multiple functions:
- Enables Mega K students (referred to as "Students") to showcase their skills in a unified manner.
- Assists HR professionals in easily finding suitable job candidates, conducting interviews, and proposing collaboration.
- Allows administrators to manage access to the student database.
- Complements the job market, particularly for Mega K students, without directly competing with job portals.

### Business Model
- **Administrator Control**: Admins regulate access to the student database, thereby controlling the quantity of CVs downloaded by each HR user.

### Target Audience
- **Students**: Young programmers who are the central focus of the application.
- **HR Professionals**: Looking to hire IT talent.
- **Administrators**: Overseeing student database access and HR user management.

## Application Workflow

### Student Profile Management
- **Import and Registration**: Admins import a list of students from a CSV or JSON file. Each student receives a registration link.
- **Profile Completion**: Students fill in their profiles during or after registration, with certain fields being optional.

### HR Operations
- **Adding HR Users**: Admins add HR users, setting specific parameters. Post-registration, HR users view a table with partial student information.
- **Student Selection for Interviews**: HR can select students for interviews. Their capacity to add students to the "Interview" list is limited.A key feature for HR is an advanced filtering form that allows specifying student parameters such as course grades, preferred employment type, and expected salary.

### Interview and Hiring Process
- **Interview List Review**: HR has access to a "Candidates for Interview" tab. Each candidate's entry includes additional text and three action buttons.
- **Hiring Decisions**: Decisions made by HR are communicated to admins. Unselected candidates are returned to the available pool.

## System Roles

- **Admin**: Authorized to add HR users and import students. Assumes a singular role, manually added to the database with password management capabilities.
- **Student**: Completes and updates their profile, which is then accessible to HR for potential employment opportunities.
- **HR**: Works in HR or as a headhunter, accessing student profiles subject to settings and limits imposed by the admin.

## Getting Started 

To use FE, remember to download the server from the link and run it according to the instructions provided 
[go to BE repository](https://github.com/WitWitWitek/head-hunter-gr4-v3-BE)

1. **Clone the repository**:
   ```bash
   git clone [Repo-URL]
   ```

2. **Navigate to the project directory**:
   ```bash
   cd [Repo-Name]
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```
   
## Contributors
Team members from both repositories FE & BE

- [WitWitWitek](https://github.com/WitWitWitek)
- [PmitPoland](https://github.com/PmitPoland)
- [wiesienk](https://github.com/wiesienk)
- [Insterek](https://github.com/Insterek)
- [kozerka](https://github.com/kozerka)

## License

This project is licensed under the MIT License. The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). It puts only very limited restriction on reuse and has, therefore, high license compatibility.


##  What We Learned

In the process of developing this project, our team navigated various challenges that provided valuable lessons in teamwork, especially under difficult conditions such as remote collaboration and time constraints. Key takeaways include:

- **Effective Communication**: Learning to communicate clearly and efficiently was crucial for remote teamwork.
- **Time Management**: Balancing different time zones and personal schedules taught us the importance of time management.
- **Flexibility and Adaptation**: Adapting to unforeseen challenges and being flexible in our approach was vital.
- **Collaboration Tools**: Utilizing various digital tools enhanced our ability to work together despite being remote.
- **Team Cohesion**: Despite the distance, we learned to work as a cohesive unit, supporting and learning from each other.

This project not only helped us enhance our technical skills but also strengthened our capabilities in working as a part of a diverse, distributed team.


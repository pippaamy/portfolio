import { FaGraduationCap, FaComputer, FaBlackTie } from "react-icons/fa6";
import TechStack from "../components/TechStack";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="min-h-100 p-20 font-mono">
      <div>
        <h2 className="font-bold text-lg p-3 border-b-2">About me </h2>

        <p className="p-3">
          Hi, I&apos;m Pippa! As a Junior Software Developer & Mentor at
          Northcoders, I have successfully transitioned from an international
          orchestral musician to a dedicated and skilled developer.
        </p>
        <Image
          src="/images/profile/IMG_5629.png"
          alt="pic of author"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover "
        />
      </div>
      <div>
        <h2 className="font-bold text-lg p-3 border-b-2 pt-6"> Tech Stack</h2>
        <TechStack />
      </div>
      <div>
        <h2 className="font-bold text-lg p-3 border-b-2 pt-6">
          Employment - Tech
        </h2>
        <h3 className="p-3 font-bold">
          NORTHCODERS - SOFTWARE ENGINEER & MENTOR
        </h3>
        <FaComputer className="w-20 h-20 p-3" />
        <p className="p-3">
          In my current role, I specialise in JavaScript and TypeScript,
          leveraging my coding expertise to build robust applications and mentor
          aspiring developers. My blend of creativity and technical skills has
          allowed me to contribute effectively to projects and support the
          growth of new talent in the tech industry.
        </p>
        <h3 className="font-bold p-3"> Software Engineer</h3>

        <ul>
          <li className="p-2">
            •Implemented best practices in software engineering, including
            version control, code reviews, and testing
          </li>
          <li className="p-2">
            •Developed and maintained web applications using
            JavaScript,TypeScript, React, Node.js, and more
          </li>
          <li className="p-2">
            •Collaborated with different teams to plan tickets using Figma
          </li>
          <li className="p-2">
            •Utilized agile methodologies to prioritize tasks and deliver
            features efficiently
          </li>
          <li className="p-2">
            •Used responsive web design principles for user-friendly interfaces{" "}
          </li>
          <li className="p-2">
            •Demonstrated problem-solving skills by identifying and resolving
            technical challenges
          </li>
          <li className="p-2">
            •Moved with industry trends through continous learning
          </li>
        </ul>
        <br />
        <h3 className="font-bold p-3">Mentor</h3>
        <br />
        <ul>
          <li className="p-2">
            •Facilitate seminar solutions to enhance students problem-solving
            skills and demonstrate effective pair programming practices
          </li>
          <li className="p-2">
            •Contribute to the hiring process by interviewing prospective
            students and providing feedback for their code
          </li>
          <li className="p-2">
            •Provide personalised coding and pastoral support to students,
            offering constructive feedback and debugging assistance.
          </li>
          <li className="p-2">
            •Conducted one-on-one mentoring sessions to address individual
            learning needs
          </li>
          <li className="p-2">
            •Adapted mentoring techniques to meet the unique needs and learning
            styles of each mentee
          </li>
          <li className="p-2">
            •Contributed to the development of curriculum and coding challenges
            to ensure up-to-date content
          </li>
        </ul>
      </div>

      <h2 className="font-bold text-lg p-3 border-b-2 pt-6">
        Employment - non-tech
      </h2>
      <FaBlackTie className="w-20 h-20 p-3" />
      <h3 className="p-3 font-bold">ProteinTech — Office Assistant</h3>
      <ul>
        <li className="p-2">
          • Demonstrated attention to detail and effective time management
        </li>
        <li className="p-2">
          • Utilised written communication skills for client correspondence and
          invoice organisation
        </li>
      </ul>

      <h3 className="p-3 font-bold">Orchestra Academia China - Oboist</h3>
      <ul>
        <li className="p-2">
          • Thrived in high-pressure situations with quick turnaround times for
          learning new music
        </li>
        <li className="p-2">
          • Building cross-cultural partnerships working in an orchestra with 10
          different nationalities
        </li>
        <li className="p-2"> • Performed in front of thousands of people</li>
      </ul>

      <h2 className="font-bold text-lg p-3 border-b-2 pt-6">Education</h2>
      <FaGraduationCap className="w-20 h-20 p-3" />
      <h3 className="p-3 font-bold">
        Northcoders - Skills Bootcamp in Software Development
      </h3>
      <p className="p-3">
        Completed an intensive 13-week coding bootcamp as Northcoders course. We
        developed our problem-solving skills whilst learning web development
        practices and technologies. This has equipped me with the skills to
        embark on a great career within the tech industry.
      </p>
      <h3 className="p-3 font-bold"> Royal Northern College of Music</h3>
      <p className="p-3">
        I specialised in the oboe & cor anglais whilst studying at RNCM. Music
        school instilled in me technical proficiency, discipline, and time
        management through rigorous practice routines. It also cultivated my
        creativity, adaptability, and ability to collaborate, fostering skills
        in critical listening, problem-solving, and emotional intelligence that
        extend beyond music into various aspects of life.
      </p>
    </div>
  );
}

import { 
  Users, GraduationCap, Linkedin, Github, Mail, 
  Award, ExternalLink,
  ChevronRight, Heart, Target
} from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  linkedin: string;
  github?: string;
  email?: string;
  description?: string;
}

const mentors: TeamMember[] = [
  {
    id: 1,
    name: "Pranav K",
    role: "Student",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    email: "vu1f2425054@pvppcoe.ac.in",
    description: "15+ years of experience in AI & ML Research. Published 50+ research papers."
  },
  {
    id: 2,
    name: "Pranav K",
    role: "Student",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    email: "vu1f2425054@pvppcoe.ac.in",
    description: "Expert in Cloud Computing & Cybersecurity. Industry consultant for major tech firms."
  },
  {
    id: 3,
    name: "Krishna Choudhary",
    role: "Student",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    email: "vu1f2425054@pvppcoe.ac.in",
    description: "Former Google engineer. Startup advisor with 10+ successful exits."
  }
];

const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Sairaj Sakpal",
    role: "Chairperson",
    department: "Second Year, Information Technology",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 2,
    name: "Shraddha Alibade",
    role: "Vice Chairperson",
    department: "Second Year, Information Technology",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 3,
    name: "Shubham",
    role: "General Secretary",
    department: "Second Year, Mechatronics",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 4,
    name: "Maithili Talawadekar",
    role: "Treasurer",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 5,
    name: "Aditya Ambure",
    role: "Documentation Head",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 6,
    name: "Ayush Singh",
    role: "Technical Head",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 7,
    name: "Suhani",
    role: "Creative Head",
    department: "Second Year, Mechatronics",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 8,
    name: "Saima",
    role: "Publicity Head",
    department: "Second Year, Information Technology",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 9,
    name: "Ankita Nair",
    role: "PR Head",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 10,
    name: "Akif Khan",
    role: "Social Media Head",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 11,
    name: "Krishna Choudhary",
    role: "Web Master",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1751383267/123_qcnao2.webp",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  },
  {
    id: 12,
    name: "Pranav Khalate",
    role: "Infra Head",
    department: "Second Year, Computer Engineering",
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1768820203/Pranav__kfanak.jpg",
    linkedin: "https://linkedin.com/in/pranav-kh",
    github: "https://github.com/FrostByte-49",
    email: "vu1f2425054@pvppcoe.ac.in"
  }
];

// Team Member Modal
const TeamModal = ({ member, isOpen, onClose }: { member: TeamMember | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !member) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] mt-[-4rem] overflow-hidden flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="relative h-100 overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            {/* Member Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                {member.role}
              </div>
              <p className="text-muted-foreground">{member.department}</p>
            </div>

            {/* Description */}
            {member.description && (
              <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            )}

            {/* Contact Links */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors group"
                >
                  <div className="relative w-9 h-9 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-[#006699] dark:from-[#0077B5] dark:to-[#005580]" />
                    <Linkedin className="absolute inset-0 m-auto w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium group-hover:text-primary">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">Professional Profile</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors group"
                  >
                    <div className="relative w-9 h-9 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700" />
                      <Github className="absolute inset-0 m-auto w-5 h-5 text-gray-100 dark:text-gray-200" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary">GitHub</div>
                      <div className="text-xs text-muted-foreground">Projects & Code</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors group"
                  >
                    <div className="relative w-9 h-9 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#EA4335] to-[#D14836] dark:from-[#EA4335] dark:to-[#C23321]" />
                      <Mail className="absolute inset-0 m-auto w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary">Email</div>
                      <div className="text-xs text-muted-foreground">{member.email}</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, onDetailsClick, type }: { 
  member: TeamMember; 
  onDetailsClick: (member: TeamMember) => void;
  type: 'mentor' | 'core';
}) => {
  return (
    <div 
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
    >
      {/* Member Image */}
      <div className="relative h-64 overflow-hidden border-b border-border">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Member Info */}
      <div className="p-5">
        <div className="mb-4">
          {/* Member Type Indicator */}
          <div className="inline-flex items-center gap-1.5 mb-3">
            <div className={`w-2 h-2 rounded-full ${
              type === 'mentor' 
                ? 'bg-blue-500' 
                : 'bg-green-500'
            }`} />
            <span className={`text-xs font-medium ${
              type === 'mentor' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-green-600 dark:text-green-400'
            }`}>
              {type === 'mentor' ? 'Mentor' : 'Core Team'}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {member.name}
          </h3>
          <p className="text-primary font-medium mb-2">{member.role}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{member.department}</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 mb-4">
          {/* LinkedIn */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/social w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-[#006699] dark:from-[#0077B5] dark:to-[#005580]" />
              <Linkedin className="absolute inset-0 m-auto w-5 h-5 text-white" />
            </div>
            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/social:opacity-100 transition-opacity" />
          </a>

          {/* GitHub */}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/social w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              aria-label={`${member.name}'s GitHub`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700" />
                <Github className="absolute inset-0 m-auto w-5 h-5 text-gray-100 dark:text-gray-200" />
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/social:opacity-100 transition-opacity" />
            </a>
          )}

          {/* Email */}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="relative group/social w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              aria-label={`Email ${member.name}`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EA4335] to-[#D14836] dark:from-[#EA4335] dark:to-[#C23321]" />
                <Mail className="absolute inset-0 m-auto w-5 h-5 text-white" />
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/social:opacity-100 transition-opacity" />
            </a>
          )}
        </div>

        {/* Details Button */}
        <button
          onClick={() => onDetailsClick(member)}
          className="w-full py-2.5 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          <span>View Profile</span>
          <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Users className='w-4 h-4 text-primary' />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated Mentors & Passionate Students Working Together To Advance Technology 
            & Create Impact Through Innovation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "15+", label: "Total Members", icon: Users, color: "bg-blue-500" },
            { value: "3", label: "Expert Mentors", icon: GraduationCap, color: "bg-green-500" },
            { value: "12", label: "Core Team", icon: Award, color: "bg-purple-500" },
            { value: "5+", label: "Projects", icon: Target, color: "bg-amber-500" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.color}/10 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mentors Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Our <span className="text-blue-600 dark:text-blue-400">Mentors</span></h2>
              <p className="text-muted-foreground">Industry Experts & Faculty Guiding Our Journey</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <TeamMemberCard 
                key={mentor.id} 
                member={mentor} 
                onDetailsClick={handleMemberClick}
                type="mentor"
              />
            ))}
          </div>
        </section>

        {/* Core Team Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Core <span className="text-green-600 dark:text-green-400">Team</span></h2>
              <p className="text-muted-foreground">Passionate Students Driving IEEE Initiatives Forward</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onDetailsClick={handleMemberClick}
                type="core"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join Our Team</span>
          </div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Want to be part of our growing community? <br /> Applications open every semester!
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2 mx-auto cursor-pointer">
            Apply Now
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Team Member Modal */}
        <TeamModal 
          member={selectedMember} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
}
import { Calendar, MapPin, Users, Clock, ChevronRight, ExternalLink, Trophy, Award } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  attendees: number;
  time: string;
  location: string;
  teamSize: number;
  image: string;
  details: string;
  registrationLink: string;
  type: 'upcoming' | 'past';
  outcome?: string;
}

const eventsData: Event[] = [
  // Upcoming Events
  {
    id: 1,
    date: "22 Jan",
    title: "Inauguration Ceremony",
    description: "IEEE Student Branch Inauguration",
    attendees: 150,
    time: "11:00 AM",
    location: "Main Stage",
    teamSize: 1,
    image: "https://res.cloudinary.com/dhn92qb61/image/upload/v1768849497/1000017627_asjxfq.webp",
    details: `Official IEEE Student Branch Inauguration Ceremony!

  Event Highlights:
  • Formal inauguration and lamp lighting ceremony
  • Welcome address by faculty advisors
  • Introduction to IEEE and its global impact
  • Address by distinguished chief guest(s)
  • Overview of upcoming IEEE activities and opportunities
  • Felicitation and vote of thanks

  Registration deadline: 20 January`,
    registrationLink: "https://forms.google.com/ieee-inauguration",
    type: "upcoming"
  } 

  // Past Events
];

// Event Detail Modal Component
const EventModal = ({ event, isOpen, onClose }: { event: Event | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !event) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] mt-[-4rem] overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-48 sm:h-72 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            {/* Event Type Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              event.type === 'upcoming' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
            }`}>
              {event.type === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
              {event.type === 'past' && <Trophy className="w-3 h-3" />}
            </div>

            <div className="left-6 mb-6">
              <div className="flex items-center gap-2 text-primary text-sm mb-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
                <Clock className="w-4 h-4 ml-2" />
                <span>{event.time}</span>
              </div>
              <h2 className="text-2xl font-bold text-primary">{event.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Venue: </span>
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Users className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Team Size: </span>
                  <span>{event.teamSize === 1 ? 'Individual' : `${event.teamSize} members`}</span>
                </div>
              </div>
            </div>

            {/* Outcome For Past Events */}
            {event.type === 'past' && event.outcome && (
              <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Event Outcome</h4>
                </div>
                <p className="text-sm text-muted-foreground">{event.outcome}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">About This Event</h3>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {event.details}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm pt-4 border-t border-border">
                <Users className="w-4 h-4" />
                <span className="text-muted-foreground">{event.attendees} {event.type === 'past' ? 'participated' : 'registered'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-border">
              {event.type === 'upcoming' ? (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Register
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex-1 px-6 py-3 bg-muted text-muted-foreground rounded-lg font-medium text-center">
                  Registration Closed
                </div>
              )}
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors text-foreground cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, onDetailsClick }: { event: Event; onDetailsClick: (event: Event) => void }) => {
  return (
    <div 
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="px-3 py-2 bg-background/95 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="text-lg font-bold text-foreground">{event.date.split(' ')[0]}</div>
            <div className="text-xs text-muted-foreground">{event.date.split(' ')[1]}</div>
          </div>
        </div>
        {/* Event Type Badge */}
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
          event.type === 'upcoming' 
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        }`}>
          {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {event.description}
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{event.teamSize === 1 ? 'Individual' : `Team of ${event.teamSize}`}</span>
          </div>
        </div>

        {/* Outcome For Past Events */}
        {event.type === 'past' && event.outcome && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-foreground">Outcome:</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{event.outcome}</p>
          </div>
        )}

        {/* Stats & Actions */}
        <div className="pt-4 border-t border-border space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{event.attendees} {event.type === 'past' ? 'participated' : 'attending'}</span>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => onDetailsClick(event)}
              className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors text-sm font-medium flex items-center justify-center gap-1 cursor-pointer"
            >
              Details
              <ChevronRight className="w-3 h-3" />
            </button>
            {event.type === 'upcoming' && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium text-center"
              >
                Register
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');
  const pastEvents = eventsData.filter(event => event.type === 'past');

  const handleDetailsClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // const handleViewAllUpcoming = () => {
  //   console.log('Navigate to all upcoming events');
  // };

  // const handleViewAllPast = () => {
  //   console.log('Navigate to all past events');
  // };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <Calendar className='w-4 h-4 text-primary' />
            <span className="text-sm font-medium text-primary">IEEE Events</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join Our Technical Sessions, Workshops, Competitions & Networking Events
          </p>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="text-muted-foreground">
                Don't Miss Out On Our Upcoming Technical Sessions & Workshops
              </p>
            </div>
            {/* <button 
              onClick={handleViewAllUpcoming}
              className="px-6 py-3 rounded-lg border border-border text-primary hover:bg-primary/10 transition-colors font-medium flex items-center gap-2"
            >
              View All Upcoming
              <ChevronRight className="w-4 h-4" />
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onDetailsClick={handleDetailsClick}
              />
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Past <span className="text-primary">Events</span>
              </h2>
              <p className="text-muted-foreground">
                Relive The Memories From Our Successful Events & Workshops
              </p>
            </div>
            {/* <button 
              onClick={handleViewAllPast}
              className="px-6 py-3 rounded-lg border border-border text-primary hover:bg-primary/10 transition-colors font-medium flex items-center gap-2"
            >
              View All Past Events
              <ChevronRight className="w-4 h-4" />
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onDetailsClick={handleDetailsClick}
              />
            ))}
          </div>
        </section>

        {/* Event Modal */}
        <EventModal 
          event={selectedEvent} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
}
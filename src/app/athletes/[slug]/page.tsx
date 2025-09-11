import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const athletesData = {
  'sarah-thompson': {
    name: 'Sarah Thompson',
    title: 'National Champion',
    bio: 'Two-time Canadian Mas Wrestling champion with over 8 years of experience in the sport.',
    fullBio: `Sarah Thompson discovered Mas Wrestling during her university years and has since become one of Canada's most dominant competitors. Her journey began with a background in powerlifting and wrestling, which provided the perfect foundation for excelling in this unique sport.

    Known for her exceptional technique and mental toughness, Sarah has consistently performed at the highest level of competition. Her training regimen combines traditional strength training with sport-specific technique work, meditation, and strategic analysis of opponents.

    Beyond her competitive achievements, Sarah is passionate about growing the sport in Canada and regularly conducts workshops for newcomers. She believes that Mas Wrestling's emphasis on technique over pure strength makes it accessible to athletes of all backgrounds.`,
    achievements: [
      '2023 Canadian National Champion',
      '2022 Canadian National Champion', 
      'World Championships Bronze Medal (2023)',
      'World Championships 4th Place (2022)',
      'Provincial Champion 2021, 2022, 2023',
      'Outstanding Athlete Award 2023'
    ],
    stats: {
      province: 'Ontario',
      city: 'Toronto',
      experience: '8 years',
      weightClass: '70kg',
      coach: 'Viktor Petrov',
      club: 'Toronto Mas Wrestling Club'
    },
    competitionHistory: [
      { year: '2023', event: 'World Championships', result: 'Bronze Medal' },
      { year: '2023', event: 'Canadian Nationals', result: '1st Place' },
      { year: '2022', event: 'Canadian Nationals', result: '1st Place' },
      { year: '2022', event: 'World Championships', result: '4th Place' },
      { year: '2021', event: 'Canadian Nationals', result: '2nd Place' },
      { year: '2021', event: 'Provincial Championships', result: '1st Place' }
    ]
  },
  'marcus-chen': {
    name: 'Marcus Chen',
    title: 'Rising Star',
    bio: 'Young talent making waves in the junior divisions with exceptional technique.',
    fullBio: `Marcus Chen represents the future of Mas Wrestling in Canada. At just 19 years old, he has already achieved remarkable success in junior competitions and is making the transition to senior-level competition.

    Marcus's approach to Mas Wrestling is highly analytical. He studies video footage of top international competitors and works closely with his coach to develop innovative techniques. His dedication to training and natural athletic ability have made him a standout performer.

    Currently studying Kinesiology at the University of British Columbia, Marcus balances his academic pursuits with intensive training. His goal is to compete at the World Championships and eventually coach the next generation of Canadian mas wrestlers.`,
    achievements: [
      '2023 Junior National Champion',
      '2023 Junior World Championships 5th Place',
      'Provincial Junior Champion 2022, 2023',
      'Rising Talent Award 2023',
      'University Championships Winner',
      'Technical Excellence Award'
    ],
    stats: {
      province: 'British Columbia',
      city: 'Vancouver',
      experience: '3 years',
      weightClass: '80kg',
      coach: 'Elena Rodriguez',
      club: 'Pacific Mas Wrestling Academy'
    },
    competitionHistory: [
      { year: '2023', event: 'Junior World Championships', result: '5th Place' },
      { year: '2023', event: 'Junior Nationals', result: '1st Place' },
      { year: '2023', event: 'Provincial Championships', result: '1st Place' },
      { year: '2022', event: 'Junior Nationals', result: '3rd Place' },
      { year: '2022', event: 'Provincial Championships', result: '1st Place' },
      { year: '2021', event: 'Regional Championships', result: '2nd Place' }
    ]
  },
  'david-rodriguez': {
    name: 'David Rodriguez',
    title: 'Veteran Competitor',
    bio: '15-year veteran and coach, helping develop the next generation of Canadian mas wrestlers.',
    fullBio: `David Rodriguez is a legend in Canadian Mas Wrestling, with a career spanning over 15 years of elite competition. His journey began in Calgary, where he discovered the sport through the local immigrant community from Yakutia.

    As a five-time national champion, David has represented Canada at numerous international competitions and has been instrumental in establishing training programs across Western Canada. His competitive achievements are matched only by his contributions as a coach and mentor.

    Now in the later stages of his competitive career, David focuses on developing young talent while still competing at the masters level. His Calgary-based academy has produced several national-level competitors and continues to be a hub for Mas Wrestling in Western Canada.`,
    achievements: [
      '5x Canadian National Champion (2015, 2017, 2018, 2019, 2021)',
      'World Championships Silver Medal (2019)',
      'World Championships Bronze Medal (2018)',
      'Masters World Champion (2023)',
      'Coach of the Year Award 2022',
      'Sport Development Award 2020'
    ],
    stats: {
      province: 'Alberta',
      city: 'Calgary',
      experience: '15 years',
      weightClass: '90kg',
      coach: 'Self-coached',
      club: 'Calgary Strength Academy'
    },
    competitionHistory: [
      { year: '2023', event: 'Masters World Championships', result: '1st Place' },
      { year: '2021', event: 'Canadian Nationals', result: '1st Place' },
      { year: '2019', event: 'World Championships', result: 'Silver Medal' },
      { year: '2019', event: 'Canadian Nationals', result: '1st Place' },
      { year: '2018', event: 'World Championships', result: 'Bronze Medal' },
      { year: '2018', event: 'Canadian Nationals', result: '1st Place' }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AthleteProfile({ params }: PageProps) {
  const { slug } = await params;
  const athlete = athletesData[slug as keyof typeof athletesData];

  if (!athlete) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <span>›</span>
              <Link href="/athletes" className="hover:text-red-600">Athletes</Link>
              <span>›</span>
              <span className="text-gray-900">{athlete.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="bg-gray-300 w-full md:w-64 h-80 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600">Photo of {athlete.name}</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{athlete.name}</h1>
                    <p className="text-red-600 font-semibold text-xl mb-4">{athlete.title}</p>
                    <p className="text-gray-700 text-lg mb-6">{athlete.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Province:</span>
                        <p className="text-gray-600">{athlete.stats.province}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Experience:</span>
                        <p className="text-gray-600">{athlete.stats.experience}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Weight Class:</span>
                        <p className="text-gray-600">{athlete.stats.weightClass}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Club:</span>
                        <p className="text-gray-600">{athlete.stats.club}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Biography</h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {athlete.fullBio}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Major Achievements</h3>
                <ul className="space-y-2">
                  {athlete.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competition History */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Recent Competition History</h3>
                <div className="space-y-4">
                  {athlete.competitionHistory.map((comp, index) => (
                    <div key={index} className="border-l-4 border-red-600 pl-4">
                      <div className="font-semibold text-gray-900">{comp.event}</div>
                      <div className="text-sm text-gray-600">{comp.year}</div>
                      <div className="text-red-600 font-medium">{comp.result}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Training Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Coach:</span>
                    <p className="text-gray-600">{athlete.stats.coach}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Training Location:</span>
                    <p className="text-gray-600">{athlete.stats.city}, {athlete.stats.province}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Club:</span>
                    <p className="text-gray-600">{athlete.stats.club}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Athletes */}
          <div className="mt-12 text-center">
            <Link href="/athletes" className="btn-primary">
              ← Back to All Athletes
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(athletesData).map((slug) => ({
    slug: slug,
  }));
}
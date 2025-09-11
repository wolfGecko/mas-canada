import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const newsArticles = [
  {
    id: 'canadian-team-worlds-2024',
    date: 'March 8, 2024',
    title: 'Canadian Team Selected for 2024 World Championships',
    excerpt: 'Five Canadian athletes have been selected to represent Canada at the upcoming World Mas Wrestling Championships in Yakutsk, Russia.',
    category: 'Competition',
    featured: true,
    content: `The Canadian Mas Wrestling Federation is proud to announce the selection of five elite athletes who will represent Canada at the 2024 World Mas Wrestling Championships taking place in Yakutsk, Sakha Republic (Yakutia), Russia from September 15-18, 2024.

    The selected team includes national champions Sarah Thompson and David Rodriguez, along with rising stars Marcus Chen, Emma Wilson, and James Mitchell. This diverse team represents athletes from across Canada and showcases the growing strength of mas wrestling in our country.

    "This is an incredibly talented group of athletes who have demonstrated exceptional skill and dedication," said Team Canada Coach Viktor Petrov. "We have high expectations for their performance at the world championships."

    The team will participate in a intensive training camp in Winnipeg before departing for Russia. This marks Canada's largest delegation to the World Championships to date.`
  },
  {
    id: 'new-club-ontario',
    date: 'February 22, 2024',
    title: 'New Training Club Opens in Ottawa',
    excerpt: 'Capital Mas Wrestling Club becomes the latest addition to Ontario\'s growing mas wrestling community.',
    category: 'Club News',
    content: `A new mas wrestling training facility has opened in Ottawa, expanding opportunities for athletes in the National Capital Region. The Capital Mas Wrestling Club, located in the RA Centre, offers training sessions three times per week under the guidance of certified coaches.

    Club founder and head coach Maria Gonzalez brings over 10 years of mas wrestling experience and has competed internationally. "Ottawa has a vibrant fitness community, and we're excited to introduce mas wrestling to new athletes here," said Gonzalez.

    The club is currently accepting new members of all skill levels and offers beginner-friendly introduction sessions every Saturday morning.`
  },
  {
    id: 'youth-development-program',
    date: 'February 15, 2024',
    title: 'Youth Development Program Launches Across Canada',
    excerpt: 'New initiative aims to introduce mas wrestling to young athletes through school partnerships and youth clubs.',
    category: 'Development',
    content: `Mas Wrestling Canada has launched a comprehensive youth development program designed to introduce the sport to athletes aged 12-18 across the country. The program includes school demonstrations, youth coaching certification, and specialized equipment for younger athletes.

    The initiative has already partnered with 15 schools and community centers in major Canadian cities. "Getting young people involved is crucial for the future of mas wrestling in Canada," said National Development Director Lisa Chang.

    Schools interested in participating can contact the federation for demonstration sessions and equipment lending programs.`
  },
  {
    id: 'sponsorship-announcement',
    date: 'January 30, 2024',
    title: 'Major Sponsorship Deal Supports Canadian Athletes',
    excerpt: 'Canadian Tire Corporation becomes official sponsor of Mas Wrestling Canada, providing crucial support for athlete development.',
    category: 'Sponsorship',
    content: `Mas Wrestling Canada is pleased to announce a three-year sponsorship agreement with Canadian Tire Corporation, one of Canada's most iconic retailers. This partnership will provide significant support for athlete development, competition hosting, and equipment provision.

    The sponsorship includes funding for the national team program, travel support for international competitions, and community development initiatives. Canadian Tire will also become the title sponsor of the Canadian National Championships.

    "We're thrilled to partner with Canadian Tire, a company that shares our values of community, strength, and Canadian pride," said Federation President Robert Kim. "This support will be transformational for our sport."

    The partnership begins immediately and will be prominently featured at the upcoming National Championships in Toronto.`
  },
  {
    id: 'coach-certification-program',
    date: 'January 18, 2024',
    title: 'New Coach Certification Program Approved by Sport Canada',
    excerpt: 'Comprehensive coaching education program receives official recognition, setting standards for mas wrestling instruction across Canada.',
    category: 'Education',
    content: `Sport Canada has officially recognized the Mas Wrestling Canada Coach Certification Program, marking a significant milestone for the sport's development in Canada. The program establishes standardized training and certification requirements for coaches at all levels.

    The certification program includes three levels: Community Coach, Competition Coach, and High Performance Coach. Each level requires specific training hours, practical experience, and ongoing education requirements.

    "This recognition validates mas wrestling as a legitimate sport in Canada and ensures our coaches meet the highest standards," said Education Director Dr. Amanda Foster. The first certification courses will begin in April 2024.`
  },
  {
    id: 'international-training-camp',
    date: 'December 20, 2023',
    title: 'International Coaches Visit Canada for Training Exchange',
    excerpt: 'Yakutian masters share traditional techniques with Canadian athletes during special training camp in Calgary.',
    category: 'Training',
    content: `A delegation of master coaches from Yakutia, the birthplace of mas wrestling, visited Canada for an unprecedented cultural and technical exchange. The week-long training camp in Calgary brought together 40 Canadian athletes with traditional Yakutian coaching methods.

    The visiting coaches, led by Master Dmitri Ammosov, shared centuries-old techniques and cultural context that have been passed down through generations. "Learning from the masters of this sport in their traditional way has been incredible," said participant Sarah Thompson.

    This exchange program is planned to become an annual event, with Canadian coaches visiting Yakutia in return.`
  }
];

export default function News() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay up to date with the latest news, achievements, and developments in Canadian mas wrestling.
            </p>
          </div>

          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-300 h-64 md:h-auto flex items-center justify-center">
                  <span className="text-gray-600">Featured News Photo</span>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      FEATURED
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{article.excerpt}</p>
                  <div className="prose max-w-none">
                    <div className="text-gray-700 whitespace-pre-line">
                      {article.content.split('\n\n')[0]}...
                    </div>
                  </div>
                  <Link href={`/news/${article.id}`} className="text-red-600 hover:text-red-800 font-semibold mt-4 inline-block">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* News Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-600">News Photo</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${
                        article.category === 'Competition' ? 'bg-red-100 text-red-800' :
                        article.category === 'Club News' ? 'bg-green-100 text-green-800' :
                        article.category === 'Development' ? 'bg-blue-100 text-blue-800' :
                        article.category === 'Sponsorship' ? 'bg-purple-100 text-purple-800' :
                        article.category === 'Education' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    <Link href={`/news/${article.id}`} className="text-red-600 hover:text-red-800 font-semibold text-sm">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-red-600 text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="mb-6">Get the latest mas wrestling news and updates delivered to your inbox.</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 text-red-100">
              We respect your privacy and will never share your information.
            </p>
          </div>

          {/* News Categories */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link href="/news?category=competition" className="text-center p-4 rounded-lg border hover:bg-red-50 hover:border-red-300 transition-colors">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Competition</span>
              </Link>
              
              <Link href="/news?category=club-news" className="text-center p-4 rounded-lg border hover:bg-green-50 hover:border-green-300 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Club News</span>
              </Link>
              
              <Link href="/news?category=development" className="text-center p-4 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Development</span>
              </Link>
              
              <Link href="/news?category=sponsorship" className="text-center p-4 rounded-lg border hover:bg-purple-50 hover:border-purple-300 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Sponsorship</span>
              </Link>
              
              <Link href="/news?category=education" className="text-center p-4 rounded-lg border hover:bg-yellow-50 hover:border-yellow-300 transition-colors">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Education</span>
              </Link>
              
              <Link href="/news?category=training" className="text-center p-4 rounded-lg border hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold">Training</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
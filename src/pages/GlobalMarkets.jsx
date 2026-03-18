import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

const markets = [
  { region: 'Africa', countries: ['South Africa', 'Kenya', 'Ghana', 'Nigeria', 'Tanzania', 'Zambia', 'Zimbabwe', 'Ethiopia', 'Mozambique'] },
  { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain'] },
  { region: 'Southeast Asia', countries: ['Indonesia', 'Philippines', 'Malaysia', 'Thailand', 'Vietnam', 'Myanmar'] },
  { region: 'Americas', countries: ['USA', 'Brazil', 'Canada', 'Chile', 'Peru', 'Colombia', 'Mexico'] },
  { region: 'Europe', countries: ['UK', 'Germany', 'Poland', 'Turkey', 'Ukraine'] },
  { region: 'Oceania', countries: ['Australia', 'New Zealand', 'Papua New Guinea'] },
]

export default function GlobalMarkets() {
  return (
    <>
      <SEOMeta
        title="Global Markets We Serve"
        metaTitle="Global Industrial Parts Export Markets"
        description="Krushvel exports crusher parts and conveyor components to 50+ countries across Africa, Middle East, Asia, Americas, Europe, and Oceania."
        keywords="industrial parts export markets, crusher parts global buyer, conveyor rollers worldwide supply from India"
      />
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-blue-950 to-cyan-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Global Markets We Serve</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Exporting industrial parts to buyers in 50+ countries across 6 continents</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card-light p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">{market.region}</h2>
                  <div className="flex flex-wrap gap-2">
                    {market.countries.map(c => (
                      <span key={c} className="px-3 py-1.5 bg-cyan-50 text-cyan-700 text-sm rounded-lg border border-cyan-100">{c}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-6">Don't see your country? We export to virtually any country worldwide.</p>
              <Link to="/contact" className="btn-primary">Inquire for Your Country</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

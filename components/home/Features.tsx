"use client";

export default function Features() {
  const items = [
    {
      icon: "📱",
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android platformları için modern, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
      features: ["React Native", "Flutter", "Native Development", "UI/UX Design"]
    },
    {
      icon: "🌐",
      title: "Web Sitesi Tasarımı",
      description: "Responsive ve modern web siteleri ile markanızı dijital dünyada öne çıkarın.",
      features: ["React.js", "Next.js", "WordPress", "E-commerce"]
    },
    {
      icon: "🔧",
      title: "Donanım Tamiri & Destek",
      description: "Profesyonel donanım tamiri ve teknik destek hizmetleri sunuyoruz.",
      features: ["Bilgisayar Tamiri", "Yedek Parça", "Teknik Destek", "Bakım"]
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          Hizmetlerimiz
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Dijital dönüşümünüz için kapsamlı yazılım çözümleri sunuyoruz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{item.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Projenizi Hayata Geçirelim
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Hangi hizmete ihtiyacınız olduğunu söyleyin, size en uygun çözümü sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905374064175" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
            </a>
            <a 
              href="/iletisim" 
              className="inline-flex items-center gap-2 bg-slate-700 text-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



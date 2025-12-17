

🚀 Crypto App
Modern ve kullanıcı dostu bir kripto para takip uygulaması. Uygulama, güncel kripto para verilerini
harici bir API üzerinden çekerek listeler ve detay sayfalarında grafiklerle birlikte sunar.
🧩 Özellikler

🔄 Gerçek zamanlı kripto para verileri
📈 Fiyat değişimlerini gösteren grafikler
🔍 Kripto para arama özelliği
🌗 Açık / Koyu tema desteği
⚡ Hızlı ve modern arayüz
📱 Responsive (mobil uyumlu) tasarım


🛠️ Kullanılan Teknolojiler
React.js – Kullanıcı arayüzü
Tailwind CSS – Stil ve tasarım
Vite – Hızlı geliştirme ortamı
JavaScript (ES6+)
REST API – Kripto para verileri
lucide-icons
 react-router-dom
 axios
 react-chartjs-2



📂 Proje Yapısı
src/
├── components/ # Tekrar kullanılabilir bileşenler
├── pages/ # Sayfa bileşenleri (Home, Detail)
├── services/ # API istekleri
├── context/ # Tema ve global state yönetimi
├── utils/ # Yardımcı fonksiyonlar
├── App.jsx
└── main.jsx


🔑 API Kullanımı
Uygulama, kripto para verilerini harici bir API üzerinden çekmektedir.
API anahtarı güvenlik sebebiyle .env dosyasında saklanmaktadır:
VITE_API_KEY=your_api_key_here
1
🔍 .env dosyası .gitignore içine eklenmiştir ve repoya dahil edilmez.

▶️ Kurulum ve Çalıştırma
Projeyi lokal ortamında çalıştırmak için:
# Repoyu klonla
git clone https://github.com/dagdemir-96/crypto-app.git
# Proje klasörüne gir
cd crypto-app
# Bağımlılıkları yükle
npm install


# Geliştirme sunucusunu başlat
npm run dev
Tarayıcıdan şu adrese git:
http://localhost:5173


📸 Ekran Görüntüleri
(İstersen buraya uygulama ekran görüntüleri ekleyebilirsin)


🧪 Geliştirme Notları
•
Proje bileşen bazlı mimariyle geliştirilmiştir
Kod okunabilirliği ve yeniden kullanılabilirlik ön planda tutulmuştur
Tema yönetimi için Context API kullanılmıştır


🧑💻 Geliştirici
Pınar Dağdemir

GitHub: dagdemir-96
📄 Lisans
Bu proje eğitim ve kişisel gelişim amaçlı oluşturulmuştur.

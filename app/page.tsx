import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const derbyDate = new Date('2026-03-15T18:00:00'); // تاریخ دربی ۱۰۶
  const now = new Date();
  const diff = derbyDate.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const packages = [
    { name: 'برنزی', price: '۵۰,۰۰۰ تومان', features: ['پیش‌بینی پایه', '۱ پیش‌بینی'], color: 'bronze' },
    { name: 'نقره‌ای', price: '۱۵۰,۰۰۰ تومان', features: ['پیش‌بینی پیشرفته', '۲ پیش‌بینی'], color: 'silver' },
    { name: 'طلایی', price: '۳۰۰,۰۰۰ تومان', features: ['همه چیز + بوست', '۳ پیش‌بینی'], color: 'gold' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4 text-center">
        <Image src="/deribaz-logo.png" alt="دربی‌باز" width={200} height={100} className="mx-auto" />
        <h1 className="text-3xl font-bold">دربی‌باز</h1>
        <p className="text-lg">مسابقه پیش‌بینی دربی با جایزه ۱ میلیارد تومان!</p>
      </header>

      <main className="container mx-auto p-4">
        <div className="text-center my-8">
          <h2 className="text-4xl font-bold mb-4">شمارش معکوس تا دربی ۱۰۶</h2>
          <div className="grid grid-cols-4 gap-4 text-2xl font-bold">
            <div className="bg-white p-4 rounded shadow">{days} روز</div>
            <div className="bg-white p-4 rounded shadow">{hours} ساعت</div>
            <div className="bg-white p-4 rounded shadow">{minutes} دقیقه</div>
            <div className="bg-white p-4 rounded shadow">{seconds} ثانیه</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white p-6 rounded shadow-lg border-t-4 border-${pkg.color}-500`}>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
              <ul className="mb-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">• {feature}</li>
                ))}
              </ul>
              <Link href="/predict" className="block w-full bg-primary text-white py-2 px-4 rounded text-center font-bold">
                شرکت کن
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

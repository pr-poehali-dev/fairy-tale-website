import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    age: '',
    details: ''
  });

  const stories = [
    {
      title: 'Приключения в волшебном лесу',
      description: 'Твой малыш станет героем сказки о дружбе и храбрости',
      icon: '🌳',
      color: 'bg-magical-mint'
    },
    {
      title: 'Космическое путешествие',
      description: 'Захватывающий полёт среди звёзд и планет',
      icon: '🚀',
      color: 'bg-magical-blue'
    },
    {
      title: 'Подводное царство',
      description: 'Встреча с морскими обитателями и поиск сокровищ',
      icon: '🐠',
      color: 'bg-secondary'
    },
    {
      title: 'Сказка о добром драконе',
      description: 'История о настоящей дружбе с волшебным существом',
      icon: '🐉',
      color: 'bg-magical-yellow'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-magical-pink via-white to-magical-blue overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl animate-float">🌈</div>
      <div className="absolute top-32 right-20 text-5xl animate-bounce-slow">⭐</div>
      <div className="absolute bottom-20 left-32 text-6xl animate-float" style={{ animationDelay: '1s' }}>☁️</div>
      <div className="absolute bottom-40 right-16 text-5xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🌸</div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-magical-pink">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl">✨</span>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-magical-pink to-magical-blue">
                Magical Stories
              </h1>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="font-medium hover:text-magical-pink transition-colors">Главная</a>
              <a href="#stories" className="font-medium hover:text-magical-pink transition-colors">Наши сказки</a>
              <a href="#order" className="font-medium hover:text-magical-pink transition-colors">Заказать</a>
              <a href="#contacts" className="font-medium hover:text-magical-pink transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magical-pink via-magical-blue to-magical-mint">
              Добро пожаловать в мир
            </span>
            <br />
            <span className="font-handwriting text-6xl md:text-8xl text-magical-blue">
              волшебных сказок
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magical-yellow to-magical-pink">
              и мультфильмов!
            </span>
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-foreground/80 font-medium">
            Тут каждая история — о тебе!
          </p>
          <p className="text-xl md:text-2xl mb-8 text-foreground/70">
            Погружайся в увлекательные приключения, которые ты захочешь смотреть и читать снова и снова.
          </p>
          <p className="text-lg md:text-xl mb-12 text-foreground/60 italic">
            Создаем сказки и мультфильмы, которые рассказывают о тебе и твоих близких!
          </p>
          <Button 
            size="lg" 
            className="bg-magical-pink hover:bg-magical-pink/90 text-foreground text-xl px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-transform"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Создать свою сказку ✨
          </Button>
        </div>
      </section>

      <section id="stories" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-magical-blue/20 to-magical-mint/20 transform -skew-y-2"></div>
        <div className="relative container mx-auto px-6">
          <h3 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-magical-blue to-magical-mint">
            Наши сказки и мультфильмы
          </h3>
          <p className="text-center text-xl mb-12 text-foreground/70">
            Выбери направление для своего приключения!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card 
                key={index} 
                className={`${story.color} border-4 border-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                    {story.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {story.title}
                  </h4>
                  <p className="text-foreground/70">
                    {story.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] p-12 shadow-2xl border-4 border-magical-yellow">
            <h3 className="text-4xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-magical-pink to-magical-yellow">
              Заказать персональную сказку
            </h3>
            <p className="text-center text-foreground/70 mb-8">
              Заполни форму, и мы создадим уникальную историю специально для тебя!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Как вас зовут?"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-2 border-magical-pink/30 focus:border-magical-pink rounded-3xl p-6 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-2 border-magical-blue/30 focus:border-magical-blue rounded-3xl p-6 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Имя ребёнка</label>
                <Input 
                  placeholder="Кто будет героем сказки?"
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="border-2 border-magical-mint/50 focus:border-magical-mint rounded-3xl p-6 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Возраст ребёнка</label>
                <Input 
                  type="number"
                  placeholder="Сколько лет?"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="border-2 border-magical-yellow/50 focus:border-magical-yellow rounded-3xl p-6 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Расскажите о ребёнке</label>
                <Textarea 
                  placeholder="Что любит? Какие увлечения? О чём мечтает?"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="border-2 border-magical-pink/30 focus:border-magical-pink rounded-3xl p-6 text-lg min-h-32"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-magical-pink to-magical-yellow hover:from-magical-pink/90 hover:to-magical-yellow/90 text-foreground text-xl py-7 rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                Отправить заявку 🎨
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section id="contacts" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-magical-yellow/30 via-magical-pink/30 to-magical-blue/30"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-magical-blue to-magical-pink">
              Свяжитесь с нами
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-4 border-magical-blue p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">📧</div>
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <p className="text-foreground/70">info@magicalstories.ru</p>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm border-4 border-magical-pink p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">📱</div>
                <h4 className="text-xl font-bold mb-2">Телефон</h4>
                <p className="text-foreground/70">+7 (900) 123-45-67</p>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm border-4 border-magical-mint p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">💬</div>
                <h4 className="text-xl font-bold mb-2">Telegram</h4>
                <p className="text-foreground/70">@magicalstories</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-magical-pink via-magical-blue to-magical-mint py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">✨</span>
            <h4 className="text-2xl font-bold text-white">Magical Stories</h4>
            <span className="text-4xl">✨</span>
          </div>
          <p className="text-white/90 text-lg">
            Создаём волшебство каждый день 🌟
          </p>
          <p className="text-white/70 mt-4">
            © 2024 Magical Stories. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

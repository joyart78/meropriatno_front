export const COMPANY = {
  name: "Мероприятно",
  tagline: "Ваше событие — наша забота",
  phone: "+7 (904) 481-51-50",
  email: "meropriatno@gmail.com",
  address: "г. Санкт-Петербург",
  hours: "Пн–Вс: 8:00–22:00",
  copyright: "© 2026 Мероприятно. Все права защищены.",
} as const;

export const NAV_LINKS = [
  { label: "О нас", href: "about" },
  { label: "Услуги", href: "services" },
  { label: "Портфолио", href: "gallery" },
  { label: "Отзывы", href: "reviews" },
  { label: "Контакты", href: "contact" },
] as const;

export const STATS = [
  { number: "3+", label: "Лет опыта" },
  { number: "20+", label: "Мероприятий" },
  { number: "98%", label: "Довольных клиентов" },
] as const;

export const SERVICES = [
  {
    icon: "wedding",
    iconColor: "pink",
    title: "Свадьбы",
    text: "Организация свадеб «под ключ»: от предложения до медового месяца. Создаём день, который вы запомните навсегда.",
  },
  {
    icon: "corporate",
    iconColor: "yellow",
    title: "Корпоративы",
    text: "Командообразующие мероприятия, бизнес-встречи и праздники для вашей компании любого масштаба.",
  },
  {
    icon: "birthday",
    iconColor: "orange",
    title: "Дни рождения",
    text: "Яркие и душевные праздники для близких. Учитываем все пожелания до мельчайших деталей.",
  },
  {
    icon: "party",
    iconColor: "purple",
    title: "Праздники",
    text:
      "Любая дата в календаре — не повод для стресса, а шанс устроить магию. Сделаем 8 Марта трогательным, " +
      "Новый год — волшебным, а вас — абсолютно счастливым гостем на собственном празднике. Ни одного звонка " +
      "подрядчикам, только шампанское в руке.",
  },
  {
    icon: "graduation",
    iconColor: "purple",
    title: "Выпускной",
    text: "Для каждого возраста — свой выпускной: магия для младших, драйв для подростков, эмоции для старшеклассников. Уникальные интерактивы, трогательная презентация и яркая фотозона создадут праздник, который запомнится детям, родителям и учителям.",
  },
] as const;

export const GALLERY_ITEMS = [
  { tag: "Свадьба", title: "Мария & Александр", tall: true },
  { tag: "Корпоратив", title: "Tech Summit 2025", tall: false },
  { tag: "День рождения", title: "Юбилей Елены", tall: false },
  { tag: "Конференция", title: "Marketing Day", tall: false },
  { tag: "Свадьба", title: "Анна & Дмитрий", tall: false },
  { tag: "Выставка", title: "Art & Design Expo", tall: false },
  { tag: "Корпоратив", title: "Новый год в компании", tall: false },
  { tag: "Детский", title: "Праздник в школе", tall: false },
  { tag: "Свадьба", title: "Екатерина & Иван", tall: false },
] as const;

export const REVIEWS = [
  {
    stars: 5,
    text: "Невероятная команда! Свадьба прошла идеально — всё было организовано на высшем уровне. Гости до сих пор в восторге. Спасибо за наш лучший день!",
    author: "Анна & Дмитрий",
    event: "Свадьба, 2024",
    initials: "А",
  },
  {
    stars: 5,
    text: "Обращались для организации корпоративного нового года. Всё прошло на ура! От концепции до реализации — профессионалы своего дела. Обязательно обратимся ещё.",
    author: "Михаил",
    event: "Корпоратив, 2024",
    initials: "М",
  },
  {
    stars: 5,
    text: "Организовали день рождения нашей дочери — это было волшебно! Дети были счастливы, а мы смогли полностью расслабиться и наслаждаться праздником. Спасибо огромное!",
    author: "Елена",
    event: "День рождения, 2025",
    initials: "Е",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/VikaInk" },
  { label: "VK", href: "https://vk.ru/club237604919" },
] as const;

export const CONTACT_INFO = [
  { icon: "location", label: "Адрес", value: COMPANY.address },
  { icon: "phone", label: "Телефон", value: COMPANY.phone },
  { icon: "email", label: "Email", value: COMPANY.email },
  { icon: "clock", label: "Режим работы", value: COMPANY.hours },
] as const;

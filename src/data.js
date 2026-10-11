// All site content lives here, so it's easy to edit without touching components.

export const cafe = {
  name: "Ember & Oak",
  tagline: "Slow mornings, honest coffee.",
  address: "128 Maple Street, Riverside",
  phone: "(555) 014-2290",
  email: "hello@emberandoak.example",
  instagram: "@emberandoak",
};

export const menu = {
  Coffee: [
    { name: "Espresso", desc: "Double shot, house blend with notes of cocoa and orange peel.", price: 3.0, tag: "Classic" },
    { name: "Flat White", desc: "Silky steamed milk over a double ristretto.", price: 4.5 },
    { name: "Oak Latte", desc: "Our signature: espresso, steamed milk, and a touch of maple.", price: 5.25, tag: "Signature" },
    { name: "Cold Brew", desc: "Steeped for 18 hours, served over ice.", price: 4.75, tag: "Vegan" },
    { name: "Cortado", desc: "Equal parts espresso and warm milk.", price: 4.0 },
    { name: "Hot Chocolate", desc: "Dark chocolate, whole milk, whipped cream.", price: 4.5 },
  ],
  Breakfast: [
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, chili flakes, soft egg.", price: 9.5, tag: "Vegetarian" },
    { name: "Ember Breakfast Plate", desc: "Two eggs, smoked bacon, roasted tomato, toast.", price: 12.0, tag: "Popular" },
    { name: "Granola Bowl", desc: "House granola, Greek yogurt, seasonal fruit, honey.", price: 8.0, tag: "Vegetarian" },
    { name: "Breakfast Burrito", desc: "Scrambled eggs, black beans, cheddar, salsa verde.", price: 10.5 },
    { name: "Pancake Stack", desc: "Buttermilk pancakes, maple syrup, whipped butter.", price: 9.0 },
  ],
  Lunch: [
    { name: "Roasted Veggie Sandwich", desc: "Focaccia, hummus, roasted peppers, arugula.", price: 11.0, tag: "Vegan" },
    { name: "Chicken Pesto Panini", desc: "Grilled chicken, basil pesto, mozzarella, tomato.", price: 12.5, tag: "Popular" },
    { name: "Tomato Soup & Grilled Cheese", desc: "Slow-simmered tomato soup with a sharp cheddar toastie.", price: 10.0 },
    { name: "Harvest Salad", desc: "Kale, roasted squash, pecans, goat cheese, cider vinaigrette.", price: 11.5, tag: "Vegetarian" },
  ],
  Pastries: [
    { name: "Butter Croissant", desc: "Laminated by hand, baked every morning.", price: 3.75, tag: "Classic" },
    { name: "Almond Danish", desc: "Flaky pastry with almond cream and toasted flakes.", price: 4.25 },
    { name: "Cardamom Bun", desc: "Soft, sweet, and perfumed with fresh-ground cardamom.", price: 4.0, tag: "Popular" },
    { name: "Blueberry Muffin", desc: "Studded with fruit, finished with a sugar crust.", price: 3.5 },
    { name: "Chocolate Chip Cookie", desc: "Crisp edges, gooey center, sea salt on top.", price: 3.0 },
  ],
};

// 0 = Sunday ... 6 = Saturday. open/close are 24h "HH:MM" strings.
export const hours = [
  { day: "Monday", index: 1, open: "07:00", close: "17:00" },
  { day: "Tuesday", index: 2, open: "07:00", close: "17:00" },
  { day: "Wednesday", index: 3, open: "07:00", close: "17:00" },
  { day: "Thursday", index: 4, open: "07:00", close: "19:00" },
  { day: "Friday", index: 5, open: "07:00", close: "21:00" },
  { day: "Saturday", index: 6, open: "08:00", close: "21:00" },
  { day: "Sunday", index: 0, open: "08:00", close: "15:00" },
];

// Leave `image` empty to show a gradient tile; set it to a URL or /public path to use a real photo.
export const gallery = [
  { id: 1, label: "Morning pour-over", emoji: "☕", image: "", from: "#7a4a2b", to: "#c8532a", span: "tall" },
  { id: 2, label: "Fresh croissants", emoji: "🥐", image: "", from: "#d9a05b", to: "#f2d29b", span: "" },
  { id: 3, label: "The corner booth", emoji: "🛋️", image: "", from: "#3b2a20", to: "#7a4a2b", span: "" },
  { id: 4, label: "Latte art", emoji: "🌿", image: "", from: "#5b6b4a", to: "#a3b18a", span: "wide" },
  { id: 5, label: "Weekend brunch", emoji: "🍳", image: "", from: "#c8532a", to: "#e9a46a", span: "" },
  { id: 6, label: "Baked daily", emoji: "🍪", image: "", from: "#8a5a36", to: "#d9a05b", span: "tall" },
  { id: 7, label: "Cozy afternoons", emoji: "📖", image: "", from: "#4a3426", to: "#9c6b45", span: "" },
];

export const testimonials = [
  { quote: "The Oak Latte is the reason I take the long way to work.", name: "Maya R." },
  { quote: "Warm, unhurried, and the croissants are unreal.", name: "Daniel K." },
  { quote: "My favorite spot to read on a rainy Sunday.", name: "Priya S." },
];

export const reservationTimes = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
];

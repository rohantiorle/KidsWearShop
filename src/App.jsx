import './styles.css';

const products = [
  {
    id: 1,
    name: 'Playful Tee',
    description: 'Soft cotton t-shirt for daily adventures.',
    price: '$18.00',
    image: 'images/kid-shirt.jpg',
    alt: 'Colorful kids shirt',
  },
  {
    id: 2,
    name: 'Fun Dress',
    description: 'Bright twirl dress in a cheerful print.',
    price: '$25.00',
    image: 'images/kid-dress.jpg',
    alt: 'Girls dress',
  },
  {
    id: 3,
    name: 'Comfy Jumpsuit',
    description: 'Easy one-piece style for playtime and naps.',
    price: '$30.00',
    image: 'images/kid-jumpsuit.jpg',
    alt: 'Kids jumpsuit',
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <h1>Zuriko Kids wear</h1>
        <p>Bright outfits for playful kids</p>
      </div>
      <nav className="site-nav">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#featured">Featured</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <h2>Comfortable kids clothing made for every adventure</h2>
        <p>Shop bright, playful outfits for babies, toddlers, and children.</p>
        <a className="button" href="#shop">
          Shop the collection
        </a>
      </div>
      <div className="hero-image">
        <img
          src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
          alt="Animated kids playing in colorful clothes"
        />
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.alt} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price}</span>
      <button>Add to cart</button>
    </article>
  );
}

function Products() {
  return (
    <section id="shop" className="product-grid">
      <h2>Best sellers</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="featured" className="highlight-section">
      <div className="highlight-text">
        <h2>Why parents love Little Trendz</h2>
        <ul>
          <li>Gentle fabrics for sensitive skin</li>
          <li>Durable stitching built for play</li>
          <li>Free shipping on orders over $60</li>
        </ul>
      </div>
      <div className="highlight-image">
        <img
          src="https://media.giphy.com/media/l0HlQ7LRalF6BzBvG/giphy.gif"
          alt="Animated dress showcase for kids fashion"
        />
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="contact" className="newsletter">
      <h2>Stay in the loop</h2>
      <p>Get new arrivals and offers sent to your inbox.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="Enter your email" aria-label="Email address" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 Little Trendz. Kids Fashion for every season.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Featured />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

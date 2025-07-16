import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Image src="/logo.png" alt="logo" width="58" height="58" />
        <nav>
          <a href="#menus">Menus</a>
          <a href="#bokits">Bokits</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <hgroup>
          <h1>La Kbana Bokit</h1>
          <h2>Spécialités Caraïbéennes</h2>
          <Image src="/hibiscus.png" alt="Hibiscus flower" width="100" height="80" />
        </hgroup>
        <Image src="/bokits/meal_1.jpg" alt="guadelupean sandwich" width="900" height="600" />
        <section id="menus">
          <h2>Menu</h2>
          <article className="surface outline">
            <p>
              <strong>Pain Bokit ou Agoulou</strong> + <strong>Accompagnement</strong> + <strong>Boisson</strong>
            </p>
            <p>Prix du plat + 3 €</p>
          </article>
        </section>
        <section id="sandwichs">
          <h2>Nos plats</h2>
          <ul className="card-list menu-list">
            <li>
              <Image src="/bokits/bokits_cards/meal_10_rm.png" alt="Meal" width="200" height="138" />
              <h3>Cuba</h3>
              <p className="price">8€</p>
              <p className="recipe">Jambon de poulet, Emmental, Salade, Tomates</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_11_rm.png" alt="Meal" width="200" height="138" />
              <h3>Gwada</h3>
              <p className="price">8€</p>
              <p className="recipe">Jambon, Emmental, Tomates, Salade</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_5_rm.png" alt="Meal" width="200" height="138" />
              <h3>Dominica</h3>
              <p className="price">8€</p>
              <p className="recipe">Saucisse de poulet, Emmental, Salade, Tomates</p>
            </li>

            <li>
              <Image src="/bokits/bokits_cards/meal_6_rm.png" alt="Meal" width="200" height="138" />
              <h3>Montserrat</h3>
              <p className="price">8€</p>
              <p className="recipe">Oeuf, Emmental, Tomates, Salade</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_7_rm.png" alt="Meal" width="200" height="138" />
              <h3>Guyana</h3>
              <p className="price">8€</p>
              <p className="recipe">Haricots rouge, Maïs, Avocat, Salade, Tomates</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_8_rm.png" alt="Meal" width="200" height="138" />
              <h3>Mada</h3>
              <p className="price">8€</p>
              <p className="recipe">Poulet mariné (citron, aïl, persil, oignon), Emmental, Tomates, Salade</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_9_rm.png" alt="Meal" width="200" height="138" />
              <h3>Jamaïca</h3>
              <p className="price">8€</p>
              <p className="recipe">Poulet jerk (curcuma, gingembre, aïl, persil), Tomates, Salade</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_4_rm.png" alt="Meal" width="200" height="138" />
              <h3>Sainte Lucia</h3>
              <p className="price">8€</p>
              <p className="recipe">Boeuf haché, Tomates, Salade</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_11_rm.png" alt="Meal" width="200" height="138" />
              <h3>Haïti</h3>
              <p className="price">8€</p>
              <p className="recipe">Boeuf haché mariné (curcuma, gingembre, aïl, persil), Salade, Tomates</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_9_rm.png" alt="Meal" width="200" height="138" />
              <h3>Antigua</h3>
              <p className="price">8€</p>
              <p className="recipe">Morue, Salade, Tomates</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_4_rm.png" alt="Meal" width="200" height="138" />
              <h3>Antillaise</h3>
              <p className="price">8€</p>
              <p className="recipe">Boeuf haché, Poulet, Saucisse de poulet, Oeuf, Emmental, Salade, Tomates</p>
            </li>
            <li>
              <Image src="/bokits/bokits_cards/meal_5_rm.png" alt="Meal" width="200" height="138" />
              <h3>West Indies</h3>
              <p className="price">8€</p>
              <p className="recipe">Boeuf haché, Jambon, Saucisse de poulet, Oeuf, Emmental, Salade, Tomates</p>
            </li>
          </ul>
        </section>
        <section className="surface carousel-container">
          <Image src="/assets/leave.png" alt="leave" height="180" width="120" />
          <h2>Nos boissons</h2>
          <div className="carousel">
            <ul className="group">
              <li><Image src="/drinks/drinks_cards/drink_1.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_2.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_4.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_7.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_12.png" alt="Bokit" width="148" height="120" /></li>
            </ul>
            <ul aria-hidden className="group">
              <li><Image src="/drinks/drinks_cards/drink_1.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_2.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_4.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_7.png" alt="Bokit" width="148" height="120" /></li>
              <li><Image src="/drinks/drinks_cards/drink_12.png" alt="Bokit" width="148" height="120" /></li>
            </ul>
          </div>
        </section>
        <section className="surface satisfaction">
          <hgroup>
            <h2>Votre satisfaction notre priorité</h2>
            <p>Votre satisfaction est notre priorité absolue. Nous mettons tout en œuvre pour vous offrir une expérience culinaire unique et mémorable. N&apos;hésitez pas à nous faire part de vos impressions et suggestions, car votre avis compte énormément pour nous.</p>
            <a className="surface outline" href="https://www.google.com/search?sca_esv=6a136238722af36a&sxsrf=AE3TifPmFALXgbGSAIcN9yONqLHXbt_RJg:1752668512107&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0o_2yfIvzgS4dM4J0Iyzk3NnKjcNfMQOajADYVtpwzZ6i8BuAzIoHSqaA9IIZpnmYHQ_gb-JRugDjozJEqTHcXZ87HP&q=KBANA+BOKIT+Avis&sa=X&ved=2ahUKEwjo28qAr8GOAxVHVaQEHV8dEGAQ0bkNegQISBAE&biw=1229&bih=584&dpr=1.56" target="_blank">Ajoutez un avis Google</a>
          </hgroup>
        </section>
      </main>


      <footer>
        <h2 className="surface">Contact</h2>
        <section>
          <h3>Nous contacter</h3>
          <address>
            <span>Numéro : <a href="tel:0255095929">02 55 09 59 29</a></span>
          </address>
        </section>
        <section>
          <h3>Ouvertures</h3>
          <ul>
            <li>
              <span>Lundi : /</span>
            </li>
            <li>
              <span>Mardi : /</span>
            </li>
            <li>
              <span>Mercredi : /</span>
            </li>
            <li>
              <span>Jeudi : 19H - 22H</span>
            </li>
            <li>
              <span>Vendredi : 19H - 22H</span>
            </li>
            <li>
              <span>Samedi : 19H - 22H</span>
            </li>
            <li>
              <span>Dimanche : /</span>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

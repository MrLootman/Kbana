import "./page.css";
import Image from "next/image";

const meals = [
  {
    name: "Cuba",
    price: "8€",
    recipe: "Jambon de poulet, Emmental, Salade, Tomates",
    ingredients: ["Jambon de poulet", "Emmental", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_10_rm.png"
  },
  {
    name: "Gwada",
    price: "8€",
    recipe: "Jambon, Emmental, Tomates, Salade",
    ingredients: ["Jambon", "Emmental", "Tomates", "Salade"],
    image: "/bokits/bokits_cards/meal_11_rm.png"
  },
  {
    name: "Dominica",
    price: "8€",
    recipe: "Saucisse de poulet, Emmental, Salade, Tomates",
    ingredients: ["Saucisse de poulet", "Emmental", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_5_rm.png"
  },
  {
    name: "Montserrat",
    price: "8€",
    recipe: "Oeuf, Emmental, Tomates, Salade",
    ingredients: ["Oeuf", "Emmental", "Tomates", "Salade"],
    image: "/bokits/bokits_cards/meal_6_rm.png"
  },
  {
    name: "Guyana",
    price: "8€",
    recipe: "Haricots rouge, Maïs, Avocat, Salade, Tomates",
    ingredients: ["Haricots rouge", "Maïs", "Avocat", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_7_rm.png"
  },
  {
    name: "Mada",
    price: "8€",
    recipe: "Poulet mariné (citron, aïl, persil, oignon), Emmental, Tomates, Salade",
    ingredients: ["Poulet mariné", "Emmental", "Tomates", "Salade"],
    image: "/bokits/bokits_cards/meal_8_rm.png"
  },
  {
    name: "Jamaïca",
    price: "8€",
    recipe: "Poulet jerk (curcuma, gingembre, aïl, persil), Tomates, Salade",
    ingredients: ["Poulet jerk", "Tomates", "Salade"],
    image: "/bokits/bokits_cards/meal_9_rm.png"
  },
  {
    name: "Sainte Lucia",
    price: "8€",
    recipe: "Boeuf haché, Tomates, Salade",
    ingredients: ["Boeuf haché", "Tomates", "Salade"],
    image: "/bokits/bokits_cards/meal_4_rm.png"
  },
  {
    name: "Haïti",
    price: "8€",
    recipe: "Boeuf haché mariné (curcuma, gingembre, aïl, persil), Salade, Tomates",
    ingredients: ["Boeuf haché mariné", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_11_rm.png"
  },
  {
    name: "Antigua",
    price: "8€",
    recipe: "Morue, Salade, Tomates",
    ingredients: ["Morue", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_9_rm.png"
  },
  {
    name: "Antillaise",
    price: "8€",
    recipe: "Boeuf haché, Poulet, Saucisse de poulet, Oeuf, Emmental, Salade, Tomates",
    ingredients: ["Boeuf haché", "Poulet", "Saucisse de poulet", "Oeuf", "Emmental", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_4_rm.png"
  },
  {
    name: "West Indies",
    price: "8€",
    recipe: "Boeuf haché, Jambon, Saucisse de poulet, Oeuf, Emmental, Salade, Tomates",
    ingredients: ["Boeuf haché", "Jambon", "Saucisse de poulet", "Oeuf", "Emmental", "Salade", "Tomates"],
    image: "/bokits/bokits_cards/meal_5_rm.png"
  }
];


// <Image src="/bokits/bokits_cards/meal_11_rm.png" alt="Meal" width="200" height="138" />
// <h3>Gwada</h3>
// <p className="price">8€</p>
// <p className="recipe">Jambon, Emmental, Tomates, Salade</p>

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>La Kbana Bokit</h1>
          <hr />
          <h2>Spécialités Caraïbéennes</h2>
          <Image src="/hibiscus.png" alt="Hibiscus flower" width="100" height="80" />
        </header>
        <div className="image-container">
          <Image src="/logo.png" alt="logo" width="220" height="220" />
          <Image src="/bokits/meal_1.jpg" alt="guadelupean sandwich" width="900" height="600" />
        </div>
        <section id="menus">
          <h2>Menus</h2>
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
            {meals.map((el) => {
              return (
                <li key={el.name}>
                  <header>
                    <Image src={el.image} alt="Meal" width="200" height="138" />
                    <p className="price">{el.price}</p>
                  </header>
                  <hgroup>
                    <h3>{el.name}</h3>
                    <p className="recipe">{el.recipe}</p>
                  </hgroup>
                </li>
              )
            })}
          </ul>
          {/* <ul className="card-list menu-list">
            <li>
              <header>
                <Image src="/bokits/bokits_cards/meal_10_rm.png" alt="Meal" width="200" height="138" />
                <p className="price">8€</p>
              </header>
              <hgroup>
                <h3>Cuba</h3>
                <p className="recipe">Jambon de poulet, Emmental, Salade, Tomates</p>
              </hgroup>
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
              <p className="price">8€</p>
              <hgroup>
                <h3>West Indies</h3>
                <p className="recipe">Boeuf haché, Jambon, Saucisse de poulet, Oeuf, Emmental, Salade, Tomates</p>
              </hgroup>
            </li>
          </ul> */}
        </section>
        {/* <section className="surface carousel-container">
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
        </section> */}
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

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

export default function Home() {
  return (
    <>
      <main>
        <Image src="/assets/palm-leaf.jpg" alt="Palm leaf" width="500" height="700" />
        <header>
          <h1>La Kbana Bokit</h1>
          <hr />
          <h2>Spécialités Caraïbéennes</h2>
        </header>
        <div className="image-container">
          <Image src="/logo.png" alt="logo" width="220" height="220" />
          <Image src="/bokits/meal_1.jpg" alt="guadelupean sandwich" width="900" height="600" />
        </div>
        <section id="menus">
          <Image src="/assets/hibiscus.webp" alt="Hibiscus flower" width="480" height="480" />
          <h2><strong>Découvrez</strong> nos saveurs</h2>
          <article className="surface outline">
            <h3>Classique</h3>
            <p>
              <strong>Pain Bokit ou Agoulou</strong>
            </p>
            <p>+ Accompagnement</p>
            <p>+ Boisson</p>
            <p>≃ 12 €</p>
          </article>
          <article className="surface outline">
            <h3>Ti Moun&apos;</h3>
            <p>
              <strong>Petit Bokit (Gwada, Cuba, Dominica, Montserrat)</strong>
            </p>
            <p>+ Petite frite</p>
            <p>+ Caprisun ou Cristalline</p>
            <p>7 €</p>
          </article>
        </section>
        <section id="sandwichs">
          <h2><strong>Découvrez</strong> nos plats</h2>
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
        </section>

        <div className="google-reviews" aria-label="Avis Google">
          <Image src="/assets/google-logo.webp" alt="Logo de l'entreprise Google" width="60" height="60" />
          <p className="note">4,7</p>
          <span aria-hidden="true" />
          <a href="https://google.com/search?sca_esv=e948bafec9f39f8c&amp;sxsrf=AE3TifPz8O6EGrAfp61P6Mk-lQwKyfLdew:1753794756728&amp;uds=AOm0WdE2fekQnsyfYEw8JPYozOKzqpex0tSvmKdffwhThOpjgxvZnCM0wVyGTSXAVA7JF1spOSJqpFyAOFHCS0Y_YoQmW_CTt6WQWUng5X3xThXXgQvlqevkU-6nMRNyb-t3A3QEvGeD8FPtqIXf3I2vvw4k_cxctA&amp;si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0o_2yfIvzgS4dM4J0Iyzk2TGBs_hLU9kmJiHGuYdnVBfmTyVWRf3QD2YQxH2wz1TgWVets%3D&amp;q=KBANA+BOKIT+Avis&amp;sa=X&amp;ved=2ahUKEwj2k-_LkuKOAxUoT6QEHYYYJUEQ3PALegQITRAF" target="_blank" rel="noopener noreferrer">204&nbsp;avis</a>
        </div>
        <section className="surface satisfaction">
          <ul className="review-list">
            <li>
              <p>P</p>

              <div className="author">
                <p>Jean-Philippe</p>
                <p>14 Août 2025</p>
              </div>

              <Image src="/assets/google-logo.webp" alt="Google logo" width="16" height="16" />

              <div className="stars" aria-label="Ce client a donné une note de cinq étoiles sur cinq">
                <Image src="/assets/reviews-stars.webp" alt="Etoiles représentant les notes des utilisateurs" width="80" height="15" />
              </div>

              <p>J&apos;ai pu découvrir ce restaurant, je suis venu avec mon chiot ça n&apos;a posé de problème à personne j&apos;ai même été très bien accueilli avec une gamelle d&apos;eau pour le loulou.</p>
            </li>
            <li>
              <p>P</p>
              <div className="author">
                <p>Pages Jaunes</p>
                <p>29 Juillet 2021</p>
              </div>

              <Image src="/assets/google-logo.webp" alt="Google logo" width="16" height="16" />

              <div className="stars" aria-label="Ce client a donné une note de cinq étoiles sur cinq">
                <Image src="/assets/reviews-stars.webp" alt="Etoiles représentant les notes des utilisateurs" width="80" height="15" />
              </div>

              <p>un vrai délice, je n&apos;en ai jamais mangé d&apos;aussi bon aux Antilles ni ailleurs...</p>
            </li>
            <li>
              <p>P</p>

              <div className="author">
                <p>Phanie973</p>
                <p>24 Juin 2021</p>
              </div>

              <Image src="/assets/google-logo.webp" alt="Google logo" width="16" height="16" />

              <div className="stars" aria-label="Cette cliente a donné une note de cinq étoiles sur cinq">
                <Image src="/assets/reviews-stars.webp" alt="Etoiles représentant les notes des utilisateurs" width="80" height="15" />
              </div>

              <p>Propriétaire super sympathique et souriant. On a passé un superbe moment pour l&apos;anniversaire de mon fils et surtout on a trop bien mangé 😋 </p>
            </li>
          </ul>
          <a className="surface outline" href="https://www.google.com/search?sca_esv=6a136238722af36a&sxsrf=AE3TifPmFALXgbGSAIcN9yONqLHXbt_RJg:1752668512107&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0o_2yfIvzgS4dM4J0Iyzk3NnKjcNfMQOajADYVtpwzZ6i8BuAzIoHSqaA9IIZpnmYHQ_gb-JRugDjozJEqTHcXZ87HP&q=KBANA+BOKIT+Avis&sa=X&ved=2ahUKEwjo28qAr8GOAxVHVaQEHV8dEGAQ0bkNegQISBAE&biw=1229&bih=584&dpr=1.56" target="_blank">Ajoutez un avis Google</a>
        </section>
      </main>


      <footer>
        <h2 className="surface">Contact</h2>
        <section>
          <h3>La Kbana Bokit</h3>
          <h2>Informations Pratiques</h2>
        </section>

        <table>
          <thead>
            <tr>
              <th>Horaires</th>
              <th>Coordonnées</th>
              <th>Options de paiement</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Jeudi au Samedi</p>
                <p>19:00 - 22:00</p>
              </td>

              <td>
                <p>Restaurant Kbana Bokit</p>
                <p>57 rue Jean Jaurès, 44400 Rezé - <a href="tel:0255095929">02 55 09 59 29</a></p>
              </td>

              <td>
                <ul>
                  <li>Paiement sans contact</li>
                  <li>Règlement en espèces</li>
                  <li>Carte bancaire, Visa, Mastercard</li>
                  <li>Cartes Maestro & AMEX</li>
                  <li>Ticket restaurant</li>
                  <li>Carte ticket restaurant</li>
                  <li>Apple Pay</li>
                </ul>
              </td>

              <td>
                <ul>
                  <li>Accessible aux personnes à mobilité réduite</li>
                  <li>Animaux domestiques autorisés</li>
                  <li>Tables en terrasse</li>
                  <li>Wi-Fi gratuit</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </footer >
    </>
  );
}

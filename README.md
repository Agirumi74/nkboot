# nkbolt – Documentation technique exhaustive et granulaire

## Sommaire
1. Présentation du projet
2. Structure du projet
3. Composants UI (liste exhaustive)
   - Atoms
   - Molecules
   - Organisms
   - Templates
   - Navigations
   - Cards
   - Layouts
4. Tokens design (variables CSS)
5. Conventions de nommage (exemples concrets)
6. Workflow de contribution (checklist détaillée)
7. Schémas de données Supabase (structure, types, relations, exemples)
8. Accessibilité & Responsive
9. Gestion des assets (images, polices, etc.)
10. Migrations de données
11. FAQ – Erreurs fréquentes et pièges
12. Tests, qualité, intégration continue
13. Sécurité et RGPD
14. Déploiement avancé
15. Versioning et changelog (exemple)
16. Liens vers documentations officielles

---

## 3. Composants UI (liste exhaustive)

### Atoms

#### Button.astro
- **Props** :
  - `type`: 'button' | 'submit' | 'reset' (default: 'button')
  - `ariaLabel`: string
  - `text`: string
  - `icon`: { name: string; side?: 'left' | 'right' }
  - `shape`: 'sharp' | 'rounded' | 'circle' (default: 'rounded')
  - `shadow`: boolean (default: false)
  - `border`: boolean (default: false)
  - `borderColor`: string (default: 'primary')
  - `borderWidth`: string (default: '1px')
  - `borderStyle`: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' (default: 'solid')
  - `textColor`: string (default: 'primary')
  - `backgroundColor`: string
  - `textAlign`: 'left' | 'center' | 'right'
  - `padding`, `margin`, `width`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Button text="Envoyer" type="submit" icon={{ name: 'send', side: 'right' }} shape="circle" shadow borderColor="secondary" />
```

#### Input.astro
- **Props** :
  - `id`, `name`, `type` ('text', 'email', 'password', 'number', 'color', 'date', 'url', 'textarea', 'radio', 'checkbox', 'select', 'file', 'search')
  - `label`, `placeholder`, `value`, `required`, `disabled`, `readonly`, `minlength`, `maxlength`, `min`, `max`, `step`, `pattern`, `rows`, `cols`, `options`, `iconLeft`, `iconRight`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Input type="email" label="Votre email" required iconLeft={{ name: 'mail' }} />
```

#### Text.astro
- **Props** :
  - `tag`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' (default: 'p')
  - `align`: 'center' | 'left' | 'right' (default: 'center')
  - `iconLeft`, `iconRight`, `iconSize`, `iconPosition`, `textColor`, `padding*`, `margin*`, `border`, `borderColor`, `borderWidth`, `borderStyle`, `backgroundColor`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Text tag="h2" align="left" textColor="primary">Titre de section</Text>
```

#### List.astro
- **Props** :
  - `items`: string[] | { icon?: string; text: string }[]
  - `ordered`: boolean (default: false)
  - `icon`: string
  - `showMarkers`: boolean (default: true)
  - `spacing`, `padding`, `margin`, `textAlign`, `shape`, `shadow`, `border`, `borderColor`, `borderWidth`, `borderStyle`, `textColor`, `backgroundColor`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<List items={["Item 1", "Item 2"]} ordered icon="check" />
```

#### Details.astro
- **Props** :
  - `open`: boolean
  - `summary`: string
  - `iconSummary`, `iconOpen`, `iconClose`, `border`, `borderColor`, `borderWidth`, `borderStyle`, `shadow`, `shape`, `padding`, `margin`, `backgroundColor`, `textColor`, `summaryTextColor`, `summaryFontWeight`, `summaryFontSize`, `summaryTextAlign`, `animationDuration`, `animationTimingFunction`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Details summary="Voir plus" open iconSummary={{ name: 'plus' }}>Contenu détaillé</Details>
```

#### Card.astro
- **Props** :
  - `padding`: string (default: 'p-4')
  - `shadow`: boolean (default: true)
  - `borderRadius`: string (default: 'rounded-lg')
  - `height`: string (default: 'h-full')
  - `className`, `[key: string]: any`
- **Exemple** :
```astro
<Card padding="p-8" shadow={false}>Contenu</Card>
```

#### Link.astro
- **Props** :
  - `tag`: 'a' | 'button' (default: 'a')
  - `href`, `type`, `ariaLabel`, `text`, `icon`, `shape`, `shadow`, `border`, `borderColor`, `borderWidth`, `borderStyle`, `textColor`, `backgroundColor`, `textAlign`, `padding`, `margin`, `width`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Link href="/contact" text="Contact" icon={{ name: 'mail', side: 'left' }} />
```

#### Wrapper.astro / Wrapper2.astro
- **Props** :
  - `display`, `cols`, `gap`, `alignItems`, `justifyContent`, `padding`, `margin`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Wrapper cols={2} gap="2rem"><slot /></Wrapper>
```

#### Table.astro
- **Props** :
  - `headers`: string[]
  - `rows`: any[][]
  - `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Table headers={["Nom", "Âge"]} rows={[["Alice", 30], ["Bob", 25]]} />
```

#### StaticMap.astro / Map.astro
- **Props** :
  - `lat`: number
  - `lng`: number
  - `zoom`: number
  - `markers`: { lat: number; lng: number; label?: string }[]
  - `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<StaticMap lat={48.85} lng={2.35} zoom={12} />
```

#### Section.astro
- **Props** :
  - `tag`: string (default: 'section')
  - `preset`: 'default' | 'accent' | 'muted'
  - `backgroundColor`, `padding`, `margin`, `className`, `style`, `[key: string]: any`
- **Exemple** :
```astro
<Section preset="accent" padding="2rem"><slot /></Section>
```

### Molecules

#### Slider.astro
- **Props** :
  - `preset`: 'default' | 'primary' | 'secondary' | 'accent' (default: 'default')
  - `className`: string
  - `gap`: string (default: '1.5rem')
  - `itemMinWidth`: string (default: '280px')
  - `showScrollbar`: boolean (default: false)
  - `autoScroll`: boolean (default: false)
  - `scrollSpeed`: number (default: 50)
  - `pauseOnHover`: boolean (default: true)
- **Exemple** :
```astro
<Slider preset="primary" gap="2rem" autoScroll scrollSpeed={100}>
  <div>Slide 1</div>
  <div>Slide 2</div>
</Slider>
```

#### Gallery.astro
- **Props** :
  - `images`: { src: string; alt?: string; caption?: string; thumb?: string }[]
  - `mode`: 'gallery' | 'galleryPictures' | 'galleryProductThumb' | 'galleryEnhanced' (default: 'gallery')
  - `preset`: 'default' | 'primary' | 'secondary' | 'accent' (default: 'default')
  - `columns`: 2 | 3 | 4 | 5 | 6 (default: 3)
  - `gap`: string (default: '1rem')
  - `aspectRatio`: string (default: '1/1')
  - `showCaptions`: boolean (default: true)
  - `className`: string
- **Exemple** :
```astro
<Gallery images={[{ src: '/img1.jpg', caption: 'Image 1' }]} columns={4} />
```

#### CounterUp.astro
- **Props** :
  - `endValue`: number (obligatoire)
  - `label`: string (obligatoire)
  - `prefix`: string (default: '')
  - `suffix`: string (default: '')
  - `duration`: number (default: 2)
  - `preset`: 'primary' | 'secondary' | 'accent'
- **Exemple** :
```astro
<CounterUp endValue={100} label="Clients" prefix="+" duration={3} />
```

#### Carousel.astro
- **Props** :
  - `idPrefix`: string (default: 'carousel')
  - `showDots`: boolean (default: true)
  - `showScrollBar`: boolean (default: false)
  - `showArrows`: boolean (default: true)
  - `autoplay`: boolean (default: false)
  - `autoplayInterval`: number (default: 4000)
  - `preset`: 'default' | 'primary' | 'secondary' | 'accent' (default: 'default')
  - `aspectRatio`: string (default: '16/9')
  - `className`: string
- **Exemple** :
```astro
<Carousel autoplay showArrows={false} aspectRatio="4/3">
  <div>Slide 1</div>
  <div>Slide 2</div>
</Carousel>
```

#### CardProduct.astro
- **Props** :
  - `title`: string
  - `image`: string
  - `price`: string
  - `description`: string
- **Exemple** :
```astro
<CardProduct title="Produit" image="/img.jpg" price="19€" description="Super produit" />
```

#### CardPost.astro
- **Props** :
  - `title`: string
  - `image`: string
  - `excerpt`: string
  - `date`: string
  - `author`: string
- **Exemple** :
```astro
<CardPost title="Article" image="/img.jpg" excerpt="Résumé..." date="2025-07-09" author="John" />
```

#### CardIcon.astro
- **Props** :
  - `title`: string
  - `iconName`: string
  - `description`: string
  - `iconSize`: number (default: 40)
- **Exemple** :
```astro
<CardIcon title="Rapide" iconName="mdi:rocket" description="Ultra rapide" />
```

#### CardCategory.astro
- **Props** :
  - `title`: string
- **Exemple** :
```astro
<CardCategory title="Catégorie" />
```

#### Animation.astro
- **Props** :
  - `animationType`: 'fade-in-from' | 'zoom' | 'rotate' (default: 'fade-in-from')
  - `animationDirection`: 'top' | 'bottom' | 'left' | 'right' | 'diagonal-tl' | 'diagonal-tr' | 'diagonal-bl' | 'diagonal-br' (default: 'bottom')
  - `duration`: string (default: '0.8s')
  - `delay`: string
  - `easing`: string (default: 'ease-out')
  - `triggerOnScroll`: boolean (default: true)
  - `className`: string
- **Exemple** :
```astro
<Animation animationType="zoom" duration="1.2s"><div>Animé</div></Animation>
```

### Organisms

#### Timeline.astro
- **Props** :
  - `events`: { year: string; title: string; description: string; icon: string }[] (obligatoire)
  - `preset`: 'primary' | 'secondary' | 'accent' (default: 'primary')
- **Exemple** :
```astro
<Timeline events={[{ year: '2020', title: 'Création', description: 'Lancement du projet', icon: 'mdi:rocket' }]} />
```

#### QueryLoop.astro
- **Props** :
  - `entries`: CollectionEntry<any>[] (obligatoire)
  - `cardType`: 'posts' | 'postcategories' | 'users' (obligatoire)
  - `filters`, `sort`, `limit`, `references`, `categoryFilter`, `currentId`, `relatedContent`, `siblingsContent`, `relatedTo`, `columns`
- **Exemple** :
```astro
<QueryLoop entries={posts} cardType="posts" columns={3} />
```

#### Gallery.astro (organism)
- **Props** :
  - `images`: { src: string; alt?: string; caption?: string; rotation?: number }[]
  - `preset`: 'default' | 'slider' | 'carousel' | 'productGallery' | 'photography' (default: 'default')
  - `maxImages`, `columns`, `galleryId`, `showCaption`, `autoScroll`, `autoScrollInterval`, `showButtons`, `showDots`, `className`
- **Exemple** :
```astro
<Gallery images={[{ src: '/img.jpg', caption: 'Photo' }]} preset="carousel" showDots={false} />
```

#### Form.astro
- **Props** :
  - `method`: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' (default: 'POST')
  - `action`: string
  - `novalidate`: boolean (default: false)
  - `autocomplete`: string (default: 'on')
  - `className`, `style`, `onSubmit`, `[key: string]: any`
- **Exemple** :
```astro
<Form method="POST" action="/api/contact" className="my-form"><Input name="email" /></Form>
```

#### Faq.astro
- **Props** :
  - `faqs`: { question: string; answer: string; open?: boolean }[] (obligatoire)
  - `className`, `style`
- **Exemple** :
```astro
<Faq faqs={[{ question: 'Comment ?', answer: 'Comme ça.' }]} />
```

### Templates

#### Header.astro
- **Props** :
  - `org`: object (organisation, branding, navigation, etc.)
- **Exemple** :
```astro
<Header org={orgData} />
```

#### Footer.astro
- **Props** :
  - `org`: object (organisation, branding, liens, etc.)
- **Exemple** :
```astro
<Footer org={orgData} />
```

### Navigations

#### NavItem.astro
- **Props** :
  - `name`: string (obligatoire)
  - `url`: string
  - `icon`: string
  - `dropdown`: boolean
  - `children`: { name: string; url: string; icon?: string }[]
  - `mode`: 'desktop' | 'mobile' (default: 'desktop')
- **Exemple** :
```astro
<NavItem name="Accueil" url="/" icon="mdi:home" />
```

### Cards

#### ValueCard.astro
- **Props** :
  - `icon`: string
  - `title`: string
  - `description`: string
- **Exemple** :
```astro
<ValueCard icon="mdi:star" title="Valeur" description="Notre valeur ajoutée" />
```

#### UserCard.astro
- **Props** :
  - `entry`: object (utilisateur complet)
- **Exemple** :
```astro
<UserCard entry={userEntry} />
```

#### PostCategoryCard.astro
- **Props** :
  - `entry`: object (catégorie de post)
- **Exemple** :
```astro
<PostCategoryCard entry={catEntry} />
```

#### PostCard.astro
- **Props** :
  - `entry`: object (post complet)
- **Exemple** :
```astro
<PostCard entry={postEntry} />
```

### Layouts

#### BaseLayout.astro
- **Props** :
  - `title`: string
  - `description`: string
  - `keywords`, `author`, `ogImage`, `canonicalUrl`, `prefetchUrls`, `cssFiles`, `jsFiles`, `lang`, `robots`, `favicon`, `manifest`, `appleTouchIcon`, `favicon32x32`, `favicon16x16`
- **Exemple** :
```astro
<BaseLayout title="Accueil" description="Page d'accueil" lang="fr">
  <Header org={orgData} />
  <main><slot /></main>
  <Footer org={orgData} />
</BaseLayout>
```

#### StickyImageSection.astro
- **Props** :
  - `imageUrl`: string
  - `imageAlt`: string
- **Exemple** :
```astro
<StickyImageSection imageUrl="/img.jpg" imageAlt="Visuel" >
  <h2>Contenu sticky</h2>
</StickyImageSection>
```

## Tokens design (variables CSS)

Les tokens design sont définis dans `src/styles/global.css` :

### Palette de couleurs
- `--color-bg-base`: #ffffff (fond principal)
- `--color-bg-muted`: #f7f7f7 (fond atténué)
- `--color-bg-accent`: #e3f2fd (fond accent)
- `--color-primary`: #1e88e5 (couleur principale)
- `--color-primary-hover`: #1565c0 (hover principal)
- `--color-secondary`: #ff7043 (secondaire)
- `--color-secondary-hover`: #e64a19 (hover secondaire)
- `--color-border`: #ddd (bordures)
- `--color-text-base`: #212121 (texte principal)
- `--color-text-muted`: #757575 (texte atténué)
- `--color-text-inverse`: #ffffff (texte inversé)

### Typographie
- `--font-family-base`: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- `--font-family-mono`: 'Fira Mono', Consolas, Monaco, monospace
- `--font-weight-thin`: 100
- `--font-weight-light`: 300
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-bold`: 700
- `--font-weight-black`: 900
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-md`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--line-height-base`: 1.6
- `--line-height-heading`: 1.25

### Espacements
- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)

### Border radius
- `--border-radius-base`: 0.375rem (6px)
- `--border-radius-lg`: 0.75rem (12px)
- `--border-radius-pill`: 9999px

### Ombres
- `--shadow-sm`: 0 1px 2px rgba(0,0,0,0.05)
- `--shadow-md`: 0 4px 6px rgba(0,0,0,0.1)
- `--shadow-lg`: 0 10px 15px rgba(0,0,0,0.15)
- `--shadow-xl`: 0 20px 25px rgba(0,0,0,0.2)

### Transitions
- `--transition-duration`: 0.3s
- `--transition-timing`: cubic-bezier(0.4, 0, 0.2, 1)

### Z-index
- `--z-index-dropdown`: 1000
- `--z-index-sticky`: 1020
- `--z-index-fixed`: 1030
- `--z-index-modal-backdrop`: 1040
- `--z-index-modal`: 1050
- `--z-index-popover`: 1060
- `--z-index-tooltip`: 1070

### Clip-path
- `--clip-top-wave`: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)
- `--clip-bottom-wave`: polygon(0 0%, 100% 20%, 100% 100%, 0 100%)

**Exemple d’utilisation dans un composant** :
```css
.card {
  background: var(--color-bg-base);
  color: var(--color-text-base);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
}
```

**Dark mode** :
Les variables sont automatiquement surchargées en mode sombre via `@media (prefers-color-scheme: dark)`.

## Mapping tokens design → composants

Ce tableau liste chaque token CSS (variable design) et les composants qui l’utilisent explicitement, avec l’impact visuel associé. Ce mapping permet à un agent IA ou à un développeur de savoir immédiatement où un changement de token aura un effet dans l’UI.

| Token CSS                  | Composants concernés                | Impact visuel principal                                 |
|----------------------------|-------------------------------------|--------------------------------------------------------|
| --color-bg-base            | Card, Section, BaseLayout, Wrapper  | Fond principal des blocs, sections, wrappers           |
| --color-bg-muted           | Card, Section, Details              | Fond atténué, zones secondaires                        |
| --color-bg-accent          | Section, Header, Footer             | Fond accentué, header/footer accent                    |
| --color-primary            | Button, Link, CardIcon, CounterUp   | Couleur principale boutons, liens, icônes, highlights  |
| --color-primary-hover      | Button, Link                        | Hover boutons/links                                    |
| --color-secondary          | Button, CardCategory, ValueCard     | Couleur secondaire, badges, accents                    |
| --color-secondary-hover    | Button, CardCategory                | Hover secondaire                                       |
| --color-border             | Card, Table, Details, Input         | Bordures de cartes, tableaux, inputs                   |
| --color-text-base          | Text, Card, Table, List, Input      | Texte principal                                        |
| --color-text-muted         | Text, Details, List                 | Texte secondaire, descriptions                         |
| --color-text-inverse       | Button, Link, Header, Footer        | Texte sur fond coloré                                  |
| --font-family-base         | Tous (Text, Card, Button, etc.)     | Police principale                                      |
| --font-family-mono         | Table, Code blocks                  | Police monospace                                       |
| --font-weight-*            | Text, Header, Card, Button          | Graisse du texte, titres, boutons                      |
| --font-size-*              | Text, Header, Card, Button          | Taille du texte, titres, boutons                       |
| --line-height-base         | Text, Card, List                    | Hauteur de ligne du texte                              |
| --line-height-heading      | Header, Text                        | Hauteur de ligne des titres                            |
| --spacing-*                | Card, Section, Wrapper, List        | Padding/margin internes/externes                       |
| --border-radius-*          | Card, Button, Input, Details        | Arrondi des coins                                      |
| --shadow-*                 | Card, Button, Modal, Dropdown       | Ombres portées                                         |
| --transition-*             | Button, Link, Card, Details         | Animation d’état (hover, focus, open/close)            |
| --z-index-*                | Modal, Dropdown, Tooltip, Header    | Superposition des éléments                             |
| --clip-top-wave            | Section, Header                     | Effet de vague décoratif                               |
| --clip-bottom-wave         | Footer, Section                     | Effet de vague décoratif                               |

**Remarque :** Ce mapping est basé sur l’analyse des composants et des styles. Pour toute modification d’un token, vérifier les composants listés pour anticiper l’impact visuel global.

---

## Conventions de nommage (exemples concrets)

- **Fichiers** :
  - Composants : `Button.astro`, `UserCard.astro` (PascalCase)
  - Pages : `index.astro`, `contact.astro`, `posts/[...slug].astro` (kebab-case, dynamique entre crochets)
  - Styles : `global.css`, `reset.css` (kebab-case)
- **Variables JS/TS** :
  - `userName`, `postId`, `isActive` (camelCase)
- **Props** :
  - `iconName`, `onClick`, `ariaLabel` (camelCase)
- **Classes CSS** :
  - `btn-primary`, `card--highlighted`, `faq__item` (BEM ou utilitaires Tailwind)
- **Slugs/Routes** :
  - `/posts/mon-article`, `/boutique/chaussures-homme` (kebab-case, pas d’espace ni majuscule)
  - `/posts/[...slug].astro` pour les routes dynamiques
- **IDs** :
  - `user_123`, `post_456`, ou UUID (`550e8400-e29b-41d4-a716-446655440000`)
- **Assets** :
  - Images : `public/images/avatar-john-doe.jpg`, `public/images/posts/2025-07-09-mon-article.jpg`
  - Polices : `src/fonts/Palanquin_Dark/PalanquinDark-Bold.ttf`

**Exemple de structure de route dynamique** :
```
/pages/posts/[...slug].astro → /posts/mon-article
/pages/boutique/[category].astro → /boutique/chaussures-homme
```

## Workflow de contribution (checklist détaillée)

1. **Fork & clone** le repo.
2. **Créer une branche** nommée `feature/nom-fonctionnalité` ou `fix/nom-bug`.
3. **Ajouter/modifier** un composant : créer un fichier `.astro` dans le dossier approprié, documenter toutes les props, fournir un exemple d’utilisation.
4. **Ajouter une page** : créer un fichier `.astro` dans `src/pages/`.
5. **Ajouter une table Supabase** : modifier la config dans Supabase, puis adapter `content.config.ts`.
6. **Checklist PR avancée** :
   - [ ] Tests unitaires et manuels passés
   - [ ] Props exhaustivement documentées dans le README
   - [ ] Accessibilité vérifiée (labels, aria, navigation clavier, contrastes)
   - [ ] Responsive vérifié (mobile, tablette, desktop)
   - [ ] Couverture de code > 80% (si tests automatisés)
   - [ ] Pas de breaking change sans migration
   - [ ] Respect des conventions de nommage et structure
   - [ ] Documentation et exemples mis à jour
   - [ ] Ajout d’un changelog si breaking change
   - [ ] Relecture par un mainteneur
7. **Validation** : review par un mainteneur, merge après approbation.
8. **Tests** : lancer les tests (voir section dédiée).

## Schémas de données Supabase (structure, types, relations, exemples)

### Table `siteidentity`
- **Colonnes** :
  - `id`: integer, primary key
  - `nom_site`: string
  - `slug`: string (généré)
  - `body`: string (optionnel)
  - `data`: jsonb (toutes les infos additionnelles)
- **Exemple d’item** :
```json
{
  "id": 1,
  "nom_site": "nkbolt",
  "slug": "nkbolt",
  "body": "",
  "data": {
    "slogan": "Starter Astro moderne",
    "logo": "/images/logo.svg"
  }
}
```

### Table `design`
- **Colonnes** :
  - `id`: integer, primary key
  - `nom_du_theme`: string
  - `slug`: string (généré)
  - `body`: string (optionnel)
  - `data`: jsonb (palette, tokens, etc.)
- **Exemple d’item** :
```json
{
  "id": 1,
  "nom_du_theme": "default",
  "slug": "default",
  "body": "",
  "data": {
    "primary": "#1e88e5",
    "secondary": "#ff7043"
  }
}
```

### Table `organizations`
- **Colonnes** :
  - `id`: integer, primary key
  - `nom`: string
  - `slug`: string (généré)
  - `data`: jsonb (infos orga, réseaux, contacts, etc.)
- **Exemple d’item** :
```json
{
  "id": 1,
  "nom": "Ma société",
  "slug": "ma-societe",
  "data": {
    "adresse": "1 rue de Paris",
    "email": "contact@ma-societe.com",
    "sameAs": ["https://twitter.com/ma-societe"]
  }
}
```

### Relations
- Les relations sont gérées côté client via les slugs et les ids (ex : un post référence une catégorie via `category: id` ou `category: slug`).
- Les collections sont chargées via les loaders dans `content.config.ts`.

### Ajout d’une nouvelle table
1. Créer la table dans Supabase avec les colonnes nécessaires.
2. Ajouter la logique de chargement dans `content.config.ts`.
3. Documenter la structure et un exemple d’item dans ce README.

## Accessibilité & Responsive

- **Accessibilité** :
  - Tous les composants doivent avoir des labels explicites, des attributs ARIA pertinents, et être utilisables au clavier.
  - Les couleurs doivent respecter un ratio de contraste WCAG AA (au moins 4.5:1 pour le texte normal).
  - Les images doivent avoir un attribut `alt` pertinent.
  - Les formulaires doivent être navigables au clavier et fournir des messages d’erreur accessibles.
  - Utiliser les rôles ARIA (`role="list"`, `role="button"`, etc.) quand pertinent.
- **Responsive** :
  - Utiliser les breakpoints et utilitaires Tailwind pour garantir un rendu optimal sur mobile, tablette, desktop.
  - Tester chaque composant sur plusieurs tailles d’écran.
  - Les layouts doivent s’adapter sans scroll horizontal.

## Gestion des assets (images, polices, etc.)

- **Images** :
  - Stocker dans `public/images/`.
  - Nommer en kebab-case, sans espace, avec date ou contexte si pertinent (`2025-07-09-mon-article.jpg`).
  - Optimiser le poids (WebP/JPEG, compression).
  - Fournir des versions responsive (`srcset`, tailles multiples).
- **Polices** :
  - Stocker dans `src/fonts/`.
  - Déclarer dans le CSS via `@font-face`.
  - Utiliser les variables CSS pour la famille de police.
- **Fichiers statiques** :
  - Utiliser le dossier `public/` pour tout asset accessible publiquement.

## Migrations de données

- **Gestion** :
  - Toute modification de schéma Supabase doit être versionnée (ex : scripts SQL, changelog dans le repo).
  - Documenter chaque migration dans un dossier `migrations/` ou dans le README.
  - Synchroniser le code (`content.config.ts`) avec la base après chaque migration.

## Exemple de changelog

```
## [1.2.0] - 2025-07-09
### Ajouté
- Composant `UserCard.astro` avec props exhaustives
- Tokens design pour ombres et z-index
### Modifié
- Refactoring du loader Supabase pour support des relations
### Supprimé
- Ancien composant `OldButton.astro`
```

## FAQ – Erreurs fréquentes et pièges

- **Erreur de connexion Supabase** : vérifier les variables d’environnement `SUPABASE_URL` et `SUPABASE_ANON_KEY`.
- **Props manquantes** : chaque composant doit avoir des valeurs par défaut pour toutes les props optionnelles.
- **Conflit de nom de classe** : respecter la convention BEM ou utiliser des utilitaires Tailwind.
- **Erreur de build Astro** : vérifier la version d’Astro et la configuration du projet.

## Tests, qualité, intégration continue

- **Tests unitaires** : à implémenter avec Vitest ou Jest (non présents par défaut).
- **Linting** : ESLint recommandé.
- **CI** : GitHub Actions ou équivalent pour build, lint, test.
- **Checklist qualité** : voir workflow de contribution.

## Sécurité et RGPD

- **Secrets** : stockés dans `.env`, jamais commités.
- **Données utilisateurs** : ne jamais stocker de données sensibles côté client.
- **RGPD** : prévoir une page mentions légales, gestion du consentement cookies si tracking.
- **Bonnes pratiques** : valider toutes les entrées utilisateur côté serveur.

## Déploiement avancé

- **Staging** : déployer sur un environnement de préproduction avant production.
- **Production** : build Astro (`npm run build`), déployer sur Vercel, Netlify ou serveur dédié.
- **Rollback** : conserver les builds précédents, possibilité de rollback via l’interface de l’hébergeur.
- **Variables d’environnement** : définir dans l’interface d’hébergement ou `.env` local.
- **Process complet** :
  1. `npm install`
  2. `npm run build`
  3. `npm run preview` pour test local
  4. Déployer le dossier `dist/`

## Versioning et changelog

- **Versioning** : SemVer (MAJEUR.MINEUR.PATCH)
- **Changelog** : tenir à jour un fichier `CHANGELOG.md` à chaque release.
- **Compatibilité ascendante** : toute breaking change doit être documentée et migrée.

## Liens vers documentations officielles

- [Astro](https://docs.astro.build/)
- [Supabase](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ESLint](https://eslint.org/docs/latest/)
- [Vercel](https://vercel.com/docs)
- [Netlify](https://docs.netlify.com/)

---

**Ce README est exhaustif et doit être mis à jour à chaque évolution du projet.**
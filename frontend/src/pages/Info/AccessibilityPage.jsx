import InfoPage from '../../components/organisms/InfoPage'

export default function AccessibilityPage() {
  return (
    <InfoPage
      title="Accessibilité"
      subtitle="Notre engagement pour une plateforme accessible à tous"
      sections={[
        {
          title: 'Notre politique d\'accessibilité',
          content: `MarcoStore s'engage à rendre sa plateforme accessible à l'ensemble des utilisateurs, y compris les personnes en situation de handicap. Nous suivons les directives WCAG 2.1 niveau AA et la loi n°2005-102 du 11 février 2005 sur l'égalité des chances.`,
        },
        {
          title: 'Fonctionnalités d\'accessibilité',
          list: [
            'Navigation intégrale au clavier sur toutes les pages',
            'Contraste des couleurs conforme au standard WCAG AA',
            'Textes alternatifs sur toutes les images',
            'ARIA labels sur tous les éléments interactifs',
            'Support des lecteurs d\'écran (NVDA, JAWS, VoiceOver)',
            'Zoom jusqu\'à 200% sans perte de contenu',
            'Formulaires avec labels explicites et messages d\'erreur',
            'Animations réduites respectant « prefers-reduced-motion »',
          ],
        },
        {
          title: 'Standards respectés',
          list: [
            'WCAG 2.1 niveau AA',
            'RGAA 4.1 (Référentiel Général d\'Amélioration de l\'Accessibilité)',
            'loi n°2005-102 du 11 février 2005',
            'Directive européenne sur l\'accessibilité des sites web (2016/2102)',
          ],
        },
        {
          title: 'Contact et retours',
          content: `Si vous rencontrez un problème d'accessibilité, contactez-nous à :
accessibility@marcostore.com

Nous nous engageons à répondre sous 5 jours ouvrés et à corriger tout problème identifié.`,
        },
      ]}
    />
  )
}

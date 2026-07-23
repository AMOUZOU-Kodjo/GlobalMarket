import { Header } from './Header'
import { Link } from 'react-router-dom'

export default function InfoPage({ title, subtitle, breadcrumbs, sections, cta }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs || [{ label: 'Accueil', href: '/' }, { label: title }]}
      />

      <div className="space-y-8">
        {sections.map((section, i) => (
          <section key={i} className="bg-base-100 rounded-xl p-6 shadow-sm border border-base-200">
            {section.icon && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
            )}
            {!section.icon && section.title && (
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            )}
            {section.content && (
              <div className="prose prose-sm max-w-none text-base-content/80 whitespace-pre-line">
                {section.content}
              </div>
            )}
            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {section.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
            {section.items && (
              <div className="grid gap-4 mt-4">
                {section.items.map((item, j) => (
                  <div key={j} className="bg-base-200/50 rounded-lg p-4">
                    {item.title && <h3 className="font-semibold mb-1">{item.title}</h3>}
                    {item.description && <p className="text-sm text-base-content/70">{item.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {cta && (
        <div className="mt-8 text-center bg-primary/5 rounded-xl p-8 border border-primary/10">
          <p className="text-lg font-medium mb-4">{cta.text}</p>
          {cta.link && (
            <Link to={cta.link.href} className="btn btn-primary">
              {cta.link.label}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

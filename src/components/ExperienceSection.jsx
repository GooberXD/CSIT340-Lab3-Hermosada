import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology Student"
          place="Coursework and personal projects"
          description="Learning frontend development, component design, and practical web development workflows."
        />
        <TimelineItem
          period="2026"
          title="Game Dev"
          place="DOST Game Development Challenge"
          description="Participated in the DOST Game Development Challenge in the Se Cognos team."
        />
        <TimelineItem
          period="Ongoing"
          title="Independent Practice"
          place="Frontend development"
          description="Exploring web technologies through small projects and hands-on exercises."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
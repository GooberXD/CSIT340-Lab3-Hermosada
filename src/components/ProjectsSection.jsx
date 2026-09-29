import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Portfolio in Components"
          description="A personal portfolio page built from reusable React components for CSIT340."
          tech="React · Tailwind CSS"
          link="https://github.com/GooberXD/CSIT340-Lab3-Hermosada"
        />
        <ProjectCard
          year="2026"
          title="React Practice"
          description="Experimented using reusable components and props to display the course, subjects, total units, and student information."
          tech="React · JavaScript"
          link="https://github.com/GooberXD/CSIT340G5-Lab3-Hermosada"
        />
        <ProjectCard
          year="2026"
          title="First Day in React"
          description="My first experience with React."
          tech="React"
          link="https://github.com/hanzivanhermosada/CSIT34G5-FirstDay"
        />
        <ProjectCard
          year="2026"
          title="Lab 1 in CSIT340"
          description="My first lab assignment for CSIT340."
          tech="JavaScript · Vite"
          link="https://github.com/hanzivanhermosada/CSIT-Lab1-Hermosada"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
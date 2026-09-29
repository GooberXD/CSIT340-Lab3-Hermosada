import ContactLink from './ContactLink.jsx'
import SectionHeading from './SectionHeading.jsx'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:hanzivan.hermosada@cit.edu" text="hanzivan.hermosada@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/GooberXD/" text="https://github.com/GooberXD/" />
        <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/hanz-ivan-hermosada-954417171/" text="linkedin.com/in/hanz-ivan-hermosada-954417171" />
      </ul>
    </section>
  )
}

export default ContactSection
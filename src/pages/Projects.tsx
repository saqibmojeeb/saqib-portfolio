
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Lightbulb } from "lucide-react";

const projects = [
  {
    id: "petzo",
    tab: "PetZo",
    category: "STARTUP CONCEPT",
    title: "PetZo — Pet Care on Wheels",
    type: "On-Demand Pet Care Platform",
    dates: "Product Concept & MVP Prototype",
    overview: "An on-demand doorstep pet-care concept designed to make essential pet services more convenient through a fully equipped mobile van.",
    features: [
      "Mobile pet-care service model for doorstep convenience.",
      "Service categories covering pet hygiene, grooming, and vaccinations.",
      "Customer journey covering service discovery, booking, and service delivery.",
      "Interest-collection flow to explore potential customer demand."
    ],
    contributions: [
      "Developed the initial startup concept and explored a hyperlocal service-delivery model.",
      "Conducted informal exploratory research among friends, friends of friends, and family.",
      "Structured service offerings and the customer booking journey.",
      "Built an interactive MVP prototype using Lovable.dev."
    ],
    tools: ["Lovable.dev", "Product Thinking", "Customer Research", "MVP Prototyping"],
    link: "https://petzo-pet-care-on-wheels.lovable.app"
  },
  {
    id: "yourmealplan",
    tab: "YourMealPlan",
    category: "PRODUCT CONCEPT",
    title: "YourMealPlan",
    type: "Personalised Meal Planning Platform",
    dates: "Product Design & MVP Prototype",
    overview: "A personalised meal-planning platform that helps users generate weekly meal suggestions based on dietary preferences, cooking time, and available pantry ingredients.",
    features: [
      "Dietary preferences including vegetarian, vegan, keto, and other options.",
      "Meal planning based on available cooking time.",
      "Pantry ingredient management with manual and quick-add options.",
      "Weekly meal plans with breakfast, lunch, dinner, and estimated calories.",
      "Subscription pricing with multiple plan durations."
    ],
    contributions: [
      "Conceptualised a platform focused on simplifying everyday meal decisions.",
      "Designed onboarding for dietary preferences and pantry ingredients.",
      "Structured weekly meal-planning features and subscription pricing tiers.",
      "Built an interactive MVP prototype using Lovable.dev.",
      "Integrated Stripe in Test Mode to explore subscription checkout workflows.",
      "Used Postman for API testing during the payment integration process."
    ],
    tools: ["Lovable.dev", "Stripe Test Mode", "Postman", "Product Thinking", "MVP Prototyping"],
    link: "https://yourmealplan.lovable.app"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0].id);
  const current = projects.find(project => project.id === selected) ?? projects[0];

  return (
    <main className="work-page">
      <div className="work-wrap">
        <header className="page-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to the room
          </Link>
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h1>Ideas into experiences<span>.</span></h1>
          <p className="page-lede">
            A collection of product concepts, prototypes, and experiments exploring real-world problems and solutions.
          </p>
        </header>

        <div className="work-layout">
          <aside className="work-tabs" role="tablist" aria-label="Projects">
            {projects.map((project, index) => (
              <button
                key={project.id}
                role="tab"
                aria-selected={selected === project.id}
                className={selected === project.id ? "work-tab active" : "work-tab"}
                onClick={() => setSelected(project.id)}
              >
                <span className="tab-index">0{index + 1}</span>
                <span>{project.tab}</span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </aside>

          <article className="experience-panel" role="tabpanel">
            <div className="experience-top">
              <span className="experience-icon"><Lightbulb size={21} /></span>
              <span className="current-badge">{current.category}</span>
            </div>

            <p className="eyebrow">{current.dates}</p>
            <h2>{current.title}</h2>
            <h3>{current.type}</h3>
            <p className="experience-overview">{current.overview}</p>

            <section className="experience-section">
              <h4>KEY FEATURES</h4>
              <ul>{current.features.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
            </section>

            <section className="experience-section">
              <h4>MY CONTRIBUTION</h4>
              <ul>{current.contributions.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </section>

            <section className="experience-section">
              <h4>TOOLS & SKILLS</h4>
              <div
                className="project-tags"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "12px"
                }}
              >
                {current.tools.map(tool => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </section>

            <a href={current.link} className="primary-action" target="_blank" rel="noreferrer">
              View Live Project <ExternalLink size={16} />
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}

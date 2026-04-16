import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <Image src={project.image} width={300} height={200} alt="project" />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
  )
}
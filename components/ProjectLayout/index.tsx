// components/ProjectLayout.tsx
const ProjectLayout = ({ title, image, description }: { title: string; image: string; description: string }) => (
    <div style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <img src={image} alt={title} style={{ maxWidth: '100%' }} />
      <p>{description}</p>
    </div>
  );
  
  export default ProjectLayout;  
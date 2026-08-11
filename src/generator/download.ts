import type { GeneratedProject } from "./types/GeneratedProject";
import JSZip from "jszip";

function slugifyProjectName(name: string) {
    return name
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-");
}

export async function downloadProject(project: GeneratedProject) {
  const zip = new JSZip();


    
  project.files.forEach((file) => {
    zip.file(file.path, file.content);
  });



  const blob = await zip.generateAsync({
    type: "blob",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `${slugifyProjectName(project.projectName)}.zip`;

  link.click();

  URL.revokeObjectURL(url);
}

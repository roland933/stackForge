import type { GeneratedProject } from "./types/GeneratedProject";
import JSZip from "jszip";

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
  link.download = `${project.projectName}.zip`;

  link.click();

  URL.revokeObjectURL(url);
}

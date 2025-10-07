
import { ProjectData, GeneratedReportData } from '../types.ts';
import { mockReportData } from '../data/mockData.ts';

/**
 * Simulates generating a proposal text by returning mock data after a delay.
 * @param data The project data (ignored in this mock version).
 * @returns A promise that resolves to the mock report data.
 */
export async function generateProposalText(data: ProjectData): Promise<GeneratedReportData> {
  console.log("Simulating report generation for:", data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockReportData);
    }, 1500); // Simulate network and generation delay
  });
}

/**
 * Simulates generating a proposal image by returning a static placeholder URL after a delay.
 * @param prompt The image prompt (ignored in this mock version).
 * @returns A promise that resolves to a placeholder image URL.
 */
export async function generateProposalImage(prompt: string): Promise<string> {
    console.log("Simulating image generation with prompt:", prompt);
    return new Promise(resolve => {
        setTimeout(() => {
            // Using a static, high-quality placeholder image for demonstration.
            resolve('https://picsum.photos/seed/arch-demo/1280/720');
        }, 1500); // Simulate image generation delay
    });
}

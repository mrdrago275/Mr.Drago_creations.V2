'use client';

export default async function downloadImage(
  url: string,
  filename = 'mr-drago-wallpaper.jpg'
) {
  try {
    if (typeof window === 'undefined') return;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(blobUrl);

  } catch (error) {
    console.error('Download failed:', error);

    // Fallback: open image directly
    window.open(url, '_blank');
  }
}

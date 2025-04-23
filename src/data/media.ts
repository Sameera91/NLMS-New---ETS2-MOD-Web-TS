import { MediaItem } from '../types';

export const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Mercedes-Benz Actros in action',
    type: 'image',
    url: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg',
    description: 'The all-new Mercedes-Benz Actros on the highway.'
  },
  {
    id: '2',
    title: 'Scania R730 Interior',
    type: 'image',
    url: 'https://images.pexels.com/photos/163772/car-vehicle-luxury-steering-wheel-163772.jpeg',
    description: 'Detailed interior view of the Scania R730.'
  },
  {
    id: '3',
    title: 'Volvo FH16 Custom Paint',
    type: 'image',
    url: 'https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg',
    description: 'Custom paint job on a Volvo FH16.'
  },
  {
    id: '4',
    title: 'MAN TGX Euro 6 Review',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Comprehensive review of the MAN TGX Euro 6 truck.'
  },
  {
    id: '5',
    title: 'Bus Mod Compilation',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Compilation of the best bus mods available on NLMS.'
  },
  {
    id: '6',
    title: 'DAF XF Euro 6 Sound Demo',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Audio demonstration of the DAF XF Euro 6 sound mod.'
  }
];

export const getMediaById = (id: string): MediaItem | undefined => {
  return mediaItems.find(item => item.id === id);
};
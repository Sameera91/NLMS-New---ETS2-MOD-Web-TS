import { MediaItem } from '../types';

export const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Convoy with Friends',
    type: 'image',
    url: 'https://media.discordapp.net/attachments/1339626094835404973/1364582825277526078/ets2_20250320_220214_00.png?ex=680adb0a&is=6809898a&hm=eac60d8840dc6506ffd10c98e2f8bf9e9da934200a442fadafc79f407d7d1fca&=&format=webp&quality=lossless&width=977&height=552',
    description: 'A convoy with friends.'
  },
  {
    id: '2',
    title: 'Yakada Manamali',
    type: 'image',
    url: 'https://media.discordapp.net/attachments/1339626094835404973/1364582827835920434/ets2_20250404_235317_00.png?ex=680adb0a&is=6809898a&hm=153703dbf7de39a9a702ffdec71117f7fd2f79d6d2d7a4d6ebef20579fe006af&=&format=webp&quality=lossless&width=981&height=552',
    description: 'Yakada Manamali.'
  },
  {
    id: '3',
    title: 'Maya Kirilli',
    type: 'image',
    url: 'https://media.discordapp.net/attachments/1339626094835404973/1364582827127214141/ets2_20250326_192224_00.png?ex=680adb0a&is=6809898a&hm=5f8a152182ac1f9df921a2156545b96f2e92180ccea40892be3c54ebbe67b1e2&=&format=webp&quality=lossless&width=977&height=552',
    description: 'Maya Kirilli.'
  },
  {
    id: '4',
    title: 'Mudpad එක එක්කම Rear Bumper එක දාමු',
    type: 'video',
    url: 'https://www.youtube.com/embed/N1o1ajJHRWI',
    description: 'Mudpad එක එක්කම Rear Bumper එක දාමු. A tutorial on how to install a rear bumper with a mudpad.'
  },
  {
    id: '5',
    title: 'NLMS | Installing Addon Mods ',
    type: 'video',
    url: 'https://www.youtube.com/embed/ABNm4yo4bU8',
    description: ' Add Budda Straute to Truck .Are You Installing Mods From One Of The Below Channels? Watch This Video For Help!'
  }

];

export const getMediaById = (id: string): MediaItem | undefined => {
  return mediaItems.find(item => item.id === id);
};
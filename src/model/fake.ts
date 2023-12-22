import { Chat } from '../types/inbox';

export const fake: Chat[] = [
  {
    id: '01',
    name: '109220-Naturalization',
    type: 'group',
    current_user_id: 'user-01',
    last_active: new Date(),
    participants: [
      { id: 'user-01', name: 'Muhammad Hasbi' },
      { id: 'user-02', name: 'Cameron Philips' },
      { id: 'user-03', name: 'Rafa' },
    ],
    message_history: [
      {
        id: 'history-01',
        timestamp: '2022-03-12T12:00:00Z',
        status: 'read',
        messages: [
          {
            id: 'chat-01',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, aspernatur dignissimos? Nesciunt iusto eum ea, alias maiores ad dolorem consectetur, error hic omnis quaerat dolor.',
            time: '10.54',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-02',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae consequuntur, cumque ex nisi voluptas.',
            time: '11.24',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            time: '12.14',
            user: {
              id: 'user-03',
              name: 'Rafa',
            },
          },
        ],
      },
      {
        id: 'history-02',
        timestamp: '2023-12-21T12:17:04.394Z',
        status: 'unread',
        messages: [
          {
            id: 'chat-01',
            text: 'Please check this out!',
            time: '10.54',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-02',
            text: 'Wow cool, awesome',
            time: '11.24',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            time: '11.44',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
        ],
      },
    ],
  },
  {
    id: '02',
    name: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    type: 'group',
    current_user_id: 'user-01',
    last_active: new Date(),
    participants: [
      { id: 'user-01', name: 'Muhammad Hasbi' },
      { id: 'user-04', name: 'Ellen' },
      { id: 'user-05', name: 'Chaidir' },
    ],
    message_history: [
      {
        id: 'history-01',
        timestamp: '2022-03-12T12:00:00Z',
        status: 'read',
        messages: [
          {
            id: 'chat-01',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, aspernatur dignissimos? Nesciunt iusto eum ea, alias maiores ad dolorem consectetur, error hic omnis quaerat dolor.',
            time: '10.54',
            user: {
              id: 'user-04',
              name: 'Ellen',
            },
          },
          {
            id: 'chat-02',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae consequuntur, cumque ex nisi voluptas.',
            time: '11.24',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            time: '12.14',
            user: {
              id: 'user-05',
              name: 'Chaidir',
            },
          },
        ],
      },
    ],
  },
  {
    id: '03',
    name: '8405-Diana ZALAZAR MUNGUIA',
    type: 'group',
    current_user_id: 'user-01',
    last_active: new Date(),
    participants: [
      { id: 'user-01', name: 'Muhammad Hasbi' },
      { id: 'user-02', name: 'Cameron Philips' },
    ],
    message_history: [
      {
        id: 'history-01',
        timestamp: '2022-03-12T12:00:00Z',
        status: 'read',
        messages: [
          {
            id: 'chat-01',
            text: 'I understand your initial concern and thats very valid, Elizabeth. But you lorem ipsum dolor',
            time: '10.54',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-02',
            text: 'Wait',
            time: '11.24',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            time: '11.44',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
        ],
      },
    ],
  },
  {
    id: '04',
    name: 'FastVisa Support',
    type: 'personal',
    current_user_id: 'user-01',
    last_active: new Date(),
    participants: [
      { id: 'user-01', name: 'Muhammad Hasbi' },
      { id: 'user-02', name: 'Cameron Philips' },
    ],
    message_history: [
      {
        id: 'history-01',
        timestamp: '2022-03-12T12:00:00Z',
        status: 'read',
        messages: [
          {
            id: 'chat-01',
            text: 'Hey there! Welcome to your inbox.',
            time: '10.54',
            user: {
              id: 'user-05',
            },
          },
        ],
      },
    ],
  },
];

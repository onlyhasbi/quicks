import { Chat } from "../types/inbox";

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
        messages: [
          {
            id: 'chat-01',
            text: 'Please check this out!',
            time: '10.54',
            status: 'read',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-02',
            text: 'Wow cool, awesome',
            time: '11.24',
            status: 'unread',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            time: '11.44',
            status: 'unread',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-04',
            text: 'Lorem, ipsum dolor.',
            time: '12.14',
            status: 'unread',
            user: {
              id: 'user-03',
              name: 'Rafa',
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
      { id: 'user-02', name: 'Cameron Philips' },
    ],
    message_history: [
      {
        id: 'history-01',
        timestamp: '2022-03-12T12:00:00Z',
        messages: [
          {
            id: 'chat-01',
            text: 'Hey, please read!',
            time: '10.54',
            status: 'read',
            user: {
              id: 'user-04',
              name: 'Ellen',
            },
          },
          {
            id: 'chat-02',
            text: 'Wait',
            time: '11.24',
            status: 'read',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            time: '11.44',
            status: 'read',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-04',
            text: 'Lorem, ipsum dolor.',
            time: '12.14',
            status: 'read',
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
        messages: [
          {
            id: 'chat-01',
            text: 'I understand your initial concern and thats very valid, Elizabeth. But you lorem ipsum dolor',
            time: '10.54',
            status: 'read',
            user: {
              id: 'user-02',
              name: 'Cameron Philips',
            },
          },
          {
            id: 'chat-02',
            text: 'Wait',
            time: '11.24',
            status: 'read',
            user: {
              id: 'user-01',
              name: 'Muhammad Hasbi',
            },
          },
          {
            id: 'chat-03',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            time: '11.44',
            status: 'read',
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
        messages: [
          {
            id: 'chat-01',
            text: 'Hey there! Welcome to your inbox.',
            time: '10.54',
            status: 'read',
            user: {
              id: 'user-05',
            },
          },
        ],
      },
    ],
  },
];

import { Event } from '../types/event-types'

export const events: Event[] = [
  {
    id: 1,
    date: '15 Ianuarie 2024',
    hour: '10:00',
    name: 'Dezinfectie bloc',
    details:
      'Dezinfectia completa a spatiilor comune din bloc, inclusiv scari, lift si hol. Se va utiliza solutie dezinfectanta profesionala.',
    location: 'Tot blocul',
    organizer: 'Asociația de proprietari',
  },
  {
    id: 2,
    date: '22 Ianuarie 2024',
    hour: '14:00',
    name: 'Adunarea generala',
    details:
      'Adunarea generala lunara pentru discutarea problemelor administrative si bugetului. Prezenta obligatorie a proprietarilor.',
    location: 'Sala de conferințe, parter',
    organizer: 'Președinte asociație',
  },
]

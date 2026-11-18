import pipocaImg from '../assets/pets/pipoca.jpg'
import thorImg from '../assets/pets/thor.jpg'
import lunaImg from '../assets/pets/luna.jpg'

export const AVAILABLE_ADOPTION_COUNT = 18

export const FAIR_PETS_TODAY = [
  {
    id: 'pipoca',
    photo: pipocaImg,
    name: 'Pipoca',
    age: '2 anos',
    sex: 'Fêmea',
    extraInfo: 'Vacinada, castrada e dócil com crianças',
    fairLocation: 'Tenda 02 • Praça Central',
  },
  {
    id: 'thor',
    photo: thorImg,
    name: 'Thor',
    age: '8 meses',
    sex: 'Macho',
    extraInfo: 'Vermifugado, FIV/FeLV negativo e calmo',
    fairLocation: 'Tenda 04 • Espaço Felinos',
  },
  {
    id: 'luna',
    photo: lunaImg,
    name: 'Luna',
    age: '5 meses',
    sex: 'Fêmea',
    extraInfo: '1ª dose V10 aplicada, porte médio previsto',
    fairLocation: 'Tenda 01 • Área Filhotes',
  },
]

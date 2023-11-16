import {
  InitSelectAcademyType,
  MarkerProps
} from '@/components/map/naverMapType.ts'

export const initSelectAcademy: InitSelectAcademyType = {
  isBottomSheet: false,
  academy: {
    academyId: -1,
    academyName: '',
    address: '',
    contact: '',
    areaOfExpertise: '',
    latitude: -1,
    longitude: -1
  }
}

export const DefaultMapOption = {
  zoom: 14,
  disableKineticPan: false,
  tileTransition: false,
  mapDataControl: true,
  minZoom: 10,
  maxZoom: 21
}

export const Marker = ({ value, select }: MarkerProps) => {
  return `
    <div class='flex flex-col'>
      <div class='flex flex-row justify-center items-center h-[45px] rounded-full ${
        select ? 'bg-blue-700' : 'bg-white-0'
      } border border-blue-700' >
        <div class='flex flex-col justify-center items-center h-[30px] w-[30px] rounded-full bg-blue-700 ml-[5px] ${
          select ? 'bg-white-0' : ''
        } border border-blue-700 z-50'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.0163 10.119 17.0348 11.602 17.804C11.8548 17.9351 12.1452 17.9351 12.398 17.804ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="${
              select ? '#57A4FF' : '#FFF'
            }"/>
            <path d="M18.0622 16.5C18.6766 16.9561 19 17.4734 19 18C19 18.5266 18.6766 19.0439 18.0622 19.5C17.4478 19.9561 16.5641 20.3348 15.5 20.5981C14.4359 20.8614 13.2288 21 12 21C10.7712 21 9.56414 20.8614 8.5 20.5981C7.43587 20.3348 6.5522 19.9561 5.93782 19.5C5.32344 19.0439 5 18.5266 5 18C5 17.4734 5.32344 16.9561 5.93782 16.5" stroke="${
              select ? '#40628A' : '#FFF'
            }" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class='ml-[5px] mr-[8px] font-nsk body-14 ${
          select ? 'text-white-0' : 'text-black-900'
        } whitespace-nowrap'>${value}</span>
      </div>
      <div class='absolute bottom-[-5px] left-[18px] w-0 h-0 border border-solid border-t-[6px] border-r-[4px] border-l-[4px] border-b-[0px] border-t-blue-700 border-b-[transparent] border-r-[transparent] border-l-[transparent] '></div>
    </div>
  `
}

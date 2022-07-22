import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from 'vue-tailwind/dist/components'

const components = {
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  't-button': {
    component: TButton,
    props: {
      fixedClasses:
        'text-sm font-bold font-raleway border border-2 border-white bg-white border-opacity-40 rounded-[5px] uppercase hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 py-1.5 px-4 inline-flex items-center',
      classes: 'btn-primary text-black',
      variants: {
        big: 'btn-primary  text-black py-2.5 px-7.5',
        secondary:
          'btn-secondary bg-opacity-10  hover:bg-opacity-100 hover:text-black',
        'no-border':
          'border-transparent bg-opacity-10 rounded-md hover:border-white',
        purple: 'border-transparent bg-opacity-10 text-purple hover:text-white',
        link: 'py-0 px-0 text-white hover:underline bg-transparent border-none',
        'link-purple':
          'py-0 px-0 text-purple hover:underline bg-transparent border-none',
        icon: 'py-0 px-0 hover:opacity-70 bg-transparent border-none',
      },
    },
  },
  't-input': {
    component: TInput,
    props: {
      fixedClasses:
        'rounded-[3px] border border-1 border-white border-opacity-20 bg-white bg-opacity-10 text-white py-[11px] pl-[15px] pr-2.5 disabled:cursor-not-allowed disabled:opacity-40 hover:border-opacity-100 placeholder:text-white placeholder:opacity-50 font-noto-sans focus:outline-none focus:shadow-none text-base leading-[22px] t-input',
      classes: '',
    },
  },
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
}

Vue.use(VueTailwind, components)

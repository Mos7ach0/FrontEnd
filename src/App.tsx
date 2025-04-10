import {Image} from 'primereact/image'
import HeroImage from '@/assets/hero-image.jpg'
import Logo from '@/assets/Logo.svg'
import { Card } from 'primereact/card'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { ToggleButton } from 'primereact/togglebutton';
import { useState } from 'react'
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox'

const Header = () => {
  return (
    <div className = 'px-4 pt-6 flex flex-col md:flex-row items-center gap-6 md:gap-0'>
      <div className = 'mr-auto'>Found 234 countries</div>

      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'></InputIcon>
        <InputText
          className='h-[40px] !text-sm w-[100%] md:w-[309px]'
          placeholder='Searcg by Name, Region, Subregion'
          variant='filled'
        />
      </IconField>
    </div>
  )
}

/* const ToggleButton = () => {
  const [isToggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return(
    <button onClick={handleToggle}>
      {isToggle ? 'ON' : 'OFF'}
    </button>
  );
  
}; */



const Filters = () => {
  const sortBy = [
    {
      name: 'Name', value: 'name'
    },
    {
      name: 'Population', value: 'population'
    },
    {
      name: 'Area', value: 'area'
    }
  ]

  return(
    <div className="flex flex-col w-full gap-6">
      <div className = 'flex flex-col gap-2'>
        <label htmlFor=''>Sort by</label>
        <Dropdown
          options={sortBy}
          optionLabel='name'
        />
      </div>

      <div className= 'flex flex-col gap-2'>
        <label>Region</label>
        <div className = 'flex flex-wrap gap-2'>
          <CustomeToggleButton
            label = 'Americas'  
          />  

          <CustomeToggleButton
            label = 'Antartic'  
          />

          <CustomeToggleButton
            label = 'Africa'  
          />

          <CustomeToggleButton
            label = 'Asia'  
          />

          <CustomeToggleButton
            label = 'Europe'  
          />

          <CustomeToggleButton
            label = 'Oceania'  
          />

        <div className='flex flex-col gap-2'>
          <label>Status</label>
          
          <CustomeCheckBox
            label='Member of the United States'
          />

          <CustomeCheckBox
            label='Independent'
          />

        </div>
      

        </div>  
      </div>     
    </div>





  )
}

const CustomeToggleButton = (props: {
  label: string
}) => {
  const [checked, setChecked] = useState(false)

  return(
    <ToggleButton
    className ='!border-none !text-xs !h-[30px]'
    checked={checked}
    onLabel={props.label}
    offLabel={props.label}
    onChange={(e) => {setChecked(e.value)}}
    />
  )
};


const CustomeCheckBox = (props: {
  label: string
}) => {
  const [checked, setChecked] = useState(false)

  return(
    <div className = 'flex flex-row gap-2 items-center text-xs font-bold'>
      <Checkbox
        checked = {checked}
        onChange={(e: CheckboxChangeEvent) => {
          setChecked(e.checked as boolean)
        }}
      />

      <label className="ml-2">{props.label}</label>
    </div>

  )
};
/* const Toggle = () => {
  const [checked, setChecked] = useState(false)
  

  return(
    <div className='flex flex-col'>
      <label htmlFor=''>Regiones</label>
      <ToggleButton 
        checked={checked} onChange={(e) => setChecked(e.value)}
        onLabel='Americas'
        offLabel='Americas'
        

      />
    </div>
  )
} */
 
function App() {

  return(
    <div className = 'flex flex-col justify-center items-center h-screen'>
      <div className = 'flex flex-col'>
          <div className = ' flex justify-center items-center' >
            <Image
              src={HeroImage}
            />
            <Image
              className = 'absolute'
              src={Logo}
            />
          </div>
      </div>

      <Card
        className = 'w-[95%] border border-[#1A1C20] shadow-none relative bottom-[70px]'
        header={<Header/>}
      >
        <div className='flex flex-col md:flex-row md:w-[300px] gap-4'>   
          <Filters/>
          <div></div>
        </div>
      </Card>
    </div>

  )
}

export default App;

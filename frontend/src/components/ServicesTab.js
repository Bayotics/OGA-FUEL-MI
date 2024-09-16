

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { GiFuelTank } from "react-icons/gi";
import { SlAnchor } from "react-icons/sl";
import { GiOffshorePlatform } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
import { PiLightning } from "react-icons/pi";
import { MdOutlinePropaneTank } from "react-icons/md";
import OnSite from './servicesTab/Onsite';
import Bulk from './servicesTab/Bulk';
import Gas from './servicesTab/Gas';
import Marine from './servicesTab/Marine';
import Offshore from './servicesTab/Offshore';
import Generator from './servicesTab/Generator';
import Reefer from './servicesTab/Reefer';
import TankFarm from './servicesTab/TankFarm';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ServicesTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };    
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<CiLocationOn/>} iconPosition='start' className='serv-tab'
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="On-Site Delivery" {...a11yProps(0)} />
          <Tab icon={<GiFuelTank/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Bulk Delivery" {...a11yProps(0)} />
          <Tab icon={<MdOutlinePropaneTank/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Gas Delivery" {...a11yProps(0)} />
          <Tab icon={<SlAnchor/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Marine Delivery" {...a11yProps(0)} />
          <Tab icon={<GiOffshorePlatform/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Offshore Delivery" {...a11yProps(0)} />
          <Tab icon={<IoWaterOutline/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Generator Delivery" {...a11yProps(0)} />
          <Tab icon={<RiTruckLine/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Reefer Delivery" {...a11yProps(0)} />
          <Tab icon={<PiLightning/>} iconPosition='start' 
            sx={{ fontFamily: 'poppins', fontSize: '12px', fontWeight: 600 }}
            label="Tank Farm Delivery" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OnSite/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Bulk/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Gas/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Marine/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Offshore/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Generator/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Reefer/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <TankFarm/>
      </CustomTabPanel>
    </Box>
  );
}

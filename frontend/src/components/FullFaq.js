

import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import { Zoom } from 'react-awesome-reveal';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 1,
  },
  paddingBottom: '15px',
  marginTop: '45px',
  fontFamily: "Poppins",
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddCircleOutlineRoundedIcon sx={{ fontSize: '60px',
         stroke: "#ffffff", strokeWidth: '1.6px'}} />}
    {...props}
  />

))(({ theme }) => ({
  backgroundColor: 'transparent',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionViewAll = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowCircleRightOutlinedIcon sx={{ fontSize: '60px',
           stroke: "#ffffff", color: '#1a2eeb', strokeWidth: '1.6px'}} />}
      {...props}
    />
    
  ))(({ theme }) => ({
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'none',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: 'none',
}));



export default function FullFaq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    
    <div className='faq-main px-16 pb-32 mt-24'>
      <Helmet><title>FAQs</title></Helmet>
        <Zoom triggerOnce>
            <div className='faq-header'>
                <h1 className='text-center text-6xl font-bold text-black'>FAQs</h1>
                <p className='text-center font-medium text-lg mt-10'>Here are some questions you may want to ask 
                </p>
            </div>
            <div className='accordion-main mt-24 font-mono'>
                <div className='border-b border-gray-300 '>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>What is Fuel Me?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className='ml-16'>
                                Fuel Me is an online platform that allows you to conveniently order fuel for delivery to your location.
                                We specialize in providing fuel solutions for businesses and individuals, ensuring that you never run out
                                of fuel when you need it the most.
                            </p>
                        
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300 '>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>How do I place an order?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                To place an order, simply visit our website, select the type and quantity of fuel you need,
                                and provide your delivery details. You can also schedule a delivery for a specific date and time.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300 '>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>What types of fuel can I order?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                            Fuel Me offers a variety of fuel types, including gasoline, diesel, and CNG. 
                            Please check our store for the full list of available fuel options.
                            </p>
                        
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300 '>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>How long does delivery take?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                Delivery times vary depending on your location and the time of your order. 
                                We strive to deliver within an hour for most locations, but you can schedule a specific 
                                delivery time during the ordering process.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>What payment methods do you accept?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                We accept various payment methods, including credit/debit cards, bank transfers, 
                                and digital wallets. All payments are securely processed through our platform.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>Is there a delivery fee?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                Delivery fees may vary depending on your location and the amount of fuel ordered. 
                                Please refer to our pricing section during checkout for exact costs.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>Can I schedule recurring deliveries?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                Yes, fuelMe allows you to set up recurring deliveries for regular fuel needs. 
                                You can customize the frequency and fuel type through our app or website.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>Is there a minimum or maximum order quantity?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                Yes, we have minimum and maximum order limits based on the type of fuel. 
                                Details about the minimum and maximum quantities will be available when placing your order.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>What should I do if there’s an issue with my fuel delivery? </h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                If you encounter any issues with your delivery, please contact our customer service team 
                                immediately via phone or email, and we’ll resolve the matter promptly.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>Are there any additional fees besides the fuel cost and delivery fee?</h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                No, there are no hidden charges. The price you see at checkout includes the fuel 
                                cost and any applicable delivery fees or taxes.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='border-b border-gray-300  '>
                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                        <Typography>
                            <h1 className='text-3xl font-medium'>What happens if I’m not home during the scheduled delivery? </h1>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p className=' ml-16'>
                                We require someone to be present to accept the fuel delivery. If you can’t be home at the scheduled time, please contact us to reschedule.
                            </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>  
            </div>
      </Zoom>
    </div>
  );
}

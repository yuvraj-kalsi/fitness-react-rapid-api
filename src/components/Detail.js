import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {

    // Destructuring what is inside in exerciseDetail
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    // icon from images and names from props
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

                <Typography variant = "h3" style={{ textTransform: 'capitalize' }} sx={{ fontSize: { lg: '50px', xs: '30px' } }}>
                    {name}

                </Typography>

                <Typography variant = "h5">

                    Exercises keep you strong.{` `} <br />
                    <span fontWeight={700} style= {{ textTransform: 'capitalize' }}>{name}</span> is one
                    of the best <br />exercises to target your {target}. <br />  It will help you improve your{' '}
                    mood and gain energy.

                </Typography>

                {extraDetail?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        
                        </Button>
                        
                        <Typography textTransform="capitalize" variant = "h5">
                            
                            {item.name}
                        
                        </Typography>
                    </Stack>
                ))}

            </Stack>
        </Stack>

    )
}

export default Detail
// React
import { useEffect, useState } from 'react';

// MUI
import MUIAccordion from '@mui/material/Accordion';
import MUIAccordionActions from '@mui/material/AccordionActions';
import MUIAccordionSummary from '@mui/material/AccordionSummary';
import MUIAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const Accordion = (props) => {
    const [isExpanded, setIsExpanded] = useState(props.expanded)

    useEffect(() => {
        setIsExpanded(props.expanded)
    }, [props.expanded]);

    return (
        <MUIAccordion onClick={() => setIsExpanded(pre => !pre)} expanded={isExpanded}>
            <MUIAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
            >
                <Typography fontSize={22} fontWeight={600}>
                    {props.summary || ""}
                </Typography>
            </MUIAccordionSummary>
            <MUIAccordionDetails>
                <Typography>
                    {props.details || ""}
                </Typography>
            </MUIAccordionDetails>
            <MUIAccordionActions>
                <Button>{props.button_one || ""}</Button>
                <Button>{props.button_two || ""}</Button>
            </MUIAccordionActions>
        </MUIAccordion>        
    )
}

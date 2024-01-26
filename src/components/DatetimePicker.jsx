// MUI
import { DateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const DatetimePicker = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDateTimePicker label={props.label || ""} />
      </LocalizationProvider>
    )
}

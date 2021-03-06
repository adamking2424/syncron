import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TimePickerList from '../timePicker/timePickerList';
import Attachment from '../attachment.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Email(props) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    description: '',
    subject: '',
    content: '',
    recipient: '',
    attachmentType: 'none',
    attachmentLocation: '',
    scriptLocation: '',
    outputLocation: '',
    minutes: 'every',
    customMinutes: [],
    hours: 'every',
    customHours: [],
    days: 'every',
    customDays: [],
    months: 'every',
    customMonths: [],
    weekdays: 'every',
    customWeekdays: [],
  });

  const setValue = (key, value) => {
    //Why does this not work?
    //setFormValues((formValues) => (Object.assign(formValues, {description: value})))
    let newForm;
    switch (key) {
      case 'description':
        newForm = {
          description: value,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'subject':
        newForm = {
          description: formValues.description,
          subject: value,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'content':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: value,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'recipient':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: value,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'minutes':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: value,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customMinutes':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: value,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'hours':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: value,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customHours':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: value,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'days':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: value,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customDays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: value,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'months':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: value,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customMonths':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: value,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'weekdays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: value,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'customWeekdays':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: value,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'attachmentType':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: value,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'attachmentLocation':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: value,
          scriptLocation: formValues.scriptLocation,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'scriptLocation':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: value,
          outputLocation: formValues.outputLocation,
        };
        break;
      case 'outputLocation':
        newForm = {
          description: formValues.description,
          subject: formValues.subject,
          content: formValues.content,
          recipient: formValues.recipient,
          minutes: formValues.minutes,
          customMinutes: formValues.customMinutes,
          hours: formValues.hours,
          customHours: formValues.customHours,
          days: formValues.days,
          customDays: formValues.customDays,
          months: formValues.months,
          customMonths: formValues.customMonths,
          weekdays: formValues.weekdays,
          customWeekdays: formValues.customWeekdays,
          attachmentType: formValues.attachmentType,
          attachmentLocation: formValues.attachmentLocation,
          scriptLocation: formValues.scriptLocation,
          outputLocation: value,
        };
        break;
      default:
        console.log('something went wrong');
        break;
    }
    setFormValues(newForm);
  };

  const handleChange = (e) => {
    setValue(e.target.id, e.target.value);
  };

  const handleSubmit = () => {
    //add email type to differentiate in model
    const jobObj = Object.assign({}, formValues);
    jobObj.type = 'email';
    props.addJob(jobObj);
  };

  return (
    <div className="email">
      <h2>Create your Email</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="description"
            label="description"
            value={formValues.description}
            onChange={handleChange}
          />
          <TextField
            id="subject"
            label="subject"
            value={formValues.subject}
            onChange={handleChange}
          />
          <TextField
            id="content"
            label="content"
            value={formValues.content}
            onChange={handleChange}
          />
          <TextField
            id="recipient"
            label="recipient"
            value={formValues.recipient}
            onChange={handleChange}
          />
        </div>
      </form>
      <Attachment form={formValues} handler={setValue} />
      <TimePickerList form={formValues} handler={setValue} />
      <Link to="/">
        <button id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Email;

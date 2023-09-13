import { useState } from 'react';
import { toast } from 'react-toastify';
import './ScheduleBlock.scss';
import closeIcon from '../../icons/close_icon.png';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const ScheduleBlock = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <div className='schedule'>
      <div className="schedule__content">
        <div className="schedule__top">
          <div 
            className="schedule__close"
            onClick={() => toast.success('You returned seccess')}
          >
            <img
              src={closeIcon} 
              alt="Close"
              className="schedule__close-icon"
            />
          </div>
          <h3 className='schedule__title'>
            Schedule Details
          </h3>
        </div>

        <div className="schedule__inputs">
          <div className="schedule__line">
            <span>Starts</span>
            <div className='schedule__line-right'>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="dd MMM yyyy"
                placeholderText="Select start date"
                className="schedule__input schedule__input-date"
              />
              <span>-</span>
              <input
                type="time"
                className="schedule__input"
                value={startTime}
                onChange={({ target }) => setStartTime(target.value)}
              />
            </div>
          </div>

          <div className="schedule__line">
            <span>Ends</span>

            <div className='schedule__line-right'>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="dd MMM yyyy"
                placeholderText="Select end date"
                className="schedule__input schedule__input-date"
              />
              <span>-</span>
              <input
                type="time"
                className="schedule__input"
                value={endTime}
                onChange={({ target }) => setEndTime(target.value)}
              />
            </div>
          </div>
        </div>

        <textarea
          placeholder='Notes'
          className='schedule__note'
        />

        <div 
          className="schedule__button"
          onClick={() => toast.success('Saved successfully')}
        >
          Save
        </div>
      </div>
      <div className="schedule__triangle"/>
    </div>
  )
}
